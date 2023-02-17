import React from 'react';
import logo from '../image/kiwify-green-logo.png'

const Login = () => {
    return (
        <div>

            <div id='layout'>
                <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <img src={logo} alt="" className='mx-auto h-12 w-auto' />
                            <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Entrar na sua conta</h2>
                            <p className='mt-2 text-center text-base leading-5 text-gray-600'>
                                Ou   <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">fazer cadastro</a>
                            </p>

                        </div>
                        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                                <div>
                                    <label className='block text-start text-sm font-medium leading-5 mb-1 text-gray-700'>E-mail</label>
                                    <div>
                                        <input type="email" className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full' autoComplete='off' name='null' />
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <label className='block text-start text-sm font-medium leading-5 mb-1 text-gray-700'>Senha</label>
                                    <div>
                                        <input type="text" className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full' autoComplete='off' name='null' />
                                    </div>

                                </div>

                                <div className="mt-2 flex items-center justify-end">
                                    <div class="text-sm leading-5">
                                        <a href="/ResetPassword" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                            Esqueceu a senha?
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <span className="block w-full rounded-md shadow-sm">
                                        <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"> Entrar
                                        </button>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;