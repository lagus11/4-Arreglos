let students = [];
let model = require('./student');

let student = {
    name: 'Agustin Hernandez Montero',
    controlNumber: "17400993",
    emain: "agdehernandezmo@ittepic.edu.mx",
    grade: "90"
};

let student2 = {
    name: 'Jose Miguel Garcia Acevedo',
    controlNumber: "17400950",
    emain: "agdehernandezmo@ittepic.edu.mx",
    grade: "68"
};



students = model.create(student,students);
students = model.create(student2,students);


console.log(students[0]);
console.log(students[1]);
console.log("\n---despues de insertar---");
model.read(students);

students = model.erase(0,students);
console.log("\n---Despues de borrar---");
model.read(students);

students = model.eraseNc(17400950,students);
console.log("\n---Despues de borrar con numero de control---");
model.read(students);

student = {
    name: 'Adalberto Martinez Rodriguez',
    controlNumber: '17400898',
    email: 'adalberto@ittepic.edu.mx',
    grade: '100'
}

students = model.create(student,students);
console.log("\n---Despues de agregar otro alumno---");
model.read(students);

students = model.update(0,{name:'Juan Mario',controlNumber:'17400888',email:'juanB@ittepic.edu.mx',grade:'80'},students);
console.log('\n---Despues de actualizar--');
model.read(students);


students = model.updateNc(17400888,{name:'Agustin111',controlNumber:'',email:'',grade:''},students);
console.log('\n---Despues de actualizar con numero de control--');
model.read(students);

console.log("\n---Despues de consultar con numero de control---");
model.readNc(17400888,students);


student = {
    name: 'Adalberto Martinez Rodriguez',
    controlNumber: '17400898',
    email: 'adalberto@ittepic.edu.mx',
    grade: '91'
}

students = model.create(student,students);


console.log("\n---Enlistar los estudiantes mayor a 70---");
model.enlistar(students);