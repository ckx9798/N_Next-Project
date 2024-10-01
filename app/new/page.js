import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function New() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <h4> New Item </h4>
      <h4> New Item </h4>
      <h4> New Item </h4>
    </div>
  );
}
