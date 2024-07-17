import { BASE_URL } from '../../../config';

async function fetchData(endpoint, body = null, headers = null, logout) {
  let options = {
    method: 'GET', // Método predeterminado
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      headers
    }
  };

  // Modificar el método y el cuerpo si se proporcionan
  if (body !== null || logout) {
    options.method = 'POST'; // Cambiar a POST u otro método según sea necesario
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    /*if (!response.ok) {
      
      throw response.status;
    }*/
    return await response.json(); // Utilizar await para obtener el resultado de json()
  
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-lanza el error para que pueda ser capturado por el llamador
  }
}

export { fetchData };

