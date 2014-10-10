/*
publications.js
Acá se definen las publicaciones de colecciones (osea, los datos que Meteor hace públicos para los clientes).
*/

// Hago públicos todos los sucesos
Meteor.publish('todosLosSucesos', function() {
  return Sucesos.find();
});