/**
 * Función de creacion de objetos de tipo "Vehículo".
 * @param {number} tipo_vehiculo - 1 para coche ó 2 para camión.
 * @param {string} matricula_vehiculo - Matrícula.
 * @returns {object} - Objeto de tipo "Vehículo".
 */
function registro_vehiculo(tipo_vehiculo, matricula_vehiculo) {
    /**
     * Función de creación de objetos de tipo "Vehículo".
     * @param {string} nombre - "coche" o "camión".
     * @param {string} matricula - Matrícula.
     * @param {number} plazas - 1 ó 2.
     */
    var Vehiculo = function (nombre, matricula, plazas) {
        this.nombre = nombre
        this.matricula = matricula
        this.plazas = plazas
    }
    /**
     * Variable auxiliar. Almacena el parámetro "tipo_vehiculo".
     * @type {number}
     */
    var tipo_vehiculoAux = tipo_vehiculo
    /**
     * Variable auxiliar. Almacena el parámetro "matricula_vehiculo".
     */
    var matricula_vehiculoAux = matricula_vehiculo

    if (tipo_vehiculoAux === 'coche') {
        /**
         * Variable que almacena un coche nuevo.
         * @type {object}
         */
        var coche = new Vehiculo(tipo_vehiculoAux, matricula_vehiculoAux, 1)
        return coche
    } else if (tipo_vehiculoAux === 'camión') {
        /**
         * Variable que almacena un camión nuevo.
         * @type {object}
         */
        var camion = new Vehiculo(tipo_vehiculoAux, matricula_vehiculoAux, 2)
        return camion
    } else {
        salida('Error.')
    }
}