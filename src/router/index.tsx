import Dashboard from '../components/Dashboard'
import Test from '../components/Test'
import { useRoutes } from 'react-router'
import { RouteObject } from "react-router-dom";
import GridTest from '../pages/grid';

const useGetRoutes = () => {

  let roterConfig: RouteObject[] = [
    {
      path: "/Home",
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
    { 
      path: "/Home/test", element: <Test /> 
    },
    {
      path: "/Home/grid", element: <GridTest/>
    }
  ]

  return useRoutes(roterConfig)
}

export {
  useGetRoutes
}