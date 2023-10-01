import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { Redis ,upstashRedisClient} from "@upstash/redis";
import { signIn } from "next-auth/react";

const redis = new Redis({
   url:"https://gusc1-elegant-bonefish-30471.upstash.io",
   token:"AXcHACQgZmFjMDA2MDQtYmJhYi00ZDkxLWFkZDctZDVjY2M2ZWU3OWI1YWI4NmQwZmNhODY2NGU3Yzg3ZjdkNGI4ZDdkOTYxOGM="
})

const authOptions = {

    session:{
      type: 'redis',
      adapter: UpstashRedisAdapter(redis,{
      baseKeyPrefix: "auth:", 
      sessionKeyPrefix: "session:", 
      userKeyPrefix: "user:",
    }),},

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
    
      },async authorize(credentials) {
        
        const user = credentials;
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


 








