import { useCallback, useState, memo } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(0);
  const [paragraph, setParagraph] = useState("");

  const generateParagraph = useCallback(() => {
    const words = ['Lorem', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'];
    const wordLimit = input;
    const para = new Array(wordLimit).fill().map(() => words[Math.floor(Math.random() * words.length)]).join(" ");
    setParagraph(para);
  }, [input]);

  return (
    <div className="app-container">
      <div className="heading-section">
        <h1>Paragraph Generator:</h1>
        <div className="input-section">
          <input type="text" className="word-input" placeholder="Enter Number of words" onChange={(e) => setInput(Number(e.target.value))} />
          <button className="generate-button" onClick={generateParagraph}> Generate </button>
          <div className="paragraph-section"> {paragraph && <Paragraph para={paragraph} />} </div>
        </div>
      </div>
    </div>
  );
}

const Paragraph = memo(({ para }) => (
  <div className="wrapped-paragraph">
    {para}
  </div>
));

export default App;