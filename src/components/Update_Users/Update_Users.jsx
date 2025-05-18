import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update_Users = () => {

    const { address, email, name, gender, phone, state, zip, _id } = useLoaderData();
    // console.log(user);

    const handleUpdateUser = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const userData = Object.fromEntries(form.entries());

        // console.log(userData);

        // send updated user data in DB & update

        fetch(`https://user-management-server-xi-one.vercel.app/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "user info updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <section className="p-6 bg-gray-50 shadow-sm text-white rounded-xl">
                <form onSubmit={handleUpdateUser} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 bg-slate-500 text-white">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Update Personal Inormation</p>
                            <p className="text-xs">update additional user information here</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Full name</label>
                                <input type="text" name='name' defaultValue={name} placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input type="email" name='email' defaultValue={email} placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input type="text" name='address' defaultValue={address} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Phone</label>
                                <input type="text" name='phone' defaultValue={phone} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input type="text" name='state' defaultValue={state} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input type="text" name='zip' defaultValue={zip} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white h-10 text-black p-4 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2 flex items-center space-x-3">
                                <label htmlFor="zip" className="text-sm">Gender:</label>
                                <div className='flex items-center space-x-2'>
                                    <input required type="radio" value="male" defaultChecked={gender === "male"} name="gender" id="" />
                                    <label htmlFor="zip" className="text-sm">Male</label>
                                    <input required type="radio" value="female" defaultChecked={gender === "female"} name="gender" id="" />
                                    <label htmlFor="zip" className="text-sm">Female</label>
                                </div>
                            </div>

                        </div>

                    </fieldset>
                    <div className='flex justify-center'>
                        <button type="submit" className='btn btn-primary'>Update user</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update_Users;