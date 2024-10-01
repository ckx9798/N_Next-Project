import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23livsEq1e5lF5KQOh",
      clientSecret: "af2bd77715a8a1b677f914763bcd209258389555",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
