import React from "react";

export const Tags = (props) => {
    return (
        <ul className="tags">
            {props.tags.map((t, index) => {
                return <li key={index} className="tag">{'#' + ' ' + t}</li>})}
        </ul>
    );
}
