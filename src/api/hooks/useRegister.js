import { useState } from "react";
import { register } from "../functions/registerService";

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (values, navigation) => {
        setLoading(true);
        await register(values, setError, navigation);
        setLoading(false);
    };

    return { loading, error, handleRegister };
};

export default useRegister;
