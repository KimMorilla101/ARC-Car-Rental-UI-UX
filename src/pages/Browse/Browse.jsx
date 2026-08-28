import { useState } from "react";
import { CarFront, Fuel, Search, SlidersHorizontal, Users } from "lucide-react";
import { VehicleCard } from "../../components/UI/UI";
import "./Browse.css";

const categories = ["All", "Sedan", "SUV", "Van/MPV", "Pickup", "Luxury", "Hatchback"];

export default function Browse({ cars, openCar, requestBooking, favoriteIds, toggleFavorite }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [passengers, setPassengers] = useState("Any");
  const [sort, setSort] = useState("Recommended");

  const filteredCars = cars
    .filter((car) => {
      const matchesQuery = `${car.name} ${car.type}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || car.type.toLowerCase().includes(category.toLowerCase());
      const matchesPassengers = passengers === "Any" || car.seats >= Number(passengers);
      return matchesQuery && matchesCategory && matchesPassengers && (!availableOnly || car.id !== 3);
    })
    .sort((first, second) => {
      if (sort === "Price Low to High") return first.price - second.price;
      if (sort === "Price High to Low") return second.price - first.price;
      return 0;
    });

  return (
    <div className="browse-page">
      <div className="page-intro browse-intro">
        <p className="eyebrow">EXPLORE OUR FLEET</p>
        <h1>Browse Cars</h1>
        <p className="muted">Explore our fleet of premium vehicles.</p>
      </div>
      <div className="browse-toolbar">
        <label className="browse-search">
          <span aria-hidden="true"><Search /></span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name or brand..." aria-label="Search by name or brand" />
        </label>
        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort cars">
          <option>Recommended</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Most Popular</option>
        </select>
      </div>
      <div className="category-pills" aria-label="Vehicle categories">
        {categories.map((item) => (
          <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <div className="browse-content">
        <aside className="browse-filters">
          <h2><SlidersHorizontal /> Filters</h2>
          <FilterTitle icon={<CarFront />}>Availability</FilterTitle>
          <label className="filter-check"><input type="checkbox" checked={availableOnly} onChange={(event) => setAvailableOnly(event.target.checked)} />Available only</label>
          <FilterTitle icon={<CarFront />}>Category</FilterTitle>
          {categories.slice(1).map((item) => <label className="filter-radio" key={item}><input type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} />{item}</label>)}
          <FilterTitle icon={<SlidersHorizontal />}>Transmission</FilterTitle>
          <label className="filter-radio"><input type="radio" name="transmission" defaultChecked />All</label>
          <label className="filter-radio"><input type="radio" name="transmission" />Automatic</label>
          <label className="filter-radio"><input type="radio" name="transmission" />Manual</label>
          <FilterTitle icon={<Fuel />}>Fuel type</FilterTitle>
          <label className="filter-radio"><input type="radio" name="fuel" defaultChecked />All</label>
          <label className="filter-radio"><input type="radio" name="fuel" />Gasoline</label>
          <label className="filter-radio"><input type="radio" name="fuel" />Diesel</label>
          <FilterTitle icon={<Users />}>Min. passengers</FilterTitle>
          <div className="passenger-options">{["Any", "2", "4", "7"].map((item) => <button className={passengers === item ? "selected" : ""} key={item} onClick={() => setPassengers(item)}>{item === "Any" ? item : `${item}+`}</button>)}</div>
        </aside>
        <section className="browse-results" aria-live="polite">
          <p className="result-count">Showing <strong>{filteredCars.length}</strong> of {cars.length} vehicles</p>
          {filteredCars.length > 0 ? <div className="browse-grid">{filteredCars.map((car) => <VehicleCard key={car.id} car={car} onBook={requestBooking} onDetails={openCar} saved={favoriteIds.includes(car.id)} onSave={toggleFavorite} />)}</div> : <div className="empty-state"><strong>No vehicles found</strong><p>Try changing your search or filters.</p></div>}
        </section>
      </div>
    </div>
  );
}

function FilterTitle({ children, icon }) {
  return <h3 className="filter-title">{icon}{children}</h3>;
}
