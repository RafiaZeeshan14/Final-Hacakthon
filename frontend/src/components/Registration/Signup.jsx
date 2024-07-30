import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Common/Inputs/Input";
import DropdownInput from "../Common/Inputs/DropDownInput";
import Button from "../Common/Button/Button";
import { handleRegister } from "../controller/handleApi";


// import { handleRegister } from '../controller/handleApi';

export function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNo: '',
    course: "",
    batch: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.course === "" || formData.batch === "") {
      alert("Please select a course and batch");
      return;
    }
    // console.log(formData)
    handleRegister(formData, navigate)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src="/Images/logo-stdnt.png" className="h-20 " />
          </div>
          <h2 className="text-center text-2xl font-bold py-2 leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account ?{" "}
            <Link to={"/"}
              title=""
              className="font-semibold text-[#88C343] transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              {/*   Full-Name   */}
              <Input
                name='name'
                label="Full Name"
                placeholder="Full Name"
                id="name"
                type="text"
                onChange={handleChange}
              />
              {/*   Email   */}
              <Input
                label="Email Address"
                placeholder="Email"
                name='email'
                id="email"
                type="email"
                onChange={handleChange}
              />
              {/*   Roll-No   */}
              <Input
                label="Roll No"
                placeholder="WMA-12140"
                name='rollNo'
                id="rollNo"
                type="text"
                onChange={handleChange}
              />
              {/*   Courses   */}
              <DropdownInput
                label="Select Course"
                id="course"
                name='course'
                options={[
                  "Select Course",
                  "Web Development",
                  "Graphic Designing",
                  "Flutter",
                  "CCNA",
                  "AWS",
                ]}
                onChange={handleChange}
              />

              {/*   Batch   */}
              <DropdownInput
                label="Select Batch"
                name='batch'
                id="batch"
                options={[
                  "Select Batch",
                  "7",
                  "8",
                  "9",
                  "10",
                ]}
                onChange={handleChange}
              />
              {/*   Password   */}
              <Input
                label="Password"
                placeholder="Password"
                name='password'
                id="password"
                type="password"
                onChange={handleChange}
              />
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