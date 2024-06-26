import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/db/mongodb"

export const authOptions = {
  //I can add more later, keep it simple for now
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: true,

  callbacks: {
    async session({ session, user }) {
      session.user.userId = user.id
      return session
    },
  },
  secret: process.env.SECRET,
}

export default NextAuth(authOptions)
