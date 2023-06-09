'use client';

import { useCallback, useState } from "react"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "../../hooks/useRegisterModal"
import { toast } from "react-hot-toast"

//Components
import { Modal, Heading, Input, Button } from "../index"

import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState:{
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) =>{
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => { toast.error("Something Went Wrong!") })
      .finally(() => { setIsLoading(false) })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subTitle="Create an account!"
      />
      <Input 
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button 
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already an account?</div>
          <div
            onClick={() => {registerModal.onClose}}
            className="text-rose-500 cursor-pointer hover:underline"
           >
            Log In
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal