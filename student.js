function create (student, students){
    students.push(student);
    return students;
}

function read(students){
    students.forEach(s=>{
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);
    });
}

function erase(pos,students){
    students.splice(pos,1);
    return students;
}

function eraseNc(pos,students){
    var i = 0;
    students.forEach(j=>{
        if(j.controlNumber==pos){
            students.splice(i,1);
            return students;
        }
        i++;
    });
    return students;
}

function update(pos,newelement,students){
    students[pos]=newelement;
    return students;
}

function updateNc(pos,newelement,students){
    var i = 0;
    students.forEach(j=>{
        if(j.controlNumber==pos){
            if(newelement.name!=""){students[i].name=newelement.name;}
            if(newelement.controlNumber!=""){students[i].controlNumber=newelement.controlNumber;}
            if(newelement.email!=""){students[i].email=newelement.email;}
            if(newelement.grade!=""){students[i].grade=newelement.grade;}
            return students;
        }
        i++;
    });
    return students;
}

function readNc(numeroCtrl,students){
    students.forEach(j=>{
            if(j.controlNumber==numeroCtrl){
                console.log("Nombre: "+j.name);
                console.log("ControlNumber: "+j.controlNumber);
                console.log("Email: "+j.email);
                console.log("Grade: "+j.grade);
            }
    });
}

function enlistar(students){
    students.forEach(j=>{
        if(j.grade>=70){
            console.log("Nombre: "+j.name);
            console.log("ControlNumber: "+j.controlNumber);
            console.log("Email: "+j.email);
            console.log("Grade: "+j.grade);
        }
    });
}



module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.eraseNc = eraseNc;
module.exports.update = update;
module.exports.updateNc = updateNc;
module.exports.readNc = readNc;
module.exports.enlistar = enlistar;