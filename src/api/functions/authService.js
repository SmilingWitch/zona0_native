import { fetchData } from "../../api/authentication/fetchData";
import { setUser, setAccessToken, setRefreshToken, setZonaPoint } from '../../store/reducer';

export const login = async (values, setError, dispatch, navigation) => {
    try {
        const data = await fetchData('/accounts/login/', values);
        if (data.error) {
            setError(data.error.non_field_errors);
        } else {
            dispatch(setUser(data.user));
            dispatch(setAccessToken(data.access));
            dispatch(setRefreshToken(data.refresh));
            dispatch(setZonaPoint(data.user.zona_point));
            navigation.navigate('Welcome');
        }
    } catch (error) {
        setError("Unable to log in with provided credentials.");
        console.error("Error en el componente", error);
    }
};
