import emploees from './emploees.js';
//import { totalSalary, departmentQuantity, departmentSalary } from './method.js';
import * as emploeesMethods from './method.js';

// console.log(totalSalary(emploees));
// console.log(departmentQuantity(emploees));
// console.log(departmentSalary(emploees));

console.log(emploeesMethods.totalSalary(emploees));
console.log(emploeesMethods.departmentQuantity(emploees));
console.log(emploeesMethods.departmentSalary(emploees));
