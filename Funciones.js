//some()
const numeros = [3, 7, 10, 18, 21];
const Mayor_a_15 = numeros.some(num => num > 15); 
const Es_Par = numeros.some(num => num % 2 === 0);
console.log(Mayor_a_15);
console.log(Es_Par);

//every()
const edades = [18, 22, 30, 25, 19];
const Mayores_o_iguales_a_18 = edades.every(edad => edad >= 18);
const Es_Par_2 = edades.every(edad => edad % 2 === 0);
console.log(Mayores_o_iguales_a_18);
console.log(Es_Par_2);

//fill()
let letras = ['a', 'b', 'c', 'd', 'e'];
letras.fill('x', 0, 3);
letras.fill('z', 3, 5);
console.log(letras);

//filter()
const productos = [
{ nombre: 'Laptop', precio: 1200 },
{ nombre: 'Mouse', precio: 25 },
{ nombre: 'Teclado', precio: 75 },
{ nombre: 'Monitor', precio: 300 }
];
const precio = productos.filter(producto => producto.precio > 100);
const Mas_de_5_letras = productos.filter(producto => producto.nombre.length > 5);
console.log(precio);
console.log(Mas_de_5_letras);

//find()
const alumnos = [
{ nombre: 'Ana', edad: 17 },
{ nombre: 'Luis', edad: 20 },
{ nombre: 'Carmen', edad: 19 }
];
const Alumnos_mayores_de_18 = alumnos.find(alumno => alumno.edad > 18);
const Nombres_de_alumnos = alumnos.find(alumno => alumno.nombre === 'Luis');
console.log(Alumnos_mayores_de_18);
console.log(Nombres_de_alumnos);

//findIndex()
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];
const Pera = frutas.findIndex(fruta => fruta === 'pera');
const Mas_de_5_letras_2 = frutas.findIndex(fruta => fruta.length > 5);
console.log(Pera);
console.log(Mas_de_5_letras_2);

//Set
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
const Eliminar_duplicados = new Set(numerosDuplicados)
const Nuevo_arreglo = [Eliminar_duplicados]
const conjunto = new Set([1, 2, 3, 4, 5]);
conjunto.add(6);
conjunto.has(6);
console.log(Nuevo_arreglo);
console.log(Eliminar_duplicados);
console.log(conjunto.has(6));
console.log(conjunto.add(6));

//Varias Funciones
const personas = [
  { nombre: 'Sofia', edad: 25, ciudad: 'Madrid' },
  { nombre: 'Carlos', edad: 16, ciudad: 'Bogotá' },
  { nombre: 'Ana', edad: 22, ciudad: 'México' },
  { nombre: 'Diego', edad: 30, ciudad: 'México' }
]
const personas_mayores_de_18 = personas.filter(persona => persona.edad >= 18);
const ciudad_madrid = personas.some(persona => persona.ciudad === 'Madrid');
const verificar_edad = personas.every(persona => persona.edad >= 18);
const Persona_en_Mexico = personas.find(persona => persona.ciudad === 'México');
const Persona_llamada_Ana = personas.findIndex(persona => persona.nombre === 'Ana');
console.log(personas_mayores_de_18);
console.log(ciudad_madrid);
console.log(verificar_edad);
console.log(Persona_en_Mexico);
console.log(Persona_llamada_Ana);






