import { Navigate, useRoutes } from "react-router-dom";

// component
import LoginForm from "../layouts/LoginForm";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Login/RegisterPage";
import ForgotPage from "../pages/Login/ForgotPage";

import MainForm from "../layouts/MainForm";
import DashboardPage from "../pages/Home/DashboardPage";
import GeneralPage from "../pages/General/GeneralPage";
import QuestionPage from "../pages/General/QuestionPage";
import GameLibraryPage from "../pages/Library/GameLibraryPage";
import PlayerPage from "../pages/Player/PlayerPage";
import AdministratorPage from "../pages/Player/AdministratorPage";
import CompetitionPage from "../pages/Competition/CompetitionPage";
import OtherPage from "../pages/Other/OtherPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LoginForm />,
      children: [
        { path: "", element: <Navigate to="/login" replace /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/forgot", element: <ForgotPage /> },
      ],
    },
    {
      path: "/home",
      element: <MainForm />,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
      ],
    },
    {
      path: "/general",
      element: <MainForm />,
      children: [
        { path: "", element: <GeneralPage /> },
        { path: "question", element: <QuestionPage /> },
      ],
    },
    {
      path: "/game",
      element: <MainForm />,
      children: [
        { path: "library", element: <GameLibraryPage /> },
      ],
    },
    {
      path: "/player",
      element: <MainForm />,
      children: [
        { path: "", element: <PlayerPage /> },
        { path: "administrator", element: <AdministratorPage /> },
      ],
    },
    {
      path: "/competition",
      element: <MainForm />,
      children: [
        { path: "", element: <CompetitionPage /> },
      ],
    },
    {
      path: "/other",
      element: <MainForm />,
      children: [
        { path: "", element: <OtherPage /> },
      ],
    },
  ]);
}
