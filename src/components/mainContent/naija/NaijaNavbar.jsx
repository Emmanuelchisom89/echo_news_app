import React from 'react'
import "./naija.scss"

const NaijaNavbar = ({ active, setActive, setCategory }) => {
    
    const links = [
        { id: 1, name: 'Business', value: 'business'},
        { id: 2, name: 'Politics', value: 'politics'},
        { id: 3, name: 'Entertainment', value: 'entertainment'},
        { id: 4, name: 'Health', value: 'health'},
        { id: 5, name: 'Science', value: 'science'},
        { id: 6, name: 'Sports', value: 'sports'},
        { id: 7, name: 'Technology', value: 'technology'},
    ]
    
  return (
      <nav>
          <ul className='menu'>
              {links.map(link => (
                  <li 
                      key={link.id} 
                      className={active === link.id ? "active" : "inactive"} 
                      onClick={() => {
                          setActive(link.id)
                          setCategory(link.value)
                      }}
                  >
                      {link.name}
                  </li>
              ))}
          </ul>
      </nav>
  )
}

export default NaijaNavbar
