import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Add_Users from "../components/Add_Users/Add_Users";
import All_Users from "../components/All_Users/All_Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/add-user',
        Component: Add_Users
      },
      {
        path: '/users',
        Component: All_Users,
        loader: () => fetch('http://localhost:3000/users')
      }
    ]
  },
]);