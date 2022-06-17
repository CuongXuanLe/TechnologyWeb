import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar= ({ toggleMenu, setToggleMenu, login }) => {
  return (
    <div className={'blog__sidebar' + (toggleMenu && "active")}>
      <div className="list__sub-nav">
          <ul className='sub__nav'>
                <li onClick={() => setToggleMenu(false)}>
                    <Link to="/TechnologyWeb" >
                    HOME                
                    </Link>
                </li>
                <li onClick={() => setToggleMenu(false)}>
                    <Link to="/about" >
                    ABOUT                
                    </Link>
                </li>
                
                <li onClick={() => setToggleMenu(false)}>
                    {login 
                      ? (
                        <Link to="/Profile" >
                          PROFILE                
                        </Link>
                      ) : (
                        <Link to="/login">
                          PROFILE
                        </Link>
                      )

                    }
                    
                </li>
                <li onClick={() => setToggleMenu(false)}>
                    {login 
                      ? (
                        <Link to="/write" >
                        WRITE                
                        </Link>
                      ) : (
                        <Link to="/login" >
                        WRITE                
                        </Link>
                      )

                    }
                    
                </li>
          </ul>
      </div>
    </div>
  )
}

export default SideBar

