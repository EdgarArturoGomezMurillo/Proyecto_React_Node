const Camisa = require("../models/camisas.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
    let camisa = new Camisa({
        camisa_id: req.body.camisa_id,
        nombreCamisa: req.body.nombreCamisa,
        talla: req.body.talla,
        color:req.body.color,
        tipo: req.body.tipo,
        material: req.body.material ,
        sexo: req.body.sexo,
        precio: req.body.precio,
    });

    camisa.save(function (err) {
            if (err) {
                console.error(err),
                    (response.exito = false),
                    (response.msg = "Error al guardar la camisa");
                res.json(response);
                return;
            }
            response.exito = true,
            response.msg = "La camisa se guardó correctamente";
            res.json(response);
    });
};
exports.find = function(req, res){
    Camisa.find(function(err, camisas){
        res.json(camisas)
    })
}

exports.findOne = function(req, res){
    Camisa.findOne({_id: req.params.id},function(err, camisa){  
        res.json(camisa)
    })
}

exports.update = function (req, res) {
    let camisa = ({
        camisa_id: req.body.camisa_id,
        nombreCamisa: req.body.nombreCamisa,
        talla: req.body.talla,
        color:req.body.color,
        tipo: req.body.tipo,
        material: req.body.material ,
        sexo: req.body.sexo,
        precio: req.body.precio,
    });

    Camisa.findByIdAndUpdate(req.params.id,{$set: camisa}, function (err) {
            if (err) {
                console.error(err),
                    (response.exito = false),
                    (response.msg = "Error al guardar la camisa");
                res.json(response);
                return;
            }
            response.exito = true,
            response.msg = "La camisa se guardó correctamente";
            res.json(response);
    });
};

exports.remove = function (req, res) {

    Camisa.findByIdAndRemove({_id: req.params.id},function (err) {
            if (err) {
                console.error(err),
                    (response.exito = false),
                    (response.msg = "Error al eliminar la camisa");
                res.json(response);
                return;
            }
            response.exito = true,
            response.msg = "La camisa se elimino correctamente";
            res.json(response);
    });
};
