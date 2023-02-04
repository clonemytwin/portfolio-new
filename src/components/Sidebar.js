import React, { Fragment } from 'react'
import {VscHome} from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {BsCode} from 'react-icons/bs'
import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillTwitterSquare, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>

        
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline ff-jost fw-600">WASI</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link align-middle px-0 text-white">
                                <VscHome className='fs-5'/> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link align-middle px-0 text-white">
                                <FiUser className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                                <BsCode className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Skills</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                                <MdOutlineDashboard className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">My Work</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link align-middle px-0 text-white">
                                <AiOutlineUnorderedList className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Resume</span>
                            </NavLink>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown pb-4 dropup">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdOutlineContactPage className='fs-5'/>
                            <span className="d-none d-sm-inline mx-1">Contact</span>
                        </a>
                        <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item text-black" href="mailto:wasihey8@gmail.com" target="/blank"><MdEmail className='fs-5'/> Email</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/wasi-hey8-9a3a271b9/" target="/blank"><AiFillLinkedin className='fs-5'/> LinkedIn</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://twitter.com/Wasi1011" target="/blank"><AiFillTwitterSquare className='fs-5'/> Twitter</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://github.com/clonemytwin" target="/blank"><AiFillGithub className='fs-5'/> Github</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://github.com/clonemytwin" target="/blank"><VscAccount className='fs-5'/> Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>

    </Fragment>
  )
}

export default Sidebar
