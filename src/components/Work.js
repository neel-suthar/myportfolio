import React, { Component } from 'react'

export class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExp: [
        {
          id: 1,
          companyName: "The University of Texas at Arlington",
          position: "Graduate Teaching Assistant/Webmaster",
          fromDate: "Jan 2021",
          toDate: "Present",
          description: `👉 Managing and updating the potential information for a website of the Department of Marketing, College of Business.
          👉 Helping department faculties and Ph.D. students in their day to day tasks and assessing any technical issues.
          👉 Maintaining the electronic devices and other kinds of resources provided to faculties and students via department.`
        },
        {
          id: 2,
          companyName: "Writopedia Consultants Pvt. Ltd.",
          position: "Software Developer",
          fromDate: "May 2019",
          toDate: "Oct 2019",
          description: `👉 Designed and implemented a database to keep track of the most liked articles of various hot topics for SEO purposes. 
          👉 Developed many blog-post-oriented pages for websites using React.js, Flask, Django, HTML, PHP, and WordPress API.
          👉 Built a PoemDiary app for iOS with an authentication feature for privacy using Expo and React Native framework.`
        },
        {
          id: 3,
          companyName: "eInfoTechs IT Solution",
          position: "Machine Learning Intern",
          fromDate: "Aug 2018",
          toDate: "Apr 2019",
          description: `👉 Reduced training time by developing custom functions to clean and process data gathered from the various dataset.
          👉 Trained various ML models for sentiment analysis of tweets, animal detection, and signature extraction from a document.
          👉 Developed and deployed ML web apps related to brain tumor detection, motion detector, and crowd control on AWS.`
        },
        {
          id: 4,
          companyName: "Divine IT Hub",
          position: "Web Developer",
          fromDate: "Jan 2018",
          toDate: "Jun 2018",
          description: `👉 Built custom reusable, responsive, and intuitive components single-handedly using scalable framework React.js.
          👉 Improved consistency of existing apps by replacing commonly used fields with attractive reusable components.
          👉 Enhanced existing database functionalities by implementing backend services using Node.js to be used with many apps.`
        }
      ]
    }
    // console.log(this.state.workExp);
  }

  render() {
    // workExp = {...this.state.workExp};
    return (
      <section className="about section " id="work" style={{ backgroundColor: "#f8f8ff" }}>
        <h2 className="section-title">Work</h2>

        <div className="work__container bd-grid" style={{ alignItems: "normal" }}>
          {this.state.workExp.map((workExp) => (
            <div className="work__img" key={workExp.id}>
              <p className="work__subtitle">{workExp.companyName}</p>
              <p className="work__subtitle_position">{workExp.position}</p>
              <p className="work__subtitle_date">{workExp.fromDate} - {workExp.toDate}</p>
              <p className="work__text" style={{ whiteSpace: "pre-line" }}>{workExp.description}</p>
            </div>
          ))}
        </div>

      </section>
    )
  }
}

export default Work
