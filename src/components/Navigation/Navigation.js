import './Navigation.css'

import React from 'react'

function Navigation() {
  return (
    <div className='NavContainer'>
        <ul className='LinkList'>
            <li className='link link1'><a href='https://www.google.com/?gws_rd=ssl' target="blank">Google</a></li>
            <li className='link link2'><a href='https://www.youtube.com/' target="blank">Youtube</a></li>
            <li className='link link3'><a href='https://www.yahoo.com/'  target="blank">Yahoo</a></li>
            
        </ul>
    </div>
  )
}

export default Navigation