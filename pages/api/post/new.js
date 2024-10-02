import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  // 로그인 되있으면, 유저 이메일을 author 값에 추가
  if (session) {
    요청.body.author = session.user.email;
  }

  // 제목 안쓰면 에러발생
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목 입력필수");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.status(302).redirect("/list");
    } catch (error) {
      console.log("DB 에러");
    }
  }
}
