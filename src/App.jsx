import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppDownloadModal from "./components/AppDownloadModal/AppDownloadModal";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Perfect from "./pages/Perfect/Perfect";
import Details from "./pages/Details/Details";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import { cars } from "./data/cars";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(
    localStorage.getItem("acr-theme") || "system",
  );
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [bookingCar, setBookingCar] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("acr-theme", theme);
  }, [theme]);
  const go = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openCar = (car) => {
    setSelectedCar(car);
    go("details");
  };
  const requestBooking = (car = selectedCar) => {
    setSelectedCar(car);
    setBookingCar(car);
  };
  const shared = {
    go,
    openCar,
    requestBooking,
    cars,
  };

  const pages = {
    home: <Home {...shared} />,
    browse: <Browse {...shared} />,
    perfect: <Perfect {...shared} />,
    details: <Details {...shared} car={selectedCar} />,
    about: <About go={go} />,
    contact: <Contact />,
    faq: <FAQ />,
  };
  return (
    <div className="app-shell">
      <Header
        page={page}
        go={go}
        theme={theme}
        setTheme={setTheme}
      />
      <main>{pages[page] || pages.home}</main>
      <Footer go={go} />
      {bookingCar && (
        <AppDownloadModal
          car={bookingCar}
          onClose={() => setBookingCar(null)}
        />
      )}
    </div>
  );
}
