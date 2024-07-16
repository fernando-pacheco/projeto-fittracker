import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { MainInfo } from "./pages/main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainInfo />
  },
])

export function App() {
  return <RouterProvider router={router} />
}