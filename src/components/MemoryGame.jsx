import { useEffect, useState } from "react";

const initialEmojis = ["🔥", "⭐️", "🐶", "🐱", "🍕", "🎮", "📚", "✈️"];

function generateCards() {
  const copyEmojis = [...initialEmojis, ...initialEmojis].sort(
    () => Math.random() - 0.5,
  );
  const cards = copyEmojis.map((item, idx) => {
    return {
      id: idx,
      value: item,
      isFlipped: false,
    };
  });
  return cards;
}

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [isCardLock, setIsCardLock] = useState(false);

  const handleCard = (id) => {
    if (cards[id].isFlipped || isCardLock) return;
    const copyCards = [...cards];
    copyCards[id].isFlipped = true;
    setFlippedCards([...flippedCards, id]);
    setCards(copyCards);
  };

  const resetCards = () => {
    setCards(generateCards());
    setIsCardLock(false);
    setFlippedCards([])
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsCardLock(true);
      setTimeout(() => {
        const copyCards = [...cards];
        if (
          copyCards[flippedCards[0]].value !== copyCards[flippedCards[1]].value
        ) {
          copyCards[flippedCards[0]].isFlipped = false;
          copyCards[flippedCards[1]].isFlipped = false;
        }
        setCards(copyCards);
        setFlippedCards([]);
        setIsCardLock(false);
      }, 500);
    }
  }, [flippedCards]);

  return (
    <div>
      <h2>Memory Game</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 50px)",
          gap: 5,
        }}
      >
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              style={{
                height: 50,
                width: 50,
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: card.isFlipped ? "" : "lightgray",
              }}
              onClick={() => handleCard(card.id)}
            >
              {card.isFlipped && card.value}
            </div>
          );
        })}
      </div>
      <button onClick={resetCards} >Reset</button>
    </div>
  );
};

export default MemoryGame;
