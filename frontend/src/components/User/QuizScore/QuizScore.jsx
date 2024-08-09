import React from "react";
import UserFeeLayout from "../../Layouts/UserFeeLayout";

const QuizesScore = () => {
  const courses = [
    {
      title: "JavaScript Quiz",
      code: "JS101",
      score: "80",
      bgColor: "bg-gray-100",
      level: "Basic",
      instructor: "Faiza Aziz Khan",
      result: "Passed",
    },
    {
      title: "HTML",
      code: "HTML201",
      score: "20",
      level: "Basic",
      instructor: "Faiza Aziz Khan",
      result: "Failed",
      bgColor: "bg-teal-50",
    },
    {
      title: "CSS",
      code: "CSS301",
      score: "85",
      level: "Medium",
      instructor: "Faiza Aziz Khan",
      result: "Pending",
      bgColor: "bg-purple-100",
    },
    {
        title: "React",
        code: "RT307",
        score: "60",
        level: "Hard",
        instructor: "Faiza Aziz Khan",
        result: "Passed",
        bgColor: "bg-purple-100",
      },
      {
        title: "MongoDB",
        code: "MG101",
        score: "70",
        bgColor: "bg-gray-100",
        level: "Basic",
        instructor: "Faiza Aziz Khan",
        result: "Pending",
      },
      {
        title: "Formik",
        code: "FK121",
        score: "20",
        level: "Medium",
        instructor: "Faiza Aziz Khan",
        result: "Failed",
        bgColor: "bg-teal-50",
      },
  ];

  const getResultColor = (result) => {
    switch (result) {
      case "Passed":
        return "text-[#285192] font-medium";
      case "Failed":
        return "text-red-500 font-medium";
      case "Pending":
        return "text-yellow-500 font-medium";
      default:
        return "text-black";
    }
  };

  return (
    <UserFeeLayout>
      <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text">
        Your Quizzes Score
      </h1>
      <hr className="my-4" />
      <div className="flex flex-wrap justify-start gap-6 gap-x-8 p-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${course.bgColor} border border-gray-300 rounded-lg shadow-md w-72 font-light text-sm`}
          >
            <div className="border-b border-gray-300 p-4">
              <h2 className="text-lg font-semibold mb-1">
                {course.title} - {course.code}
              </h2>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-md">
                <span className="font-medium">Quiz Level</span> : {course.level}
              </p>
              <p className="text-md">
                <span className="font-medium">You Scored</span> : {course.score}
                /100
              </p>
              <p className="text-md">
                <span className="font-medium">Instructor</span> :{" "}
                {course.instructor}
              </p>
              <p className="text-md">
                <span className="font-medium">Result</span> :{" "}
                <span className={getResultColor(course.result) }>
                  {course.result}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </UserFeeLayout>
  );
};

export default QuizesScore;
