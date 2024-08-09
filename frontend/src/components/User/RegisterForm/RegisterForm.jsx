import React from "react";
import UserFeeLayout from "../../Layouts/UserFeeLayout";
import CustomInput from "../../Common/Inputs/CustomInput";
import CustomDropdown from "../../Common/Inputs/CustomDropdowns";

const RegisterForm = () => {
  return (
    <UserFeeLayout>
      <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text ">
        Course Registration Form
      </h1>
      <hr className="my-4"/>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pr-2">
          <CustomInput id="id-b07" name="id-b07" label="Name" required />
          <CustomInput id="id-b07" name="id-b07" label="Email" required />
          <CustomInput id="id-b07" name="id-b07" label="Phone" required />
          <CustomDropdown
            id="id-04"
            name="id-04"
            label="Select Gender"
            options={["Male", "Female"]}
            required
          />
          <CustomDropdown
            id="id-04"
            name="id-04"
            label="Select Course"
            options={[
              "Web Development",
              "Graphic Designing",
              "Flutter",
              "CCNA",
              "AWS",
            ]}
            required
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          <CustomInput id="id-b07" name="id-b07" label="Father Name" required />
          <CustomInput id="id-b07" name="id-b07" label="Age" required />
          <CustomInput id="id-b07" name="id-b07" label="CNIC" required />
          <CustomDropdown
            id="id-04"
            name="id-04"
            label="Select City"
            options={["Karachi", "Hyderabad"]}
            required
          />
          <div className="relative my-6 ">
            <input
              type="date"
              id=""
              name=""
              required=""
              className="relative w-full h-10 px-4 py-5 text-sm placeholder-transparent transition-all bg-white border rounded outline-none focus-visible:outline-none peer border-[#88C343] focus:border-[#73a53a] text-slate-500 autofill:bg-white  focus:focus-visible:outline-none"
            />
            <label
              htmlFor=""
              className="pointer-events-none absolute top-2.5 border-[#88C343] focus:border-[#73a53a] left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm  peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 "
            >
              Date Of Birth
            </label>
          </div>
        </div>
        <div className="w-full  pl-2 border-b pb-7 border-gray-400">
          <CustomInput id="id-b07" name="id-b07" label="Address" required />
          <CustomInput
            id="id-b07"
            name="id-b07"
            label="Last Qualification"
            required
          />
          <div class="relative inline-flex items-center md:w-1/2 gap-2  text-sm border rounded border-[#88C343] focus:border-[#73a53a] text-slate-500">
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              class="peer order-2 [&::file-selector-button]:hidden"
            />
            <label
              for="file-upload"
              class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded cursor-pointer whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300"
            >
              {" "}
              Upload a file{" "}
            </label>
          </div>
        </div>
        <span className="text-sm my-4 text-gray-500 font-light">
          1. I hereby, solemnly declare that the data and facts mentioned herein
          are true and correct to the best of my knowledge. Further, I will
          abide by all the established and future regulations and policies of
          SMIT <br /><br />
          2. I hereby accept the responsibilities of good conduct and guarantee
          that I will not be involved in any other activity, political or
          ethical, but learning during my stay in the program.
          <br /><br />
          3. Defiance will render my admission canceled at any point in time.
          <br /><br />
          4. Upon completion, of the course, I will complete the required project
          by SWIT.
          <br /><br />
          5. It's mandatory for female students to wear abaya/hijab in the class
          <br /><br />
        </span>
        <button
        type="submit"
        className="w-full h-10 bg-[#88C343] text-white font-bold rounded-md hover:bg-[#7cb33d]transition duration-300 mt-4"
      >
        Submit
      </button>
      </div>
    </UserFeeLayout>
  );
};

export default RegisterForm;