import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <video
          src="/The-Continental-Homepage-Web-Loop-v2.mp4"
          autoPlay
          muted
          loop
          style={{ width: '100%'}}
        >
          <source src="video.mp4" type="video/mp4" />
        </video> 
        <div style={{ position: 'absolute', top: 150, left: 15, padding: '1rem' }}>
          <a href="#" style={{ color: '#BFDACC' }}>Itinerary</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#BFDACC' }}>Venue</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#BFDACC' }}>Dress Code</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#BFDACC' }}>Photos</a>
          <br></br>
          <br></br>
          <a href="#" style={{ color: '#BFDACC' }}>RSVP</a>
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
      <div style={{ height: '33%', backgroundColor: 'FCF9F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Itinerary</div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div style={{ marginRight: '5rem', color: '#729A90' }}>2pm</div>
          <div style={{ color: '#2B1105' }}>Ceremony</div>
        </div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div style={{ marginRight: '5rem', color: '#729A90' }}>5pm</div>
          <div style={{ color: '#2B1105' }}>Reception</div>
        </div>
        </div>
    </main>
  );
}


