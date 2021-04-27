import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Grid } from "@material-ui/core";

export function ModuleNameAndWeightForm(props) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Field label="Module Name" component={TextField} variant="outlined" type="text" name={`modules.${props.index}.module`} />
            </Grid>
            <Grid item>
                <Field
                    label="Module Weight / CATs"
                    component={TextField}
                    variant="outlined"
                    type="number"
                    min={0}
                    max={100}
                    name={`modules.${props.index}.moduleWeight`} />
            </Grid>
        </Grid>
    );
}
