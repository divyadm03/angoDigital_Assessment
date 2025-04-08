import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import CourseList from "./pages/CourseList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseList />,
  },
  {
    path: "/course/:id",
    element: <CourseDetails />,
  },
]);
const App = () => {
  return (
    <div className="main-layout min-h-screen ">
      <Header />
      <div className="layout p-6 mb-10">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
