import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  if (요청.method == "DELETE") {
    let session = await getServerSession(요청, 응답, authOptions);

    console.log(session);

    const db = (await connectDB).db("forum");
    let emailInfo = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.body) });

    console.log(emailInfo);

    if (session.user.email == emailInfo.author) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(요청.body) });
      응답.status(200).json("삭제완료");
    } else {
      응답.status(500).json("유저정보 불일치");
    }
  }
}
