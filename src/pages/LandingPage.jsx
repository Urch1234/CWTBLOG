import { useNavigate } from 'react-router-dom';
import '../styles/index.css'

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    // Redirect to the main blog posts page
    navigate('/posts');
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the CWT Trading Blog</h1>
        <p>Your resource for trading tips, market analysis, and more.</p>
      </header>
      
      <main className="landing-main">
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We are a trading company dedicated to providing valuable insights into financial markets.
            Our blog covers a variety of topics related to trading, including tips, strategies, and expert analysis.
          </p>
        </section>

        <section className="start-blog">
          <h2>Start Exploring</h2>
          <button onClick={handleStart} className="start-button">
            View Latest Posts
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 Trading Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
