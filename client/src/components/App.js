import React from "react";
import { Router, Route } from "react-router-dom";
import UserCreate from "./users/UserCreate";
import UserDelete from "./users/UserDelete";
import UserList from "./users/UserList";
import Header from "./Header";
import history from "../history";


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <div>
                    <Route path="/" exact component={UserList} />
                    <Route path="/users/new" exact component={UserCreate} />
                    <Route path="/users/delete" exact component={UserDelete} />
                </div>
            </Router>
        </div>
    )
}

export default App;