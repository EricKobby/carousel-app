import React, { useEffect, useState } from "react";
import { fetchImages } from "../services/image-services";
import Button  from "./Button";
import CarouselList from "./CarouselList";

function CarouselContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage] = useState(100);
  const [carouselItems, setCarousleItems] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await fetchImages(currentPage);
      setCarousleItems(response);
    }
    fetch();
  }, [currentPage]);

  const handleNextClick = (e: React.SyntheticEvent) => {
    if (currentPage < maxPage) setCurrentPage(currentPage + 1);
  };
  const handlePrevClick = (e: React.SyntheticEvent) => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="carousel-container">
      <Button
        text="&lsaquo;"
        className="prev-button"
        onClick={handlePrevClick}
        disabled={currentPage <= 1}
      />
      <CarouselList carouselItems={carouselItems} />
      <Button
        text="&rsaquo;"
        className="next-button"
        onClick={handleNextClick}
        disabled={currentPage >= maxPage}
      />
    </div>
  );
}
export default CarouselContainer;
