import LoginBtn from "./components/LoginBtn";
import { connectDB } from "/util/database.js";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogOutBtn from "./components/LogOutBtn";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  let session = await getServerSession(authOptions);
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
      {session ? (
        <div className="logout_box">
          {session.user.name} <LogOutBtn />
        </div>
      ) : (
        <LoginBtn />
      )}
    </>
  );
}
