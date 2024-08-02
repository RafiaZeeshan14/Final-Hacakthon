import React from 'react'

const AdminTable = () => {
  return (
    <div>
        <div className="container pl-2 mx-auto mt-8">
          <h2 className="text-2xl font-semibold gradient-text">Summary</h2>
          <table className="min-w-full bg-white mt-4">
            <thead>
              <tr>
                <th className="py-2 w-2/12">Student Name</th>
                <th className="py-2 w-1/12">Due Date</th>
                <th className="py-2 w-2/12">Amount</th>
                <th className="py-2 w-2/12">Payment Mode</th>
                <th className="py-2 w-2/12">Status</th>
                <th className="py-2 w-2/12">Batch</th>
              </tr>
            </thead>          
             <tbody>
                  <tr className="bg-gray-50 even:bg-gray-100 text-sm ">
                    <td className="py-3 text-center">
                      Rafia
                    </td>
                    <td className="py-2 text-center">
                      21/2/24
                    </td>
                    <td className="py-2 text-center">
                      1000
                    </td>
                    <td className="py-2 text-center">
                      Online Payment
                    </td>
                    <td className="py-2 text-center">
                    paid
                    </td>
                    <td className="py-2 text-center">
                    10
                    </td>
                  </tr>
                </tbody>
          </table>
        </div>
    </div>
  )
}

export default AdminTable
