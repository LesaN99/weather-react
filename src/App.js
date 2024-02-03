
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity= "Johannesburg" />
      <footer>
          This project was coded by
          <a href="https://github.com/LesaN99" target="_blank" rel="noreferrer"> Palesa Ndlovu </a> and is
          <a href="https://github.com/LesaN99/react-weather" target="_blank"  rel="noreferrer"> on GitHub</a> and
          <a href="https://dulcet-fairy-9dab11.netlify.app/" target="_blank"  rel="noreferrer"> hosted on Netlify</a>
        </footer>
    </div>
    </div>
  );
}
