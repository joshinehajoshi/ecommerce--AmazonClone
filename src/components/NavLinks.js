import React from 'react';
import { Link } from "react-router-dom";
import '../css/navlinks.css';

function NavLinks() {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                    <div className="navlinks__inner">
                    <Link>
                Today's Deal
                </Link>
                <Link>
                Customer Services
                </Link>
                <Link>
                Gift Card
                </Link>
                <Link>
                Registry
                </Link>
                <Link>
                Sells
                </Link>
                    </div>
                </div>
              
        </div>
    )
}

export default NavLinks
