"use client";
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BottomGradient } from "@/components/BottomGradient";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

interface loginFormProps {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().lowercase().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const [loginForm, setLoginForm] = useState<loginFormProps>({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleLogIn(values);
    },
  });

  const handleLogIn = (loginForm: loginFormProps) => {
    console.log("login", loginForm);
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="absolute inset-0 opacity-50">
          {/* Find other animation */}
        </div>
        <div className="relative top-0 left-0 flex items-center justify-center h-svh w-svw">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center bg-gray-900 p-10 rounded-lg lg:w-1/5 md:w-4/6 sm:w-6/6"
          >
            <div className="w-full mb-12">
              <a href="/">
                <IoMdArrowRoundBack size={28} />
              </a>
            </div>
            <div className="flex mb-8">
              <p className="text-3xl font-bold">Logon in Feedev</p>
            </div>
            <div className="flex flex-col mb-8">
              <div className="w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email" type="text" />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="password" type="text" />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="w-full h-12">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Login
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
