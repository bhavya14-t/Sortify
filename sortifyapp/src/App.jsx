import React from "react";
import { AuthProvider } from "./context/AuthContext"; 
import { RouterProvider, createBrowserRouter, Navigate } from  "react-router-dom";
import Login from "./pages/Login";
import Details from "./pages/Details";
import "./App.css";

const PrivateRoute = ( { children }) => {
  const isAuthenticated = !!localStorage.getItem("user");
  return isAuthenticated ? children : <Navigate to="/" />;
};
const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/details",
    element: <PrivateRoute> <Details />
    </PrivateRoute>
    },
]);

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};
export default App;

