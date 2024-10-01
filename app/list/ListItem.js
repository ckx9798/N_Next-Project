"use client"; // 클라이언트 컴포넌트로 선언

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
          <br></br>
          <div
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: result[i]._id,
              });

              // fetch("api/test?name=Kim")   //  query string
            }}
          >
            🗑삭제하기
          </div>
        </div>
      ))}
    </div>
  );
}
