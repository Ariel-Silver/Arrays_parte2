// Arrays con listado de pacientes

// Pacientes Radiología
let radiology = [
    {
        hora: "11:00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9.878.782-1",
        prevision: "Fonasa",
    },
    {
        hora: "11:30",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rut: "15.345.241-3",
        prevision: "Isapre",
    },
    {
        hora: "15:00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16.445.345-9",
        prevision: "Isapre",
    },
    {
        hora: "15:30",
        especialista: "Ana María Godoy",
        paciente: "Manuel Godoy",
        rut: "17.666.419-0",
        prevision: "Fonasa",
    },
    {
        hora: "16:00",
        especialista: "Patricia Suazo",
        paciente: "Ramón Ulloa",
        rut: "14.989.389-K",
        prevision: "Fonasa",
    },
];

// Pacientes traumatalogía
let traumatology = [
    {
        hora: "8:00",
        especialista: "María Paz Altuzarra",
        paciente: "Paula Sanchez",
        rut: "15.554.774-5",
        prevision: "Fonasa",
    },
    {
        hora: "10:00",
        especialista: "Raul Araya",
        paciente: "Angélica Navas",
        rut: "15.444.147-9",
        prevision: "Isapre",
    },
    {
        hora: "10:30",
        especialista: "María Arriagada",
        paciente: "Ana Klapp",
        rut: "17.879.423-9",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Felipe Mardones",
        rut: "1.547.423-6",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16.554.741-k",
        prevision: "Fonasa",
    },
    {
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rut: "9.747.535-8",
        prevision: "Isapre",
    },
    {
        hora: "12:30",
        especialista: "Andrés Kanacri",
        paciente: "Marcial Suazo",
        rut: "11.254.785-5",
        prevision: "Isapre",
    },
];

// Pacientes dental
let dental = [
    {
        hora: "8:30",
        especialista: "Andrea Zúñiga",
        paciente: "Marcela Retamal",
        rut: "11.123.4285-6",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "María Pía Zañartu",
        paciente: "Ángel Muñoz",
        rut: "9.878.789-2",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario Kast",
        rut: "7.998.789-5",
        prevision: "Fonasa",
    },
    {
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Karin Fernandez",
        rut: "18.887.662-k",
        prevision: "Fonasa",
    },
    {
        hora: "13:30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo Sánchez",
        rut: "17.665.461-4",
        prevision: "Fonasa",
    },
    {
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepúlveda",
        rut: "14.441.281-0",
        prevision: "Isapre",
    }
];

// const e impresion del titulo
const estadisticasPacientes = "Estadísticas Centro Médico Ñuñoa";
document.getElementById("estadisticas").innerHTML = `${estadisticasPacientes}`;


// Valores e impresiones radaiología
const radio1 = "Primera atención radiología"
document.getElementById("r1").innerHTML = `
${radio1} <br><br>
Hora:  ${radiology[0].hora} <br>
Especialista:  ${radiology[0].especialista} <br>
Paciente:  ${radiology[0].paciente} <br>
Rut:  ${radiology[0].rut} <br>
Prevision:  ${radiology[0].prevision} <br>`;

const radio2 = "Ultima atención radiología"
document.getElementById("r2").innerHTML = `
${radio2} <br><br>
Hora: ${radiology[4].hora} <br>
Especialista: ${radiology[4].especialista} <br>
Paciente: ${radiology[4].paciente} <br>
Rut: ${radiology[4].rut} <br>
Prevision: ${radiology[4].prevision} <br>`;

////////////////////////////////////////////////////

// Valores e impresiones traumatología
const trauma1 = "Primera atención traumatología"
document.getElementById("t1").innerHTML = `
${trauma1} <br><br>
Hora:  ${traumatology[0].hora} <br>
Especialista:  ${traumatology[0].especialista} <br>
Paciente:  ${traumatology[0].paciente} <br>
Rut:  ${traumatology[0].rut} <br>
Prevision:  ${traumatology[0].prevision} <br>`;

const trauma2 = "Ultima atención traumatología"
document.getElementById("t2").innerHTML = `
${trauma2} <br><br>
Hora: ${traumatology[6].hora} <br>
Especialista: ${traumatology[6].especialista} <br>
Paciente: ${traumatology[6].paciente} <br>
Rut: ${traumatology[6].rut} <br>
Prevision: ${traumatology[6].prevision} <br>`;

////////////////////////////////////////////////////

// Valores e impresiones dental
const dental1 = "Primera atención dental"
document.getElementById("d1").innerHTML = `
${dental1} <br><br>
Hora:  ${dental[0].hora} <br>
Especialista:  ${dental[0].especialista} <br>
Paciente:  ${dental[0].paciente} <br>
Rut:  ${dental[0].rut} <br>
Prevision:  ${dental[0].prevision} <br>`;

const dental2 = "Ultima atención dental"
document.getElementById("d2").innerHTML = `
${dental2} <br><br>
Hora: ${dental[5].hora} <br>
Especialista: ${dental[5].especialista} <br>
Paciente: ${dental[5].paciente} <br>
Rut: ${dental[5].rut} <br>
Prevision: ${dental[5].prevision} <br>`;

////////////////////////////////////////////////////

//Metodo push para agregar horas adicionales en traumatología
traumatology.push(
    {
        hora: "9:00",
        especialista: "René Poblete",
        paciente: "Ana Gellona",
        rut: "13.123.329-7",
        prevision: "Isapre",
    },
    {
        hora: "09:30",
        especialista: "Maria Solar",
        paciente: "Ramiro Andrade",
        rut: "12.221.451-K",
        prevision: "Fonasa",
    },
    {
        hora: "10:00",
        especialista: "Raul Loyola",
        paciente: "Carmen Isla",
        rut: "10.112.348-3",
        prevision: "Isapre",
    },
    {
        hora: "10:30",
        especialista: "Antonio Larenas",
        paciente: "Pablo Loayza",
        rut: "13.453.234-1",
        prevision: "Isapre",
    },
    {
        hora: "12:00",
        especialista: "Matias Aravena",
        paciente: "Susana Poblete",
        rut: "14.345.656-6",
        prevision: "Fonasa",
    });

console.log(traumatology);

////////////////////////////////////////////////////

//Metodo shift para eliminar el primer arreglo de radiología y metodo pop para eliminar el último arreglo de radiología
radiology.shift();
radiology.pop();
console.log(radiology);

////////////////////////////////////////////////////

//Listado pacientes dentales
document.getElementById("dent1").innerHTML  = `
${dental[0].hora} - 
${dental[0].especialista} - 
${dental[0].paciente} - 
${dental[0].rut} - 
${dental[0].prevision}`;

document.getElementById("dent2").innerHTML  = `
${dental[1].hora} - 
${dental[1].especialista} - 
${dental[1].paciente} - 
${dental[1].rut} - 
${dental[1].prevision}`;

document.getElementById("dent3").innerHTML  = `
${dental[2].hora} - 
${dental[2].especialista} - 
${dental[2].paciente} - 
${dental[2].rut} - 
${dental[2].prevision}`;

document.getElementById("dent4").innerHTML  = `
${dental[3].hora} - 
${dental[3].especialista} - 
${dental[3].paciente} - 
${dental[3].rut} - 
${dental[3].prevision}`;

document.getElementById("dent5").innerHTML  = `
${dental[4].hora} - 
${dental[4].especialista} - 
${dental[4].paciente} - 
${dental[4].rut} - 
${dental[4].prevision}`;

document.getElementById("dent6").innerHTML  = `
${dental[5].hora} - 
${dental[5].especialista} - 
${dental[5].paciente} - 
${dental[5].rut} - 
${dental[5].prevision}`;

////////////////////////////////////////////////////

//Listado de pacientes atendidos
document.getElementById("pacientess").innerHTML = `
${radiology[0].paciente} <br> 
${radiology[1].paciente} <br>
${radiology[2].paciente} <br>

${dental[0].paciente} <br>
${dental[1].paciente} <br>
${dental[2].paciente} <br>
${dental[3].paciente} <br>
${dental[4].paciente} <br>
${dental[5].paciente} <br>

${traumatology[0].paciente} <br>
${traumatology[1].paciente} <br>
${traumatology[2].paciente} <br>
${traumatology[3].paciente} <br>
${traumatology[4].paciente} <br>
${traumatology[5].paciente} <br>
${traumatology[6].paciente} <br>
${traumatology[7].paciente} <br>
${traumatology[8].paciente} <br>
${traumatology[9].paciente} <br>
${traumatology[10].paciente} <br>
${traumatology[11].paciente} <br><br>`;

//Imprimir pacientes isapre dental con metodo filter
let previsionDentals = dental.filter((prevision) => {
  if (prevision.prevision == "Isapre") {
    document.getElementById("isa1").innerHTML = (dental[0].paciente + " - " + dental[0].prevision);
    document.getElementById("isa2").innerHTML = (dental[1].paciente + " - " + dental[1].prevision);
    document.getElementById("isa3").innerHTML = (dental[5].paciente + " - " + dental[5].prevision);
  }
});

//Imprimir pacientes fonasa Traumatología con metodo filter
let previsionTraumatologia = traumatology.filter((prevision) => {
  if (prevision.prevision == "Fonasa") {
    document.getElementById("fona1").innerHTML = (traumatology[0].paciente + " - " + traumatology[0].prevision);
    document.getElementById("fona2").innerHTML = (traumatology[4].paciente + " - " + traumatology[4].prevision);
    document.getElementById("fona3").innerHTML = (traumatology[8].paciente + " - " + traumatology[8].prevision);
    document.getElementById("fona4").innerHTML = (traumatology[11].paciente + " - " + traumatology[11].prevision);
  }
});


