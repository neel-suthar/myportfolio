import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
	const [show, setShow] = useState(false);
	const [projectId, setProjectId] = useState(0);
	const handleClose = () => setShow(false);
	const handleShow = (id) => {
		setProjectId(id);
		setShow(true);
	};

	const projects = [
		{
			id: 0,
			title: "Microservices using Spring Boot & Spring Cloud",
			technologies: "(JAVA, Spring, Zuul, OpenFeign, Eureka, Zipkin)",
			description: `◉ Created Spring Cloud config server to manage the external properties across different environments in a central place.
      ◉ Built and set up the Eureka discovery server to register services and used OpenFeign for API to API communication.
      ◉ Configured Zuul and Spring Cloud API gateways with Zipkin and ActiveMQ for distributed tracing and logs streaming.
			◉ Developed Property File Access, Product Stock, and Product Enquiry services with multiple instances.`,
			gihubLink: null,
			live: null,
		},
		{
			id: 1,
			title: "Volunteering Management System",
			technologies: "(JAVA, Spring Boot, React, Bootstrap, HTML)",
			description: `◉ Developed a system where students can apply for volunteering under professor on their department’s approval.
      ◉ Designed the database and created API to serve the data on React front-end and added authentication using Spring Boot.
      ◉ Designed and created dashboards for users such as students, professors, department admin and admin using Bootstrap.`,
			gihubLink: null,
			live: null,
		},
		{
			id: 2,
			title: "Movie Recommendation System",
			technologies: "(Python, Pandas, NumPy, The Movies Dataset)",
			description: `◉ Built a system to recommend several movies to a user based on their input movie with help of The Movies Dataset.
      ◉ Developed a logic to identify and convert unique genres, cast, and crew information into binary format for each movie.
      ◉ Built a distance function to calculate the similarity scores between two movies using genres and cast information.
      ◉ Developed kNN from scratch using distance function to get neighbors based on similarity; got highly accurate results.`,
			gihubLink: "https://github.com/neel-suthar/movie_recomm_system",
			live: null,
		},
		{
			id: 3,
			title: "Object Counting on webcam – Object Detection",
			technologies: "(Python, keras, TensorFlow, OpenCV, pandas, YOLOv3)",
			description: `◉ Trained object detection model with the help of MS COCO dataset using YOLOv3 object detection system and Keras.
      ◉ Created image processing steps to prepare an image for prediction using Keras and used Matplotlib to display output.
      ◉ Built a logic to process the live webcam feed for prediction, identifying objects, and bounding boxes in a live frame.
      ◉ Made detection process easy by using classes array to identify specific objects in a frame; can be tweaked easily.`,
			gihubLink: "https://github.com/neel-suthar/object_detection_CSE6363",
			live: null,
		},
		{
			id: 4,
			title: "Rating Predictor on Game Review",
			technologies:
				"(Python, NumPy, Pandas, SVM, sklearn, Python Flask, AWS EC2)",
			description: `◉ Developed a Flask app to predict the rating of a given review on a scale of 1-10 and deployed it on AWS EC2 instance.
      ◉ Developed a function to clean and format the reviews and ratings from a BoardGameGeek Reviews(13m) dataset.
      ◉ Vectorized reviews using sklearn TfidfVectorizer for model training and normalized their ratings to gain better accuracy.
      ◉ Trained the data using sklearn LinearSVC then saved the model as well as vectorizer using pickle to use for prediction.`,
			gihubLink: "https://github.com/neel-suthar",
			live: null,
		},
		{
			id: 5,
			title: "kNN classifier from scratch",
			technologies: "(Python)",
			description: `◉ Built kNN classifier from scratch with different distance measures and custom data cleaning, preprocessing functions.
      ◉ Applied kNN on breast_cancer, car, and hayes_roth dataset and was able to achieve higher accuracy than WEKA.`,
			gihubLink: "https://github.com/neel-suthar/kNN_classifier",
			live: null,
		},

		{
			id: 6,
			title: "Covid Cases",
			technologies: "(Java, Spring, Thymleaf, Bulma, HTML)",
			description: `◉ Developed a web app using Java & Spring Boot which shows confirmed covid cases as of today and changes in cases.
      ◉ Used Scheduling to fetch the new data every day automatically from the source and deployed the app on Heroku.`,
			gihubLink: "https://github.com/neel-suthar/covid19_cases_global",
			live: "https://covid19-global-daily.herokuapp.com/",
		},
		{
			id: 7,
			title: "Daily Stars-APOD",
			technologies: "(React, JavaScript, HTML, CSS)",
			description: `◉ Built a web app that display astronomy picture of a day using NASA-apod API, deployed it using Heroku.`,
			gihubLink: "https://github.com/neel-suthar/daily_stars",
			live: "https://daily-stars-apod.herokuapp.com/",
		},
	];

	return (
		<section
			className="project section"
			id="projects"
			style={{ backgroundColor: "#f8f8ff" }}
		>
			<h2 className="section-title">Projects</h2>

			<div className="project__container bd-grid">
				{projects.map((project) => (
					<div
						className="project__img"
						onClick={() => handleShow(project.id)}
						key={project.id}
					>
						<p className="project__subtitle">{project.title}</p>
						<p className="project__text">{project.technologies}</p>
					</div>
				))}
				<div
					onHide={handleClose}
					className="modal"
					backdrop="static"
					style={{ display: show ? "block" : "none" }}
				>
					<div className="modal-content">
						<p className="modal__close" onClick={handleClose}>
							<FontAwesomeIcon icon={faWindowClose} />
						</p>
						<p className="modal__title">{projects[projectId].title}</p>
						<p className="modal__subtitle">
							{projects[projectId].technologies}
						</p>
						<p className="modal__text" style={{ whiteSpace: "pre-line" }}>
							{projects[projectId].description}
						</p>
						<a
							href={projects[projectId].gihubLink}
							target="_blank"
							rel="noreferrer"
							className="modal-btn"
							onClick={handleClose}
							style={{ textAlign: "center" }}
						>
							View Code &nbsp;
							<FontAwesomeIcon icon={faGithub} />
						</a>
						{projects[projectId].live === null ? (
							""
						) : (
							<a
								href={projects[projectId].live}
								target="_blank"
								rel="noreferrer"
								className="modal-btn"
								onClick={handleClose}
								style={{ textAlign: "center", backgroundColor: "red" }}
							>
								Watch it Live! &nbsp;
								<FontAwesomeIcon icon={faDesktop} />
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
