import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Fixtures from "./pages/fixtures/Fixtures"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Footer from "./components/Footer"
import NotFound from "./pages/notFound/NotFound"
import GenerateQRC from "./pages/generateQRC/GenerateQRC"
import Ticket from "./pages/ticket/Ticket"
import Payment from "./pages/payment/Payment"
import ScrollToTop from "./components/ScrollToTop"
import { useContext } from "react"
import { AuthContext } from "./context/authContext"

const App = () => {

  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <>
      <ScrollToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fixtures",
          element: <Fixtures />,
        },
        {
          path: "/ticket",
          element: <Ticket />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/generate",
          element: <GenerateQRC />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;