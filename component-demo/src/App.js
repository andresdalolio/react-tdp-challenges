import './App.css';
import ButtonCSS from './ButtonCSS';
import ButtonReactStyle from './ButtonReactStyle';
import ButtonSassStyle from './ButtonSassStyle';

function App() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const buttonHoverStyle = {
    backgroundColor: 'darkblue',
  };
  const buttonActiveStyle = {
    backgroundColor: 'lightblue',
  };
  return (
    <div className="App">
      <div>
        <h1>Button Style Plain CSS</h1>
        <ButtonCSS>Button CSS</ButtonCSS>
      </div>
      <hr></hr>
      <div>
        <h1>Button React Styled Components</h1>
        <ButtonReactStyle style={buttonStyle} buttonHoverStyle={buttonHoverStyle} buttonActiveStyle={buttonActiveStyle}>Button React Style</ButtonReactStyle>
      </div>
      <hr></hr>
      <div>
        <h1>Button CSS Modules SASS</h1>
        <ButtonSassStyle>ButtonSassStyle</ButtonSassStyle>
      </div>
    </div>
  );
}

export default App;
