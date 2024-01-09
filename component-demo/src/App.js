import './App.css';
import MonocleTravel from './components/MonocleTravel';

function App() {
  const data = {
    serie: 27,
    title: "London",
    categories: ['Need to know', 'Hotels', 'Food and drink', 'Retail', 'Essays', 'Culture', 'Design and architecture', 'Sport and Fitness', 'Walks', 'Resources'],
    subjects: ['Jazz. Comedy. Bars', "Bookshops. Baseball, Beaches", 'Homeware. Architecture. Art'],
    image: '/images/monalisa.jpeg',
    footer: "All aboard! Join us for a tour of these cities 'outposts of good food, design, retail, and more. Let's go!'"
  };
  return (
    <div className="App">
      <MonocleTravel {...data}/>
    </div>
  );
}

export default App;
