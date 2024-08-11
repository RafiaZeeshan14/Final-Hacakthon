import React, { useEffect } from "react";
import UserFeeLayout from "../../Layouts/UserFeeLayout";
import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const notice = [
  { id: 6, title: "Fee Payment Due", message: "Your tuition fee payment is due. Make sure to pay it within due date to avoid late fee charges.", date: "2024-08-05", isRead: false },
];

const Notification = () => {
  const notifications = [
    { id: 1, title: "Assignment Due Reminder", message: "Your assignment for Graphic Design is due today at 5:00 PM.", date: "2024-08-09", isRead: false },
    { id: 2, title: "New Course Available", message: "A new course on Advanced Web Design has been added to your curriculum.", date: "2024-08-08", isRead: true },
    { id: 3, title: "Upcoming Quiz", message: "You have an upcoming quiz in UX Design on 2024-08-15.", date: "2024-08-07", isRead: false },
    { id: 4, title: "Class Cancellation", message: "Your class for 3D Animation Techniques on 2024-08-08 has been cancelled.", date: "2024-08-08", isRead: true },
    { id: 5, title: "Meeting Reminder", message: "You have a meeting with your advisor tomorrow at 10:00 AM.", date: "2024-08-06", isRead: false },
    { id: 6, title: "Fee Payment Due", message: "Your tuition fee payment is due on 2024-08-10.", date: "2024-08-05", isRead: false },
    { id: 7, title: "Library Books Due", message: "Your borrowed books are due for return on 2024-08-10.", date: "2024-08-02", isRead: true },
    { id: 8, title: "New Forum Post", message: "A new post has been made in your class discussion forum.", date: "2024-07-31", isRead: true },
    { id: 9, title: "Exam Schedule Released", message: "The final exam schedule has been released. Check your email for details.", date: "2024-07-30", isRead: true },
    { id: 10, title: "Class Rescheduled", message: "Your class for Advanced Web Design has been rescheduled to next week.", date: "2024-07-29", isRead: true },
  ];

  const location = useLocation();
  const highlightedId = location.state?.highlight;

  useEffect(() => {
    if (highlightedId) {
      const element = document.getElementById(`notification-${highlightedId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.classList.add("bg-red-100");
      }
    }
  }, [highlightedId]);

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const lastWeekDate = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

  const categorizedNotifications = {
    Today: notifications.filter((n) => n.date === today),
    Yesterday: notifications.filter((n) => n.date === yesterday),
    LastWeek: notifications.filter((n) => n.date > lastWeekDate && n.date < yesterday),
    Older: notifications.filter((n) => n.date <= lastWeekDate),
  };

  const getCategoryStyle = (category) => {
    switch (category) {
      case "Today":
        return "text-green-500";
      case "Yesterday":
        return "text-yellow-500";
      case "LastWeek":
        return "text-blue-500";
      default:
        return "text-gray-800";
    }
  };

  return (
    <UserFeeLayout>
      <div className="flex items-center mb-4 py-5">
        <FaBell className="mr-3 text-gray-600 size-7" />
        <h1 className="text-3xl font-bold gradient-text">Notifications</h1>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-8xl mx-auto h-[450px] overflow-y-scroll">
        {Object.keys(categorizedNotifications).map((category) => (
          <div key={category} className="mb-6">
            <h2 className={`text-xl font-semibold mb-3 ${getCategoryStyle(category)}`}>
              {category}
            </h2>
            {categorizedNotifications[category].map((notification) => (
              <div
                key={notification.id}
                id={`notification-${notification.id}`}
                className={`p-4 mb-3 rounded-lg shadow-sm border ${
                  notification.isRead ? "bg-gray-100" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg flex items-center font-sans underline">
                    <span className="inline-block w-1 h-1 bg-black rounded-full mr-2"></span>
                    {notification.title}
                  </h3>
                  <span className="text-sm text-gray-500">{notification.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{notification.message}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </UserFeeLayout>
  );
};

export default Notification;
