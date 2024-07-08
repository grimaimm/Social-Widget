import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

import CoverPicture from "./components/Profile/coverPicture";
import PhotoProfile from "./components/Profile/photoProfile";
import AdminName from "./components/Profile/adminName";

import LineSection from "./components/Elemen/lineSection";
import SectionWidget from "./components/Elemen/sectionWidget";
import SectionSocialLinks from "./components/Elemen/sectionSocialLinks";

function App() {

  const [links, setLinks] = useState([]);

  useEffect(() => {

    axios.get('/api/links')  // Permintaan GET ke endpoint /api/links
      .then(response => {
        setLinks(response.data);  // Menyimpan data respons ke state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto bg-[#fbfdfc] md:shadow-xl md:rounded-xl md:my-3 card-1 overflow-hidden">
      <main className="pb-0">
        <header className="flex flex-col items-center justify-center">
          <CoverPicture src="/images/coverImage.jpg" />
          <PhotoProfile />
          <AdminName 
              name="Muhammad Rahim"
              location="Yogyakarta, Indonesia"
              pronouns="he/him"
          />
        </header>
        <div className="p-4 md:pb-4 pb-6 space-y-5">
          <LineSection />
          <SectionWidget />

          <section>
            <div className="parent">
            {links.map(link => (
                // Memastikan setiap SectionSocialLinks menerima properti link yang sesuai
                <SectionSocialLinks key={link.id} link={link} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
