import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();

  const [quizData, setQuizData] = useState({ language: false, sql: false, html: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData((prevData) => ({
      ...prevData,
      [name]: value === 'true',
    }));
  };

  const goToWelcomePage = () => {
    const allCorrect = Object.values(quizData).every((value) => value === true);
    if (allCorrect) {
      navigate('/welcome'); // Navigate to the Welcome page
    } else {
      alert('You did not qualify for the next round...try again');
    }
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <p>Answer the following questions to qualify for the next round.</p>
        <h2>What language is React based on?</h2>
        <form onChange={handleChange}>
          <ul>
            <input type="radio" name="language" /> Java
            <input type="radio" name="language" /> Python
            <input type="radio" name="language" value={true} /> JavaScript
          </ul>
          <h2>What is SQL</h2>
          <ul>
            <input type="radio" name="sql" value={true} /> Database language
            <input type="radio" name="sql" /> Frontend language
            <input type="radio" name="sql" /> Backend language
          </ul>
          <h2>What is the full form of HTML?</h2>
          <ul>
            <input type="radio" name="html" value={true} /> Hyper Text Markup Language
            <input type="radio" name="html" /> Hyperlinks and Text Markup Language
            <input type="radio" name="html" /> Home Tool Markup Language
          </ul>
        </form>
        <button onClick={goToWelcomePage}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  