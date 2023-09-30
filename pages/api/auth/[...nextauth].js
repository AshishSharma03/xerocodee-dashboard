import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret :process.env.GOOGLE_CLIENT_SECRET
    }),
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" }
      },async authorize(credentials) {
    
        const user = credentials;
        console.log(user)
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],


}

export default NextAuth(authOptions)
