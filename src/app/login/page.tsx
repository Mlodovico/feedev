"use client";
import { useState } from "react";
import Tag3d from "../../components/tag";

interface loginFormProps {
  email: string;
  password: string;
}

export default function Login() {
  const [loginForm, setLoginForm] = useState<loginFormProps>({
    email: "",
    password: "",
  });

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 opacity-50">
        <Tag3d />
      </div>
      <div className=" relative top-0 left-0 flex items-center justify-center h-svh w-svw">
        <div className="flex flex-col items-center justify-center bg-gray-900 p-20 rounded-lg">
          <div className="flex mb-8">
            <p className="text-3xl font-bold">Logon in Feedev</p>
          </div>
          <div className="flex flex-col mb-8">
            <div>
              <p className="mb-2 font-bold">Email</p>
              <input
                type="text"
                className="rounded-lg h-12 w-80 from-neutral-900 border-none"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <p className="mb-2">Password</p>
              <input
                type="password"
                className="rounded-lg h-12 w-80"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
