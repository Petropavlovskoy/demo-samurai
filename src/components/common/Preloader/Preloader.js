import React from 'react';
import anim from "../../../asses/imeges/anim.gif";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={anim} />
    </div>
}

export default Preloader;