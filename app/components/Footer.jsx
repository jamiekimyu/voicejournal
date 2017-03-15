import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Footer = () => {

    return (
        <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About us</h5>
                <p className="grey-text text-lighten-4">{ 'We all need to be heard.' }</p>
                <p className="grey-text text-lighten-4">{ 'Be heard here, at Stream Journals' }</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link className="grey-text text-lighten-3" to="/home">Home</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/journal">Journal</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/login">Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright teal darken-2">
            <div className="container">
            © 2017 Copyright Stream Journals
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Footer);
