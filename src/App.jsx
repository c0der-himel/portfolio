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
import Details from './components/Details';
import PageNotFound from './components/PageNotFound';
import DetailsCar from './components/DetailsCar';
import DetailsDoc from './components/DetailsDoc';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <AboutMe />
          <Skills />
//           <Experience />
          <Portfolio />
          <ContactForm />
        </Route>
        <Route exact path="/home">
          <Hero />
          <AboutMe />
          <Skills />
//           <Experience />
          <Portfolio />
          <ContactForm />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/detailscar">
          <DetailsCar />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/detailsdoc">
          <DetailsDoc />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
