import React from 'react'
import "./DropdownLink.css"
export default function DropdownLink(props) {
  return (
    <div style={{cursor:'pointer', padding:"5px"}}>
        <a href={props.destination}>{props.text}</a>
    </div>
  )
}