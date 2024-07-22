import {Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header"
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalogue from "./components/game-catalogue/GameCatalogue";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";

function App() {

  return (
    <div id="box">
      <Header />

      {/* <!-- Main Content --> */}
        <main id="main-content">
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games" element={<GameCatalogue />} />
            <Route path="/games/:gameId" element={<GameDetails />} />

            <Route path="/game-create" element={<GameCreate />} />
           </Routes>
        </main>
    </div>
  );
}


export default App