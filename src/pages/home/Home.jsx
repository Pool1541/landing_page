import About from '../../components/about/About';
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import WhatsappButton from '../../components/whatsapp-button/WhatsappButton';

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Hero />
        <About />
        <Features />
      </Main>
      <WhatsappButton />
      <Footer />
    </>
  );
}
