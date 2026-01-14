import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "@/functions/user.function";
import { Role } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    // JWT
    async jwt({ token }) {

      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      // token.surname = existingUser.surname!;

      return token;
    },

    // Session
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (session.user && token.role) {
        session.user.role = token.role as Role;
      }
      session.user.name = token.name;
      // session.user.surname = token.surname as string;

      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  ...authConfig,
});
