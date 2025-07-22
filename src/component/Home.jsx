import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-background">
      <div className="home-container">
        <div className="content-overlay">
          <h1>Welcome to the Quiz!</h1>
          <button 
            onClick={() => navigate('/quiz')}
            className='start-button'
          >
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
