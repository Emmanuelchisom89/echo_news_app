import React, { useState } from 'react'
import "./navbarTop.scss"
import { MdLocationOn, MdOutlineLanguage, MdOutlinePersonOutline, MdRssFeed } from 'react-icons/md'
import { WiDayCloudy } from 'react-icons/wi'
import { BiCalendar } from 'react-icons/bi'
import { RxCaretDown } from 'react-icons/rx'
import { RiFacebookBoxFill, RiTwitterFill } from 'react-icons/ri'
import { ImGooglePlus } from 'react-icons/im'
import { FaYoutube } from 'react-icons/fa'


const NavbarTop = () => {

    const [dropDown, setDropDown] = useState(false)

    const handleDropDown = () => {
        setDropDown(!dropDown)
    }

  const date = new Date()
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);


  return (
    <div className='navbarTop offscreen'>
        <div className="navbarContainer">
              <div className="left">
                  <div className="item">
                    <MdLocationOn style={{fontSize: "16px"}}/> <span>New York</span>
                  </div>
                  <div className="item">
                      <WiDayCloudy /> <span>21&deg;C</span>
                  </div>
                  <div className="item">
                      <BiCalendar /> <span>{formattedDate}</span>
                  </div>
              </div>
              <div className="right">
                  <div className="item">
                      <MdOutlinePersonOutline style={{fontSize: "16px"}} /> <span>Login/Register</span>
                  </div>
                  <div className="item" onClick={handleDropDown}>
                      <MdOutlineLanguage style={{ fontSize: "16px" }} />
                      <span>English</span>
                      <RxCaretDown style={{ fontSize: "16px" }} />
                  </div>
                  <div className="icons">
                      <RiFacebookBoxFill style={{ fontSize: "16px" }} />
                      <RiTwitterFill style={{ fontSize: "16px" }} />
                      <ImGooglePlus style={{ fontSize: "16px" }} />
                      <MdRssFeed style={{ fontSize: "16px" }} />
                      <FaYoutube style={{ fontSize: "16px" }} />
                  </div>

                  {dropDown && <ul className='dropDownMenu'>
                      <li>
                          <a href="">English</a>
                      </li>
                      <li>
                          <a href="">Spanish</a>
                      </li>
                      <li>
                          <a href="">French</a>
                      </li>
                  
                </ul>}
              </div>
        </div>
    </div>
  )
}

export default NavbarTop
