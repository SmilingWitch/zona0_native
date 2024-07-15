import AsyncStorage from "@react-native-async-storage/async-storage";

export const getObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null; 
    } catch(e) {
      // error reading value
      console.error(e);
      return null;
    }
  };
  