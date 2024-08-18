import React from 'react';
import FooterScss from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={FooterScss.footer_container}>
        <div>
          <ul>
            <li> <b> Abstract </b> </li>
            <li> Branches </li>
          </ul>
        </div>
        <div>
          <ul>
            <li> <b> Resources </b> </li>
            <li> Help Center </li>
            <li> Release Notes  </li>
            <li> Status </li>
          </ul>
        </div>
        <div>
          <ul>
            <li> <b> Community </b> </li>
            <li> Twitter </li>
            <li> Linkedin  </li>
            <li> Facebook </li>
            <li> Dribble </li>
            <li> Podcast </li>
          </ul>
        </div>
        <div>
          <ul>
            <li> <b> Company </b> </li>
            <li> About Us </li>
            <li> Carriers  </li>
            <li> Ligal </li>
            <br/>
            <li> <strong> Contact Us </strong></li>
            <li> info@abstract.com </li>
          </ul>
        </div>
        <div>
          <img src="./logo.JPG" alt="Help Center" />
          <p> Copyright 2022 <br/> Abstract Studio Design, Inc. <br/> All rights reserved </p>
        </div>
      </footer>
    </>
  )
}
