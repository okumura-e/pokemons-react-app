import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FirstPage from "./templates/first/index";
import SecondPage from "./templates/second/index";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route path="/" element={<FirstPage />} />
      <Route path="/pokemon/:name" element={<SecondPage />} />
    </Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
