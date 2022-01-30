import React, { Component } from "react";
import Footer from "../Footer";
import cockpiticon from "../../assets/cockpiticon.png";
import profileicon from "../../assets/profileicon.svg";
import attachmenticon from "../../assets/attachmenticon.svg";
import houseicon from "../../assets/houseicon.svg";
import startprocessicon from "../../assets/startprocessicon.svg";
import { Link } from "react-router-dom";

export default class AdminIndexComponent extends Component {
  render() {
    return (
      <div>
        <header class="homepageheader">
          <ul id="headerleft">
            <li>
              <img src={cockpiticon} />
            </li>
            <li class="alignselfcenter">
              <h3 class="margin0">Camunda Cockpit</h3>
            </li>
          </ul>
          <ul id="headerright">
            <li>Keyboard shortcuts</li>
            <li>
              <img src={attachmenticon} />
              Create task
            </li>
            <li>
              <img src={startprocessicon} />
              Start process
            </li>
            <li>
              <div class="dropdown">
                <span>
                  <img src={profileicon} /> teja ps
                </span>
                <div class="dropdown-content">
                  <p>
                    <Link to="/">My profile</Link>
                  </p>
                  <p>
                    <Link to="/">Log out</Link>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <span>
                  <Link to="/">
                    <img src={houseicon} />
                  </Link>
                </span>
                <div class="dropdown-content">
                  <Link to="/admin">Admin</Link>
                  <p>
                    <Link to="/tasklist">Tasklist</Link>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
