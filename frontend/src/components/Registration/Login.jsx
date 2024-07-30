import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Common/Inputs/Input";
import Button from "../Common/Button/Button";
import { UserContext } from "../controller/UserContext";
import { handleLogin } from "../controller/handleApi";

// import { handleLogin } from '../controller/handleApi';

export function Login() {
const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password, navigate, setUser)
    // console.log({ email, password });
  };
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src="/Images/logo-stdnt.png" className="h-20 " />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account ?{" "}
            <Link to="/signup">
              <a
                href="#"
                title=""
                className="font-semibold text-[#88C343] transition-all duration-200 hover:underline"
              >
                Create a free account
              </a>
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              {/* Email-Address */}
              <Input
                label="Email Address"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {/* Password */}
              <Input
                label="Password"
                placeholder="Password"
                id="password"
                type="password"
                showForgotPassword={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="py-2">
                <Button type="submit" text="Login" variant="primary" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
