import styles from "./index.module.css";
import { Outlet } from "react-router-dom";

// Components
import Header from "@components/header/index.jsx";
import Footer from "@components/footer/index.jsx";

export default function LandingLayout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
