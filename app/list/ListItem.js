`use client`;

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
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
