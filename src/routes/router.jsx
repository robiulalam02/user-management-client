import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Add_Users from "../components/Add_Users/Add_Users";
import All_Users from "../components/All_Users/All_Users";
import Update_Users from "../components/Update_Users/Update_Users";

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
        loader: () => fetch('https://user-management-server-xi-one.vercel.app/users')
      },
      {
        path: '/update-user/:id',
        Component: Update_Users,
        loader: ({params}) => fetch(`https://user-management-server-xi-one.vercel.app/users/${params.id}`)
      }
    ]
  },
]);