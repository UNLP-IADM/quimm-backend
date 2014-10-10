/* 
client.js
Scripts y funciones del lado del cliente.
*/

// Me suscribo a las actualizaciones de Sucesos
Meteor.subscribe('todosLosSucesos');

// Función que renderiza todos los sucesos en el HTML
if (Meteor.isClient) {
  Template.sucesos.helpers({
    sucesos: function() {
      return Sucesos.find();
    }
  })
}