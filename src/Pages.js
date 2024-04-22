import React from "react";
import {Link,useLocation} from 'react-router-dom';

export function Header() {
    return (
      <div>
         <h1>
                  <Link to="/">
                      WEBSITE
                  </Link>
              </h1>
       </div> 
       ); 
  }

  export function Home() {
    return (
      <div>
         <nav>
          <Link to="about">About</Link>
          <Link to="events">Events</Link>
          <Link to="products">Products</Link>
          <Link to="contact">Contact Us</Link>
        </nav>
      </div>
    );
  }

  export function About() {
    return (
        <div>
  
        <h1>[About]</h1>
        <p>Our company...</p>
        </div>
      );
   }

   export function Events() {
    return (
      <div>
        <h1>[Events]</h1>
        <p>Event...</p>
      </div>
    );
  }

  export function Products() {
    return (
      <div>
        <h1>[Products]</h1>
        <p>Prodcut...</p>
      </div>
    );
  }

  export function Contact() {
    return (
      <div>
        <h1>[Contact]</h1>
          <p>Contact...</p>
      </div>
    );
  }

  export function Whoops404() {
    let location = useLocation(); 
    //변수에 useLocation 정보를 담음
    console.log(location); 
    //현재 URL 정보 가져오기 useLocation()
    return (
      <div>
        <h1>
          Resource not found at {location.pathname}
        </h1>
      </div>
    );
  }
  