import  SignInForm from '@/components/form/signin-form'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex min-h-[80svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInPage