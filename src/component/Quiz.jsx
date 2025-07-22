import React, { useState, useEffect } from 'react';


// 50 sample questions (replace with your own)
const QUESTIONS = [
  // 1-10: Basic Science
  {
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Hydrogen", "Water", "Helium"],
    answer: 2
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Liver", "Heart", "Brain", "Lungs"],
    answer: 1
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Skin", "Liver", "Lungs"],
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: 0
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: 2
  },
  {
    question: "Which vitamin is produced when a person is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3
  },
  {
    question: "What type of animal is a frog?",
    options: ["Mammal", "Reptile", "Amphibian", "Bird"],
    answer: 2
  },

  // 11-20: English
  {
    question: "Which word is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: 1
  },
  {
    question: "What is the past tense of 'go'?",
    options: ["Go", "Goes", "Went", "Gone"],
    answer: 2
  },
  {
    question: "Which is a noun?",
    options: ["Run", "Blue", "Cat", "Quickly"],
    answer: 2
  },
  {
    question: "Select the correct spelling:",
    options: ["Recieve", "Receive", "Recive", "Receeve"],
    answer: 1
  },
  {
    question: "What is the antonym of 'hot'?",
    options: ["Warm", "Cold", "Cool", "Boiling"],
    answer: 1
  },
  {
    question: "Which word is an adjective?",
    options: ["Quickly", "Beautiful", "Run", "Sing"],
    answer: 1
  },
  {
    question: "Which sentence is correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She don't likes apples."
    ],
    answer: 2
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 1
  },
  {
    question: "Which is a pronoun?",
    options: ["Quick", "He", "Jump", "Red"],
    answer: 1
  },
  {
    question: "Choose the correct article: ___ apple",
    options: ["A", "An", "The", "No article"],
    answer: 1
  },

  // 21-30: Entertainment
  {
    question: "Who is known as the King of Pop?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
    answer: 1
  },
  {
    question: "Which movie features a ship called the Titanic?",
    options: ["Titanic", "Poseidon", "Jaws", "Pirates of the Caribbean"],
    answer: 0
  },
  {
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    answer: 2
  },
  {
    question: "Which animated film features a talking snowman named Olaf?",
    options: ["Moana", "Frozen", "Tangled", "Brave"],
    answer: 1
  },
  {
    question: "Which singer is famous for the song 'Shape of You'?",
    options: ["Ed Sheeran", "Justin Bieber", "Adele", "Drake"],
    answer: 0
  },
  {
    question: "What is the name of Harry Potter's pet owl?",
    options: ["Crookshanks", "Hedwig", "Scabbers", "Fawkes"],
    answer: 1
  },
  {
    question: "Which movie is about toys that come to life?",
    options: ["Toy Story", "Cars", "Monsters, Inc.", "Finding Nemo"],
    answer: 0
  },
  {
    question: "Who is the main character in 'The Simpsons'?",
    options: ["Bart", "Lisa", "Homer", "Marge"],
    answer: 2
  },
  {
    question: "Which superhero is also known as the Caped Crusader?",
    options: ["Superman", "Spider-Man", "Batman", "Iron Man"],
    answer: 2
  },
  {
    question: "Which movie series features the character Jack Sparrow?",
    options: ["Pirates of the Caribbean", "Indiana Jones", "Star Wars", "Lord of the Rings"],
    answer: 0
  },

  // 31-40: Games
  {
    question: "Which game features the character Mario?",
    options: ["Sonic", "Zelda", "Mario Kart", "Pac-Man"],
    answer: 2
  },
  {
    question: "What is the name of the board game with hotels and money?",
    options: ["Chess", "Monopoly", "Scrabble", "Clue"],
    answer: 1
  },
  {
    question: "Which sport is played at Wimbledon?",
    options: ["Football", "Tennis", "Basketball", "Golf"],
    answer: 1
  },
  {
    question: "In chess, what piece moves in an L-shape?",
    options: ["Bishop", "Rook", "Knight", "Pawn"],
    answer: 2
  },
  {
    question: "Which card game involves making pairs and books?",
    options: ["Go Fish", "Poker", "Bridge", "Uno"],
    answer: 0
  },
  {
    question: "What is the highest possible score in a single frame of bowling?",
    options: ["20", "30", "40", "50"],
    answer: 1
  },
  {
    question: "Which video game involves building with blocks?",
    options: ["Fortnite", "Minecraft", "Roblox", "Among Us"],
    answer: 1
  },
  {
    question: "What color are the four ghosts in Pac-Man?",
    options: ["Red, Blue, Pink, Orange", "Red, Green, Blue, Yellow", "Blue, Yellow, Orange, Purple", "Pink, Green, Red, Blue"],
    answer: 0
  },
  {
    question: "Which game uses a 3x3 grid and Xs and Os?",
    options: ["Chess", "Tic-Tac-Toe", "Checkers", "Sudoku"],
    answer: 1
  },
  {
    question: "What is the name of the detective in the board game Clue?",
    options: ["Miss Scarlet", "Colonel Mustard", "Professor Plum", "There is no detective"],
    answer: 3
  },

  // 41-50: Basic Planets
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    answer: 1
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 1
  },
  {
    question: "What is the third planet from the Sun?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answer: 2
  },
  {
    question: "Which planet is the largest in the Solar System?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: 1
  },
  {
    question: "Which planet is known as the Earth's twin?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    answer: 0
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2
  },
  {
    question: "Which planet is farthest from the Sun?",
    options: ["Neptune", "Pluto", "Uranus", "Saturn"],
    answer: 0
  },
  {
    question: "Which planet is famous for its Great Red Spot?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: 1
  },
  {
    question: "Which planet is called the Blue Planet?",
    options: ["Earth", "Neptune", "Uranus", "Mars"],
    answer: 0
  },
  {
    question: "Which planet is the smallest in the Solar System?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    answer: 0
  }
];


const TOTAL_TIME = 90; // 1 minute 30 seconds

function QuizCard() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(TOTAL_TIME);
  const [showResult, setShowResult] = useState(false);

  // Timer logic (only runs when started)
  useEffect(() => {
    if (!started || showResult) return;
    if (timer === 0) {
      setShowResult(true);
      return;
    }
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, showResult, started]);

  useEffect(() => {
    setSelected(null);
  }, [current]);

  function handleSelect(optionIdx) {
    setSelected(optionIdx);
  }

  function handleNext() {
    setAnswers(prev => [
      ...prev,
      selected !== null ? selected : null
    ]);
    if (current < QUESTIONS.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setShowResult(true);
    }
  }

  const progress = ((current) / QUESTIONS.length) * 100;
  const correctCount = answers.filter(
    (ans, i) => ans === QUESTIONS[i].answer
  ).length;
  const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
  const seconds = String(timer % 60).padStart(2, '0');
  const timerDisplay = `${minutes}:${seconds}`;

  // Start Screen
  if (!started) {
    return (
      <div className="quiz-page-wrapper">
        <div className="quiz-background" />
        <div className="quiz-card">
          <h1 className="quiz-title">🚀 Ultimate Quiz Challenge</h1>
          <p style={{ fontSize: "2rem", margin: "2rem 0" }}>
            Test your knowledge across Science, English, Entertainment, Games, and Planets!
          </p>
          <button
            className="next-btn"
            style={{ fontSize: "2.2rem", padding: "2rem 5rem", borderRadius: "38px" }}
            onClick={() => setStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-background">
        <div className="quiz-page-wrapper">
          <div className="quiz-result-card">
            <h2>🎉 Quiz Complete!</h2>
            <div className="result-bar">
              <div
                className="result-bar-fill"
                style={{
                  width: `${(correctCount / QUESTIONS.length) * 100}%`,
                  background: 'linear-gradient(90deg, #bb9457, #6f1d1b)'
                }}
              />
            </div>
            <p>
              You scored <strong>{correctCount}</strong> out of <strong>{QUESTIONS.length}</strong>
            </p>
            <p>{timer === 0 ? "⏰ Time's up!" : ""}</p>
            <p>
              {correctCount === QUESTIONS.length
                ? '🏆 Perfect Score! Amazing!'
                : correctCount > QUESTIONS.length * 0.7
                  ? '👏 Great job!'
                  : 'Keep practicing!'}
            </p>
            <button className="next-btn" onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[current];

  return (
    <div className="quiz-background">
      <div className="quiz-page-wrapper">
        <div className="quiz-card">
          <h1 className="quiz-title">🚀 Ultimate Quiz Challenge</h1>
          <div className="quiz-header">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="timer">⏰ {timerDisplay}</div>
            <div className="question-count">
              Question {current + 1} / {QUESTIONS.length}
            </div>
          </div>
          <h3 className="question">{q.question}</h3>
          <div className="options">
            {q.options.map((opt, idx) => (
              <button
                key={opt}
                className={`option-btn${selected === idx ? ' selected' : ''}`}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selected === null}
          >
            {current === QUESTIONS.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;