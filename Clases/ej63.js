let anio = 2088;
let campeones;

switch (anio) {
    case 2000:
        campeones = "(Clausura) River Plate (Apertura) Boca Juniors";
        break
    case 2001:
        campeones = "(Clausura) San Lorenzo de Almagro (Apertura) Racing Club";
        break
    case 2002:
        campeones = "(Clausura) River Plate (Apertura) Independiente";
        break

    case 2003:
        campeones = "(Clausura) River Plate (Apertura) Boca Juniors";
        break
    case 2004:
        campeones = "(Clausura) River Plate (Apertura) Newells Old Boys";
        break
    case 2005:
        campeones = "(Clausura) Vélez Sarsfield (Apertura) Boca Juniors";
        break
    case 2006:
        campeones = "(Clausura) Boca Juniors (Apertura) Estudiantes de La Plata";
        break
    case 2007:
        campeones = "(Clausura) San Lorenzo de Almagro (Apertura) Lanús";
        break
    case 2008:
        campeones = "(Clausura) River Plate (Apertura) Boca Juniors";
        break
    case 2009:
        campeones = "(Clausura) Vélez Sársfield (Apertura) Bánfield";
        break
    case 2010:
        campeones = "(Clausura) Argentinos Juniors (Apertura) Estudiantes de La Plata";
        break
    case 2011:
        campeones = "(Clausura) Vélez Sársfield (Apertura) Boca Juniors";
        break
    case 2012:
        campeones = "(Clausura) Arsenal F.C. (Torneo Inicial) Vélez Sarsfield";
        break
    case 2013:
        campeones = "(Torneo Final) Newells Old Boys (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield (Torno Inicial) San Lorenzo de Almagro";
        break
    case 2014:
        campeones = "(Torneo Final) River Plate (Torneo Inicial) Racing Club";
        break
    case 2015:
        campeones = "(Campeonato de Primera División) Boca Juniors";
        break
    case 2016:
        campeones = "(Campeonato de Primera División) Lanús";
        break
    case 2017:
        campeones = "(Campeón del Campeonato de Primera División 2016/17) Boca Juniors";
        break
    default:
        campeones = null;
}

if (anio >= 2000 && anio <= 2017) {
    
    console.log(`En el año ${anio} salió campeón: ${campeones}`);
} else {
    console.log("ERROR: Por favor ingrese un año entre 2000 y 2017");
}
