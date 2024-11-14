import React from 'react'
import DropdownLink from "./DropdownLink";

export default function Dropdown(props) {
    let links = [];
    for(const key in props.links){
        links.push(<DropdownLink key={key} text={key} destination={"./" + props.links[key]}  />);
    }
    // props.links.map((i, link) => {
    // })
    return (
        <div style={{display: props.isDisplayed ? "block" : "none"}} className="navbox">
            {links}
        </div>
    )
}
