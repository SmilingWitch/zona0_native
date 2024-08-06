import { useState } from "react";
import { operationFetch } from "../functions/operationService";
import { useDispatch, useSelector } from "react-redux";
import { setEffectedOperation } from "../../store/reducer";

const useOperationCont = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()

    const handleOperation = async (values, url, navigation, operation) => {
        console.log("Operation")
        setLoading(true);
        await operationFetch(values, url, navigation, operation, accessToken, setLoading);
        dispatch(setEffectedOperation(true))

    };

    return { loading, error, handleOperation };
};

export default useOperationCont;
