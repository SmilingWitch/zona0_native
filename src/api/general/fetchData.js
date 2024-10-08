import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config';



async function fetchData(endpoint, body = null, headers = null, operation = null) {


  let options = {
    method: 'GET', // Método predeterminado
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      headers
    }
  };
  // Modificar el método y el cuerpo si se proporcionan
 if (operation === "update"){
    options.method = 'PUT'; // Cambiar a POST u otro método según sea necesario
    options.body = JSON.stringify(body);
  } else if(operation === "delete"){
    options.method = 'DELETE'; // Cambiar a POST u otro método según sea necesario
    options.body = JSON.stringify(body);

  }else  if ( body !== null || operation === 'logout') {
    options.method = 'POST'; // Cambiar a POST u otro método según sea necesario
    options.body = JSON.stringify(body);
  } 

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      const data = await response.json();
      return {"error": data};
    }else{
      const data = await response.json();
      return data;
    }

    
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-lanza el error para que pueda ser capturado por el llamador
  }
}




export { fetchData };

