/* 
fixtures.js
Fixtures de Sucesos que se cargan al iniciar por primera vez la app.
Para reiniciar la base de datos, usar el comando 'meteor reset' (tiene que estar la app detenida).
*/

if (Sucesos.find().count() === 0) {
  Sucesos.insert({
    nombre: "Suceso de Prueba 1",
    descripcion: "Este es un suceso de prueba.",
    latitud: "10",
    longitud: "20",
    categoria: "test"
  });
  
  Sucesos.insert({
    nombre: "Suceso de Prueba 2",
    descripcion: "Este es otro suceso de prueba.",
    latitud: "15",
    longitud: "7",
    categoria: "test"
  });
}