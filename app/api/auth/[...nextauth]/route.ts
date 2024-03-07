import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@prisma/client";
import prismaDB from "@/prisma/client";
import { Adapter } from "next-auth/adapters";

import bcrypt from "bcrypt"

export const authOption: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma) as Adapter ,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials?.password) return null;

        const user = await prismaDB.user.findUnique({
          where : {
            email : credentials.email
          }
        })

        if(!user) return null;

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

        return passwordMatch ? user : null;


      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session:  {strategy : "jwt"},
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
