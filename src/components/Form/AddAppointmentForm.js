import React from "react";
import {Button, LinearProgress, Input, Select} from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import "./Form.css";



const AddAppointmentForm = (saveData, cancelForm) => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => prompt(data);
    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} />}
                />
                <Controller
                    name="iceCreamType"
                    control={control}
                    render={({ field }) => <Select
                        {...field}
                        options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" }
                        ]}
                    />}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAppointmentForm;
