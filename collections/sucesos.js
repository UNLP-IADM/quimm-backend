/*
sucesos.js
Defino la colección (Meteor-MongoDB) de Sucesos.
*/

Sucesos = new Meteor.Collection('sucesos');

// Definimos un indice geoespacial para
// realizar consultas de este tipo:
if (Meteor.isServer) {
  Sucesos._ensureIndex({ ubicacion: '2dsphere' });
}
