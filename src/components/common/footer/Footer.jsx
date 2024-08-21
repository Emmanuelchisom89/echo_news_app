import React from 'react'
import { BsFillMegaphoneFill, BsTelephoneFill } from 'react-icons/bs'
import { FaAngleRight, FaExclamation, FaExpandAlt, FaMapMarkerAlt, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import "./footer.scss"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {

    const year = new Date().getFullYear()

  return (
      <footer className='footer'>
          <div className="footerTop">
              <div className="footerTopWrapper">
                  <div className="item">
                      <div className="title">
                          <h2 className='h4'>About Us</h2>
                          <FaExclamation style={{fontSize: '18px'}} />
                      </div>
                      
                      <div className='about'>
                          <div className="content">
                              <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut magnam. Itaque quae autem, beatae porro possimus libero nesciunt nemo sint, quasi quis dolorum similique recusandae, asperiores tempora dicta. Aspernatur!
                              </p>
                          </div>

                          <div className="action">
                              <a href="" className="btn-link">
                                  Read More
                                  <TfiAngleDoubleRight style={{fontSize: '12px'}} />
                              </a>
                          </div>

                          <ul>
                              <li>
                                  <FaMapMarkerAlt style={{ fontSize: '15px' }} className='icon' />
                                  <span>My Address</span>
                              </li>
                              <li>
                                  <FaRegEnvelope style={{ fontSize: '15px' }} className='icon' />
                                  <span>mymail@mymail.com</span>
                              </li>
                              <li>
                                  <BsTelephoneFill style={{ fontSize: '15px' }} className='icon' />
                                  <span>+23456789012</span>
                              </li>
                          </ul>
                      </div>
                  </div>

                   <div className="item">
                     <div className="title">
                        <h2 className='h4'>Useful Info Links</h2>
                        <FaExpandAlt style={{fontSize: '18px'}} />
                      </div>
                      
                      <div className="links">
                          <ul className="nav">
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Gadgets
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Shop
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Terms & Conditions
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Forums
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Top News of This Week
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Special Recipes
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Sign Up
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="title">
                        <h2 className='h4'>Advertisements</h2>
                        <BsFillMegaphoneFill style={{fontSize: '18px'}} />
                      </div>

                      <div className="links">
                          <ul className="nav">
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Post an Ad
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Ads Renew
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Price Of Ads
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Ads Closed
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Montly or Yearly
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Ad Making
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  
                  <div className="item">
                     <div className="title">
                        <h2 className='h4'>Career</h2>
                        <FaRegUser style={{fontSize: '18px'}} />
                      </div>

                      <div className="links">
                          <ul className="nav">
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Available Post
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Career Details
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Price Of Ads
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> How to Apply
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Freelance Job
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Be a Member
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Apply now
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <FaAngleRight /> Send Your Resume
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footerBottom">
              <div className="footerBottomWrapper">
                  <div className="left">
                      <p>&copy; {year} <a>echonews</a>. All Rights Reserved</p>
                  </div>
                  <div className="right">
                      <ul className="nav1">
                          <li><a>Home</a></li>
                          <li><a>FAQ</a></li>
                          <li><a>Support</a></li>
                      </ul>

                      <ul className="nav2">
                          <li><a><FaFacebookF style={{fontSize: "18px"}} /></a></li>
                          <li><a><FaTwitter style={{fontSize: "18px"}} /></a></li>
                          <li><a><FaGooglePlusG style={{fontSize: "18px"}} /></a></li>
                          <li><a><FaLinkedinIn style={{fontSize: "18px"}} /></a></li>
                          <li><a><FaYoutube style={{fontSize: "18px"}} /></a></li>
                      </ul>
                  </div>
              </div>
          </div>
       </footer>
  )
}

export default Footer
