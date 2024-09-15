import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import Google from "next-auth/providers/google";
import bcrypt from 'bcrypt';
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials:{
          email:{},
          password:{type:'password'}
      },
    }),
    Google],
  theme:{
    colorScheme:'light'
  }
});
