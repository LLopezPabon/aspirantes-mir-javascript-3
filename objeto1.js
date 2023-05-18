const pedro = {
nombre : "pedro perez",
edad : 30,
activo: true,
hobbies: ["programar","squash","piano"]

}
 
console.log(pedro.edad);

pedro.altura= 1.8

delete pedro.activo

for(const[ llave,valor ] of Object.entries(pedro) ){
console.log(`${llave} : ${valor}`);
}

pedro.saluda = () => {
    return `Hola, me llamo ${pedro.nombre}`
}
console.log(pedro.saluda());
