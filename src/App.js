import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { Persist } from "formik-persist";

import { Button, Typography, Card, CardContent } from "@material-ui/core";

import { moduleGrade } from "./helpers/moduleGrade";
import { finalGrade } from "./helpers/finalGrade";

import GradeSystem from "./components/GradeSystem";
import { schema } from "./helpers/schema";
import { initial, oneModule } from "./helpers/initial";
import { TopBar } from "./components/TopBar";
import { AssignmentsForm } from "./components/AssignmentsForm";
import { ModuleNameAndWeightForm } from "./components/ModuleNameAndWeightForm";
import { Helmet } from "react-helmet";
import { Title } from "@material-ui/icons";

const App = () => {
    return (
        <div className="app">
            <Helmet>
                <Title>Grade Calculator</Title>
                <meta name='description' content='A simple React app to calculate grades (especially for University Students).'/>
            </Helmet>
            <Formik initialValues={initial} validationSchema={schema}>
                {({ values, errors }) => (
                    <Form>
                        <TopBar values={values} />
                        <FieldArray
                            name="modules"
                            render={arrayHelpers => (
                                <div>
                                    {values.modules && values.modules.length > 0
                                        ? values.modules.map((user, index) => (
                                              <Card style={{ margin: 20 }}>
                                                  <CardContent>
                                                      <div className="box" key={"k1" + index}>
                                                          <h2 style={{ marginTop: 0 }}>
                                                              Module {index + 1}: {values.modules[index].module}
                                                          </h2>
                                                          <ModuleNameAndWeightForm index={index} />
                                                          <FieldArray
                                                              id={`modules.${index}.assignments`}
                                                              name={`modules.${index}.assignments`}
                                                              render={arrayHelpers2 => {
                                                                  return (
                                                                      <div>
                                                                          {values.modules[index].assignments &&
                                                                          values.modules[index].assignments.length > 0 ? (
                                                                              <div>
                                                                                  <h3>Assignments / Exams</h3>
                                                                                  {values.modules[index].assignments.map((_q, index2) => {
                                                                                      return (
                                                                                          <div key={"k2" + index2}>
                                                                                              <AssignmentsForm
                                                                                                  index2={index2}
                                                                                                  arrayHelpers2={arrayHelpers2}
                                                                                                  index={index}
                                                                                              />
                                                                                          </div>
                                                                                      );
                                                                                  })}
                                                                                  <h3>Module Grade {moduleGrade(values.modules[index])}</h3>
                                                                              </div>
                                                                          ) : (
                                                                              <Button
                                                                                  variant="contained"
                                                                                  color="primary"
                                                                                  onClick={() => arrayHelpers2.push({})}
                                                                              >
                                                                                  Add new assignment
                                                                              </Button>
                                                                          )}
                                                                      </div>
                                                                  );
                                                              }}
                                                          />
                                                      </div>
                                                  </CardContent>
                                              </Card>
                                          ))
                                        : null}
                                    <br />
                                    <Typography align="center">
                                        <Button
                                            style={{ margin: 5 }}
                                            variant="contained"
                                            color="primary"
                                            onClick={() => arrayHelpers.push(oneModule)}
                                        >
                                            Add new module
                                        </Button>
                                        <Button style={{ margin: 5 }} variant="contained" color="primary" onClick={() => arrayHelpers.remove(-1)}>
                                            Remove last module
                                        </Button>
                                    </Typography>
                                    <br />
                                    <Typography align="center" variant="h6">
                                        Final Grade: {finalGrade(values.modules)}
                                    </Typography>
                                </div>
                            )}
                        />

                        <Persist name="grades-calculator" />
                    </Form>
                )}
            </Formik>
            <GradeSystem />
        </div>
    );
};

export default App;
