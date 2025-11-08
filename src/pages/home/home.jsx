import logo from '../../assets/logo.svg'
import barbearia from '../../assets/images.svg'
import corte1 from '../../assets/corte1.png'
import corte2 from '../../assets/corte2.png'
import corte3 from '../../assets/corte3.png'

import '../../css/home.css'
import '../../css/_layout.scss'
import { Footer } from '../../components/footer/footer'
import { Link } from 'react-router-dom'


function Home(){

    return(
        <div>
            <div className="bg-home">
                <header>
                    <nav className="header-content container">
                        <div className="header-icons" data-aos="fade-down">
                            <a href="https://www.linkedin.com/in/felipe-amorim-04a6172a5/">
                                <i className="fa-brands fa-linkedin fa-2x"></i>
                            </a>

                            <a href="https://github.com/famorim-dev">
                                <i className="fa-brands fa-github fa-2x"></i>
                            </a>
                            
                            <a href="app/admin">
                                <i className="fa-solid fa-user fa-2x"></i>
                            </a>

                        </div>

                    <div className="header-logo" data-aos="fade-up" data-aos-delay="300">
                        <img
                        data-aos="flip-up"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                        src={logo} 
                        alt="logo da barbearia" />
                    </div>
                    
                    <div>
                        <Link to={"/app/agendar"}>
                            <button className="header-button">
                                Agendar horário
                            </button>
                        </Link>
                    </div>

                    </nav>

                    <main className="hero-container" data-aos="fade-up" data-aos-delay="400">
                        <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
                        <p>Horário de funcionamento: 09:00 ás 19:00</p>
                        <a href="/app/agendar" className="button-contact">
                            Agendar horário
                        </a>
                    </main>

                </header>
            </div>

            <section className="about">
                <div className="container about-content">
                    <div data-aos="zoom-in" data-aos-delay="100">
                        <img
                        src={barbearia} 
                        alt="imagem sobre a barbearia"/>
                    </div>

                    <div className="about-description" data-aos="zoom-out-left" data-aos-delay="250">
                        <h2>Sobre</h2>
                        <p>Nossa barbearia oferece serviços de corte de cabelo, barba e cuidados masculinos, com atendimento personalizado em um ambiente moderno e descontraído. Nosso objetivo é proporcionar estilo e bem-estar para cada cliente, com atenção aos detalhes e produtos de alta qualidade.</p>
                        <p>Horário de funcionamento: <strong>09:00</strong> ás <strong>19:00</strong></p>
                    </div>

                </div>
            </section>

            <section className="services">
                <div className="services-content">
                    <h2>Serviços</h2>
                    <p>Oferecemos serviços de corte de cabelo, barba e cuidados masculinos em um ambiente moderno e acolhedor. Nossa equipe é especializada em cortes clássicos e contemporâneos, além de oferecer tratamentos de barba com toalha quente e finalizações personalizadas para garantir que você saia daqui com estilo. Agende seu horário e desfrute de uma experiência única e relaxante!</p>
                </div>
                <section className="haircuts">
                            <div className="haircut" data-aos="fade-up" data-aos-delay="150">
                                    <img
                                    src={corte1}
                                    alt="corte de cabelo"/>
                                <div className="haircut-info">
                                    <strong>Corte</strong>
                                    <button>R$30,00</button>
                                </div>
                            </div>

                            <div className="haircut" data-aos="fade-up" data-aos-delay="250">
                                <img
                                src={corte2}
                                alt="barba completa"/>
                            <div className="haircut-info">
                                <strong>Barba Completa</strong>
                                <button>R$15,00</button>
                            </div>
                        </div>

                        <div className="haircut" data-aos="fade-up" data-aos-delay="350">
                            <img
                            src={corte3}
                            alt="corte + barba"/>
                        <div className="haircut-info">
                            <strong>Corte + Barba</strong>
                            <button>R$40,00</button>
                        </div>
                    </div>
                </section>
            </section>

            <div className="services">
                <h1>Venha Conhecer</h1>
            </div>

            <iframe 
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14641.261500814106!2d-46.491057149999996!3d-23.449085949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1729056030956!5m2!1spt-BR!2sbr" height="450" style={{ border: 0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <Footer/>
        </div>
    )
}

export default Home