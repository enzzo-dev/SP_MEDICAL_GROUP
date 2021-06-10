import { Link } from 'react-router-dom';


export function toggleMenu(event){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

export function header(){
    
    return(
        <header className="App-header">
            <div class="logo"><h1>SPMG</h1></div>
            <div class="menu-desk">
                <nav id="nav" class="menu-btn">
                    <button id="btn-mobile" onClick={() => toggleMenu()}>
                        <span id="hamburguer"></span>
                    </button>
                    <ul class="menu">
                       <Link className="a" to="/">Home</Link>
                        <a href="#sobre-nos">Sobre nós</a>
                        <a href="#contato">Contato</a>
                        <a href="#galeria">Galeria</a>
                       <Link className="a" to="/login">Login</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )  
}

export default header