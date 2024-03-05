import React from 'react'
import getData from '../../api'



export default function Projects() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    getData().then(data => {
      if (data) {
        setProjects(data);  
      }
    })
  }, [])
  console.log(projects)
    return (
        <div>
          {projects.map(project => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>))}
        </div>
    )
}