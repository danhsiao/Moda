import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown';
import "./NavbarLink.css";
export default function NavbarLink(props) {
//   let dropdown = <Dropdown />
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  const setHover = () => {
    setDropdownEnabled(true);
  }
  const setNotHover = () => {
    setDropdownEnabled(false)
  }

  return (
    <div onMouseOver={setHover} onMouseOut={setNotHover} style={{cursor:'pointer'}}>
        <a href={Object.values(props.links)[0]}>{props.text}</a>
        <Dropdown isDisplayed={dropdownEnabled} links={props.links} />
    </div>
  )
}
