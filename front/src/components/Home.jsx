import React from "react";
import { Link } from "react-router-dom";
import { searchItems } from "../constants/data";
import Landing from "./Landing";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <Landing />
      </div>

      <div className="container">
        Home
        <div className="search-section">
          <div className="search">
            <form>
              <input type="text" />
              <button>search</button>
            </form>
          </div>
          <div>
            <ul>
              {searchItems.map((item, idx) => (
                <li>
                  <Link key={idx} to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
