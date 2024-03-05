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
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {Object.keys(projects).map((projectId) => (
            <div key={projectId} style={{maxWidth: '300px', backgroundColor: '#000', color: '#fff', borderRadius: '5px'}}>
              <img src={projects[projectId].img} />
              <p>{projects[projectId].desc}</p>
              <p>URL:<a href={projects[projectId].url}> Live Site</a></p>
            </div>
          ))}
          </div>
        </div>
    )
}