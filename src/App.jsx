import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Portfolio />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
