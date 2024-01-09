import './MonocleTravel.css';
import logo from './../logo.svg';

function MonocleTravel({serie, title, categories, subjects, image, footer}) {
  return (
    <div className="monocle-travel">
      <section className="header">
        <p>The <span className="sub1">Monocle</span> <span className="sub2">Travel Guide Series</span></p>
        <div>
          <span className="series-number">{serie}</span>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </section>
      <section className="body">
        <h1>{title}</h1>
        <div className="categories">
          {categories.map(cat => (<div className="cat"><span className="icon">&nbsp;</span>{cat}</div>))}
        </div>
        <div className="subjects">
          {subjects.map(sub => <span className="subject">{sub}</span>)}
        </div>
        <div className="image">
          <img src={image} alt=""/>
        </div>
      </section>
      <section className="footer">
        <p>
          <span className="dots">...</span>
          {footer}
          <span className="dots">...</span>
        </p>
      </section>
    </div>
  );
}

export default MonocleTravel;
