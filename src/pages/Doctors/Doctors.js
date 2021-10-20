import React from 'react';
import { useForm } from "react-hook-form";


const Doctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        // taking appointment information from user 
        <div className="text-center my-5">
            <h2>please give your information to take appointment</h2>
            <form className={"shipping-form"} onSubmit={handleSubmit()}>
                <input className="mb-2 rounded" placeholder="your name" {...register("name")} />
                <br />
                <input className="mb-2 rounded" placeholder="email" {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error"> This field is required</span>}
                <input className="mb-2 rounded" placeholder="address" defaultValue="" {...register("address")} />
                <br />
                <input className="mb-2 rounded" placeholder="city" defaultValue="" {...register("city")} />
                <br />
                <input className="mb-2 rounded" placeholder="phone number" defaultValue="" {...register("phone")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Doctors;