// Required packages
import React from 'react';

// Required files
import Header from './Header';
import Footer from './Footer';


/* -----------------    COMPONENT     ------------------ */

const Root = ({children}) => {
    return (
        <div>
            <Header />
            <div id="main-content-anchor">
                { children }
            </div>
            <Footer />
        </div>
    );
};

export default Root;

/* -----------------    CONTAINER     ------------------ */
