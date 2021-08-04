import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Success from './components/Success';
import Experience from './components/Experience';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
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
