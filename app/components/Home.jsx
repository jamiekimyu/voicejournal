import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Home = (props) => {

    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="row">
                <div className="col m5 s10 offset-m1">
                    <h1 className="white-text">Streams of Consciousness</h1>
                    <Link className="waves-effect btn btn-large green darken-2" to="/journal">Get Started</Link>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Home);
