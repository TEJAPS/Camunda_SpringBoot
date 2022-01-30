import React, { Component } from "react";
import Footer from "../Footer";
import cockpit from "../../assets/cockpit.png";
import admin from "../../assets/admin.png";
import tasklist from "../../assets/tasklist.png";
import { Link } from "react-router-dom";
import cockpiticon from "../../assets/cockpiticon.png";
import profileicon from "../../assets/profileicon.svg";

export default class HomepageIndexComponent extends Component {
  render() {
    return (
      // <BrowserRouter>
      <div class="homepage">
        <header class="homepageheader">
          <ul id="headerleft">
            <li>
              <img src={cockpiticon} />
            </li>
            <li class="alignselfcenter">
              <h3 class="margin0">Camunda Welcome</h3>
            </li>
          </ul>
          <ul id="headerright">
            <li>
              <div class="dropdown">
                <span>
                  <img src={profileicon} /> teja ps
                </span>
                <div class="dropdown-content">
                  <p>
                    <Link to="/">Log out</Link>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </header>
        <div class="homepagecontent">
          <div class="homepageapplicationlinksection flexgrow2">
            <div class="homepageapplicationsection whitebg margin2vh padding4vh">
              <div class="homepageapplicationsheader">
                <h3 class="bottomborderstyle1">Applications</h3>
              </div>
              <div class="homepageapplicationcontent">
                <div class="cockpitlink">
                  <img src={cockpit} alt="this is car image" />
                  <h3 class="textaligncenter">
                    <Link to="/cockpit">Cockpit</Link>
                  </h3>
                </div>
                <div class="tasklistlink">
                  <img src={tasklist} alt="this is car image" />
                  <h3 class="textaligncenter">
                    <Link to="/tasklist">Tasklist</Link>
                  </h3>
                </div>
                <div class="adminlink">
                  <img src={admin} alt="this is car image" />
                  <h3 class="textaligncenter">
                    <Link to="/admin">Admin</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div class="homepagelinksection whitebg margin2vh padding4vh">
              <div class="homepagelinksectionheader">
                <h3 class="bottomborderstyle1">Links</h3>
              </div>
              <div class="homepagelinksectioncontent">
                <a href="https://docs.camunda.org/manual/latest/webapps/">
                  Documentation
                </a>
                <br /> Camunda webapps user documentation
              </div>
            </div>
          </div>
          <div class="homepageprofilesection whitebg margin2vh padding4vh flexgrow1">
            <div class="homepageprofilesectionheader">
              <h3 class="bottomborderstyle1">Profile</h3>
            </div>
            <div class="homepagelinksectioncontent1">
              <h5>U U</h5>
              <p>u@localhost</p>
              <p>
                <a>Edit profile</a> <a>Change password</a>
              </p>
            </div>
            <div class="homepagelinksectioncontent2">
              <h5>Groups</h5>
              <ul>
                <li>camunda BPM adminsitrators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      // </BrowserRouter>
    );
  }
}
