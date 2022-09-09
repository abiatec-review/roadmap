import {BackTop} from "antd";

import {Header} from "./components/Header";
import {GaxonMenu} from "./components/GaxonMenu";
import {WiedlyMenu} from "./components/WiedlyMenu";
import {VideoBlock} from "./components/VideoBlock";
import {Layouts} from "./components/Layouts";
import {Prefooter} from "./components/Prefooter";
import {Footer} from "./components/Footer";

import './app.scss'

function App() {
  return (
    <div className="App">
        <Header />
        <GaxonMenu />
        <WiedlyMenu />
        <VideoBlock />
        <Layouts />
        <Prefooter />
        <Footer />
        <BackTop>
            <img src={'https://g-axon.com/wp-content/themes/twentysixteen-child/images/backtotop.png'} className={'up-btn'} />
        </BackTop>
    </div>
  );
}

export default App;
