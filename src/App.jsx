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
import Admin from "./pages/Admin/Admin";
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
  const [clock, setClock] = useState(0);
  const [trustScore, setTrustScore] = useState(87);
  const [activeRental, setActiveRental] = useState({
    reference: "ARC-2026-00091",
    car: cars[1],
    pickupAt: "2026-09-04T10:00",
    originalReturn: "2026-09-07T10:00",
    returnAt: "2026-09-07T10:00",
    returnedAt: null,
    extensionRequest: null,
  });

  useEffect(() => {
    const initialRefresh = window.setTimeout(() => setClock(Date.now()), 0);
    const timer = window.setInterval(() => setClock(Date.now()), 30000);
    return () => {
      window.clearTimeout(initialRefresh);
      window.clearInterval(timer);
    };
  }, []);

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
    setBookingStep(1);
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
  const rentalDeadline = new Date(activeRental.returnAt).getTime();
  const rentalIsActive = !activeRental.returnedAt && clock < rentalDeadline;
  const extensionIsAvailable = rentalIsActive && !activeRental.extensionRequest;
  const extensionRates = { hourly: 350, daily: activeRental.car.price, monthly: activeRental.car.price * 25 };
  const requestExtension = (type, duration) => {
    const currentReturn = new Date(activeRental.returnAt);
    const amount = Number(duration);
    const requestedDate = new Date(currentReturn);
    if (type === "hourly") requestedDate.setDate(requestedDate.getDate() + Math.ceil(amount / 24));
    if (type === "daily") requestedDate.setDate(requestedDate.getDate() + amount);
    if (type === "monthly") requestedDate.setMonth(requestedDate.getMonth() + amount);
    const pickupTime = new Date(activeRental.pickupAt);
    requestedDate.setHours(pickupTime.getHours(), pickupTime.getMinutes(), 0, 0);
    const available = amount > 0 && requestedDate > currentReturn && requestedDate.getTime() - currentReturn.getTime() <= 31 * 86400000;
    if (!extensionIsAvailable || !available) {
      setNotice(!rentalIsActive ? "This rental has expired. Return the vehicle before booking again." : "Those dates are unavailable for this vehicle.");
      return false;
    }
    setActiveRental((current) => ({ ...current, extensionRequest: { type, duration: amount, returnAt: requestedDate.toISOString(), cost: amount * extensionRates[type], status: "Pending ARC approval" } }));
    setNotice("Extension request submitted for ARC approval.");
    return true;
  };
  const approveExtension = () => {
    if (!activeRental.extensionRequest) return;
    setActiveRental((current) => ({ ...current, returnAt: current.extensionRequest.returnAt, extensionRequest: { ...current.extensionRequest, status: "Approved" } }));
    setNotice("Rental extension approved. Your return time has been updated.");
  };
  const returnVehicle = () => {
    if (activeRental.returnedAt) return;
    setActiveRental((current) => ({ ...current, returnedAt: new Date().toISOString() }));
    setNotice("Vehicle return recorded. Any late-return fee is shown in your booking.");
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
    trustScore,
    activeRental,
    rentalIsActive,
    extensionIsAvailable,
    requestExtension,
    extensionRates,
    returnVehicle,
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
        pickupAt={activeRental.pickupAt}
      />
    ),
    confirmation: <Confirmation go={go} />,
    bookings: <Bookings go={go} setNotice={setNotice} {...shared} />,
    history: <History cars={cars} requestBooking={requestBooking} />,
    notifications: <Notifications />,
    profile: (
      <Profile theme={theme} setTheme={setTheme} go={go} logout={logout} trustScore={trustScore} />
    ),
    about: <About go={go} />,
    contact: <Contact />,
    faq: <FAQ />,
    admin: <Admin trustScore={trustScore} setTrustScore={setTrustScore} activeRental={activeRental} approveExtension={approveExtension} go={go} />,
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
