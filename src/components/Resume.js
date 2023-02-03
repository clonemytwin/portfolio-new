import React, { Fragment } from 'react'


function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2"> [WASI] </h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Film Street Production</h4>
                                <h6 className="blue-label px-2 py-1">Jul 2017 - Apr 2021</h6>
                                <p className="m-0">Creative Director. Art Director. digital Illustrator. graphics designer· Full-time</p>
                                <p>House No: 8/A/10, Road: #13, Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BSc in Computer Science & Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2017 - 2022</h6>
                                <p className="m-0">University of Information Technology & Science (UITS)</p>
                                <p>CGPA:3.59 (out of 4.00)</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2016</h6>
                                <p className="m-0">Gulshan Model College</p>
                                <p>GPA: 4.80 (out of 5.00)</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Secondary School Certificate </h4>
                                <h6 className="blue-label px-2 py-1">2014</h6>
                                <p className="m-0">Shiraj Mia Memorial Model School </p>
                                <p>GPA: 5.00 (out of 5.00)</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume