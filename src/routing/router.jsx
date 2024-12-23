import { createBrowserRouter} from "react-router-dom";
import HomePageView from "../View/homePage/homePage";
import ArtikelPage from "../View/artikel/artikelPage";
import ArtikelDetailPage from "../View/artikel/articleDetailPage";
import QuizPage from "../View/quiz/quizPage";
import AboutPage from "../View/about/aboutPage";
import LoginPage from "../View/login/loginPage";
import RegisterPage from "../View/register/registerPage";
import Layout from "../mainLayout/mainLayout"

// import "./navBar.css";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index : true, element: <HomePageView /> },
        { path: "/Artikel", element: <ArtikelPage /> },
        { path: "/ArtikelDetailPage/:id", element: <ArtikelDetailPage /> },
        { path: "/Quiz", element: <QuizPage /> },
        { path: "/About", element: <AboutPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
  ]);