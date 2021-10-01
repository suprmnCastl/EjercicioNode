var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductoSchema = Schema({
    codigo: { type: String, required: true, max: 50 },
    nombre: { type: String, required: true, max: 50 },
    precio: { type: Number, required: true },
    existencias: { type: Number, required: true }
});

module.exports = mongoose.model("Producto", ProductoSchema);