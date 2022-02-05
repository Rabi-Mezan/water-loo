import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Feedback from './Feedback/Feedback';
import Mybooking from './Mybooking/Mybooking';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const { logout } = useAuth()

    return (
        <div>

            <link rel="stylesheet" to="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div class="min-h-screen flex flex-row bg-gray-100">
                <div class="flex flex-col w-60 bg-white rounded-r-3xl overflow-hidden">
                    <div class="flex items-center justify-center h-24 shadow-md">
                        <Link to="/" class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</Link>
                    </div>
                    <ul class="flex flex-col py-4">
                        <li>
                            <Link to={`${url}/mybooking`} class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                                <span class="text-sm font-medium">My Booking</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/feedback`} class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                                <span class="text-sm font-medium">Feedback</span>
                            </Link>
                        </li>

                        <li>
                            <button onClick={logout} to="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                                <span class="text-sm font-medium">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='flex mx-auto w-full '>
                    <Switch>
                        <Route path={`${path}/mybooking`}>
                            <Mybooking></Mybooking>
                        </Route>
                        <Route path={`${path}/feedback`}>
                            <Feedback></Feedback>
                        </Route>
                    </Switch>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;