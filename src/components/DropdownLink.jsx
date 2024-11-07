import React from 'react'

export default function DropdownLink(props) {
  return (
    <div style={{cursor:'pointer'}}>
        <a>{props.text}</a>
    </div>
  )
}
