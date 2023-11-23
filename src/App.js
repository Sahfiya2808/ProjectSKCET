import React from 'react';
import Album from './Album';
import SignUp from './Signup';
import Signin from './Signin';
const func1 = () => {
    if(window.location.pathname === "/Album.js") {
        return <Album/>
    }
}
 const func2 = () => {
    if(window.location.pathname === "/Signin.js") {
        return <Signin/>
    }
 }
 const func3 = () => {
    if(window.location.pathname === "/") {
        return <SignUp/>
    }
 }
 const App = () => {
    return (
        <div className="ui container">
        {func1()}
        {func2()}
        {func3()}
        </div>
    )
 }
 export default App;