import { Link } from "react-router-dom";

export default function Header() {
    return (
      <header>
        {/* <!-- Navigation --> */}
        <h1>
          <a className="home" href="#">
            GamesPlay
          </a>
        </h1>
        <nav>
          <Link to="/games">All games</Link>
          {/* <!-- Logged-in users --> */}
          <div id="user">
            <Link to="/game-create">Create Game</Link>
            <a href="#">Logout</a>
          </div>
          {/* <!-- Guest users --> */}
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
    );
}