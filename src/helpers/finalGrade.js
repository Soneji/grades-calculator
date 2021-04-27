export const finalGrade = modules => {
    let top = 0;
    let bottom = 0;
    modules.forEach(e => {
        top += +e.moduleMark * +e.moduleWeight;
        bottom += +e.moduleWeight;
    });
    let final = top / bottom;
    return final;
};
