import { connectDB } from "/util/database.js";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <main>{result[0].title}</main>
      <main>{result[0].content}</main>
      <main>{result[1].content}</main>
      <main>{result[2].content}</main>
    </div>
  );
}
