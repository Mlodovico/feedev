"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Tag3d from "../../components/tag";

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
    <div className="relative w-full h-full">
      <div className="absolute inset-0 opacity-50">
        <Tag3d />
      </div>
      <div className=" relative top-0 left-0 flex items-center justify-center h-svh w-svw">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center bg-gray-900 p-20 rounded-lg"
        >
          <div className="flex mb-8">
            <p className="text-3xl font-bold">Logon in Feedev</p>
          </div>
          <div className="flex flex-col mb-8">
            <div>
              <p className="mb-2 font-bold">Email</p>
              <input
                type="email"
                name="email"
                className="rounded-lg h-12 w-80 text-gray-900 font-bold px-3"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
               {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mt-4">
              <p className="mb-2">Password</p>
              <input
                type="password"
                name="password"
                className="rounded-lg h-12 w-80 text-gray-900 font-bold px-3"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="w-full h-12">
            <button
              type="submit"
              className="bg-slate-800 rounded-lg w-full h-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
