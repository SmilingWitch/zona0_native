
export const generateRandomPhoneNumber = (prefix, remainingLength ) => {
    // Genera un número aleatorio con los dígitos restantes
    const randomDigits = Math.floor(Math.random() * Math.pow(10, remainingLength)).toString().padStart(remainingLength, '0');
  
    // Combina el prefijo con los dígitos aleatorios
    const phoneNumber = prefix + randomDigits;
    
    return phoneNumber;
  };