/*
publications.js
Acá se definen las publicaciones de colecciones (osea, los datos que Meteor hace públicos para los clientes).
*/

// Hago públicos todos los sucesos
Meteor.publish('todosLosSucesos', function() {
  return Sucesos.find();
});

// Todos los sucesos dentro de un radio de una
// determinada ubicacion
Meteor.publish('sucesosSegunUbicacion', function(position, max_dist, min_dist) {
  min_dist = (typeof min_dist !== 'undefined') ? min_dist : 0;
  return Sucesos.find({
    ubicacion: {
      $near: {
        $geometry: {
          type: "Point" ,
          coordinates: position
        },
        $maxDistance: max_dist,
        $minDistance: min_dist
      }
    }
  });
});
