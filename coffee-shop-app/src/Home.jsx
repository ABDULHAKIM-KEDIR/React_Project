import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">

    
      <nav className="navbar">
        <div className="left-section">
          <FontAwesomeIcon icon={faHome} className="home-icon" />
          <h1 className="shop-title">Enjoy Coffee Shop</h1>
        </div>

        <div className="right-section">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search coffee..." 
            className="search-bar" 
          />
          <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
        </div>
      </nav>

      
      <header className="hero">
        <div> 
          <h2>Welcome to Enjoy Coffee Shop</h2>
          <p>Enjoy the warmth of our shop and our coffee.<br></br> We are dedicated to providing the best coffee and a cozy atmosphere for our community.</p>
        </div>
      </header>

     
      <section className="menu">
        <h2>Menu</h2>
        <ul>
          <li>Buna — 30 birr</li>
          <li>Macchiato — 40 birr</li>
          <li>Spris — 45 birr</li>
          <li>Milk Tea — 40 birr</li>
          <li>Fetira — 50 birr</li>
          <li>Shay — 25 birr</li>
        </ul>
      </section>
     
      <footer className="footer">
          <p>© 2025 Enjoy Coffee Shop</p>
      </footer>
    </div>
  );
}

export default Home;