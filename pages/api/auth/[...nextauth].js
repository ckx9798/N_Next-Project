import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23livsEq1e5lF5KQOh",
      clientSecret: "af2bd77715a8a1b677f914763bcd209258389555",
    }),
  ],
  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
