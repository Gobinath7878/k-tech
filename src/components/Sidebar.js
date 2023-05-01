import React, { useState } from "react";
import { FcIcons8Cup } from "react-icons/fc";
import { GoHome } from "react-icons/go";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineMessage } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import Profile from '../assets/profile.png';
import {Link} from "react-router-dom";

const Sidebar = () => {
  const [showDropdownHome, setShowDropdownHome] = useState(false);
  const [showDropdownDashboard, setShowDropdownDashboard] = useState(false);
  const [showDropdownProjects, setShowDropdownProjects] = useState(false);
  const [showDropdownTasks, setShowDropdownTasks] = useState(false);
  const [showDropdownSettings, setShowDropdownSettings] = useState(false);

  const handleDropdownToggle = (menu) => {
    switch (menu) {
      case "home":
        setShowDropdownHome(!showDropdownHome);
        break;
      case "dashboard":
        setShowDropdownDashboard(!showDropdownDashboard);
        break;
      case "projects":
        setShowDropdownProjects(!showDropdownProjects);
        break;
      case "tasks":
        setShowDropdownTasks(!showDropdownTasks);
        break;
      case "settings":
        setShowDropdownSettings(!showDropdownSettings);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-wrap justify-content-between">
        <div>
          <h5 className="fw-bold logo mx-3">
            <FcIcons8Cup /> CheGo UI
          </h5>

          <ul className="p-0 mt-3 mb-5 pb-4">
            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap">
              <p className="m-2">
                <GoHome className="fs-5 mx-2" /><span className="page-title"> Home</span>
              </p>
              <h4
                className="dropdown-icon m-2 text-muted"
                onClick={() => handleDropdownToggle("home")}
              >
                {showDropdownHome ? "-" : "+"}
              </h4>
              {showDropdownHome && (
                <ul className="dropdown-menus">
                  <li key="home-submenu-item-1"><Link to='/home' className="text-dark">Home</Link></li>
                  <li key="home-submenu-item-2">Submenu Item 2</li>
                  <li key="home-submenu-item-3">Submenu Item 3</li>
                </ul>
              )}
            </li>

            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap">
              <p className="m-2">
                <RiDashboardLine className="fs-5 mx-2" /><span className="page-title"> Dashboard</span>
              </p>
              <h4
                className="dropdown-icon m-2 text-muted"
                onClick={() => handleDropdownToggle("dashboard")}
              >
                {showDropdownDashboard ? "-" : "+"}
              </h4>
              {showDropdownDashboard && (
                <ul className="dropdown-menus">
                  <li key="dashboard-submenu-item-1">Submenu Item 1</li>
                  <li key="dashboard-submenu-item-2">Submenu Item 2</li>
                  <li key="dashboard-submenu-item-3">Submenu Item 3</li>
                </ul>
              )}
            </li>
            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap">
              <p className="m-2">
                <AiOutlineProject className="fs-5 mx-2" /><span className="page-title"> Projects</span>
              </p>
              <h4
                className="dropdown-icon m-2 text-muted"
                onClick={() => handleDropdownToggle("projects")}
              >
                {showDropdownProjects ? "-" : "+"}
              </h4>
              {showDropdownProjects && (
                <ul className="dropdown-menus">
                  <li key="projects-submenu-item-1">Submenu Item 1</li>
                  <li key="projects-submenu-item-2">Submenu Item 2</li>
                  <li key="projects-submenu-item-3">Submenu Item 3</li>
                </ul>
              )}
            </li>
            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap">
              <p className="m-2">
                <BiTask className="fs-5 mx-2" /><span className="page-title"> Tasks</span> 
              </p>
              <h4
                className="dropdown-icon m-2 text-muted"
                onClick={() => handleDropdownToggle("tasks")}
              >
                {showDropdownTasks ? "-" : "+"}
              </h4>
              {showDropdownTasks && (
                <ul className="dropdown-menus">
                  <li key="tasks-submenu-item-1">Submenu Item 1</li>
                  <li key="tasks-submenu-item-2">Submenu Item 2</li>
                  <li key="tasks-submenu-item-3">Submenu Item 3</li>
                </ul>
              )}
            </li>
            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap">
              <p className="m-2">
                <CiSettings className="fs-5 mx-2" /> <span className="page-title">Settings</span>
              </p>
              <h4
                className="dropdown-icon m-2 text-muted"
                onClick={() => handleDropdownToggle("settings")}
              >
                {showDropdownSettings ? "-" : "+"}
              </h4>
              {showDropdownSettings && (
                <ul className="dropdown-menus">
                  <li key="settings-submenu-item-1">Submenu Item 1</li>
                  <li key="settings-submenu-item-2">Submenu Item 2</li>
                  <li key="settings-submenu-item-3">Submenu Item 3</li>
                </ul>
              )}
            </li>
            <li className="fw-bold d-flex align-items-center justify-content-between flex-wrap mb-5 pb-5">
              <p className="m-2">
                <AiOutlineMessage className="fs-5 mx-2" /> <span className="page-title">Messages</span>
              </p>
              <h3 className="dropdown-icon m-1">
                <BsDot />
              </h3>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center position-fixed bottom-profile">
        <img src={Profile} alt="loading" style={{ height: "40px", width: "40px" }} className="rounded-5"/>
       <div className="name">
          <p className="m-0 fw-bold">Gobinath Selvam</p>
          <h6 className="m-0 text-muted">MERN Developer</h6>
        </div>
        <p>...</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
