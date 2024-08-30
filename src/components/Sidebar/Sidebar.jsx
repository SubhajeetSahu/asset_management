
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildIcon from "@mui/icons-material/Build";
import AddBoxIcon from "@mui/icons-material/AddBox";


const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white w-64 flex flex-col">
      <nav className="flex-1 px-4 py-6 space-y-4 mt-16">
        <a
          href="#"
          className=" px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700 hover:bg-gray-600 flex items-center space-x-2"
        >
          <PersonAddIcon />
          <span>Add Employee</span>
        </a>
        <a
          href="#"
          className=" px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700 hover:bg-gray-600 flex items-center space-x-2"
        >
          <ComputerIcon />
          <span>Add Software</span>
        </a>
        <a
          href="#"
          className=" px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700 hover:bg-gray-600 flex items-center space-x-2"
        >
          <BuildIcon />
          <span>Add Hardware</span>
        </a>
        <a
          href="#"
          className=" px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700 hover:bg-gray-600 flex items-center space-x-2"
        >
          <AddBoxIcon />
          <span>Create Request</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
