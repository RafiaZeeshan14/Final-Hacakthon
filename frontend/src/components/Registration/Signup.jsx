import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Common/Inputs/Input";
import DropdownInput from "../Common/Inputs/DropDownInput";
import Button from "../Common/Button/Button";


// import { handleRegister } from '../controller/handleApi';

export function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   handleRegister(name, email, password, navigate)
  // }
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
            <Link to={"/login"}
              title=""
              className="font-semibold text-[#88C343] transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              {/*   Full-Name   */}
              <Input
                label="Full Name"
                placeholder="Full Name"
                id="name"
                type="text"
              />
              {/*   Email   */}
              <Input
                label="Email Address"
                placeholder="Email"
                id="email"
                type="email"
              />
              {/*   Roll-No   */}
              <Input
                label="Roll No"
                placeholder="WMA-12140"
                id="rollNo"
                type="text"
              />
              {/*   Courses   */}
              <DropdownInput
                label="Select Course"
                id="course"
                options={[
                  "Web Development",
                  "Graphic Designing",
                  "Flutter",
                  "CCNA",
                  "AWS",
                ]}
              />
              {/*   Batch   */}
              <DropdownInput
                label="Select Batch"
                id="batch"
                options={[
                  "Select Batch",
                  "7",
                  "8",
                  "9",
                  "10",
                ]}
              />
              {/*   Password   */}
              <Input
                label="Password"
                placeholder="Password"
                id="password"
                type="password"
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