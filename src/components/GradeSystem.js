import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => ({
    table: {
        maxWidth: 500,
    },
}));

export default function GradeSystem() {
    const classes = styles();

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Grade Letter</TableCell>
                    <TableCell>Percentage Score</TableCell>
                    <TableCell>Degree Class</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>70% - 100%</TableCell>
                    <TableCell>First</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>B</TableCell>
                    <TableCell>60% - 69%</TableCell>
                    <TableCell>Upper Second 2:1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>C</TableCell>
                    <TableCell>50% - 59%</TableCell>
                    <TableCell>Lower Second 2:2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>D</TableCell>
                    <TableCell>40% - 49%</TableCell>
                    <TableCell>Third 3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>E</TableCell>
                    <TableCell>30% - 39%</TableCell>
                    <TableCell>FAIL</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>F</TableCell>
                    <TableCell>0 - 29%</TableCell>
                    <TableCell>FAIL</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
