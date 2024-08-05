import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../functions/authService';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleLogin = async (values, navigation) => {
        setLoading(true);
        await login(values, setError, dispatch, navigation);
        setLoading(false);
    };

    return { loading, error, handleLogin };
};

export default useAuth;
