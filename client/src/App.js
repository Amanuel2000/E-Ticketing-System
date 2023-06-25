import LeftBar from "./components/leftBar/LeftBar";
import Navbar from "./components/navbar/Navbar";
 import Profile from "./pages/profile/Profile"
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import "./style.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";


function App() {

  const currentUser = true;

  
  const Layout = () => {
    return (
      <div className="theme-dark">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex:6}}>
             <Outlet/> 
          </div>
        
          <RightBar/>

        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return<Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
  
    {
      path: "/",
      element:
        <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]

    },
    {
      path: "/login",
      element: <Login/>
  },
   {
      path: "/register",
      element: <Register/>
    },
  ]);
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
