import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Fixtures from "./pages/fixtures/Fixtures";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import Ticket from "./components/ticket/Ticket";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Payment from "./components/payment/Payment";
import GenerateQRC from "./components/generateQRC/GenerateQRC";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fixtures",
          element: <Fixtures />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "fixtures/ticket",
          element: <Ticket />
        },
        {
          path: "fixtures/ticket/payment",
          element: <Payment />
        },
        {
          path: "fixtures/ticket/payment/generate",
          element: <GenerateQRC />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/ticket",
      element: <Ticket />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;