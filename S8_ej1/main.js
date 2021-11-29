/**
 * Función "main" del parking automático.
 */
function main() {
    /**
     * Variable global que almacena el array de las plazas de garaje.
     * @type {Array}
     */
    window.plazas_parking = ['VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO', 'VACÍO']
    /**
     * Variable que almacena la matrícula de un vehículo.
     * @type {string}
     */
    var matricula
    /**
     * Variable que almacena el objeto creado a partir de los datos del vehículo introducidos.
     * @type {object}
     */
    var vehiculo
    /**
     * Variable de opciones.
     * @type {number}
     */
    var select
    /**
     * Variable de subopciones
     * @type {number}
     */
    var subselect

    while (select != 4) {
        select = entrada('Bienvenido a nuestro aparcamiento automático.\nSeleccione que desea hacer:\n1- Aparcar un vehículo.\n2- Retirar un vehículo\n3- Revisar plazas ocupadas.\n4- Salir.')

        if (select == 1) {
            subselect = entrada('¿Qué tipo de vehículo desea aparcar?\nSeleccione el número:\n1- Coche.\n2- Camión.')

            if (subselect == 1) {
                matricula = entrada('Por favor, introduzca la matrícula del vehículo.')

                if (matricula == '') {
                    salida('La matrícula no puede estar vacía.')
                } else {
                    vehiculo = registro_vehiculo('coche', matricula)
                    parking(select, vehiculo)
                }

            } else if (subselect == 2) {
                matricula = entrada('Por favor, introduzca la matrícula del vehículo.')

                if (matricula == '') {
                    salida('La matrícula no puede estar vacía.')
                } else {
                    vehiculo = registro_vehiculo('camión', matricula)
                    parking(select, vehiculo)
                }

            } else {
                salida('Error.')
            }

        } else if (select == 2) {
            matricula = entrada('Introduce la matrícula del vehículo que quiere sacar del parking.')
            parking(select, matricula)
        } else if (select == 3) {
            parking(select, null)
        } else if (select == 4) {
            salida('Gracias por utilizar nuestro servicio.\n¡Hasta la próxima!')
        } else {
            salida('Error.')
        }
    }
}
main()