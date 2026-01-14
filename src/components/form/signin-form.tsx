"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { toast } from "sonner";
import { Input } from "@/components/ui/input"
import { loginSchema, LoginSchemaType } from "@/lib/schemas/auth.schema"
import Link from "next/link"
import { useState, useTransition } from "react"
import { loginAction } from "@/actions/auth.action"

export default function SignInForm({ ...props }: React.ComponentProps<typeof Card>) {

  const [loginState, setLoginState] = useState<string | undefined>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: LoginSchemaType) => {
    (startTransition(() => {
      loginAction(values).then((data) => {
        if (data?.error) {
          setLoginState(data.error);
        } else {
          toast.success("Connected !", {
            position: "top-right"
          })
        }
      })
    }))
  }
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="uppercase text-center">sign in</CardTitle>
        <CardDescription>
          Connect to you are account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-red-600"> {loginState ?? loginState}</span>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    aria-invalid={fieldState.invalid}
                    required
                    disabled={isPending}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input {...field} id="password" type="password" placeholder="Enter your password" aria-invalid={fieldState.invalid} required disabled={isPending} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <FieldGroup>
              <Field>
                <Button type="submit" disabled={isPending} className="cursor-pointer">LOGIN</Button>
                <FieldDescription className="px-6 text-center">
                  Don&lsquo;t have an account ? <Link href="/auth/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
