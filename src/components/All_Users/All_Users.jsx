import React from 'react';
import { useLoaderData } from 'react-router';

const All_Users = () => {
    const users = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 shadow-md rounded-xl">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Total users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-300">
                                <th className="p-3">SN</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Gender</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Address</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            
                            {
                                users.map((user, index) => <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600">{index+1}</td>
                                <td className="px-3 py-2">
                                    <p>{user.name}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className="dark:text-gray-600">{user.gender}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{user.phone}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{user.email}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{user.address}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                            }
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default All_Users;