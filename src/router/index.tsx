import Dashboard from '../components/Dashboard'
import Test from '../components/Test'
import { useRoutes } from 'react-router'
import { RouteObject } from "react-router-dom";

const useGetRoutes = () => {

  let roterConfig: RouteObject[] = [
    {
      path: "/",
      element: <Dashboard />,
      // children: [
      //   {
      //     path: "messages",
      //     element: <Test />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
      index: true
    },
    { path: "/test", element: <Test /> },
  ]

  return useRoutes(roterConfig)
}

export {
  useGetRoutes
}