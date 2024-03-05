import { app, database } from './firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const collectionRef = collection(database, 'projects');

const getData = async () => {
    try {
        const response = await getDocs(collectionRef);

        const projectData = {};

            response.docs.forEach((doc) => {
                projectData[doc.id] = { ...doc.data(), id: doc.id }
            });

            console.log(projectData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

getData();