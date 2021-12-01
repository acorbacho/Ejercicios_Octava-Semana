/**
 * Función que engloba la funcionalidad del parking.
 * @param {number} opcion - Opción a ejecutar.
 * @param {(object | string | null)} dato - Dato necesario según la operacio. Puede ser un vehículo, su matrícula o valor nulo.
 */
function parking(opcion, dato) {
    /**
     * Variable auxiliar que almacena el parámetro "opcion".
     * @type {number}
     */
    var opcionAux = opcion
    /**
     * Variable auxiliar que almacena el parámetro "dato".
     * @type {object | string | null}
     */
    var datoAux = dato
    /**
     * Variable utilizada para verificar si se han cumplido ciertas condiciones (vehículo estacionado o retirado).
     * @type {boolean}
     */
    var comprobador = true

    if (opcionAux == 1) {

        if (datoAux.plazas == 1) {

            for (i = 0; i < plazas_parking.length; i++) {

                if (plazas_parking[i] === 'VACÍO') {
                    plazas_parking[i] = datoAux
                    comprobador = !comprobador
                    salida('Vehículo estacionado.')
                    break
                }
            }

            if (comprobador) {
                salida('Parking completo.')
            }

        } else if (datoAux.plazas == 2) {

            for (i = 0; i < plazas_parking.length; i++) {

                if (plazas_parking[i] === 'VACÍO' && plazas_parking[i - 1] === 'VACÍO') {
                    plazas_parking[i - 1] = datoAux
                    plazas_parking[i] = datoAux
                    comprobador = !comprobador
                    salida('Vehículo estacionado.')
                    break
                }
            }

            if (comprobador) {
                salida('Parking completo.')
            }
        }

    } else if (opcionAux == 2) {

        for (i = 0; i < plazas_parking.length; i++) {

            if (plazas_parking[i].matricula == datoAux) {
                plazas_parking[i] = 'VACÍO'
                comprobador = false
            }
        }

        if (comprobador) {
            salida('No existe.')
        } else {
            salida('Vehículo retirado.')
        }

    } else if (opcionAux == 3) {

        for (i = 0; i < plazas_parking.length; i++) {

            if (plazas_parking[i] != 'VACÍO') {
                salida('Plaza [' + i + ']\nTipo de vehículo: ' + plazas_parking[i].nombre + '\nMatrícula: ' + plazas_parking[i].matricula)
            } else {
                salida('Plaza [' + i + ']\nVACÍO')
            }
        }

    } else {
        salida('Error')
    }
}