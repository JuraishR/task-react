import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import bg from "./images/bg.png";
import logo from "./images/logo.png";
import v from "./images/Vector.png";
import pngwing from "./images/pngwing.png";
import Rectangle69 from "./images/Rectangle 69.png";
import Rectangle74 from "./images/Rectangle 74.png";
import Rectangle72 from "./images/Rectangle 72.png";
// import r69 from "./images/Rectangle 69.png";
import pin1 from "./images/pin 1.png";
import pin2 from "./images/exit 1.png";
import pin3 from "./images/grill 1.png";
import r47 from "./images/Rectangle 47.png";
import e7 from "./images/Ellipse 7.png";
import r49 from "./images/Rectangle 49.png";
import r48 from "./images/Rectangle 48.png";
import r50 from "./images/Rectangle 50.png";
import r51 from "./images/Rectangle 51.png";
import r52 from "./images/Rectangle 52.png";
import p15 from "./images/pngwing.png";
import p16 from "./images/pngwing 15.png";
import pngwing11 from "./images/pngwing 11.png";
import Ractangle8 from "./images/Rectangle 8.png";
import menu from "./images/menu.png";



const root = ReactDOM.createRoot(document.getElementById('root'));

//app image
function AppImage(){
  return(
    <div class="bg-img">
        <img src={bg} alt="bg" ></img>
      </div>

  )}

//NavBar
function Navbar(){
  return(
    <nav>
      <div>
      <div class="navbar">
        <div class="navbar__s1">
          <img src={logo} alt="logo" />
        </div>

        

        <div class="navbar__s2">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Accommodation</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="navbar__s3" >
          <img src={menu} alt="menu" />
      </div>

      </div>
      </div>
    </nav>
  )
}



//Heading
function Heading(){
  return(
    <div class="lo">
        <div class="lo__s1">
          <h1>Your Sustainable Lodge Getaway</h1>
        </div>
        <div class="lo__s2">
          <p>
            "EcoHaven invites you to indulge in a mindful escape. Nestled in
            nature, our eco-friendly lodge <br/>seamlessly blends sustainability with
            comfort. Immerse yourself in a green retreat where every stay <br/> leaves
            a positive mark on the planet. Your eco-conscious getaway awaits."
          </p>
        </div>
      </div>
  )
}

//Round
function Round(){
  return(
    <div class="round">
        <div>
          <div class="round__s1">
            <h2>01</h2>
            <h3>Hiking Route</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class="round__s1">
            <h2>02</h2>
            <h3>Fishing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class="round__s1">
            <h2>03</h2>
            <h3>Bike Route</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class="round__s1">
            <h2>04</h2>
            <h3>Fire Bound</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
        
        <p class="mark">...</p>
      </div>
  )
}

//two
function Two(){
  return(
    <div class="two">
        <img src={pngwing11} alt="pngwing" style={{ width: '35%' }} ></img>

      
      <div class="two__s2">
        <div src="two__s2__s1">
          <h2 style={{ color: 'white', fontWeight: 'bold' }}>
            Welcome to <span style={{ color: 'rgba(90, 110, 52, 1 )',  fontWeight: 'bold' }}>Restaurant</span> <br />
            <span style={{ color: 'rgba(90, 110, 52, 1)' }}>Lodge</span>
          </h2>
          <p>Welcome to the best five-star deluxe hotel in Negombo. <br/>
            Hotel elementum sesue the aucan vestibulum aliquam <br/>
            justo in sapien rutrum volutpat. Donec in quis the <br/>
            pellentesque velit. Donec id velit ac arcu posuere blane.
            <br/>
            <br/>
            Hotel ut nisl quam nestibulum ac quam nec odio<br/>
            elementum sceisue the aucan ligula. Orci varius nat<br/>
            oque penatibus et magnis dis parturient monte nascete <br/> 
            ridiculus  mus nellentesque habitant morbine. Auam <br/>
            nestibulum ac quam nec odio elementum sceisue the aucan ligula
          </p>
        </div>
        <div class="two__s2__s2">
          <img src={v} alt="roimg"></img>
        </div>
      </div>
    </div>
  )
}

//three
function Three(){
  return(
    <div class="three">
      <h1>Unveiling Our <span style={{color: 'rgba(99, 121, 56, 1)'}}>Elegant</span><br/> 
        <span style={{color: 'rgba(99, 121, 56, 1)'}}>Accommodations</span></h1>
      <div class="three-container">
        <div class="box-card">
          <img src={Rectangle69} alt="r69"></img>
          <div class="box-card__s1">
            <div class="box-card__s1__1">
              <h3>Deluxe Room</h3>
              <p>Donec id velit ac arcu posuere blane.</p>
            </div>
            <div class="box-card__s1__2">
              <h3></h3>
            </div>
          </div>
        </div>
        <div class="box-card">
          <img src={Rectangle74} alt="r69"></img>
          <div class="box-card__s1">
            <div class="box-card__s1__1">
              <h3>Deluxe Room</h3>
              <p>Donec id velit ac arcu posuere blane.</p>
            </div>
            <div class="box-card__s1__2">
              <h3></h3>
            </div>
          </div>
        </div>
        <div class="box-card">
          <img src={Rectangle72} alt="r69"></img>
          <div class="box-card__s1">
            <div class="box-card__s1__1">
              <h3>Deluxe Room</h3>
              <p>Donec id velit ac arcu posuere blane.</p>
            </div>
            <div class="box-card__s1__2">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>

      <div class="three-content">
        <div class="three-content__s1">
          <h2>Why <span style={{color: 'rgba(99, 121, 56, 1)'}}>Choose Us</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> 
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar<br/>
            dapibus leo.Lorem ipsum dolor sit amet, consectetur<br/> 
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br/> 
            mattis, pulvinar dapibus leo.</p>
        </div>
        <div class="three-content__s2">
          <div class="three-content__s2__1">
            <img src={pin1} alt="pin"></img>
            <p>Highlight security measures in place</p>
          </div>
          <div class="three-content__s2__1">
            <img src={pin2} alt="pin"></img>
            <p>Secure entry points</p>
          </div>
          <div class="three-content__s2__1">
            <img src={pin3} alt="pin"></img>
            <p>BBQ facilities</p>
          </div>
          <div class="three-content__s2__1">
            <img src={pin3} alt="pin"></img>
            <p>Promote secure outdoor spaces for family enjoyment</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function Four(){
  return(
      <div class="four">
        <img src={Ractangle8} alt="rg"></img>
        <div class="four-container">
             <h1>What Our <span style={{color: 'rgba(90, 110, 52, 1)'}}>Client Say</span> </h1>
  <div class="four-container__s1">
    <div class="four-container__s1-1">
      <h1>❝</h1>
      <p>Our time at Hotel was enchanting. From warm welcomes to breathtaking <br/> 
        views, the attention to detail and exceptional service made our stay truly <br/> 
        special. The amenities, exquisite dining, and genuine hospitality left us with <br/>
        happy memories. Can't wait to return</p>
      <h1>❞</h1>
    </div>
    <div class="four-container__s1-2">
      <p>Johnson Charles</p>
      <img src={e7} alt="Ellipse"></img>
    </div>
  </div>
</div>
</div>
  )
  }

function Five(){
  return(
    <div class="five">
        <img src={p15} alt="pil"></img>
        <div class="five-container">
          <div class="five-container__s1">
      <h1>Our <span style={{color: 'green'}}>Gallery</span></h1>
      <p>Picture Perfect Memories" captures the essence of our hotel's charm in elegant rooms, culinary<br/>
        delights, and scenic surroundings. Envision your perfect stay at Hotel through each image where <br/>
        every moment is truly picture-perfect.</p>
    </div>
    <div class="five-container__s2">
      <img src={r49} alt="49"></img>
      <img src={r48} alt="48"></img>
      <img src={r50} alt="50"></img>
      <img src={r51} alt="51"></img>
      <img src={r52} alt="52"></img>
    </div>
  </div>
</div>
)}

function Six(){
  return(
<div class="six">
  <h1>Get In Touch</h1>
  <div class="six-container">
    <div class="six-container__s1">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
    </div>
    <div class="six-container__s1">
      <input type="number" placeholder="Phone" />
      <input type="text" placeholder="Subject" />
    </div>
    <div class="six-container__s1">
      <input class="mes" type="text" placeholder="Your Message" />
    </div>
    <div class="six-container__s2">
    <button>Send Message</button>
    </div>
  </div>
  <img src={p16} alt=""></img>
</div>
)}

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <div className="social-media">
//           <a href="#"><FaFacebookF /></a>
//           <a href="#"><FaTwitter /></a>
//           <a href="#"><FaInstagram /></a>
//           <a href="#"><FaLinkedinIn /></a>
//         </div>
//         <div className="quick-links">
//           <h3>Quick Links</h3>
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Contact</a>
//         </div>
//         <div className="instagram-posts">
//           <h3>Instagram Posts</h3>
//           <img src={r49} alt="post3" />
//           <img src={r50} alt="post4" />
//           <img src={r51} alt="post5" />
//           <img src={Rectangle69} alt="post7" />
//           <img src={Rectangle72} alt="post8" />
//           <img src={Rectangle74} alt="post9" />
//         </div>
//       </div>
//       <div className="copyright">
//         &copy; 2022 Your Website. All rights reserved.
//       </div>
//     </footer>
//   );
// }






root.render(

<div>

<AppImage></AppImage>
<Navbar></Navbar>
<Heading></Heading>
<Round></Round>
<Two></Two>
<Three></Three>

<Four></Four> 
<Five></Five>
<Six></Six>
{/* <Footer></Footer> */}
</div>
);

