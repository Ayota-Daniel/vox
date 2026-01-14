"use server"

import { signIn, signOut } from "@/auth";
import prisma from "@/lib/prisma";
import { loginSchema, LoginSchemaType, signUpSchema, SignUpSchemaType } from "@/lib/schemas/auth.schema"
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";



export const loginAction = async (values: LoginSchemaType) => {
  const validatedFields = loginSchema.safeParse(values);
  if(!validatedFields.success) {
    return {
      error: "Invalid fields !"
    }
  }
  const {email, password} = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password
    })
  } catch (error) {
    if(error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials !"}
                case "CallbackRouteError":
                    return {error: "CallbackError"}
                default:
                    return {error: "something went wrong !"}
            }
        }
        throw error
  }
}

export const logoutAction = async () => {
    await signOut();
}

export const registerAction = async (values: SignUpSchemaType) => {
  const validatedFields = signUpSchema.safeParse(values); 
  if(!validatedFields.success) {
    return {
      error: "Invalid fields !"
    }
  }
  const {name, email, password} = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 15);
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email
      }
    })
    if(existingUser) {
      return {
        error: "User already exist !"
      }
    }
    const user = prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
    if(!user) {
      return {
        error: "An error occur while creating a new account !"
      }
    }
    return {
      success: "Account created successfully"
    }
  } catch (error) {
    throw error
  }
}