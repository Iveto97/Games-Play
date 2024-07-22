import Header from "./components/header/Header"
import Home from "./components/home/Home";
import {Routes, Route} from 'react-router-dom'
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalogue from "./components/game-catalogue/GameCatalogue";
import GameCreate from "./components/game-create/GameCreate";

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
            <Route path="/game-create" element={<GameCreate />} />
           </Routes>
        </main>
    </div>
  );
}


export default App