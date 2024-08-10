import React from "react";
import { FaBell } from "react-icons/fa";
import AdminInfolayout from "../../Layouts/AdminInfoLayout";

const NotificationPage = () => {
  const notifications = [
    { id: 1, title: "New Student Enrollment", message: "A new student has enrolled in the Web Development course.", date: "2024-08-09", isRead: false },
    { id: 2, title: "Faculty Meeting Reminder", message: "Faculty meeting scheduled for today at 2:00 PM.", date: "2024-08-09", isRead: true },
    { id: 3, title: "Budget Approval Required", message: "The budget for the upcoming semester needs your approval.", date: "2024-08-08", isRead: false },
    { id: 4, title: "New Course Proposal", message: "A proposal for the new AI course has been submitted for review.", date: "2024-08-07", isRead: true },
    { id: 5, title: "System Maintenance", message: "Scheduled system maintenance will occur on 2024-08-10.", date: "2024-08-06", isRead: false },
    { id: 6, title: "Pending Leave Requests", message: "There are 3 leave requests pending your approval.", date: "2024-08-05", isRead: false },
    { id: 7, title: "Annual Report Submission", message: "The annual report is due for submission by 2024-08-15.", date: "2024-08-03", isRead: true },
    { id: 8, title: "New Feedback Received", message: "You have received new feedback from the student council.", date: "2024-08-01", isRead: true },
    { id: 9, title: "Staff Performance Review", message: "Staff performance reviews are scheduled for next week.", date: "2024-07-30", isRead: true },
    { id: 10, title: "Policy Update", message: "A new update to the campus security policy has been released.", date: "2024-07-29", isRead: true },
  ];

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
    <AdminInfolayout>
      <div className="flex items-center mb-4 py-5">
        <FaBell className="mr-3 text-gray-600 size-7" />
        <h1 className="text-3xl font-bold gradient-text">Notifications</h1>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-8xl h-[450px] overflow-y-scroll">
        {Object.keys(categorizedNotifications).map((category) => (
          <div key={category} className="mb-6">
            <h2 className={`text-xl font-semibold mb-3 ${getCategoryStyle(category)}`}>
              {category}
            </h2>
            {categorizedNotifications[category].map((notification) => (
              <div
                key={notification.id}
                className={`p-4 mb-3 rounded-lg shadow-sm border ${notification.isRead ? "bg-gray-100" : "bg-white"}`}
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
    </AdminInfolayout>
  );
};

export default NotificationPage;
