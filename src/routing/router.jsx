import { createBrowserRouter} from "react-router-dom";
import HomePageView from "../View/homePage/homePage";
import ArtikelPage from "../View/artikel/artikelPage";
import QuizPage from "../View/quiz/quizPage";
import AboutPage from "../View/about/aboutPage";
import LoginPage from "../View/login/loginPage";
import RegisterPage from "../View/register/registerPage";
import Layout from "../mainLayout/mainLayout"
import QuizSoal from "../View/quiz/quizSoal";
import ResultPage from "../View/quiz/resultPage";

// import "./navBar.css";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index : true, element: <HomePageView /> },
        { path: "/Artikel", element: <ArtikelPage /> },
        { path: "/Quiz", element: <QuizPage /> },
        { path: "/Soal", element: <QuizSoal />},
        { path: "/Result", element: <ResultPage /> },
        { path: "/About", element: <AboutPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
  ]);