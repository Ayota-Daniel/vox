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
import { Input } from "@/components/ui/input"
import { signUpSchema, SignUpSchemaType } from "@/lib/schemas/auth.schema"
import Link from "next/link"
import { useTransition } from "react"
import { registerAction } from "@/actions/auth.action"
import { toast } from "sonner"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

  const [isPending, startTransition] = useTransition()

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  })

  const onSubmit = (values: SignUpSchemaType) => {
    startTransition(() => {
      registerAction(values).then((data) => {
        if (data.success) {
          form.reset();
          toast.success("Account has been created.", {
            position: "top-right"
          })
        } else {
          toast.error(data.error!, {
            position: "top-right"
          })
        }
      });
    })
  }
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="uppercase text-center">sign up</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input {...field} id="name" type="text" placeholder="John Doe" aria-invalid={fieldState.invalid} required disabled={isPending} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
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
            <Controller
              name="passwordConfirm"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input {...field} id="confirm-password" type="password" placeholder="Confirm your password" aria-invalid={fieldState.invalid} required disabled={isPending} />
                  <FieldDescription>Please confirm your password.</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <FieldGroup>
              <Field>
                <Button type="submit" disabled={isPending} className="cursor-pointer">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/auth/signin">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
