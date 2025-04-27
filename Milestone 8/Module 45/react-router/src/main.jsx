import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import Mobiles from "./components/Mobiles/Mobiles";
import Laptops from "./components/laptop/Laptops";
import UsersFata from "./components/users/UsersFata";
import Users2 from "./components/users2/Users2";
import UserDetails from "./components/userdetails/UserDetails";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "laptops",
        Component: Laptops,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: UsersFata,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
