import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { profileSearch } from "../../redux";
import "./PeopleSearch.css";


class PeopleSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfile: false,
        }
    }

    handleClick = (person) => {
    this.props.profileSearch(person)
    this.setState({
        showProfile: true,
    })
}

render() {console.log("RENDER FLAG", this.state.showProfile)
    if (this.state.showProfile === true) {
        console.log("TRUE")
        return (
            <Redirect to="/profile" />
        )
    }

    // set variables to arrow functiont to create HTML components
    return (
        <div>
            <input type="text" name="people" className="searchBox" />
            <br />
            <div className="peopleList">
                <ul>
                    {this.props.profiles.map((person, idx) => {
                        return <li className="listItem" key={idx} onClick={(event) => { this.handleClick(person) }}>{person.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
}


const mapStateToProps = (state) => ({
    profiles: state.profiles,
})

const mapDispatchToProps = (dispatch) => ({
    profileSearch: (profile) => dispatch(profileSearch(profile)),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleSearch);