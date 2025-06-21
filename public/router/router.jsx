import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loding from "../../src/shared/Looding/Loding"; 
import Loign from "../../src/shared/Login/Loign";
import Regsitration from "../../src/shared/Regsitration/Regsitration";

const MainLayout = lazy(() => import("../../src/Layout/MainLayout"));
const Home = lazy(() => import("../../src/components/Home/Home"));
const Jobs = lazy(() => import("../../src/components/Jobs/Jobs"));
const About = lazy(() => import("../../src/components/About/About"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loding />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loding />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Suspense fallback={<Loding />}>
            <Jobs />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loding />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loding />}>
        <Loign />
      </Suspense>
    )
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<Loding />}>
        <Regsitration />
      </Suspense>
    )
  }
]);
