import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addUser from "../state/AuthSlice";
import { AuthApi } from "../api/AuthAPi";

export const reactHookForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState, reset, setError } = useForm({
        mode: "onChange"
    });

    const { errors } = formState;

    const onSubmit = async (data) => {
        try {
            dispatch(AuthApi(data));
            reset();
        } catch (err) {
            console.log("error in Submitting --->", err);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        reset,
        setError,
        onSubmit
    };
};