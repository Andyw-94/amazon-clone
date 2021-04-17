import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjA0N2YxY2It/NjA0N2YxY2It-MmQ2OTcxMWMt-w3000._CB655440701_.jpg"
        alt=""
      />
      {/* Product - id, title, prixe, rating, image */}
      <div className="home__row">
        <Product
          id="73284832"
          title="Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
          price={149.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61x0OuU9XtL._AC_SX679_.jpg"
        />
        <Product
          id="98431489"
          title="TCL Alto 8+ 2.1 Channel Sound Bar with Built-In Subwoofer – Fire TV Edition"
          price={147.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Hu%2BIEm5wL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="49830392"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone"
          price={39.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61cSwIDSVbL._AC_SX679_.jpg"
        />
        <Product
          id="20941932"
          title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
          price={59.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71UCjudB1cL._AC_SX679_.jpg"
        />
        <Product
          id="20923094"
          title="Echo Show 5 -- Smart display with Alexa – stay connected with video calling - Charcoal"
          price={79.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/716neMnDXXL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90284387"
          title="VIOTEK SUW49C 49-Inch Super Ultrawide 32:9 Curved Monitor with Speakers, 144Hz HDR 4ms 3840x1080p, FreeSync, GamePlus, VESA & More"
          price={729.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61ZChhF4iwL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
