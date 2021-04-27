import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { finalGrade } from "../helpers/finalGrade";
import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

export const TopBar = ({ values }) => {
    const classes = styles();
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    Grades Calculator
                </Typography>
                <Typography variant="h6">{"Final Grade: " + finalGrade(values.modules)}</Typography>
            </Toolbar>
        </AppBar>
    );
};
