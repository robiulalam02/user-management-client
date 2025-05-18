import React, { useState } from 'react';
import { MdDelete, MdOutlineAddCircleOutline } from 'react-icons/md';
import { RiPencilLine } from 'react-icons/ri';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const All_Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);
    const navigate = useNavigate();

    const handleDeleteUser = (id) => {
        // console.log(id);

        // delete user from ui and database

        fetch(`https://user-management-server-xi-one.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const filteredUsers = users.filter(user => user._id !== id);
                            setUsers(filteredUsers);
                        }
                    });

                }
            })

    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 shadow-md rounded-xl">
                <div className='flex items-center justify-between'>
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Total users: {users.length}</h2>
                    <button onClick={() => navigate('/add-user')} className='flex items-center gap-1 btn btn-success text-white'><MdOutlineAddCircleOutline size={20} /> Add user</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left min-h-40 whitespace-nowrap">
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
                                    <span className="">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="dark:bg-gray-50 dark:border-gray-300">

                            {
                                users.map((user, index) => <tr>
                                    <td className="px-3 text-xl font-medium dark:text-gray-600">{index + 1}</td>
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
                                    <td className="align-middle">
                                        <div className="dropdown md:absolute">
                                            <button type="button" title="Open details" className=" rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                                </svg>
                                            </button>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 relative mt-3 right-4 md:right-0 w-28 p-2 shadow">
                                                <button onClick={()=>navigate(`/update-user/${user._id}`)} className='flex items-center gap-1 mb-2'><RiPencilLine /> Edit</button>
                                                <button onClick={() => handleDeleteUser(user._id)} className='flex items-center gap-1'><MdDelete /> Delete</button>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default All_Users;