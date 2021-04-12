import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <h2>Discords</h2>
            <Sidebar />
            <Chat />
        </div>
    );
}

export default App;
