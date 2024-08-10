import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Common/Inputs/Input";
import Button from "../Common/Button/Button";
import { UserContext } from "../controller/UserContext";
import { handleLogin } from "../controller/handleApi";

// import { handleLogin } from '../controller/handleApi';

export function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required *"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required *"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values.email, values.password, navigate, setUser);
    },
  });

  return (
    <section className="relative min-h-screen">
    {/* Vector Image */}
    <img
      src="/Images/VectorBlueLeft.png"
      alt="Vector Blue"
      className="absolute bottom-0 left-0 z-0"
    />
    <img
      src="/Images/VectorBlue.png"
      alt="Vector Blue"
      className="absolute top-0 right-0 z-0"
    />
    <div className="relative z-10 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
          <img src="/Images/logo-stdnt.png" className="h-20" alt="Logo" />
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-[#88C343] transition-all duration-200 hover:underline">
            Create a free account
          </Link>
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-8">
          <div className="space-y-5">
            {/* Email Address */}
            <Input
              label="Email Address"
              placeholder="Email"
              id="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-xs">{formik.errors.email}</span>
            ) : null}
  
            {/* Password */}
            <Input
              label="Password"
              placeholder="Password"
              id="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              showForgotPassword={true}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-xs">{formik.errors.password}</span>
            ) : null}
  
            <div className="py-2">
              <Button type="submit" text="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
}