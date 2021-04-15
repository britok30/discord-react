import React, { useEffect } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //the user is logged in
            } else {
                //the user is logged out
            }
        });
    }, []);

    return (
        <div className="app">
            {user ? (
                <>
                    <Sidebar />
                    <Chat />
                </>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;
