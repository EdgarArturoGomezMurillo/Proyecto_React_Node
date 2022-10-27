const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CamisasSchema = new Schema({
    camisa_id: {type: String, required: true, max:60},
    nombreCamisa: {type: String, required: true, max:120},
    talla:{type: String, required: true, max:10},
    color:{type: String, required: true, max:40},
    tipo: {type: String, required: true, max:70},
    material: {type: String, required: true, max:70},
    sexo: {type: String, required: true, max:70},
    precio: {type: String, required: true, max:1000}
});

module.exports = mongoose.model("camisas", CamisasSchema);