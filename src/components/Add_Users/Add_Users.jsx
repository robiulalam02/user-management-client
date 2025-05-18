import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Add_Users = () => {
    const navigate = useNavigate();

    const handleAddUser = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const userData = Object.fromEntries(form.entries());

        console.log(userData);

        // send user data to Database

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "user added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                    navigate('/users')
                }
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <section className="p-6 bg-gray-50 shadow-sm text-white rounded-xl">
                <form onSubmit={handleAddUser} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 bg-slate-500 text-white">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">give users personal details to add a user</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Full name</label>
                                <input type="text" name='name' placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input type="email" name='email' placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input type="text" name='address' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Phone</label>
                                <input type="text" name='phone' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input type="text" name='state' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input type="text" name='zip' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2 flex items-center space-x-3">
                                <label htmlFor="zip" className="text-sm">Gender:</label>
                                <div className='flex items-center space-x-2'>
                                    <input required type="radio" value="male" name="gender" id="" />
                                    <label htmlFor="zip" className="text-sm">Male</label>
                                    <input required type="radio" value="female" name="gender" id="" />
                                    <label htmlFor="zip" className="text-sm">Female</label>
                                </div>
                            </div>

                        </div>

                    </fieldset>
                    <div className='flex justify-center'>
                        <button type="submit" className='btn btn-primary'>Add user</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Add_Users;