import React from 'react';

const ImageTile = props => (
    <img className="image-tile z-depth-5" id={props.id} alt={props.name} src={props.path} onClick={() => props.shuffleTiles(props.id)}/>
    // <img className="image-tile z-depth-5" id={props.id} alt={props.name} src={props.path}/>
);

export default ImageTile;