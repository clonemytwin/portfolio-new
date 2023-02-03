import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious full-stack developer, a self-led learner and team player  <br></br>
                                with one year of experience in web developement.
                            </p>
                            <p className='slide-in-bottom'>
                            Currently searching for new career options and eager to work on complex projects using cutting-edge technology.<br></br>
                            </p>
                            <p className='slide-in-bottom'>
                            Self-driven and diligent new employee looking for an opportunity to work in a demanding atmosphere to demonstrate my abilities and apply my knowledge and intellect to the development of the company.<br></br>
                            </p> 
                            <p className='slide-in-bottom'>
                             The technology I've worked on : <span className="text-red ls-2">Asp.Net Core, Asp.Net Mvc, <br></br>
                             C#, Sql, Ssms, Telerik-UI, Html, Css, Js, Bootstrap </span>
                            </p>
                            <p className='slide-in-bottom'>
                            
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About