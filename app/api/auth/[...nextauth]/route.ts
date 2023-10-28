import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const AuthOptions :NextAuthOptions = {
  adapter:PrismaAdapter(prisma),
  providers: [
    //////////
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "Email", placeholder: "Email" },
      password: { label: "Password", type: "password" , placeholder: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      if (!credentials?.email || credentials.password){ return null}
    //  const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
 const user = await prisma.user.findUnique({
  where : {email:credentials.email},
});
      if (!user) 
         return null;
    bcrypt.compare(credentials.password , user.)


        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
    ////////
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
],
session : {
  strategy: "jwt"
} 
}
const handler = NextAuth(AuthOptions) 

export { handler as GET, handler as POST }