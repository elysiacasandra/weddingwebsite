import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import JakeTaylorImage from "/jake&taylor.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <video
          src="/The-Continental-Homepage-Web-Loop-v2.mp4"
          autoPlay
          muted
          loop
          style={{ height: '100%', width: 'auto' }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video> 
        <div style={{ position: 'absolute', top: 150, left: 15, padding: '1rem' }}>
          <a href="#" style={{ color: '#FFFFFF' }}>Itinerary</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#FFFFFF' }}>Venue</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#FFFFFF' }}>Dress Code</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#FFFFFF' }}>Photos</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#FFFFFF' }}>RSVP</a>
        </div>
        <div style={{ position: 'absolute', top: 10, right: 10, padding: '2rem' }}>
          <button style={{ backgroundColor: '#BFDACC', color: '#729A90', padding: '0.5rem 1.5rem', border: 'none' }}>
            RSVP
          </button>
        </div>
        <div style={{ position: 'absolute', bottom: '33%', width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#FFF' }}>Jake & Taylor</div>
          <div className='justify-between'>
            <div style={{ fontSize: '1rem', color: '#FFF' }}>December 30, 2023</div>
            <div style={{ fontSize: '1rem', color: '#FFF' }}>The Continental Hotel Sorrento</div>
          </div>
        </div>
      </div>
      <div className='pb-16' style={{ height: '33%', backgroundColor: 'FCF9F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='pt-16' style={{ fontSize: '3rem', color: '#2B1105' }}>Itinerary</div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div  style={{ fontSize: '1.5rem', marginRight: '15rem', color: '#729A90' }}>2pm</div>
          <div>
          <div style={{ fontSize: '1.5rem', color: '#2B1105' }}>Ceremony</div>
          <div style={{ fontSize: '1rem', color: '#2B1105' }}>Hello</div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div style={{ fontSize: '1.5rem', marginRight: '15rem', color: '#729A90' }}>5pm</div>
          <div style={{ fontSize: '1.5rem', color: '#2B1105' }}>Reception</div>
        </div>
      </div>
      <div style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${'/jake&taylor.png'})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <div className='py-36 w-full' style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
          <div style={{ color: "#FFFFFF", width: "30%" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Venue</h3>
            <p style={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non arcu eget ex tincidunt bibendum. Sed eget augue ut felis maximus sagittis. 
            </p>
          </div>
          <div style={{ color: "#FFFFFF", width: "30%" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Parking</h3>
            <p style={{ fontSize: "1rem" }}>
              Aliquam vitae diam ligula. Sed malesuada augue id neque ultrices lobortis. 
              Sed vel ligula eleifend, vestibulum enim eu, elementum sapien. 
            </p>
          </div>
          <div style={{ color: "#FFFFFF", width: "30%" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Gifts</h3>
            <p style={{ fontSize: "1rem" }}>
              Your presence at our wedding is truly the greatest gift. However should you wish to honour us further, a wishing well will be present on the evening. 
            </p>
          </div>
        </div>
      </div>
      <div className='pb-16' style={{ height: '33%', backgroundColor: 'FCF9F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='pt-16 pb-8' style={{ fontSize: '3rem', color: '#2B1105' }}>Dress Code</div>
        
          <div style={{ fontSize: '1.5rem', color: '#2B1105' }}>Formal Attire</div>
          
      </div>

    </main>
  );
}


