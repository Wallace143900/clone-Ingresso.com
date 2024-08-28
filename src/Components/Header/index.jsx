import imagem from "../../../public/logoIngresso.svg";
import { IoLocationOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuUserCircle2 } from "react-icons/lu";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div>
                <Link to="/" ><img src={imagem} alt="Logo Ingresso.com" /></Link>
                <button> <IoLocationOutline /> Rio de Janeiro </button>
                <div>
                    <button><FaMagnifyingGlass /></button>
                    <button><LuUserCircle2 /></button>
                    <button><BsQuestionCircle /></button>
                </div>
                <nav>
                    <ul>
                        <Link to="/filmes">Filmes</Link>
                        <Link to="/cinemas">Cinemas</Link>
                        <Link to="/eventos">Eventos</Link>
                        <Link to="/noticias">Notícias</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}