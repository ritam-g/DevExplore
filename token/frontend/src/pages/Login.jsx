import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addUser } from "../state/authReducer";

const Login = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

                <h1 className="text-3xl font-bold text-white text-center">
                    Welcome Back
                </h1>

                <p className="text-zinc-400 text-center mt-2">
                    Login to continue
                </p>

                <form
                    onSubmit={
                        handleSubmit(data => {
                            console.log('====================================');
                            console.log(data);
                            console.log('====================================');
                            dispatch(addUser(data))
                        })
                    }
                    className="mt-8 space-y-5">

                    <div>
                        <label className="text-sm text-zinc-300 block mb-2">
                            Email
                        </label>

                        <input
                            type="email"

                            placeholder="Enter your email"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-zinc-300 block mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register("password")}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>

                </form>

                <p className="text-zinc-400 text-sm text-center mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div >
    );
};

export default Login;