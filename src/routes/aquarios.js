var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

// router.get("/:empresaId", function (req, res) {
//   aquarioController.buscarAquariosPorEmpresa(req, res);
// });

router.get("/buscar-registros/:idEmpresa", function (req, res) {
  aquarioController.buscarRegistrosPorEmpresa(req, res);
});

router.get("/ultimo-registro/:idEmpresa", function (req, res) {
  aquarioController.buscarUltimoRegistroPorEmpresa(req, res);
});

// router.post("/cadastrar", function (req, res) {
//   aquarioController.cadastrar(req, res);
// })

module.exports = router;