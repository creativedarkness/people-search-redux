import React from 'react';
import { connect } from 'react-redux';
import "./Profile.css";

const Profile = (props) => {

    return (
        <div className="profile">
            <h1>{props.selectedProfile.name}</h1>
            <ul>
                <li className="listItem">City: {props.selectedProfile.city}</li>
                <li className="listItem">Hobbies: {props.selectedProfile.hobbies}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedProfile: state.selectedProfile,
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Profile);