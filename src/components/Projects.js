import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setProjectId(id);
    setShow(true);
  }

  const projects = [
    {
      id: 0,
      title: "Rating Predictor on Game Review",
      technologies: "(Python, NumPy, Pandas, SVM, sklearn, Python Flask, AWS EC2)",
      description: `◉ Developed a Flask app to predict the rating of a given review on a scale of 1-10 and deployed it on AWS EC2 instance.
      ◉ Developed a function to clean and format the reviews and ratings from a BoardGameGeek Reviews(13m) dataset.
      ◉ Vectorized reviews using sklearn TfidfVectorizer for model training and normalized their ratings to gain better accuracy.
      ◉ Trained the data using sklearn LinearSVC then saved the model as well as vectorizer using pickle to use for prediction.`,
      gihubLink: "https://github.com/neel-suthar"
    },
    {
      id: 1,
      title: "Movie Recommendation System",
      technologies: "(Python, Pandas, NumPy, The Movies Dataset)",
      description: `◉ Built a system to recommend several movies to a user based on their input movie with help of The Movies Dataset.
      ◉ Developed a logic to identify and convert unique genres, cast, and crew information into binary format for each movie.
      ◉ Built a distance function to calculate the similarity scores between two movies using genres and cast information.
      ◉ Developed kNN from scratch using distance function to get neighbors based on similarity; got highly accurate results.`,
      gihubLink: "https://github.com/neel-suthar/movie_recomm_system"
    },
    {
      id: 2,
      title: "Object Counting on webcam – Object Detection",
      technologies: "(Python, keras, TensorFlow, OpenCV, pandas, YOLOv3)",
      description: `◉ Trained object detection model with the help of MS COCO dataset using YOLOv3 object detection system and Keras.
      ◉ Created image processing steps to prepare an image for prediction using Keras and used Matplotlib to display output.
      ◉ Built a logic to process the live webcam feed for prediction, identifying objects, and bounding boxes in a live frame.
      ◉ Made detection process easy by using classes array to identify specific objects in a frame; can be tweaked easily.`,
      gihubLink: "https://github.com/neel-suthar/object_detection_CSE6363"
    },
    {
      id: 3,
      title: "kNN classifier from scratch",
      technologies: "(Python)",
      description: `◉ Built kNN classifier from scratch with different distance measures and custom data cleaning, preprocessing functions.
      ◉ Applied kNN on breast_cancer, car, and hayes_roth dataset and was able to achieve higher accuracy than WEKA.`,
      gihubLink: "https://github.com/neel-suthar/kNN_classifier"
    }
  ];

  return (
    <section className="project section" id="projects" style={{ backgroundColor: "#f8f8ff" }}>
      <h2 className="section-title">Projects</h2>

      <div className="project__container bd-grid">
        {projects.map((project) => (
          <div className="project__img" onClick={() => handleShow(project.id)} key={project.id}>
            <p className="project__subtitle">{project.title}</p>
            <p className="project__text">{project.technologies}</p>
          </div>
        ))}


        <Modal show={show} onHide={handleClose} className="modal" backdrop="static">
          <p className="modal__close" onClick={handleClose}><FontAwesomeIcon icon={faWindowClose} /></p>
          <p className="modal__title">{projects[projectId].title}</p>
          <p className="modal__subtitle">{projects[projectId].technologies}</p>
          <p className="modal__text" style={{ whiteSpace: "pre-line" }}>{projects[projectId].description}</p>
          <a href={projects[projectId].gihubLink} target="_blank" rel="noreferrer" className="modal-btn" onClick={handleClose} style={{ textAlign: "center" }}>View Project &nbsp;<FontAwesomeIcon icon={faGithub} /></a>
        </Modal>
      </div>
    </section>
  )
}

export default Projects
