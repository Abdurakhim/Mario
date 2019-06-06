import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
//HOC
import { firestoreConnect } from "react-redux-firebase";
//composing hoc's
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // Now I am creating projects property inside return function

    //this property is getting the state from projects property located in a  --projectsReducer--
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

//connect is 1st hoc(higher order component)
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
