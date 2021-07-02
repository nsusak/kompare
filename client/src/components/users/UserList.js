import React from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../actions";

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderList = () => {
        return (
            this.props.users[0] && this.props.users[0].map(user => {
                return (
                    <div className="item" key={user._id}>
                        <div className="ui right floated content">
                            <button onClick={() => this.deleteButtonClicked(user._id)} className="ui button negative">Delete</button>
                        </div>
                        <i className="large github middle aligned icon" />
                        <div className="content">
                            <a className="header">{`${user.name} ${user.surname}`}</a>
                            <div className="description">{user.email}</div>
                        </div>
                    </div>
                );
            })
        );

    }
    deleteButtonClicked = (id) => {
        this.props.deleteUser(id)
    }
    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: Object.values(state.users) };
};

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UserList);