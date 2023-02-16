function totalSalary(emploees) {
  let total = 0;
  emploees.forEach((el) => {
    total += el.salary;
  });
  return total;
}

function departmentQuantity(emploees) {
  let departments = [];
  emploees.forEach((element) => {
    departments.push(element.department);
  });
  return new Set(departments).size;
}

function departmentSalary(emploees) {
  const salaries = {};
  emploees.forEach((element) => {
    if (salaries[element.department] === undefined) {
      salaries[element.department] = element.salary;
      return;
    }
    salaries[element.department] += element.salary;
  });
  return salaries;
}

export { totalSalary, departmentQuantity, departmentSalary };
