import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import profileExample from './profileExample.png'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic1.png'


import emailjs from '@emailjs/browser';


export default function Homepage(){
    const handleform = (event)=>{
        event.preventDefault();
        emailjs.sendForm('service_6h6t5le', 'template_tc2hsfi', event.target, 'IZSWjZbHgna1AgSuz');
        alert("submitted")
    }


    return(
        <div id='home'>
        <div className='Header'>
        <div className= 'logo'>KS</div>
        <nav className='navbar'>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><button><a href='#contact'>Contact</a></button></li>
        </ul>
        </nav>
        </div> 
        <div className='body'>
            <div className='bgImage'></div>
            <div className='front'>
           <h1>
            Kenyatta Speaks
            </h1> 
            <h2>
                Transformative Coach
            </h2>
            <h2>
                "Suppotorting people to move beyond stuck through behaviorial change"
            </h2>
            </div>
        <div className='mission' id='about'>
            <img src={profileExample} width="45%" height="45%"/>
            
            <p>
            <h1>My Mission?</h1>
                As a tranformative coach, my goal is to support
                and guide individuals through a profound journey 
                of personal and professional transfromation. I help my clients 
                uncover their true potential, challenge their limiting beliefs, 
                and faciliate lasting positive change in their lives.
            </p>
        </div>
        <h1 className='serviceheader' id='services'>Services</h1>

        <div className='services'>
            <div className='blk'>
            <h1>
                Transformative Coaching
            </h1>  
            <ul>
                <li>Individual Sessions</li>
                <li>Group Sessions</li>
                <li>Community</li>
               
            </ul>
            </div>
            

            <div className='blk'>
                <h1>
                    Leadership Training
                </h1>
                <ul>
                    <li>Corporate Executives</li>
                    <li>Youth Organizations</li>
                    <li>Non-profits</li>
                   
                    
                </ul>
            </div>

            <div className='blk'>
                <h1>Motivational Speaking </h1>
                <ul> 
                    <li>Finding Your Purpose</li>
                    <li>Unlocking Potential</li>
                    <li>The Power of Mindset</li>
                    
                </ul>
            </div>

            <div className='blk'>
                <h1>Group Facilitations</h1>
                <ul>
                    <li>Emotional Intelligence</li>
                    <li>Mindsets</li>
                    <li>Personality Styles</li>
                   
                </ul>
            </div>
        </div>
       



<div class="scroll-container">
  <img src={pic1} alt="Cinque Terre" width="500" height="350"/>
  <img src={pic2} alt="Forest" width="500" height="350"/>
  <img src={pic3} alt="Northern Lights" width="500" height="350"/>
  <img src={pic4} alt="Mountains" width="500" height="350"/>
  <img src={pic5} alt="Mountains" width="500" height="350"/>
</div>
   
<div className='container'  id='contact'> 
    <h1>Contact Us</h1>
    <form onSubmit={handleform}>
        <label>Full Name</label>
        <input
         type="text" 
         id="name"
        name="name" 
        required/>

        <label>Email Address</label>
        <input 
        type="email" 
        id="email"
        name="email"
        required/>

        <label>Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        

        <button className='submit' type="submit">Send Message</button>
    </form>
    </div>
</div>
        </div>
       
    )
}
