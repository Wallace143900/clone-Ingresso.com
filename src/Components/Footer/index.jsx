import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import visa from "../../../public/visa.jpg";
import masterCard from "../../../public/mastercard.png";
import cielo from "../../../public/elo.png";
import aura from "../../../public/aura.png";
import amex from "../../../public/amex.png";
import hiperCard from "../../../public/hipercard.jpg";
import pagBank from "../../../public/pagBank.png";
import styles from "./styles.module.scss";

export const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <h3>Menu</h3>
                    <div>
                        <Link to="/filmes">Filmes</Link>
                        <Link to="/cinemas">Cinemas</Link>
                    </div>
                </div>
                <div>
                    <h3>Institucional</h3>
                    <div>
                        <a href="">Quem Somos</a>
                        <a href="">Assessoria de Impressa</a>
                        <a href="">Vale-Presente Corporativo</a>
                        <a href="">Ingresso.com atende</a>
                        <a href="">movieID.com</a>
                        <a href="">Faça parte do time</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Políticas</h3>
                        <a href="">Privacidade e Segurança</a>
                        <a href="">Meia-entrada</a>
                        <a href="">Trocas e Cancelamentos</a>
                        <a href="">Leis Estaduais e Municipais</a>
                        <a href="">Termos de Uso</a>
                    </div>
                </div>
                <div>
                    <h3>Redes Socias</h3>
                    <div>
                        <a href=""><FaFacebookF /> Facebook</a>
                        <a href=""><FiYoutube /> Youtube</a>
                        <a href=""><SiInstagram /> Instagram</a>
                        <a href=""><FaLinkedinIn /> LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h3>Precisa de Ajuda?</h3>
                    <div>
                        <a href="">Atendimento</a>
                        <a href="">Cancelar Pedido</a>
                        <a href="">Sites ou e-mails falsos</a>
                        <a href="">Procon-RJ</a>
                    </div>
                </div>
                <div>
                    <h3>Venda ingressos online</h3>
                    <p>Buscando parcerias ou soluções para o seu evento?</p>
                    <button>Fale conosco</button>
                </div>
            </section>
            <section>
                <h4>Formas de Pagamento</h4>
                <div>
                    <h3>Crédito</h3>
                    <div>
                        <img src={visa} alt="Visa" />
                        <img src={masterCard} alt="MasterCard" />
                        <img src={cielo} alt="Elo" />
                        <img src={aura} alt="Aura" />
                        <img src={amex} alt="American Express" />
                        <img src={hiperCard} alt="Hipercard" className={styles.hipercard} />
                        <img src={pagBank} alt="Pag Bank" className={styles.pagBank} />
                    </div>
                </div>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3></h3>
                </div>
            </section>
        </footer>
    )
}