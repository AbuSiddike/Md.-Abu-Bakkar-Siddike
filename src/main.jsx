import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Slide, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
        />
        <App />
        <RouterProvider router={router} />
    </StrictMode>
);
