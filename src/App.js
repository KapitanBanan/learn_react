import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            {/*<Profile />*/}
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.messagePage}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
