// import React from 'react';
// import getData from '../../api';



// export default function Projects() {
//   const [projects, setProjects] = React.useState([]);
//   React.useEffect(() => {
//     getData().then(data => {
//       if (data) {
//         setProjects(data);  
//       }
//     });
//   }, []);
//     return (
//         <div>
//           <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '50px', justifyItems: 'center', padding: '100px'}}>
//           {Object.keys(projects).map((projectId) => (
//             <div key={projectId} style={{width: '300px', backgroundColor: '#000', color: '#fff', borderRadius: '5px', padding: '1.5em'}}>
//               <img src={projects[projectId].img} />
//               <p>{projects[projectId].desc}</p>
//               <p>URL:<a href={projects[projectId].url}> Live Site</a></p>
//             </div>
//           ))}
//           </div>
//         </div>
//     )
// }