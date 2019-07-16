import React from 'react';
import './App.scss';
import SayHelloContainer from './SayHelloContainer';

class App extends React.Component {
    public render(): object {
        const sayHello = new SayHelloContainer();
        return (<div className="app">{sayHello.helloPhrase}</div>);
    }
}

export default App;
