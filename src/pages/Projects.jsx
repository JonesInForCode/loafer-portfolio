import React from "react";
import getData from "../../api";
import Modal from "../components/Modal";

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "50px",
            justifyItems: "center",
            padding: "100px",
          }}
        >
          {Object.keys(projects).map((projectId) => (
            <div
              key={projectId}
              style={{
                width: "300px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "5px",
                padding: "1.5em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img style={{ maxWidth: "100%" }} src={projects[projectId].img} />
              <div style={{ flexGrow: "1" }}>
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
