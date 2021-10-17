import * as React from "react";
import portfolioImg1 from './images/portfolio-img1.jpg'
import portfolioImg2 from './images/portfolio-img2.jpg'
import portfolioImg3 from './images/portfolio-img3.jpg'
import portfolioImg4 from './images/portfolio-img4.jpg'
import portfolioImg5 from './images/portfolio-img5.jpg'
import portfolioImg6 from './images/portfolio-img6.jpg'

export const Portfolio = () => {
     return (
          <section id="portfolio">
               <div className="container">
                    <div className="row">

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg1} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Brand Identity</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg2} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Web Development</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg3} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Mobile App</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg4} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Logo Design</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg5} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Social marketing</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-4 col-sm-6">
                              <a href="single-project.html">
                                   <div className="portfolio-thumb">
                                        <img src={portfolioImg6} className="img-responsive" alt="Portfolio"/>
                                        <div className="portfolio-overlay">
                                        <div className="portfolio-item">
                                        <h3>Project Name</h3>
                                        <small>Fyler Design</small>
                                        </div>
                                        </div>
                                   </div>
                              </a>
                         </div>

                         <div className="col-md-12 col-sm-12 text-center">
                              <h3>hello, if you interest working together. just send message <a href="contact.html">contact page</a></h3>
                         </div>

                    </div>
               </div>
          </section>
     )
}
