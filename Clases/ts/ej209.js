var IconSize;
(function (IconSize) {
    IconSize[IconSize["SMALL"] = 8] = "SMALL";
    IconSize[IconSize["MEDIUM"] = 12] = "MEDIUM";
    IconSize[IconSize["LARGE"] = 24] = "LARGE";
    IconSize[IconSize["XL"] = 48] = "XL";
})(IconSize || (IconSize = {}));
var icono = {
    nombre: "Wave",
    tamanio: IconSize.XL, // Valor 48
};
function showIcon(nombre, tamanio) {
    console.log("El nombre del icono es ".concat(nombre, " y su tama\u00F1o es de ").concat(tamanio, " puntos"));
}
;
showIcon(icono.nombre, icono.tamanio);
showIcon("muscle", IconSize.SMALL);
