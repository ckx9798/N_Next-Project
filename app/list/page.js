import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`} className="list_link">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </Link>
          <Link href={`/edit/${item._id}`}>📌 수정하기</Link>
        </div>
      ))}
    </div>
  );
}
