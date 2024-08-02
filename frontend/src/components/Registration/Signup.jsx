import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleRegister } from '../controller/handleApi';
import Input from "../Common/Inputs/Input";
import DropdownInput from "../Common/Inputs/DropDownInput";
import Button from "../Common/Button/Button";

export function Signup() {
 const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required *"),
    email: Yup.string().email("Invalid email address").required("Email is required *"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required *"),
    rollNo: Yup.string().required("Roll No is required *"),
    course: Yup.string().required("Please select a course *"),
    batch: Yup.string().required("Please select a batch *"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rollNo: '',
      course: '',
      batch: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleRegister(values, navigate);
    },
  });

  return (
    <section className="relative ">
    {/* Vector Image */}
    <img
      src="/Images/VectorBlueLeft.png"
      alt="Vector Blue"
      className="absolute bottom-0 left-0 "
    />

    <img
      src="/Images/VectorBlue.png"
      alt="Vector Blue"
      className="absolute top-0 right-0"
    />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src="/Images/logo-stdnt.png" className="h-20" alt="Logo" />
          </div>
          <h2 className="text-center text-2xl font-bold py-2 leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              title=""
              className="font-semibold text-[#88C343] transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={formik.handleSubmit} className="mt-8">
            <div className="space-y-5">
              {/* Full-Name */}
              <Input
                name="name"
                label="Full Name"
                placeholder="Full Name"
                id="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-red-500 text-xs ">{formik.errors.name}</span>
              ) : null}

              {/* Email */}
              <Input
                label="Email Address"
                placeholder="Email"
                name="email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-red-500 text-xs">{formik.errors.email}</span>
              ) : null}

              {/* Roll-No */}
              <Input
                label="Roll No"
                placeholder="WMA-12140"
                name="rollNo"
                id="rollNo"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rollNo}
              />
              {formik.touched.rollNo && formik.errors.rollNo ? (
                <span className="text-red-500 text-xs">{formik.errors.rollNo}</span>
              ) : null}

              {/* Courses */}
              <DropdownInput
                label="Select Course"
                id="course"
                name="course"
                options={[
                  "Select Course",
                  "Web Development",
                  "Graphic Designing",
                  "Flutter",
                  "CCNA",
                  "AWS",
                ]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.course}
              />
              {formik.touched.course && formik.errors.course ? (
                <span className="text-red-500 text-xs">{formik.errors.course}</span>
              ) : null}

              {/* Batch */}
              <DropdownInput
                label="Select Batch"
                name="batch"
                id="batch"
                options={[
                  "Select Batch",
                  "7",
                  "8",
                  "9",
                  "10",
                ]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.batch}
              />
              {formik.touched.batch && formik.errors.batch ? (
                <span className="text-red-500 text-xs">{formik.errors.batch}</span>
              ) : null}

              {/* Password */}
              <Input
                label="Password"
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="text-red-500 text-xs">{formik.errors.password}</span>
              ) : null}

              <div>
                <Button type="submit" text="Create Account" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}