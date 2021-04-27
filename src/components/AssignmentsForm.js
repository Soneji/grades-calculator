import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Grid, Button } from "@material-ui/core";
import AddCircleIconOutline from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIconOutline from "@material-ui/icons/RemoveCircleOutline";

export function AssignmentsForm(props) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Field
                    label={"Assignment " + (Number(props.index2) + 1)}
                    component={TextField}
                    variant="outlined"
                    type="text"
                    id={`modules.${props.index}.assignments.${props.index2}.name`}
                    name={`modules.${props.index}.assignments.${props.index2}.name`}
                />
            </Grid>
            <Grid item>
                <Field
                    label="Grade"
                    component={TextField}
                    variant="outlined"
                    type="number"
                    min="0"
                    max="100"
                    id={`modules.${props.index}.assignments.${props.index2}.grade`}
                    name={`modules.${props.index}.assignments.${props.index2}.grade`}
                />
            </Grid>
            <Grid item>
                <Field
                    label="Weight"
                    component={TextField}
                    variant="outlined"
                    type="number"
                    min="0"
                    max="100"
                    id={`modules.${props.index}.assignments.${props.index2}.weight`}
                    name={`modules.${props.index}.assignments.${props.index2}.weight`}
                />
            </Grid>
            <Grid item>
                <Button style={{ marginRight: 5 }} variant="contained" color="primary" onClick={() => props.arrayHelpers2.remove(props.index2)}>
                    <RemoveCircleIconOutline />
                </Button>
                <Button style={{ marginLeft: 5 }} variant="contained" color="primary" onClick={() => props.arrayHelpers2.push({})}>
                    <AddCircleIconOutline />
                </Button>
            </Grid>
        </Grid>
    );
}
