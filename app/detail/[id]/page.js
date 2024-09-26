import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });
  return (
    <>
      <h3> {result.title}</h3>
      <p> 글 내용</p>
    </>
  );
}
