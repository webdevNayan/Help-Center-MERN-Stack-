import React from 'react';
import HeaderScss from "./NavigationBar.module.scss";

export default function NavigationBar() {
  return (
    <>
        <header className={HeaderScss.navbar_container}>
            <div className={HeaderScss.logo_container}>
                <img src="./logo.JPG" alt="Abstract" />
                <h3> Abstract | Help Center </h3>
            </div>
            <div>
                <button> Submit a request </button>
            </div>
        </header>
    </>
  )
}
