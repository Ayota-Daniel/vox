import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { loginSchema } from "@/lib/schemas/auth.schema";
import { getUserByEmail} from "@/functions/user.function";

export default {
    providers: [
        Credentials({
          authorize: async (credentials) => {
            const validatedFields = loginSchema.safeParse(credentials);
            if(validatedFields.success) {
                const {email, password} = validatedFields.data;
                const user = await getUserByEmail(email);

                if(!user) return null

                const passwordsMath = await bcrypt.compare(password, user.password);

                if(passwordsMath) return user
            }

            return null
          },
        }),
      ],
} satisfies NextAuthConfig