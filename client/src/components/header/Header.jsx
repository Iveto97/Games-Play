import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {

  const { isAuthenticated } = useAuthContext();

    return (
      <header>
        {/* <!-- Navigation --> */}
        <h1>
          <Link className="home" to="/">
            GamesPlay
          </Link>
        </h1>
        <nav>
          <Link to="/games">All games</Link>
          {isAuthenticated ? (
            <div id="user">
              <Link to="/game-create">Create Game</Link>
              <Link href="/logout">Logout</Link>
            </div>
          ) : (
            <div id="guest">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </nav>
      </header>
    );
}