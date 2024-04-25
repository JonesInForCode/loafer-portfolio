import React from "react";
import getData from "../../api";
import Modal from "../components/Modal";
import styles from './Projects.module.css'

export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [showModal, setShowModal] = React.useState(true)

  const closeModal = () => {
    setShowModal(false);
    setShowPage(true);
  };

  React.useEffect(() => {
    getData().then((data) => {
      if (data) {
        setProjects(data);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div>
        <Modal isOpen={showModal} onClose={closeModal}>
          <h2>WARNING!</h2>
          <p>
            This area is under construction and only the oldest projects are currently live
          </p>
        </Modal>
      </div>
      <div>
        <div className={styles.projectsContainer}>
          {Object.keys(projects).map((projectId) => (
            <div
              key={projectId} className={styles.projectCard}>
              <img className={styles.projectImage} src={projects[projectId].img} />
              <div className={styles.projectDescContainer}>
                <p>{projects[projectId].desc}</p>
                <p>
                  URL:<a href={projects[projectId].url}> Live Site</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
