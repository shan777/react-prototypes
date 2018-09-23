import React from 'react';

export default props => {
    // console.log(props.info);
    const {info} = props;
    // console.log('*', info['link'][1].attributes.href);

    return (
        <div>
            <img src={info['im:image'][2].label}></img>
            <h4>{info['im:price'].label}</h4>
            <h3>{info['im:name'].label}</h3>
            <h5>Released: {info['im:releaseDate'].label}</h5>
            <p>{info['summary'].label}</p>
            <p><a href={info['link'][1].attributes.href}>Click here</a></p>
        </div>
    );
}