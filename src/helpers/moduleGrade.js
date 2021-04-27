export const moduleGrade = my_module => {
    let assignments = my_module.assignments;
    let top = 0;
    let bottom = 0;
    assignments.forEach(e => {
        top += +e.grade * +e.weight;
        bottom += +e.weight;
    });
    let final = top / bottom;
    my_module.moduleMark = final;
    return final;
};
