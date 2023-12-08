// routes.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../App";
import Login from "../components/Login";
import Quizz from "../components/Quizz";
import BeginQuizz from "../components/BeginQuizz";

const routesData = [
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/quizz", element: <Quizz /> },
  { path: "/begin-quizz/:id", element: <BeginQuizz /> },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesData.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
