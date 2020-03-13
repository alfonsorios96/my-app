import React from 'react'; // ES Modules (import, export)
import logo from './logo.svg';
import './App.css';

import Dumb from './components/dumb';
import Smart from './components/smart';

function App() {

    const friends = ['Hugo', 'Paco', 'Luis'];
    const other_friends = ['Ramirito', 'Daniel' ];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <Smart friends={friends}/>
            <Smart friends={other_friends}/>
            <Dumb/>
        </div>
    );
}

export default App;
