export function totalSalary(emploees) {
  let total = 0;
  emploees.forEach((el) => {
    total += el.salary;
  });
  return total;
}
