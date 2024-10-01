import LoginBtn from "./components/LoginBtn";
import { connectDB } from "/util/database.js";
import Link from "next/link";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <div className="container_column homePage">
        <Link href="/" className="home_link">
          홈
        </Link>
        <Link href="/list" className="home_link">
          리스트
        </Link>
        <Link href="/write" className="home_link">
          작성하기
        </Link>
      </div>
      <LoginBtn />
    </>
  );
}
