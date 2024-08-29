import './index.css'
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Employee from './components/Admin/Employee/Employee';  
import Landing from './components/Landing/Landing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Employee />} />
      <Route path="/landing" element={<Landing />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);