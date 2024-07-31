'use client';
import Image from 'next/image';
import founder from '../../../public/founder.png';
import { useState,useEffect } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/swiper_imgs/img1.jpg",
    "/swiper_imgs/img2.png",
    "/swiper_imgs/img3.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);
  return (
    <div>
      <style jsx global>{`
        body {
          background-image: url(${images[currentImageIndex]}); /* Replace with your desired image */
          background-size: cover;
          background-position: center;
          transition: background-image 1s;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .content {
          position: relative;
          z-index: 1;
          padding: 4rem;
        }
        .text-background {
          background-color: rgba(255, 255, 255, 0.9); /* Whitish semi-transparent background */
          padding: 2rem;
          border-radius: 8px; /* Optional: adds rounded corners */
          max-width: 100%;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .content {
            padding: 2rem; /* Reduced padding for smaller screens */
          }
          .text-background {
            padding: 1rem; /* Reduced padding for smaller screens */
          }
        }
      `}</style>
      <div className="overlay"></div>
      <div className="content flex min-h-screen flex-col items-center justify-between">
        <section className="text-background text-lg text-justify leading-8 space-y-6 px-4 sm:px-6 md:px-8">
          <header>
            <h1 className="text-4xl font-bold mb-8">About Project RIGHT</h1>
          </header>
          <p>
            Founded in October 2023, <strong>Project RIGHT</strong> (Real Inclusion in Gender Health Treatment) is a social initiative that has partnered with Delhi-based NGO, the Mitr Trust, to change the landscape of healthcare for trans communities in Delhi. The vision sustaining the Project is to work towards ameliorating the physical health, mental well-being, and social reception of trans people. Towards this end, the Project constructed a one-of-a-kind Gender Inclusive Health Center at the Mitr Trust’s facilities in Delhi to provide the necessary support to trans people across various physical and mental ailments, and aims to increase the impact of the daily operations of the Center.
          </p>
          <p>
            Committed to prioritizing research-driven and evidence-based interventions to understand the contextualized needs of the trans community in Delhi NCR, the Project aims to predicate its work on an in-depth survey it conducted in February 2024 to ascertain the localized problems—across the indices of physical health, mental well-being, and social perception—of trans individuals in Delhi. Based on conclusions drawn from the survey, the Project plans to conduct regular health camps, and STI-panel checkups at the Mitr Trust to deliver subsidized or free-of-cost health services to trans individuals.
          </p>
          <p>
            Additionally, the Project aims to develop, publish, and distribute original knowledge resources about specific knowledge relating to the health needs of the trans community. Further, the Project plans to conduct weekly well-being seminars to sensitize the wider public about the needs of the trans community, as a way of countering stigma, and to equip caregivers and communities with the ability to offer preventative care to trans individuals and support them with their mental well-being.
          </p>
          <section>
            <h2 className="text-2xl font-semibold mb-4">About the Founder</h2>
            <div className="flex flex-col items-center">
              <p className="text-center mb-4">
                <strong>Safira Chatwal</strong> is the visionary founder of <strong>Project RIGHT</strong>. Her dedication to social justice and equality inspired her to establish this project to address the healthcare needs of the transgender community in India.
              </p>
              <div className="w-full max-w-xs mb-4">
                <Image
                  src={founder}
                  alt="Safira Chatwal, Founder of Project RIGHT"
                  className="w-full rounded-full h-auto mx-auto"
                  layout="responsive"
                />
              </div>
              <p className="text-center">
                Safira has an extensive academic background, including studies in <em>Math</em>, <em>Politics</em>, <em>Economics</em>, and <em>Physics</em> at Marlborough College. She has held leadership roles such as <strong>Co-Head of the International Community</strong> and <strong>Founder-Captain</strong> of the women&apos;s basketball team. Her educational accomplishments include the <em>College Writing course</em> at Northwestern University and the <em>Political Ideologies</em> program at Columbia University.
              </p>
            </div>
          </section>
          <footer className="mt-6">
            <a 
              href="https://www.projectright.net/about"
              className="text-blue-600 underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              To know more about us, visit here
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}
