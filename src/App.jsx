import { Route, Routes } from "react-router-dom";

// Layouts
import LandingLayout from "@layouts/landing/index.jsx";
import MainLayout from "@layouts/main/index.jsx";

// Pages
import HomePage from "@pages/home/index.jsx";
import ErrorPage from "@pages/error/index.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route element={<LandingLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Error Page (Catch All) */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
