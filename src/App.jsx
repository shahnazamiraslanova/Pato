import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/index.routes.jsx";
import "./App.css"
const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
