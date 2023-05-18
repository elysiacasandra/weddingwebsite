'use client'
import InputSelect from '@/components/InputSelect';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  type DietaryRequirement = 'None' | 'Vegetarian' | 'Vegan' | 'Halal' | 'Kosher';
type AdditionalGuests = 0 | 1 | 2 | 3 | 4 | 5;
type AttendanceStatus = 'Accept with pleasure' | 'Regretfully decline';

type FormValues = {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  dietaryRequirement: string;
  additionalGuests: AdditionalGuests;
  firstNameAG1: string;
  lastNameAG1: string;
  dietaryRequirementAG1: string;
  firstNameAG2: string;
  lastNameAG2: string;
  dietaryRequirementAG2: string;
  firstNameAG3: string;
  lastNameAG3: string;
  dietaryRequirementAG3: string;
  firstNameAG4: string;
  lastNameAG4: string;
  dietaryRequirementAG4: string;
  firstNameAG5: string;
  lastNameAG5: string;
  dietaryRequirementAG5: string;
  attendanceStatus: AttendanceStatus[];
};

const initialFormValues: FormValues = {
  mobileNumber: '',
  firstName: '',
  lastName: '',
  dietaryRequirement: 'None',
  additionalGuests: 0,
  attendanceStatus: [],
  firstNameAG1: '',
  lastNameAG1: '',
  dietaryRequirementAG1: '',
  firstNameAG2: '',
  lastNameAG2: '',
  dietaryRequirementAG2: '',
  firstNameAG3: '',
  lastNameAG3: '',
  dietaryRequirementAG3: '',
  firstNameAG4: '',
  lastNameAG4: '',
  dietaryRequirementAG4: '',
  firstNameAG5: '',
  lastNameAG5: '',
  dietaryRequirementAG5: ''
};

const scrollToRsvp = () => {
  const element = document.getElementById('rsvp');
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

const scrollToPhotos = () => {
  const element = document.getElementById('photos');
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

const scrollToDresscode = () => {
  const element = document.getElementById('dresscode');
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

const scrollToVenue = () => {
  const element = document.getElementById('venue');
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

const scrollToItinerary = () => {
  const element = document.getElementById('itinerary');
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};

// const dietaryRequirements: DietaryRequirement[] = ['None', 'Vegetarian', 'Vegan', 'Halal', 'Kosher'];
const additionalGuestsOptions: AdditionalGuests[] = [0, 1, 2, 3, 4, 5];
const attendanceStatusOptions: AttendanceStatus[] = ['Accept with pleasure', 'Regretfully decline'];

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <div className='h-screen'>
        <video
          src="/The-Continental-Homepage-Web-Loop-v2.mp4"
          autoPlay
          muted
          loop
          style={{
            width: 'auto',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video> 
        <div className='absolute top-1/2 left-15 transform -translate-y-1/2 p-4' style={{ fontSize: '1.2rem'}}>
          <button onClick={scrollToItinerary} style={{ color: '#FFFFFF' }}>Itinerary</button>
          <br></br>
          <br></br>
          <button onClick={scrollToVenue} style={{ color: '#FFFFFF' }}>Venue</button>
          <br></br>
          <br></br>
          <button onClick={scrollToDresscode} style={{ color: '#FFFFFF' }}>Dress Code</button>
          <br></br>
          <br></br>
          <button onClick={scrollToPhotos} style={{ color: '#FFFFFF' }}>Photos</button>
          <br></br>
          <br></br>
          <button onClick={scrollToRsvp} style={{ color: '#FFFFFF' }}>RSVP</button>
        </div>
        <div style={{ position: 'absolute', top: 10, right: 10, padding: '2rem' }}>
          <button onClick={scrollToRsvp} style={{ backgroundColor: '#BFDACC', color: '#729A90', padding: '0.5rem 1.5rem', border: 'none' }}>
            RSVP
          </button>
        </div>
        <div style={{ position: 'absolute', bottom: '15%', width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '5rem', color: '#FFF' }}>Jake & Taylor</div>
            <div className='justify-between' style={{ fontSize: '1.2rem', color: '#FFF' }}>
              <p>December 30, 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Continental Hotel Sorrento</p>
            </div>
        </div>
      </div>
      </div>
      <div id='itinerary' className='pb-16' style={{ height: '33%', backgroundColor: 'FCF9F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='pt-16' style={{ fontSize: '3rem', color: '#2B1105',  }}>Itinerary</div>
        <div className='' style={{ fontSize: '1rem', color: '#2B1105', textAlign: 'center' }}>
              <p>December 30, 2023</p>
              <p>The Continental Hotel Sorrento</p>
            </div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div  style={{ fontSize: '1.5rem', marginRight: '35rem', color: '#729A90' }}>2pm</div>
          <div>
          <div style={{ fontSize: '1.5rem', color: '#2B1105', marginLeft: '-25rem' }}>Ceremony</div>
          <div style={{ fontSize: '1rem', color: '#2B1105', marginLeft: '-25rem' }}>Hello</div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div  style={{ fontSize: '1.5rem', marginRight: '35rem', color: '#729A90' }}>5pm</div>
          <div>
          <div style={{ fontSize: '1.5rem', color: '#2B1105', marginLeft: '-25rem' }}>Reception</div>
          <div style={{ fontSize: '1rem', color: '#2B1105', marginLeft: '-25rem' }}>Hello</div>
          </div>
      </div>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div  style={{ fontSize: '1.5rem', marginRight: '35rem', color: '#729A90' }}>11pm</div>
          <div>
          <div style={{ fontSize: '1.5rem', color: '#2B1105', marginLeft: '-25rem' }}>Afterparty</div>
          <div style={{ fontSize: '1rem', color: '#2B1105', marginLeft: '-25rem' }}>Hello</div>
          </div>
      </div>
      </div>
      <div id='venue' style={{ 
backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/jake&taylor.png')`,
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
      <div id='dresscode' className='pb-16' style={{ height: '33%', backgroundColor: 'FCF9F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className='pt-16 pb-8' style={{ fontSize: '3rem', color: '#2B1105' }}>Dress Code</div>
        
          <div style={{ fontSize: '1.5rem', color: '#2B1105' }}>Formal Attire</div>
          
      </div>
      <div id='photos' style={{ 
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)),url(${'/theconti.jpeg'})`,
  backgroundPosition: "top",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  flexDirection: "column",
  width: "100vw",
}}>
  <div className='pt-8 pb-72 mr-8'>
    <div className='' style={{ color: "#2B1105" }}>
      <h3 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Photos</h3>
      <p style={{ fontSize: "1rem" }}>
        Return here once Jake & Taylor tie the knot. 
      </p>
    </div>
  </div>
</div>
<div id='rsvp' className='pb-16 h-screen bg-FCF9F7 flex flex-col items-center justify-center' >
        <div className='pt-16 pb-8' style={{ fontSize: '3rem', color: '#2B1105' }}>RSVP</div>
        
          <div style={{ fontSize: '1.5rem', color: '#2B1105' }}>Please RSVP by the 1st of September.</div>
          <form>
      <div className="mt-8 mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile-number">
          Mobile number
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile-number"
          type="text"
        />
      </div>
      <div className='grid grid-cols-2'>
      <div className="col-span-1 mr-1">
        <label className="block text-gray-700 font-bold" htmlFor="first-name">
          First name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first-name"
          type="text"
        />
      </div>
      <div className="col-span-1 ml-1">
        <label htmlFor="lastName" className="mb-2 font-semibold text-gray-600">
          Last name
        </label>
        <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      </div>
      <div className="flex flex-col my-4 ">
      <label className="block text-gray-700 font-bold" htmlFor="mobile-number">
          Dietary requirements
        </label>
  <InputSelect
                    id="dietaryRequirements"
                    label="Dietary requirements"
                    placeholder="Select"
                    fullWidth
                    small
                    options={[
                      {
                        value: 'none',
                        label: 'None',
                      },
                      {
                        value: 'vegetarian',
                        label: 'Vegetarian',
                      },
                      {
                        value: 'vegan',
                        label: 'Vegan',
                      },
                      {
                        value: 'glutenfree',
                        label: 'Gluten Free',
                      },
                      {
                        value: 'other',
                        label: 'Other',
                      },
                    ]}
                    value={initialFormValues.dietaryRequirement}
                    onChange={(value) => {scrollToRsvp}}
                  />
</div>
<div className="flex flex-col mb-4">
  <label htmlFor="additionalGuests" className="mb-2 font-semibold text-gray-600">
    Number of additional guests (excluding yourself)
  </label>
  <div className="flex flex-row justify-start items-center">
    {[0, 1, 2, 3, 4, 5].map((option) => (
      <label key={option} className="inline-flex items-center mx-2">
        <input
          type="radio"
          className="form-radio h-4 w-4 text-green-700 transition duration-150 ease-in-out"
          name="additionalGuests"
          value={option}
        />
        <span className="ml-2 text-gray-700">{option}</span>
      </label>
    ))}
  </div>
</div>
<div className="flex flex-col mb-4">
  <span className="mb-2 font-semibold text-gray-600">Attendance status</span>
  <div className="flex flex-row justify-start items-center">
    <label className="inline-flex items-center mx-2">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        name="acceptWithPleasure"
      />
      <span className="ml-2 text-gray-700">Accept with pleasure</span>
    </label>
    <label className="inline-flex items-center mx-2">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        name="regretfullyDecline"
      />
      <span className="ml-2 text-gray-700">Regretfully decline</span>
    </label>
  </div>
</div>
<div className="flex items-center justify-center">
  <button
    type="submit"
    className="px-6 py-2 text-white font-semibold transition duration-150 ease-in-out shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
style={{ backgroundColor: '#BFDACC', color: '#729A90', padding: '0.5rem 1.5rem', border: 'none' }}>
    Submit
  </button>
</div>
</form>        
      </div>
    </main>
  );
}


