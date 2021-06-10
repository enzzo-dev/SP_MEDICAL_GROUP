import Header from './Components/header/header'
import Banner from '../src/assets/images/Banner.png'

import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <main>
          <div className="Banner">
            <img  src={Banner}></img>
            <div className="historia">
                <h2>Venha fazer história conosco!</h2>
            </div>
          </div>
          <div id="sobre-nos"className="Sobre">
            <h1>Sobre nós</h1>
            <div className="sobre-1">
                <div className="foto-1">

                </div>
                <div className="paragrafo-1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna dui, fringilla id lectus vestibulum, fermentum pulvinar ex. Vivamus vel pulvinar mi. Vivamus tristique, nibh quis condimentum porttitor, risus ex ornare erat, at maximus tellus risus ac est. Morbi semper, mauris nec lacinia consectetur, ipsum enim iaculis purus, at fringilla justo neque id augue. Vestibulum faucibus tellus id leo accumsan egestas. In tempor lacus in feugiat mattis. Pellentesque vestibulum augue lacus, ac iaculis ante blandit ut. Ut neque mauris, porttitor eget tincidunt quis, porttitor efficitur ante. Vivamus id libero quis velit ultricies mollis.</p>
                </div>
            </div>
            <div className="bar"></div>
            <div className="sobre-2">
                <div className="foto-2">

                </div>
                <div className="paragrafo-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna dui, fringilla id lectus vestibulum, fermentum pulvinar ex. Vivamus vel pulvinar mi. Vivamus tristique, nibh quis condimentum porttitor, risus ex ornare erat, at maximus tellus risus ac est. Morbi semper, mauris nec lacinia consectetur, ipsum enim iaculis purus, at fringilla justo neque id augue. Vestibulum faucibus tellus id leo accumsan egestas. In tempor lacus in feugiat mattis. Pellentesque vestibulum augue lacus, ac iaculis ante blandit ut. Ut neque mauris, porttitor eget tincidunt quis, porttitor efficitur ante. Vivamus id libero quis velit ultricies mollis.</p>
                  </div>
            </div>
          </div>
        </main>
    </div>   
  );
}

export default App;

