import React from "react";

const Film = ({name, url}) => {
    return(
        <>
        <li>
        <a className="li" href={url} target="_blank">{name}</a>
        </li>
        </>
    )
};

export default Film;