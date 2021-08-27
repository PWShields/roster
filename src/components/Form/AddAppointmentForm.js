import React from "react";
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import "./Form.css";



const AddAppointmentForm = (saveData, cancelForm) => {

    return (
        <div className="form">
            <Formik
                initialValues={{
                    name: '',
                    staff: ''
                }}
                onSubmit={(values,{}) => {

                }}
            >
                {({ submitForm, isSubmitting, cancelForm, saveData }) => (
                    <Form>
                        <Field
                            component={TextField}
                            name="name"
                            type="text"
                            label="Name"
                        />
                        <br />
                        <Field
                            component={TextField}
                            type="text"
                            label="With"
                            name="staff"
                        />
                        <br />
                        <Field
                            component={TextField}
                            type="text"
                            label="Location"
                            name="Location"
                        />
                        {isSubmitting && <LinearProgress />}
                        <br />
                        <br />
                        <Button
                            className="button-default"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            save
                        </Button> <Button
                            className="button-default"
                            variant="contained"
                            color="tertiary"
                            disabled={isSubmitting}
                            onClick={cancelForm}
                        >
                            cancel
                        </Button>
                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default AddAppointmentForm;
