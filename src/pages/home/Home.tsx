import './Home.css'

// Importaciones de barril
import { useExampleHook, useAnotherHook } from '../../hooks'
import {getAllUsersParams} from '../../services';
import { useEffect } from 'react';
import { strings } from '../../utils'
// import { User } from '../../interfaces'


const Home = () => {
  
  // uso de hooks para evitar never used errors
  useExampleHook();
  useAnotherHook();

  // .get con params de ejemplo
  useEffect(() => {
    getAllUsersParams({
      age: 25,
      pet: true,
    })
    .then((response) => {
      console.log('Usuarios filtrados:', response.data);
    })
    .catch((error) => {
      console.log('Error al obtener usuarios:', error);
    });
  }, []);
   

  return (
    <div>
        <h1>{strings.welcome}</h1>
        <h2>Home test 2</h2>
    </div>
  )
}

export default Home
