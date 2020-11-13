import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/banner";
import gsap from "gsap";
import Cases from "./components/cases";
import Header from "./components/header";
import IntroOverlay from "./components/introOverlay";
import "./styles/App.scss";
import { AnimatePresence } from "framer-motion";
import DetailsPage from "./components/detailsPage";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import ArchDesing from "./components/archDesing";
import GraphicDesing from "./components/graphicDesing";

function App() {
  const [animationStarted, setanimationStarted] = useState(true);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", 0, { css: { display: "none" } })
      .from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
    setTimeout(() => {
      setanimationStarted(false);
    }, 8000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                  {animationStarted && <IntroOverlay />}
                  <Header />
                  <Banner />
                  <Cases />
                </Route>
                <Route exact path={`/model/:id`} component={DetailsPage} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/archi-design" component={ArchDesing} />
                <Route exact path="/graphic-design" component={GraphicDesing} />
                <Route
                  path="/instagram"
                  component={() => {
                    window.location.href =
                      "https://www.instagram.com/monika.jokiel/";
                    return null;
                  }}
                />
                <Route
                  path="/linkedin"
                  component={() => {
                    window.location.href =
                      "https://www.linkedin.com/in/monika-jokiel-44783018b/";
                    return null;
                  }}
                />
                <Route
                  path="/dribbble"
                  component={() => {
                    window.location.href = "https://dribbble.com/";
                    return null;
                  }}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
