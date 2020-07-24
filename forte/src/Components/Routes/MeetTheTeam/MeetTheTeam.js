import React from "react";
import "./MeetTheTeam.scss";

export default function MeetTheTeam() {
  return (
    <div className="team">
      <h2>Meet the Forte Team</h2>
      <div className="team-card">
        <h3>James</h3>
        <img
          src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1595278302/SEIR%20Project%203/James_Hall_Bill_Wadman_Photo_pugma2.jpg"
          alt="James H."
        />
        <p>
        As a software engineer with a background in non-profit management and the performing arts, I bring perspective and passion to each project I approach. My work in labor relations and remote team management has measurably improved workplace satisfaction and productivity, and my work as a professional musician demonstrates my uncompromising commitment to producing polished, professional products on a tight deadline.
        <br/>
        <br/>
On Forte, I spearheaded the backend development and deployment to Heroku and MongoDB Atlas. I then worked on the logic to show student matches and connections between teachers and students.
        </p>
      </div>
      <div className="team-card">
        <h3>Travis</h3>
        <img
          src="https://res.cloudinary.com/dugmhtotn/image/upload/v1595356277/390149_10150571185433982_1621736946_n.jpg_f3s9by.jpg"
          alt="Travis T."
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="team-card">
        <h3>Tyler</h3>
        <img
          src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1591891578/Project%201%20Images/Promo_Pic_mzq3nw.jpg"
          alt="Tyler D."
        />
        <p>
        I’m a software engineer incorporating a decade of experience in creative media-production roles into my front-end web design projects. My proficiency in applying newly-acquired technical skills in video content creation and audio production translates into my ability to learn and apply the various evolving languages of computer programming. As a full-time musician and performer, I acquired a comfort with public speaking that has helped foster strong leadership skills. My work in film production offices ingrained in me an ability to listen to my colleagues and supervisors, exchange ideas and problem-solving solutions, and work in a cohesive team-oriented environment to accomplish the company’s long-term goals.
        </p>
      </div>
      <div className="team-card">
        <h3>Allie</h3>
        <img src="https://i.imgur.com/XFoG15N.jpg" alt="Allie P." />
        <p>
        These are the components I worked on: Dashboard, Profile, Delete Profile, Edit Profile, Landing, and App.js. I also set up our basic React app and deployed on Surge.
        <br/>
        <br/>
I'm a software developer with a background in customer success and accounting. From my experiences onboarding new customers in my previous role, I've cultivated a passion for improving user experience. As a developer, my goal is to solve customer pain points through software.
        </p>
      </div>
    </div>
  );
}
