import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown';
import "./NavbarLink.css";
export default function NavbarLink(props) {
//   let dropdown = <Dropdown />
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  const setHover = () => {
    setDropdownEnabled(true);
    console.log(dropdownEnabled);
  }
  const setNotHover = () => {
    setDropdownEnabled(false)
    console.log(dropdownEnabled);
  }

  return (
    <div onMouseOver={setHover} onMouseOut={setNotHover} style={{cursor:'pointer'}}>
        <a>{props.text}</a>
        <Dropdown isDisplayed={dropdownEnabled} links={props.links} />
    </div>
  )
}
