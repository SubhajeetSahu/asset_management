import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";


const Employee = () => {
  const [view, setView] = useState(true);

  const toggleView = () => {
    setView(!view);
  };

  return (
    <>

      {view && (
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">

              <div className="bg-gray-800 text-white py-4 px-6 flex justify-between gap-5">
                <h2 className="text-2xl font-semibold">Add Employee</h2>
                <button
                  onClick={toggleView}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                >
                  View
                </button>
              </div>
              <form className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700 mb-1">
                      Employee Name
                    </label>
                    <input
                      id="employeeName"
                      name="employeeName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <input
                      id="department"
                      name="department"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Human Resources"
                    />
                  </div>
                  <div>
                    <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Manager"
                    />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                      Grade
                    </label>
                    <input
                      id="grade"
                      name="grade"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Senior"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label htmlFor="doj" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Joining (DOJ)
                    </label>
                    <input
                      id="doj"
                      name="doj"
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="reportingManager" className="block text-sm font-medium text-gray-700 mb-1">
                      Reporting Manager
                    </label>
                    <input
                      id="reportingManager"
                      name="reportingManager"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {!view && (
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">

              <div className="bg-gray-800 text-white py-4 px-6 flex justify-between">
                <h2 className="text-2xl font-semibold">Employee Information</h2>
                <button
                  onClick={toggleView}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                >
                  Add
                </button>
              </div>
              
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="flex">
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DOJ
                    </th>
                    <th
                      scope="col"
                      className="flex-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      Reporting Manager
                    </th>
                  </tr>
                </thead>
                {/* <tbody className="bg-white divide-y divide-gray-200">
    {employees.map((employee) => (
      <tr key={employee.id} className="flex">
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.name}
        </td>
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.designation}
        </td>
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.grade}
        </td>
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.location}
        </td>
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.doj}
        </td>
        <td
          className="flex-1 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {employee.reportingManager}
        </td>
      </tr>
    ))}
  </tbody> */}
              </table>


            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Employee;
