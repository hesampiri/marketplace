import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import { SigninSchema } from "./schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const validateFields = SigninSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !user.password) return null;
          const passMatch = await bcrypt.compare(password, user.password);
          if (passMatch) return user;
        }
        return null;
      },
    }),
    Google,
  ],
  pages: {
    signIn: "/auth/signin",
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({session , token}){
      if(token.sub && session.user){
        session.user.id = token.sub
      }
      return session
    },
    async jwt({token}){
      return token
    }
  },
  session: {
    strategy: "jwt",
    
  },
  trustHost:true,
  
});
