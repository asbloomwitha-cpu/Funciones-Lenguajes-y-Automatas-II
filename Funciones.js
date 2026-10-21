// some() devuelve true si al menos un elemento cumple la condición.
const numeros = [3, 7, 10, 18, 21]; // Arreglo de números que se va a revisar.
const Mayor_a_15 = numeros.some(num => num > 15); // Comprueba si algún número es mayor que 15.
const Es_Par = numeros.some(num => num % 2 === 0); // Comprueba si algún número es par.
console.log(Mayor_a_15); // Muestra el resultado de la primera comprobación.
console.log(Es_Par); // Muestra el resultado de la comprobación de paridad.

// every() devuelve true únicamente si todos los elementos cumplen la condición.
const edades = [18, 22, 30, 25, 19]; // Arreglo de edades.
const Mayores_o_iguales_a_18 = edades.every(edad => edad >= 18); // Comprueba si todas las edades son 18 o más.
const Es_Par_2 = edades.every(edad => edad % 2 === 0); // Comprueba si todas las edades son pares.
console.log(Mayores_o_iguales_a_18); // Muestra si todas las edades cumplen la edad mínima.
console.log(Es_Par_2); // Muestra si todas las edades son pares.

// fill() reemplaza los elementos del arreglo dentro del rango indicado.
let letras = ['a', 'b', 'c', 'd', 'e']; // Crea un arreglo de letras que se modificará.
letras.fill('x', 0, 3); // Reemplaza los índices 0, 1 y 2 por 'x' (el índice final no se incluye).
letras.fill('z', 3, 5); // Reemplaza los índices 3 y 4 por 'z'.
console.log(letras); // Muestra el arreglo después de los reemplazos.

// filter() crea un arreglo nuevo con todos los elementos que cumplen la condición.
const productos = [ // Arreglo de objetos que representan productos.
{ nombre: 'Laptop', precio: 1200 }, // Producto con su nombre y precio.
{ nombre: 'Mouse', precio: 25 }, // Producto con su nombre y precio.
{ nombre: 'Teclado', precio: 75 }, // Producto con su nombre y precio.
{ nombre: 'Monitor', precio: 300 } // Producto con su nombre y precio.
];
const precio = productos.filter(producto => producto.precio > 100); // Selecciona los productos que cuestan más de 100.
const Mas_de_5_letras = productos.filter(producto => producto.nombre.length > 5); // Selecciona productos cuyo nombre tiene más de 5 caracteres.
console.log(precio); // Muestra los productos que cuestan más de 100.
console.log(Mas_de_5_letras); // Muestra los productos con nombres de más de 5 caracteres.

// find() devuelve el primer elemento que cumple la condición, o undefined si no encuentra ninguno.
const alumnos = [ // Arreglo de objetos que representan alumnos.
{ nombre: 'Ana', edad: 17 }, // Alumna con su nombre y edad.
{ nombre: 'Luis', edad: 20 }, // Alumno con su nombre y edad.
{ nombre: 'Carmen', edad: 19 } // Alumna con su nombre y edad.
];
const Alumnos_mayores_de_18 = alumnos.find(alumno => alumno.edad > 18); // Busca al primer alumno mayor de 18.
const Nombres_de_alumnos = alumnos.find(alumno => alumno.nombre === 'Luis'); // Busca al primer alumno llamado Luis.
console.log(Alumnos_mayores_de_18); // Muestra el primer alumno mayor de 18 encontrado.
console.log(Nombres_de_alumnos); // Muestra el alumno llamado Luis.

// findIndex() devuelve el índice del primer elemento que cumple la condición, o -1 si no hay coincidencias.
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva']; // Arreglo de nombres de frutas.
const Pera = frutas.findIndex(fruta => fruta === 'pera'); // Busca el índice de 'pera'.
const Mas_de_5_letras_2 = frutas.findIndex(fruta => fruta.length > 5); // Busca el índice de la primera fruta con más de 5 caracteres.
console.log(Pera); // Muestra el índice de 'pera'.
console.log(Mas_de_5_letras_2); // Muestra el índice de la primera fruta larga.

// Set almacena valores únicos, por lo que elimina duplicados al crearse desde un arreglo.
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5]; // Arreglo original que contiene números repetidos.
const Eliminar_duplicados = new Set(numerosDuplicados) // Crea un conjunto con los valores únicos del arreglo.
const Nuevo_arreglo = [Eliminar_duplicados] // Crea un arreglo que contiene al conjunto como un único elemento.
const conjunto = new Set([1, 2, 3, 4, 5]); // Crea un conjunto inicial con cinco números únicos.
conjunto.add(6); // Agrega el número 6 al conjunto.
conjunto.has(6); // Comprueba si el conjunto contiene el número 6; el resultado no se guarda aquí.
console.log(Nuevo_arreglo); // Muestra el arreglo cuyo elemento es el conjunto.
console.log(Eliminar_duplicados); // Muestra el conjunto de números sin duplicados.
console.log(conjunto.has(6)); // Muestra true porque el número 6 está en el conjunto.
console.log(conjunto.add(6)); // Muestra el conjunto; agregar de nuevo 6 no crea un duplicado.

// Ejemplo que combina varios métodos de arreglos con objetos de personas.
const personas = [ // Arreglo de personas con nombre, edad y ciudad.
  { nombre: 'Sofia', edad: 25, ciudad: 'Madrid' }, // Primera persona.
  { nombre: 'Carlos', edad: 16, ciudad: 'Bogotá' }, // Segunda persona.
  { nombre: 'Ana', edad: 22, ciudad: 'México' }, // Tercera persona.
  { nombre: 'Diego', edad: 30, ciudad: 'México' } // Cuarta persona.
]
const personas_mayores_de_18 = personas.filter(persona => persona.edad >= 18); // Obtiene todas las personas de 18 años o más.
const ciudad_madrid = personas.some(persona => persona.ciudad === 'Madrid'); // Comprueba si alguna persona vive en Madrid.
const verificar_edad = personas.every(persona => persona.edad >= 18); // Comprueba si todas las personas tienen al menos 18 años.
const Persona_en_Mexico = personas.find(persona => persona.ciudad === 'México'); // Obtiene la primera persona que vive en México.
const Persona_llamada_Ana = personas.findIndex(persona => persona.nombre === 'Ana'); // Obtiene el índice de la persona llamada Ana.
console.log(personas_mayores_de_18); // Muestra la lista de personas adultas.
console.log(ciudad_madrid); // Muestra si existe alguien que viva en Madrid.
console.log(verificar_edad); // Muestra si todas las personas son adultas.
console.log(Persona_en_Mexico); // Muestra la primera persona que vive en México.
console.log(Persona_llamada_Ana); // Muestra el índice de Ana dentro del arreglo.





