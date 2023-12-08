import Root from "../pages/client/Root.jsx";
import Home from "../pages/client/Home.jsx";
import Reservation from "../pages/client/Reservation";
import Menu from "../pages/client/Menu.jsx";
import Galery from "../pages/client/Galery";
import About from "../pages/client/About.jsx"
import Blog from "../pages/client/Blog.jsx"
import Contact from "../pages/client/Contact.jsx"
import AdminRoot from "../pages/admin/Adminroot.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import Products from "../pages/admin/Product.jsx";


const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "gallery",
        element: <Galery />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "admin/products",
        element: <Products />,
      },
    ],
  },
];

export default ROUTES;
