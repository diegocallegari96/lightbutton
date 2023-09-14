import React from 'react';
import './App.css';

function App() {
    const [light, setLight] = React.useState(false)
    const toggleLight = () => {
        setLight(!light);
    };
    console.log(light)

    return (
        <main className={light === true ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button"
                        onClick={toggleLight}
                >{light === true ? "Turn off" : "Turn on"}</button>
            </section>
        </main>
    );
}

export default App;
