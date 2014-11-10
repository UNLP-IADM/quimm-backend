/*
fixtures.js
Fixtures de Sucesos que se cargan al iniciar por primera vez la app.
Para reiniciar la base de datos, usar el comando 'meteor reset' (tiene que estar la app detenida).
*/

if (Sucesos.find().count() === 0) {
  Sucesos.insert({
    nombre: "Suceso de Prueba 1",
    descripcion: "Este es un suceso de prueba.",
    ubicacion: { type: "Point", coordinates: [ -58, -34 ] },
    categoria: "test",
    confirmacion: 1
  });

  Sucesos.insert({
    nombre: "Suceso de Prueba 2",
    descripcion: "Este es otro suceso de prueba.",
    ubicacion: { type: "Point", coordinates: [ -59, -35 ] },
    categoria: "test",
    confirmacion: 2
  });
}
