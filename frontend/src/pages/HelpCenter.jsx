import React, { useState, useEffect } from "react";
import HelpCard from "../components/HelpCard";
import Footer from "../components/Footer";
import HelpcenterScss from "./HelpCenter.module.scss";
import NavigationBar from "../components/NavigationBar";

export default function HelpCenter() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle card click
  const handleCardClick = (title) => {
    fetch(`http://localhost:5000/api/cards/${title}`)
      .then((response) => response.json())
      .then((data) => setSelectedCard(data))
      .catch((error) => console.error("Error fetching card details:", error));
  };

  // Close card details
  const closeCardDetails = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <NavigationBar />

      <section className={HelpcenterScss.hero_section_container}>
        <h1>How can we help?</h1>
        <div className={HelpcenterScss.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className={HelpcenterScss.searchIcon}><b> &rarr; </b></span>
        </div>
      </section>
      <section className={HelpcenterScss.card_container}>
        {filteredCards.map((card) => (
          <HelpCard
            key={card._id}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card.title)}
          />
        ))}
      </section>

      {/* Display details in a modal */}
      {selectedCard && (
        <div className={HelpcenterScss.modal}>
          <div className={HelpcenterScss.modalContent}>
            <span
              className={HelpcenterScss.closeButton}
              onClick={closeCardDetails}>
              &times;
            </span>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
