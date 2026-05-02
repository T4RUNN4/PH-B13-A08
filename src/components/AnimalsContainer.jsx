"use client";
import AnimalCard from "@/components/AnimalCard";
import { useRef, useState } from "react";

export default function AnimalsContainer({ animals }) {
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };
  const [animalsData, setAnimalsData] = useState([...animals]);
  const [sort, setSort] = useState("default");

  const handleDefault = () => {
    setAnimalsData([...animals]);
    setSort("default");
    closeDropdown();
  };

  const handleHighToLow = () => {
    const sorted = [...animals].sort(
      (a, b) => Number(b.price) - Number(a.price),
    );
    setAnimalsData(sorted);
    setSort("highToLow");
    closeDropdown();
  };

  const handleLowToHigh = () => {
    const sorted = [...animals].sort(
      (a, b) => Number(a.price) - Number(b.price),
    );
    setAnimalsData(sorted);
    setSort("lowToHigh");
    closeDropdown();
  };

  return (
    <>
      <details
        ref={dropdownRef}
        className="dropdown mb-10 mt-4 items-self-start"
      >
        <summary className="btn m-1">Sort Animals</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li
            className={`${sort === "default" ? "text-red-600" : ""}`}
            onClick={handleDefault}
          >
            <a>Default</a>
          </li>
          <li
            className={`${sort === "highToLow" ? "text-red-600" : ""}`}
            onClick={handleHighToLow}
          >
            <a>Price: High &gt; Low</a>
          </li>
          <li
            className={`${sort === "lowToHigh" ? "text-red-600" : ""}`}
            onClick={handleLowToHigh}
          >
            <a>Price: Low &lt; High</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {animalsData.map((animal) => {
          return (
            <AnimalCard
              key={animal.id}
              name={animal.name}
              price={animal.price}
              img={animal.image}
              desc={animal.description}
              id={animal.id}
              featured={animal.isFeatured}
            />
          );
        })}
      </div>
    </>
  );
}
