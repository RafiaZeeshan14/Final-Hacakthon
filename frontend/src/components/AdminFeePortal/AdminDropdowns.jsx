import DropdownInput from "../Common/Inputs/DropDownInput";


const AdminDropdowns = ({ filterByCourse }) => {

  return (
    <>
      <div className='flex justify-between w-full'>
        {/* Courses Dropdown */}
        <div className="w-[28%] pr-2">
          <DropdownInput
            label="Select Course"
            id="course"
            name="course"
            onChange={(e) => filterByCourse(e)}
            options={[
              "Select Course",
              "Web Development",
              "Graphic Designing",
              "Flutter",
              "CCNA",
              "AWS",
            ]} />
        </div>
        {/* Month Dropdown */}
        <div className="w-[28%] pl-2">
          <DropdownInput
            label="Select Month"
            id="month"
            name="month"
            options={[
              "Select Month",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]} />
        </div>
      </div>
    </>
  )
}

export default AdminDropdowns;
