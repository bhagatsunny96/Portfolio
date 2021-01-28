import './App.css';
import './index.css';
//Components
import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide"
import Container from 'react-bootstrap/Container'
import Skills from './pages/skills/skills.component'
import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from "./components/footer/footer.component";
const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Mynavbar/>
      <MyCarousel/>
      <TitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
            <Fade duration={500}>
              <Skills/>
            </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
            <Slide duration={500}>
              <ProjectTimeline/>
            </Slide>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
