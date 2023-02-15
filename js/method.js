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

export { totalSalary, departmentQuantity };
