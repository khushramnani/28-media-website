import React from "react";

const Header = () => {
  return (
    <>
      <nav className="primary-bg text-white p-4 flex justify-around items-center">
        <div className="">28-media</div>
        <div>
          <ul className="flex space-x-4 text-white  items-center justify-evenly decoration-none">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
