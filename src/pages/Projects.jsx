import React from 'react';
import getData from '../../api';



export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    getData().then(data => {
      if (data) {
        setProjects(data);  
      }
    });
  }, []);
  console.log(projects);
    return (
        <div>
          {Object.keys(projects).map((projectId) => (
            <div key={projectId}>
              <p>{projects[projectId].url}</p>
            </div>
          ))}
        </div>
    )
}