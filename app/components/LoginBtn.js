"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="login_box"
      onClick={() => {
        signIn();
      }}
    >
      {" "}
      📌 로그인 하기
    </button>
  );
}
