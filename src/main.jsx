import './index.css'
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Employee from './components/Admin/Employee/Employee';  

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Employee />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);