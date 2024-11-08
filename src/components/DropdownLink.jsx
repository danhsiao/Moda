import React from 'react'

export default function DropdownLink(props) {
  return (
    <div style={{cursor:'pointer'}}>
        <a href={props.destination}>{props.text}</a>
    </div>
  )
}
