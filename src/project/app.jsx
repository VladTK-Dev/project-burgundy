import * as React from 'react';
import { render } from 'react-dom';
import { Header} from "./components/header/header.components.jsx";
import { PageNavBar } from "./components/header/header.components.jsx";
import { VacationBurgundy } from "./components/main/main.components.jsx";
import { AboutBurgundy } from "./components/main/main.components.jsx";
import { Wine } from "./components/main/wine.components.jsx";
import { Slider } from "./components/main/slider.components.jsx";
import { Footer } from "./components/footer/footer.components.jsx";


import "./styles/base.scss";

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <PageNavBar />
            <VacationBurgundy />
            <AboutBurgundy />
            <Wine />
            <Slider />
            <Footer />
        </div>
    }
}

render(<App />, document.querySelector('#app'));
