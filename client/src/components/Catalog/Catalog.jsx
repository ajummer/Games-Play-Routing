import { useState, useEffect } from "react";
import * as gameService from "../../services/gameService.js";
import SingleGame from "../SingleGame/SingleGame.jsx";
export default function Catalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);
  console.log(games);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* Display div: with information about every game (if any) */}
    {games.map(game => (
      <SingleGame game={game} key={game._id}/>
    ))}
  
      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    
    </section>
  );
}
