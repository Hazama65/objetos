// const pcComponentes ={
//     procesador: 'RYZEN 5' ,
//     capacidadRAM: '16GB' ,
//     ssd: '240gb',
//     grafica:'rtx 3060'
// }

// console.log(pcComponentes.procesador, pcComponentes.capacidadRAM, pcComponentes.ssd, pcComponentes. grafica);
// //objetos desestructurado
// const { procesador, capacidadRAM,
// ssd, grafica } = pcComponentes;


// console.log(procesador);



// const usuario = {
//     nombre: 'Jesus',
//     correo: 'jsus@gmail.com',
//     telefono: 5512121212,
//     direccion: {
//         calle: 'Calle 123',
//         numero :'1234',
//         colonia: ' ixtapaluca'
//     },
//     pasatiempos : ['videojuegos',' lectura ',' deportes']
// }

// console.log(usuario.direccion.colonia);
// console.log(usuario.pasatiempos[1]);
// // const {nombre,correo,telefono}=usuario;


// const {nombre,correo,telefono, ...restUsuario}=usuario;

// console.log(restUsuario);




// //objetos Se indentifican con {}
// let empleado= {
//     nombre:"chico",
//     edad:20,
//     salario:20000
// };

// console.log(empleado);
// console.log(empleado.nombre);

// //elementos del objeto
// console.log(Object.keys(empleado));
// //valores internos 
// console.log(Object.values(empleado));



const usuario = {
    nombre: 'Jesus', 
    correo: 'jsus@gmail.com',
    telefono: 551212121221233123,
    direccion: {
        calle: 'Calle 123',
        numero: '1234',
        colonia: 'ixtapaluca'
    },
    pasatiempos: ['video juegos', 'lectura', 'deportes']
}

// extraer el ssd y grafica
const pcComponentes = {
    procesador: 'RYZEN 5',
    capacidadRAM: '16GB',
    ssd: '240gb',
    grafica: 'rtx 3060'
}


console.log(pcComponentes.ssd,pcComponentes.grafica);

const Telefono=usuario.telefono;
const longitudTelefono=Telefono.toString();

console.log((usuario.nombre).toLocaleUpperCase());
console.log(`${longitudTelefono.length}`);

for (let propiedad in usuario.direccion) {
    console.log(`${propiedad}: ${usuario.direccion[propiedad]}`);
}

const pasatiemposFiltrados = usuario.pasatiempos.filter(pasatiempo => pasatiempo !== 'deportes');
console.log(pasatiemposFiltrados);
