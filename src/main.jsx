import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import { getContactLoader, getContactsLoader } from "./loader/contactsLoader";
import {
  createContactAction,
  destroyAction,
  favoriteAction,
  updateContactAction,
} from "./actions/contactActions";
import EditContact from "./EditContact";
import Index from "./Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: favoriteAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: updateContactAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            errorElement: <div>Ops something went wrong</div>,
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
