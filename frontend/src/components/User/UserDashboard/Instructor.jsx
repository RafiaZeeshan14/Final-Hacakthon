import UserFeeLayout from "../../Layouts/UserFeeLayout";
export const team = [
    {
      avatar: "/Images/Faiza.jpeg",
      name: "Faiza Aziz Khan",
      title: "Full Stack Developer",
    },
    {
      avatar: "/Images/Zeeshan.jpeg",
      name: "Zeeshan Aijaz",
      title: "Team Lead",
    },
    {
      avatar: "/Images/Wajid.jpeg",
      name: "Wajid Khan",
      title: "Head of Team",
    },
    {
      avatar: "/Images/GH.jpeg",
      name: "Ghous Ahmed",
      title: "Software Engineer ",
    },
    {
      avatar: "/Images/RZ.jpeg",
      name: "Rizwan Bhatti",
      title: "Digital Creator ",
    },
  ];
const Instructor = () => {
  return (
    <UserFeeLayout>
      <section className="py-6 pb-[90px]">
        <h1 className="text-3xl font-bold  pl-3 gradient-text ">
          Meet Our Team
        </h1>
        <p className="text-gray-600 mt-3 text-sm">
          Get to Know the Talented and Passionate Individuals Who Drive Our
          Success and Make Our Mission Possible{" "}
        </p>
        <hr className="my-4" />
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-20 h-20 mx-auto">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt={item.name}
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-[#54aaa1]">{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </UserFeeLayout>
  );
};



export default Instructor;
