import { connectDB } from "@/util/database";

import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
