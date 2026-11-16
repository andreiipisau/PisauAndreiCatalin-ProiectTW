import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TichetePage from "./pages/TichetePage.jsx";
import TichetDetaliuPage from "./pages/TichetDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TichetePage />} />
        <Route path="/tichete/:id" element={<TichetDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}