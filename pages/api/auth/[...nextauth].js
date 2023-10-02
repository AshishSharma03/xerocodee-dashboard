import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { Redis ,upstashRedisClient} from "@upstash/redis";
import WorkOSProvider from "next-auth/providers/workos";

const authOptions = {

    session:{
      type: 'redis',
      strategy: 'jwt',
      adapter: UpstashRedisAdapter(new Redis({
        url : process.env.UPSTASH_REDIS_URL,
        token : process.env.UPSTASH_REDIS_TOKEN
      }),{
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
    WorkOSProvider({
      clientId: process.env.WORKOS_CLIENT_ID,
      clientSecret: process.env.WORKOS_API_KEY,
      client: {
        token_endpoint_auth_method: 'client_secret_post',
      },
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

  pages: {
    newUser: '/onboard/YourRole',
  },

}

export default NextAuth(authOptions)


 








