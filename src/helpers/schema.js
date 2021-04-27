import * as Yup from "yup";

export const schema = Yup.object().shape({
    modules: Yup.array().of(
        Yup.object().shape({
            module: Yup.string().required("Required"),
            moduleWeight: Yup.number().required("Required"),
            assignments: Yup.array().of(
                Yup.object().shape({
                    name: Yup.string().required("Required"),
                    grade: Yup.number().required("Required"),
                    weight: Yup.number().required("Required"),
                })
            ),
        })
    ),
});
