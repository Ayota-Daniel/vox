import { Role } from "@/generated/prisma/enums";
import * as z from "zod/v4-mini";

export const signUpSchema = z
  .object({
    name: z.optional(z.string().check(z.minLength(3), z.maxLength(50))),
    email: z.string().check(z.email()),
    password: z.string().check(
      z.minLength(8, "Your password must be at leat 8 characters long"),
      z.refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      }),
      z.refine((val) => /[!@#$%^&*(),;.?":{}|<>]/.test(val), {
        message: "Password must contain at least one special character",
      })
    ),
    passwordConfirm: z.string().check(z.minLength(8, "Your password must be at leat 8 characters long")),  })
  .check(
    z.refine(
      (values) => {
        return values.password === values.passwordConfirm;
      },
      {
        message: "The confirmation password does not match the password",
        path: ["passwordConfirm"],
      }
    )
  );

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.string().check(z.email()),
  password: z.string().check(z.minLength(1, "password required !")),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
