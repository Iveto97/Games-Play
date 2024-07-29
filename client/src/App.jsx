import {Routes, Route} from 'react-router-dom';

import { useState } from 'react';

import Header from "./components/header/Header"
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalogue from "./components/game-catalogue/GameCatalogue";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import { AuthContext } from './contexts/AuthContext';

function App() {
const [authState, setAuthState] = useState({});

const changeAuthSate = (state) => {
	setAuthState(state);
}

const contextData = {
	email: authState.email,
	accessToken: authState.accessToken,
	isAuthenticated: !!authState.email,
	changeAuthSate,
};

  return (
    <AuthContext.Provider value={contextData}>
      <div id="box">
        <Header />

        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games" element={<GameCatalogue />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />

            <Route path="/game-create" element={<GameCreate />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}


export default App