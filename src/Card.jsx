import React from 'react';

let imgStyle = {
    height:'500px'
}

function Card(props) {
    return (
        <>
            <div className="card col-lg-4 col-md-12 col-sm-12 col-12 border-0 bg-dark cardStyle">
                <div className="card-header text-center card-text font-weight-bold bg-dark text-warning text-uppercase">
                    <h4>{props.seriestitle}</h4>
                </div>
                <img src={props.imgsrc} alt="some img" style={imgStyle} className="card-img img-fluid" />
                <div className="card-body">
                    <a href={props.watchlink} className="btn btn-outline-warning col-lg-12 col-md-12 col-sm-12 col-12 btnstyle">Watch Now</a>
                </div>
            </div>


        </>
    );
}

export default Card;
