import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserCreate from "./users/UserCreate";
import UserDelete from "./users/UserDelete";
import UserList from "./users/UserList";
import Header from "./Header";


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={UserList} />
                    <Route path="/users/new" exact component={UserCreate} />
                    <Route path="/users/delete" exact component={UserDelete} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;