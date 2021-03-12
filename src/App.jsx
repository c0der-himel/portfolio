import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Success from './components/Success';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Hero />
                <AboutMe />
                <Skills />
                <Portfolio />
                <ContactForm />
                <Switch>
                    <Route exact path="/success">
                        <Success />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
