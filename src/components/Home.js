import React from 'react';
import '../css/home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/6153Nzpt6mL._SX3000_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={4}
                    price="98.6"
                    image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg"
                />
                 <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={5}
                    price="34.2"
                    image="https://m.media-amazon.com/images/I/41f8eOJLsPL._AC_SY200_.jpg"
                />
                  <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={3}
                    price="67.4"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={4}
                    price="98.6"
                    image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg"
                />
                 <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={5}
                    price="34.2"
                    image="https://m.media-amazon.com/images/I/41f8eOJLsPL._AC_SY200_.jpg"
                />
                  <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={3}
                    price="67.4"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg"
                />
                 <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={3}
                    price="67.4"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={4}
                    price="98.6"
                    image="https://m.media-amazon.com/images/I/31LC-FBgpBL._AC_SY200_.jpg"
                />
                 <Product
                    id="121314"
                    title="The lean Startup: How Constant Innovation"
                    rating={5}
                    price="34.2"
                    image="https://m.media-amazon.com/images/I/41f8eOJLsPL._AC_SY200_.jpg"
                />
               
            </div>
        </div>
    )
}

export default Home
