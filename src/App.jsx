import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Browse from "./pages/Browse/Browse";
import Perfect from "./pages/Perfect/Perfect";
import Details from "./pages/Details/Details";
import Booking from "./pages/Booking/Booking";
import Confirmation from "./pages/Confirmation/Confirmation";
import Bookings from "./pages/Bookings/Bookings";
import History from "./pages/History/History";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
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
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [favoriteIds, setFavoriteIds] = useState([2]);
  const [bookingStep, setBookingStep] = useState(1);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("acr-theme", theme);
  }, [theme]);
  const go = (nextPage) => {
    setPage(nextPage);
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openCar = (car) => {
    setSelectedCar(car);
    go("details");
  };
  const toggleFavorite = (id) =>
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  const requestBooking = (car = selectedCar) => {
    setSelectedCar(car);
    user ? go("booking") : go("login");
  };
  const login = (event) => {
    event.preventDefault();
    setUser({ name: "Maya Santos", email: "maya@example.com" });
    go("dashboard");
  };
  const register = (event) => {
    event.preventDefault();
    setUser({ name: "New ARC Driver", email: "driver@example.com" });
    go("dashboard");
  };
  const logout = () => {
    setUser(null);
    go("home");
  };
  const shared = {
    go,
    openCar,
    requestBooking,
    cars,
    favoriteIds,
    toggleFavorite,
    user,
    setNotice,
  };

  const pages = {
    home: <Home {...shared} />,
    login: <Login onSubmit={login} go={go} />,
    register: <Register onSubmit={register} go={go} />,
    forgot: <ForgotPassword go={go} />,
    dashboard: <Dashboard {...shared} />,
    browse: <Browse {...shared} />,
    perfect: <Perfect {...shared} />,
    details: <Details {...shared} car={selectedCar} />,
    booking: (
      <Booking
        car={selectedCar}
        step={bookingStep}
        setStep={setBookingStep}
        go={go}
        setNotice={setNotice}
      />
    ),
    confirmation: <Confirmation go={go} />,
    bookings: <Bookings go={go} setNotice={setNotice} />,
    history: <History requestBooking={requestBooking} />,
    notifications: <Notifications />,
    profile: (
      <Profile theme={theme} setTheme={setTheme} go={go} logout={logout} />
    ),
    about: <About go={go} />,
    contact: <Contact />,
    faq: <FAQ />,
  };
  return (
    <div className="app-shell">
      <Header
        user={user}
        page={page}
        go={go}
        theme={theme}
        setTheme={setTheme}
        logout={logout}
      />
      <Toast message={notice} />
      <main>{pages[page] || pages.home}</main>
      <Footer go={go} />
    </div>
  );
}
