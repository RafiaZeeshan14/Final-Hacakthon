import React from 'react'

const Table = () => {
    const data = [
        { id: 20462, date: "13/05/2024", amount: "$4.95", mode: "30May", status: "Paid" },
        { id: 20462, date: "13/05/2024", amount: "$4.95", mode: "30May", status: "Pending" }
      ];
  return (
    <div className="container pl-4 mx-auto mt-8">
        <h2 className="text-2xl font-semibold gradient-text">Summary</h2>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="py-2 w-1/12">User ID</th>
              <th className="py-2 w-2/12">Date</th>
              <th className="py-2 w-2/12">Amount</th>
              <th className="py-2 w-2/12">Due Date</th>
              <th className="py-2 w-2/12">Status</th>
              <th className="py-2 w-3/12">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-gray-50 even:bg-gray-100">
                <td className="py-2 text-center">#{item.id}</td>
                <td className="py-2 text-center">{item.date}</td>
                <td className="py-2 text-center">{item.amount}</td>
                <td className="py-2 text-center">{item.mode}</td>
                <td className="py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${item.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2 text-center text-sm space-x-2">
                  <button className="px-2 py-2 bg-pink-100 text-pink-700 border border-pink-300 rounded">
                    Download PDF
                  </button>
                  <button className="px-2 py-2 bg-blue-100 text-blue-700 border border-blue-300 rounded">
                    Pay Online
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Table