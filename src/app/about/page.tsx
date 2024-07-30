'use client'
export default function About() {
  return (
    <div>
      <style jsx global>{`
        body {
          background-image: url('/swiper_imgs/img1.jpg'); /* Replace with your desired image */
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
        }
      `}</style>
      <div className="overlay"></div>
      <div className="content flex min-h-screen flex-col items-center justify-between">
        <div className="text-background max-w-4xl text-lg text-justify leading-8 space-y-6 px-4 sm:px-6 md:px-0">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p>
            <strong>Project RIGHT</strong> is a pioneering initiative dedicated to advocating for the transgender community in India. Established in October 2023, Project RIGHT focuses on promoting awareness and providing access to quality physical and mental healthcare for transgender individuals. The program conducts in-depth needs assessments, organizes monthly health camps, and offers general health checkups and well-being seminars. Through these efforts, <em>Project RIGHT</em> aims to foster a more inclusive society and support the well-being of transgender people.
          </p>
          <div>
            <h2 className="text-2xl font-semibold mb-4">About the Founder</h2>
            <div className="flex flex-col md:flex-row items-start md:space-x-6">
              <div className="flex-1">
                <p>
                  <strong>Safira Chatwal</strong> is the visionary founder of <strong>Project RIGHT</strong>, driven by her deep commitment to social justice and equality. Safira's passion for advocacy and community service led her to create <strong>Project RIGHT</strong> as a platform to address the healthcare needs of the transgender community in India.
                </p>
                <p>
                  Safira has a strong academic background, studying <em>Math</em>, <em>Politics</em>, <em>Economics</em>, and <em>Physics</em> at Marlborough College. She has held various leadership roles, including <strong>Co-Head of the International Community</strong> and <strong>Founder-Captain</strong> of the women's basketball team. Safira has also enriched her knowledge through programs like the <em>College Writing course</em> at Northwestern University's Center for Talent Development and the <em>Political Ideologies</em> program at Columbia University.
                </p>
              </div>
              <img
                src="https://lh6.googleusercontent.com/zpNEGabzczP1evREYv6Hr0k5s4zVvvqolWohejJsDk6TzMVWweI5Y93mLSJ21aZRAxCG0dYgsb4OsTMSRmmmxYRnvXfqry7QpEjCSs2-WQE1Yz6-aHzzZF7Qc6G4EHxOEg=w1280"
                alt="Safira Chatwal"
                className="w-48 h-auto mt-6 md:mt-0"
              />
            </div>
          </div>
          <p className="mt-6">
            <a 
              href="https://www.projectright.net/about"
              className="text-blue-600 underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              To know more about us, visit here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

