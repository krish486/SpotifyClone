import React from "react";
import { AuthApi } from "../../api/AuthAPi";
import { reactHookForm } from "../../hooks/reactHookForm";

const Login = () => {

    let { register, handleSubmit, errors, reset, setError, onSubmit } = reactHookForm();


    return (
        <div className="w-full h-screen bg-[#121212] flex items-center justify-center">
            <div className="w-95 bg-[#181818] p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="https://tse4.explicit.bing.net/th/id/OIP.LSu4G5QorZk1qF4c0QwO5QHaHa?cb=thfc1&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="logo"
                            className="w-12 h-12 mb-3"
                        />
                        <h1 className="text-3xl font-bold text-white">
                            Log in
                        </h1>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            user name
                        </label>
                        <input
                            type="text"
                            placeholder="User Name"
                            {...register("username", { required: "user name is required" })}
                            className="w-full px-4 py-2 rounded-md bg-[#121212] border border-gray-700 text-white focus:outline-none focus:border-green-500"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm text-gray-400 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-2 rounded-md bg-[#121212] border border-gray-700 text-white focus:outline-none focus:border-green-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition duration-200">
                        Log In
                    </button>

                </form>



            </div>
        </div>
    );
};

export default Login;