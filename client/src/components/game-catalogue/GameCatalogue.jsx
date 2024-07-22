import { useEffect, useState } from "react";
import * as gamesAPI from "../../api/games-api";
import GameListItem from "./game-list-item/GameListItem";

export default function GameCatalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then((result) => setGames(result));
    }, []);

    return (
      // <!-- Catalogue -->
      <section id="catalog-page">
        <h1>All Games</h1>
        {/* <!-- Display div: with information about every game (if any) --> */}

        {games.length > 0 ? (
          games.map((game) => <GameListItem key={game._id} {...game} />)
        ) : (
          <h3 className="no-articles">No articles yet</h3>
        )}
        {/* <!-- Display paragraph: If there is no games  --> */}
      </section>
    );
}