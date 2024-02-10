const colors = require('colors');
console.log("Hola mundo".green)

///definen
let arreglo = [];
let arreglo2=[{name:"eduardo",lastname:"nieves",edad:50},{name:"jose",lastname:"nieves",edad:38}]
let arreglo3=[2,3,4,7,6]
//
console.log(arreglo2)

///agregando
arreglo2.push({name:"pastor",lastname:"gonzalez"})
arreglo2.unshift({name:"duque",lastname:"croft"})
console.log(arreglo2)
//buscar find
let elemento=arreglo3.find((item)=>{
    if(item<4){
        return true
    }
})
console.log("Elemento encontrado: find",elemento)
//findIndex
let elemento3=arreglo3.findIndex((item)=>{
    if(item==7){
        return true
    }
})
console.log("Elemento encontrado: findIndex",elemento3)
//modificar datos
arreglo3[elemento3]=17;
console.log(arreglo3)

//filter
let elemento2=arreglo3.filter((item)=>{
    if(item<4){
        return true
    }
})
console.log("Elemento encontrado: filter",elemento2)
//filter con tipo de dato objeto
let elementos=arreglo2.filter((item)=>{
    if(item.edad<=40 || item.name=="pastor"){
        return true
    }
})
console.log("Elemento encontrado: filter",elementos)
//map
let elemtosMap=arreglo2.map(estudiante => ({
    nombre: estudiante.name,
    edad: estudiante.edad/2
  }));
console.log("Elemento encontrado: map",elemtosMap)
//
console.log("cantidad de elementos de un arreglo: ",arreglo2.length)
//para ordernar
console.log("Ordenamiento: ",arreglo3.sort((a, b) => {
    // Comparación personalizada
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }))