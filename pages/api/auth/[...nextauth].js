import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { Redis ,upstashRedisClient} from "@upstash/redis";
import { signIn } from "next-auth/react";


const authOptions = {

    // session:{
    //   type: 'redis',
    //   adapter: UpstashRedisAdapter(new Redis({
    //     url : process.env.UPSTASH_REDIS_URL,
    //     token : process.env.UPSTASH_REDIS_TOKEN
    //   }),{
    //   baseKeyPrefix: "auth:", 
    //   sessionKeyPrefix: "session:", 
    //   userKeyPrefix: "user:",
    // }),},

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


 








