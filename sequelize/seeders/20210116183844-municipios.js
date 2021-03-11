'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('municipios', [{
                "id_municipio": 1,
                "id_estado": 1,
                "municipio": "Alto Orinoco",

            },
            {
                "id_municipio": 2,
                "id_estado": 1,
                "municipio": "Atabapo",

            },
            {
                "id_municipio": 3,
                "id_estado": 1,
                "municipio": "Atures",

            },
            {
                "id_municipio": 4,
                "id_estado": 1,
                "municipio": "Autana",

            },
            {
                "id_municipio": 5,
                "id_estado": 1,
                "municipio": "Manapiare",

            },
            {
                "id_municipio": 6,
                "id_estado": 1,
                "municipio": "Maroa",

            },
            {
                "id_municipio": 7,
                "id_estado": 1,
                "municipio": "Río Negro",

            },
            {
                "id_municipio": 8,
                "id_estado": 2,
                "municipio": "Anaco",

            },
            {
                "id_municipio": 9,
                "id_estado": 2,
                "municipio": "Aragua",

            },
            {
                "id_municipio": 10,
                "id_estado": 2,
                "municipio": "Manuel Ezequiel Bruzual",

            },
            {
                "id_municipio": 11,
                "id_estado": 2,
                "municipio": "Diego Bautista Urbaneja",

            },
            {
                "id_municipio": 12,
                "id_estado": 2,
                "municipio": "Fernando Peñalver",

            },
            {
                "id_municipio": 13,
                "id_estado": 2,
                "municipio": "Francisco Del Carmen Carvajal",

            },
            {
                "id_municipio": 14,
                "id_estado": 2,
                "municipio": "General Sir Arthur McGregor",

            },
            {
                "id_municipio": 15,
                "id_estado": 2,
                "municipio": "Guanta",

            },
            {
                "id_municipio": 16,
                "id_estado": 2,
                "municipio": "Independencia",

            },
            {
                "id_municipio": 17,
                "id_estado": 2,
                "municipio": "José Gregorio Monagas",

            },
            {
                "id_municipio": 18,
                "id_estado": 2,
                "municipio": "Juan Antonio Sotillo",

            },
            {
                "id_municipio": 19,
                "id_estado": 2,
                "municipio": "Juan Manuel Cajigal",

            },
            {
                "id_municipio": 20,
                "id_estado": 2,
                "municipio": "Libertad",

            },
            {
                "id_municipio": 21,
                "id_estado": 2,
                "municipio": "Francisco de Miranda",

            },
            {
                "id_municipio": 22,
                "id_estado": 2,
                "municipio": "Pedro María Freites",

            },
            {
                "id_municipio": 23,
                "id_estado": 2,
                "municipio": "Píritu",

            },
            {
                "id_municipio": 24,
                "id_estado": 2,
                "municipio": "San José de Guanipa",

            },
            {
                "id_municipio": 25,
                "id_estado": 2,
                "municipio": "San Juan de Capistrano",

            },
            {
                "id_municipio": 26,
                "id_estado": 2,
                "municipio": "Santa Ana",

            },
            {
                "id_municipio": 27,
                "id_estado": 2,
                "municipio": "Simón Bolívar",

            },
            {
                "id_municipio": 28,
                "id_estado": 2,
                "municipio": "Simón Rodríguez",

            },
            {
                "id_municipio": 29,
                "id_estado": 3,
                "municipio": "Achaguas",

            },
            {
                "id_municipio": 30,
                "id_estado": 3,
                "municipio": "Biruaca",

            },
            {
                "id_municipio": 31,
                "id_estado": 3,
                "municipio": "Muñóz",

            },
            {
                "id_municipio": 32,
                "id_estado": 3,
                "municipio": "Páez",

            },
            {
                "id_municipio": 33,
                "id_estado": 3,
                "municipio": "Pedro Camejo",

            },
            {
                "id_municipio": 34,
                "id_estado": 3,
                "municipio": "Rómulo Gallegos",

            },
            {
                "id_municipio": 35,
                "id_estado": 3,
                "municipio": "San Fernando",

            },
            {
                "id_municipio": 36,
                "id_estado": 4,
                "municipio": "Atanasio Girardot",

            },
            {
                "id_municipio": 37,
                "id_estado": 4,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 38,
                "id_estado": 4,
                "municipio": "Camatagua",

            },
            {
                "id_municipio": 39,
                "id_estado": 4,
                "municipio": "Francisco Linares Alcántara",

            },
            {
                "id_municipio": 40,
                "id_estado": 4,
                "municipio": "José Ángel Lamas",

            },
            {
                "id_municipio": 41,
                "id_estado": 4,
                "municipio": "José Félix Ribas",

            },
            {
                "id_municipio": 42,
                "id_estado": 4,
                "municipio": "José Rafael Revenga",

            },
            {
                "id_municipio": 43,
                "id_estado": 4,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 44,
                "id_estado": 4,
                "municipio": "Mario Briceño Iragorry",

            },
            {
                "id_municipio": 45,
                "id_estado": 4,
                "municipio": "Ocumare de la Costa de Oro",

            },
            {
                "id_municipio": 46,
                "id_estado": 4,
                "municipio": "San Casimiro",

            },
            {
                "id_municipio": 47,
                "id_estado": 4,
                "municipio": "San Sebastián",

            },
            {
                "id_municipio": 48,
                "id_estado": 4,
                "municipio": "Santiago Mariño",

            },
            {
                "id_municipio": 49,
                "id_estado": 4,
                "municipio": "Santos Michelena",

            },
            {
                "id_municipio": 50,
                "id_estado": 4,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 51,
                "id_estado": 4,
                "municipio": "Tovar",

            },
            {
                "id_municipio": 52,
                "id_estado": 4,
                "municipio": "Urdaneta",

            },
            {
                "id_municipio": 53,
                "id_estado": 4,
                "municipio": "Zamora",

            },
            {
                "id_municipio": 54,
                "id_estado": 5,
                "municipio": "Alberto Arvelo Torrealba",

            },
            {
                "id_municipio": 55,
                "id_estado": 5,
                "municipio": "Andrés Eloy Blanco",

            },
            {
                "id_municipio": 56,
                "id_estado": 5,
                "municipio": "Antonio José de Sucre",

            },
            {
                "id_municipio": 57,
                "id_estado": 5,
                "municipio": "Arismendi",

            },
            {
                "id_municipio": 58,
                "id_estado": 5,
                "municipio": "Barinas",

            },
            {
                "id_municipio": 59,
                "id_estado": 5,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 60,
                "id_estado": 5,
                "municipio": "Cruz Paredes",

            },
            {
                "id_municipio": 61,
                "id_estado": 5,
                "municipio": "Ezequiel Zamora",

            },
            {
                "id_municipio": 62,
                "id_estado": 5,
                "municipio": "Obispos",

            },
            {
                "id_municipio": 63,
                "id_estado": 5,
                "municipio": "Pedraza",

            },
            {
                "id_municipio": 64,
                "id_estado": 5,
                "municipio": "Rojas",

            },
            {
                "id_municipio": 65,
                "id_estado": 5,
                "municipio": "Sosa",

            },
            {
                "id_municipio": 66,
                "id_estado": 6,
                "municipio": "Caroní",

            },
            {
                "id_municipio": 67,
                "id_estado": 6,
                "municipio": "Cedeño",

            },
            {
                "id_municipio": 68,
                "id_estado": 6,
                "municipio": "El Callao",

            },
            {
                "id_municipio": 69,
                "id_estado": 6,
                "municipio": "Gran Sabana",

            },
            {
                "id_municipio": 70,
                "id_estado": 6,
                "municipio": "Heres",

            },
            {
                "id_municipio": 71,
                "id_estado": 6,
                "municipio": "Piar",

            },
            {
                "id_municipio": 72,
                "id_estado": 6,
                "municipio": "Angostura (Raúl Leoni)",

            },
            {
                "id_municipio": 73,
                "id_estado": 6,
                "municipio": "Roscio",

            },
            {
                "id_municipio": 74,
                "id_estado": 6,
                "municipio": "Sifontes",

            },
            {
                "id_municipio": 75,
                "id_estado": 6,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 76,
                "id_estado": 6,
                "municipio": "Padre Pedro Chien",

            },
            {
                "id_municipio": 77,
                "id_estado": 7,
                "municipio": "Bejuma",

            },
            {
                "id_municipio": 78,
                "id_estado": 7,
                "municipio": "Carlos Arvelo",

            },
            {
                "id_municipio": 79,
                "id_estado": 7,
                "municipio": "Diego Ibarra",

            },
            {
                "id_municipio": 80,
                "id_estado": 7,
                "municipio": "Guacara",

            },
            {
                "id_municipio": 81,
                "id_estado": 7,
                "municipio": "Juan José Mora",

            },
            {
                "id_municipio": 82,
                "id_estado": 7,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 83,
                "id_estado": 7,
                "municipio": "Los Guayos",

            },
            {
                "id_municipio": 84,
                "id_estado": 7,
                "municipio": "Miranda",

            },
            {
                "id_municipio": 85,
                "id_estado": 7,
                "municipio": "Montalbán",

            },
            {
                "id_municipio": 86,
                "id_estado": 7,
                "municipio": "Naguanagua",

            },
            {
                "id_municipio": 87,
                "id_estado": 7,
                "municipio": "Puerto Cabello",

            },
            {
                "id_municipio": 88,
                "id_estado": 7,
                "municipio": "San Diego",

            },
            {
                "id_municipio": 89,
                "id_estado": 7,
                "municipio": "San Joaquín",

            },
            {
                "id_municipio": 90,
                "id_estado": 7,
                "municipio": "Valencia",

            },
            {
                "id_municipio": 91,
                "id_estado": 8,
                "municipio": "Anzoátegui",

            },
            {
                "id_municipio": 92,
                "id_estado": 8,
                "municipio": "Tinaquillo",

            },
            {
                "id_municipio": 93,
                "id_estado": 8,
                "municipio": "Girardot",

            },
            {
                "id_municipio": 94,
                "id_estado": 8,
                "municipio": "Lima Blanco",

            },
            {
                "id_municipio": 95,
                "id_estado": 8,
                "municipio": "Pao de San Juan Bautista",

            },
            {
                "id_municipio": 96,
                "id_estado": 8,
                "municipio": "Ricaurte",

            },
            {
                "id_municipio": 97,
                "id_estado": 8,
                "municipio": "Rómulo Gallegos",

            },
            {
                "id_municipio": 98,
                "id_estado": 8,
                "municipio": "San Carlos",

            },
            {
                "id_municipio": 99,
                "id_estado": 8,
                "municipio": "Tinaco",

            },
            {
                "id_municipio": 100,
                "id_estado": 9,
                "municipio": "Antonio Díaz",

            },
            {
                "id_municipio": 101,
                "id_estado": 9,
                "municipio": "Casacoima",

            },
            {
                "id_municipio": 102,
                "id_estado": 9,
                "municipio": "Pedernales",

            },
            {
                "id_municipio": 103,
                "id_estado": 9,
                "municipio": "Tucupita",

            },
            {
                "id_municipio": 104,
                "id_estado": 10,
                "municipio": "Acosta",

            },
            {
                "id_municipio": 105,
                "id_estado": 10,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 106,
                "id_estado": 10,
                "municipio": "Buchivacoa",

            },
            {
                "id_municipio": 107,
                "id_estado": 10,
                "municipio": "Cacique Manaure",

            },
            {
                "id_municipio": 108,
                "id_estado": 10,
                "municipio": "Carirubana",

            },
            {
                "id_municipio": 109,
                "id_estado": 10,
                "municipio": "Colina",

            },
            {
                "id_municipio": 110,
                "id_estado": 10,
                "municipio": "Dabajuro",

            },
            {
                "id_municipio": 111,
                "id_estado": 10,
                "municipio": "Democracia",

            },
            {
                "id_municipio": 112,
                "id_estado": 10,
                "municipio": "Falcón",

            },
            {
                "id_municipio": 113,
                "id_estado": 10,
                "municipio": "Federación",

            },
            {
                "id_municipio": 114,
                "id_estado": 10,
                "municipio": "Jacura",

            },
            {
                "id_municipio": 115,
                "id_estado": 10,
                "municipio": "José Laurencio Silva",

            },
            {
                "id_municipio": 116,
                "id_estado": 10,
                "municipio": "Los Taques",

            },
            {
                "id_municipio": 117,
                "id_estado": 10,
                "municipio": "Mauroa",

            },
            {
                "id_municipio": 118,
                "id_estado": 10,
                "municipio": "Miranda",

            },
            {
                "id_municipio": 119,
                "id_estado": 10,
                "municipio": "Monseñor Iturriza",

            },
            {
                "id_municipio": 120,
                "id_estado": 10,
                "municipio": "Palmasola",

            },
            {
                "id_municipio": 121,
                "id_estado": 10,
                "municipio": "Petit",

            },
            {
                "id_municipio": 122,
                "id_estado": 10,
                "municipio": "Píritu",

            },
            {
                "id_municipio": 123,
                "id_estado": 10,
                "municipio": "San Francisco",

            },
            {
                "id_municipio": 124,
                "id_estado": 10,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 125,
                "id_estado": 10,
                "municipio": "Tocópero",

            },
            {
                "id_municipio": 126,
                "id_estado": 10,
                "municipio": "Unión",

            },
            {
                "id_municipio": 127,
                "id_estado": 10,
                "municipio": "Urumaco",

            },
            {
                "id_municipio": 128,
                "id_estado": 10,
                "municipio": "Zamora",

            },
            {
                "id_municipio": 129,
                "id_estado": 11,
                "municipio": "Camaguán",

            },
            {
                "id_municipio": 130,
                "id_estado": 11,
                "municipio": "Chaguaramas",

            },
            {
                "id_municipio": 131,
                "id_estado": 11,
                "municipio": "El Socorro",

            },
            {
                "id_municipio": 132,
                "id_estado": 11,
                "municipio": "José Félix Ribas",

            },
            {
                "id_municipio": 133,
                "id_estado": 11,
                "municipio": "José Tadeo Monagas",

            },
            {
                "id_municipio": 134,
                "id_estado": 11,
                "municipio": "Juan Germán Roscio",

            },
            {
                "id_municipio": 135,
                "id_estado": 11,
                "municipio": "Julián Mellado",

            },
            {
                "id_municipio": 136,
                "id_estado": 11,
                "municipio": "Las Mercedes",

            },
            {
                "id_municipio": 137,
                "id_estado": 11,
                "municipio": "Leonardo Infante",

            },
            {
                "id_municipio": 138,
                "id_estado": 11,
                "municipio": "Pedro Zaraza",

            },
            {
                "id_municipio": 139,
                "id_estado": 11,
                "municipio": "Ortíz",

            },
            {
                "id_municipio": 140,
                "id_estado": 11,
                "municipio": "San Gerónimo de Guayabal",

            },
            {
                "id_municipio": 141,
                "id_estado": 11,
                "municipio": "San José de Guaribe",

            },
            {
                "id_municipio": 142,
                "id_estado": 11,
                "municipio": "Santa María de Ipire",

            },
            {
                "id_municipio": 143,
                "id_estado": 11,
                "municipio": "Sebastián Francisco de Miranda",

            },
            {
                "id_municipio": 144,
                "id_estado": 12,
                "municipio": "Andrés Eloy Blanco",

            },
            {
                "id_municipio": 145,
                "id_estado": 12,
                "municipio": "Crespo",

            },
            {
                "id_municipio": 146,
                "id_estado": 12,
                "municipio": "Iribarren",

            },
            {
                "id_municipio": 147,
                "id_estado": 12,
                "municipio": "Jiménez",

            },
            {
                "id_municipio": 148,
                "id_estado": 12,
                "municipio": "Morán",

            },
            {
                "id_municipio": 149,
                "id_estado": 12,
                "municipio": "Palavecino",

            },
            {
                "id_municipio": 150,
                "id_estado": 12,
                "municipio": "Simón Planas",

            },
            {
                "id_municipio": 151,
                "id_estado": 12,
                "municipio": "Torres",

            },
            {
                "id_municipio": 152,
                "id_estado": 12,
                "municipio": "Urdaneta",

            },
            {
                "id_municipio": 179,
                "id_estado": 13,
                "municipio": "Alberto Adriani",

            },
            {
                "id_municipio": 180,
                "id_estado": 13,
                "municipio": "Andrés Bello",

            },
            {
                "id_municipio": 181,
                "id_estado": 13,
                "municipio": "Antonio Pinto Salinas",

            },
            {
                "id_municipio": 182,
                "id_estado": 13,
                "municipio": "Aricagua",

            },
            {
                "id_municipio": 183,
                "id_estado": 13,
                "municipio": "Arzobispo Chacón",

            },
            {
                "id_municipio": 184,
                "id_estado": 13,
                "municipio": "Campo Elías",

            },
            {
                "id_municipio": 185,
                "id_estado": 13,
                "municipio": "Caracciolo Parra Olmedo",

            },
            {
                "id_municipio": 186,
                "id_estado": 13,
                "municipio": "Cardenal Quintero",

            },
            {
                "id_municipio": 187,
                "id_estado": 13,
                "municipio": "Guaraque",

            },
            {
                "id_municipio": 188,
                "id_estado": 13,
                "municipio": "Julio César Salas",

            },
            {
                "id_municipio": 189,
                "id_estado": 13,
                "municipio": "Justo Briceño",

            },
            {
                "id_municipio": 190,
                "id_estado": 13,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 191,
                "id_estado": 13,
                "municipio": "Miranda",

            },
            {
                "id_municipio": 192,
                "id_estado": 13,
                "municipio": "Obispo Ramos de Lora",

            },
            {
                "id_municipio": 193,
                "id_estado": 13,
                "municipio": "Padre Noguera",

            },
            {
                "id_municipio": 194,
                "id_estado": 13,
                "municipio": "Pueblo Llano",

            },
            {
                "id_municipio": 195,
                "id_estado": 13,
                "municipio": "Rangel",

            },
            {
                "id_municipio": 196,
                "id_estado": 13,
                "municipio": "Rivas Dávila",

            },
            {
                "id_municipio": 197,
                "id_estado": 13,
                "municipio": "Santos Marquina",

            },
            {
                "id_municipio": 198,
                "id_estado": 13,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 199,
                "id_estado": 13,
                "municipio": "Tovar",

            },
            {
                "id_municipio": 200,
                "id_estado": 13,
                "municipio": "Tulio Febres Cordero",

            },
            {
                "id_municipio": 201,
                "id_estado": 13,
                "municipio": "Zea",

            },
            {
                "id_municipio": 223,
                "id_estado": 14,
                "municipio": "Acevedo",

            },
            {
                "id_municipio": 224,
                "id_estado": 14,
                "municipio": "Andrés Bello",

            },
            {
                "id_municipio": 225,
                "id_estado": 14,
                "municipio": "Baruta",

            },
            {
                "id_municipio": 226,
                "id_estado": 14,
                "municipio": "Brión",

            },
            {
                "id_municipio": 227,
                "id_estado": 14,
                "municipio": "Buroz",

            },
            {
                "id_municipio": 228,
                "id_estado": 14,
                "municipio": "Carrizal",

            },
            {
                "id_municipio": 229,
                "id_estado": 14,
                "municipio": "Chacao",

            },
            {
                "id_municipio": 230,
                "id_estado": 14,
                "municipio": "Cristóbal Rojas",

            },
            {
                "id_municipio": 231,
                "id_estado": 14,
                "municipio": "El Hatillo",

            },
            {
                "id_municipio": 232,
                "id_estado": 14,
                "municipio": "Guaicaipuro",

            },
            {
                "id_municipio": 233,
                "id_estado": 14,
                "municipio": "Independencia",

            },
            {
                "id_municipio": 234,
                "id_estado": 14,
                "municipio": "Lander",

            },
            {
                "id_municipio": 235,
                "id_estado": 14,
                "municipio": "Los Salias",

            },
            {
                "id_municipio": 236,
                "id_estado": 14,
                "municipio": "Páez",

            },
            {
                "id_municipio": 237,
                "id_estado": 14,
                "municipio": "Paz Castillo",

            },
            {
                "id_municipio": 238,
                "id_estado": 14,
                "municipio": "Pedro Gual",

            },
            {
                "id_municipio": 239,
                "id_estado": 14,
                "municipio": "Plaza",

            },
            {
                "id_municipio": 240,
                "id_estado": 14,
                "municipio": "Simón Bolívar",

            },
            {
                "id_municipio": 241,
                "id_estado": 14,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 242,
                "id_estado": 14,
                "municipio": "Urdaneta",

            },
            {
                "id_municipio": 243,
                "id_estado": 14,
                "municipio": "Zamora",

            },
            {
                "id_municipio": 258,
                "id_estado": 15,
                "municipio": "Acosta",

            },
            {
                "id_municipio": 259,
                "id_estado": 15,
                "municipio": "Aguasay",

            },
            {
                "id_municipio": 260,
                "id_estado": 15,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 261,
                "id_estado": 15,
                "municipio": "Caripe",

            },
            {
                "id_municipio": 262,
                "id_estado": 15,
                "municipio": "Cedeño",

            },
            {
                "id_municipio": 263,
                "id_estado": 15,
                "municipio": "Ezequiel Zamora",

            },
            {
                "id_municipio": 264,
                "id_estado": 15,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 265,
                "id_estado": 15,
                "municipio": "Maturín",

            },
            {
                "id_municipio": 266,
                "id_estado": 15,
                "municipio": "Piar",

            },
            {
                "id_municipio": 267,
                "id_estado": 15,
                "municipio": "Punceres",

            },
            {
                "id_municipio": 268,
                "id_estado": 15,
                "municipio": "Santa Bárbara",

            },
            {
                "id_municipio": 269,
                "id_estado": 15,
                "municipio": "Sotillo",

            },
            {
                "id_municipio": 270,
                "id_estado": 15,
                "municipio": "Uracoa",

            },
            {
                "id_municipio": 271,
                "id_estado": 16,
                "municipio": "Antolín del Campo",

            },
            {
                "id_municipio": 272,
                "id_estado": 16,
                "municipio": "Arismendi",

            },
            {
                "id_municipio": 273,
                "id_estado": 16,
                "municipio": "García",

            },
            {
                "id_municipio": 274,
                "id_estado": 16,
                "municipio": "Gómez",

            },
            {
                "id_municipio": 275,
                "id_estado": 16,
                "municipio": "Maneiro",

            },
            {
                "id_municipio": 276,
                "id_estado": 16,
                "municipio": "Marcano",

            },
            {
                "id_municipio": 277,
                "id_estado": 16,
                "municipio": "Mariño",

            },
            {
                "id_municipio": 278,
                "id_estado": 16,
                "municipio": "Península de Macanao",

            },
            {
                "id_municipio": 279,
                "id_estado": 16,
                "municipio": "Tubores",

            },
            {
                "id_municipio": 280,
                "id_estado": 16,
                "municipio": "Villalba",

            },
            {
                "id_municipio": 281,
                "id_estado": 16,
                "municipio": "Díaz",

            },
            {
                "id_municipio": 282,
                "id_estado": 17,
                "municipio": "Agua Blanca",

            },
            {
                "id_municipio": 283,
                "id_estado": 17,
                "municipio": "Araure",

            },
            {
                "id_municipio": 284,
                "id_estado": 17,
                "municipio": "Esteller",

            },
            {
                "id_municipio": 285,
                "id_estado": 17,
                "municipio": "Guanare",

            },
            {
                "id_municipio": 286,
                "id_estado": 17,
                "municipio": "Guanarito",

            },
            {
                "id_municipio": 287,
                "id_estado": 17,
                "municipio": "Monseñor José Vicente de Unda",

            },
            {
                "id_municipio": 288,
                "id_estado": 17,
                "municipio": "Ospino",

            },
            {
                "id_municipio": 289,
                "id_estado": 17,
                "municipio": "Páez",

            },
            {
                "id_municipio": 290,
                "id_estado": 17,
                "municipio": "Papelón",

            },
            {
                "id_municipio": 291,
                "id_estado": 17,
                "municipio": "San Genaro de Boconoíto",

            },
            {
                "id_municipio": 292,
                "id_estado": 17,
                "municipio": "San Rafael de Onoto",

            },
            {
                "id_municipio": 293,
                "id_estado": 17,
                "municipio": "Santa Rosalía",

            },
            {
                "id_municipio": 294,
                "id_estado": 17,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 295,
                "id_estado": 17,
                "municipio": "Turén",

            },
            {
                "id_municipio": 296,
                "id_estado": 18,
                "municipio": "Andrés Eloy Blanco",

            },
            {
                "id_municipio": 297,
                "id_estado": 18,
                "municipio": "Andrés Mata",

            },
            {
                "id_municipio": 298,
                "id_estado": 18,
                "municipio": "Arismendi",

            },
            {
                "id_municipio": 299,
                "id_estado": 18,
                "municipio": "Benítez",

            },
            {
                "id_municipio": 300,
                "id_estado": 18,
                "municipio": "Bermúdez",

            },
            {
                "id_municipio": 301,
                "id_estado": 18,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 302,
                "id_estado": 18,
                "municipio": "Cajigal",

            },
            {
                "id_municipio": 303,
                "id_estado": 18,
                "municipio": "Cruz Salmerón Acosta",

            },
            {
                "id_municipio": 304,
                "id_estado": 18,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 305,
                "id_estado": 18,
                "municipio": "Mariño",

            },
            {
                "id_municipio": 306,
                "id_estado": 18,
                "municipio": "Mejía",

            },
            {
                "id_municipio": 307,
                "id_estado": 18,
                "municipio": "Montes",

            },
            {
                "id_municipio": 308,
                "id_estado": 18,
                "municipio": "Ribero",

            },
            {
                "id_municipio": 309,
                "id_estado": 18,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 310,
                "id_estado": 18,
                "municipio": "Valdéz",

            },
            {
                "id_municipio": 341,
                "id_estado": 19,
                "municipio": "Andrés Bello",

            },
            {
                "id_municipio": 342,
                "id_estado": 19,
                "municipio": "Antonio Rómulo Costa",

            },
            {
                "id_municipio": 343,
                "id_estado": 19,
                "municipio": "Ayacucho",

            },
            {
                "id_municipio": 344,
                "id_estado": 19,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 345,
                "id_estado": 19,
                "municipio": "Cárdenas",

            },
            {
                "id_municipio": 346,
                "id_estado": 19,
                "municipio": "Córdoba",

            },
            {
                "id_municipio": 347,
                "id_estado": 19,
                "municipio": "Fernández Feo",

            },
            {
                "id_municipio": 348,
                "id_estado": 19,
                "municipio": "Francisco de Miranda",

            },
            {
                "id_municipio": 349,
                "id_estado": 19,
                "municipio": "García de Hevia",

            },
            {
                "id_municipio": 350,
                "id_estado": 19,
                "municipio": "Guásimos",

            },
            {
                "id_municipio": 351,
                "id_estado": 19,
                "municipio": "Independencia",

            },
            {
                "id_municipio": 352,
                "id_estado": 19,
                "municipio": "Jáuregui",

            },
            {
                "id_municipio": 353,
                "id_estado": 19,
                "municipio": "José María Vargas",

            },
            {
                "id_municipio": 354,
                "id_estado": 19,
                "municipio": "Junín",

            },
            {
                "id_municipio": 355,
                "id_estado": 19,
                "municipio": "Libertad",

            },
            {
                "id_municipio": 356,
                "id_estado": 19,
                "municipio": "Libertador",

            },
            {
                "id_municipio": 357,
                "id_estado": 19,
                "municipio": "Lobatera",

            },
            {
                "id_municipio": 358,
                "id_estado": 19,
                "municipio": "Michelena",

            },
            {
                "id_municipio": 359,
                "id_estado": 19,
                "municipio": "Panamericano",

            },
            {
                "id_municipio": 360,
                "id_estado": 19,
                "municipio": "Pedro María Ureña",

            },
            {
                "id_municipio": 361,
                "id_estado": 19,
                "municipio": "Rafael Urdaneta",

            },
            {
                "id_municipio": 362,
                "id_estado": 19,
                "municipio": "Samuel Darío Maldonado",

            },
            {
                "id_municipio": 363,
                "id_estado": 19,
                "municipio": "San Cristóbal",

            },
            {
                "id_municipio": 364,
                "id_estado": 19,
                "municipio": "Seboruco",

            },
            {
                "id_municipio": 365,
                "id_estado": 19,
                "municipio": "Simón Rodríguez",

            },
            {
                "id_municipio": 366,
                "id_estado": 19,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 367,
                "id_estado": 19,
                "municipio": "Torbes",

            },
            {
                "id_municipio": 368,
                "id_estado": 19,
                "municipio": "Uribante",

            },
            {
                "id_municipio": 369,
                "id_estado": 19,
                "municipio": "San Judas Tadeo",

            },
            {
                "id_municipio": 370,
                "id_estado": 20,
                "municipio": "Andrés Bello",

            },
            {
                "id_municipio": 371,
                "id_estado": 20,
                "municipio": "Boconó",

            },
            {
                "id_municipio": 372,
                "id_estado": 20,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 373,
                "id_estado": 20,
                "municipio": "Candelaria",

            },
            {
                "id_municipio": 374,
                "id_estado": 20,
                "municipio": "Carache",

            },
            {
                "id_municipio": 375,
                "id_estado": 20,
                "municipio": "Escuque",

            },
            {
                "id_municipio": 376,
                "id_estado": 20,
                "municipio": "José Felipe Márquez Cañizalez",

            },
            {
                "id_municipio": 377,
                "id_estado": 20,
                "municipio": "Juan Vicente Campos Elías",

            },
            {
                "id_municipio": 378,
                "id_estado": 20,
                "municipio": "La Ceiba",

            },
            {
                "id_municipio": 379,
                "id_estado": 20,
                "municipio": "Miranda",

            },
            {
                "id_municipio": 380,
                "id_estado": 20,
                "municipio": "Monte Carmelo",

            },
            {
                "id_municipio": 381,
                "id_estado": 20,
                "municipio": "Motatán",

            },
            {
                "id_municipio": 382,
                "id_estado": 20,
                "municipio": "Pampán",

            },
            {
                "id_municipio": 383,
                "id_estado": 20,
                "municipio": "Pampanito",

            },
            {
                "id_municipio": 384,
                "id_estado": 20,
                "municipio": "Rafael Rangel",

            },
            {
                "id_municipio": 385,
                "id_estado": 20,
                "municipio": "San Rafael de Carvajal",

            },
            {
                "id_municipio": 386,
                "id_estado": 20,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 387,
                "id_estado": 20,
                "municipio": "Trujillo",

            },
            {
                "id_municipio": 388,
                "id_estado": 20,
                "municipio": "Urdaneta",

            },
            {
                "id_municipio": 389,
                "id_estado": 20,
                "municipio": "Valera",

            },
            {
                "id_municipio": 390,
                "id_estado": 21,
                "municipio": "Vargas",

            },
            {
                "id_municipio": 391,
                "id_estado": 22,
                "municipio": "Arístides Bastidas",

            },
            {
                "id_municipio": 392,
                "id_estado": 22,
                "municipio": "Bolívar",

            },
            {
                "id_municipio": 407,
                "id_estado": 22,
                "municipio": "Bruzual",

            },
            {
                "id_municipio": 408,
                "id_estado": 22,
                "municipio": "Cocorote",

            },
            {
                "id_municipio": 409,
                "id_estado": 22,
                "municipio": "Independencia",

            },
            {
                "id_municipio": 410,
                "id_estado": 22,
                "municipio": "José Antonio Páez",

            },
            {
                "id_municipio": 411,
                "id_estado": 22,
                "municipio": "La Trinidad",

            },
            {
                "id_municipio": 412,
                "id_estado": 22,
                "municipio": "Manuel Monge",

            },
            {
                "id_municipio": 413,
                "id_estado": 22,
                "municipio": "Nirgua",

            },
            {
                "id_municipio": 414,
                "id_estado": 22,
                "municipio": "Peña",

            },
            {
                "id_municipio": 415,
                "id_estado": 22,
                "municipio": "San Felipe",

            },
            {
                "id_municipio": 416,
                "id_estado": 22,
                "municipio": "Sucre",

            },
            {
                "id_municipio": 417,
                "id_estado": 22,
                "municipio": "Urachiche",

            },
            {
                "id_municipio": 418,
                "id_estado": 22,
                "municipio": "José Joaquín Veroes",

            },
            {
                "id_municipio": 441,
                "id_estado": 23,
                "municipio": "Almirante Padilla",

            },
            {
                "id_municipio": 442,
                "id_estado": 23,
                "municipio": "Baralt",

            },
            {
                "id_municipio": 443,
                "id_estado": 23,
                "municipio": "Cabimas",

            },
            {
                "id_municipio": 444,
                "id_estado": 23,
                "municipio": "Catatumbo",

            },
            {
                "id_municipio": 445,
                "id_estado": 23,
                "municipio": "Colón",


            },
            {
                "id_municipio": 446,
                "id_estado": 23,
                "municipio": "Francisco Javier Pulgar",


            },
            {
                "id_municipio": 447,
                "id_estado": 23,
                "municipio": "Páez",


            },
            {
                "id_municipio": 448,
                "id_estado": 23,
                "municipio": "Jesús Enrique Losada",


            },
            {
                "id_municipio": 449,
                "id_estado": 23,
                "municipio": "Jesús María Semprún",


            },
            {
                "id_municipio": 450,
                "id_estado": 23,
                "municipio": "La Cañada de Urdaneta",


            },
            {
                "id_municipio": 451,
                "id_estado": 23,
                "municipio": "Lagunillas",


            },
            {
                "id_municipio": 452,
                "id_estado": 23,
                "municipio": "Machiques de Perijá",


            },
            {
                "id_municipio": 453,
                "id_estado": 23,
                "municipio": "Mara",


            },
            {
                "id_municipio": 454,
                "id_estado": 23,
                "municipio": "Maracaibo",


            },
            {
                "id_municipio": 455,
                "id_estado": 23,
                "municipio": "Miranda",


            },
            {
                "id_municipio": 456,
                "id_estado": 23,
                "municipio": "Rosario de Perijá",


            },
            {
                "id_municipio": 457,
                "id_estado": 23,
                "municipio": "San Francisco",


            },
            {
                "id_municipio": 458,
                "id_estado": 23,
                "municipio": "Santa Rita",


            },
            {
                "id_municipio": 459,
                "id_estado": 23,
                "municipio": "Simón Bolívar",


            },
            {
                "id_municipio": 460,
                "id_estado": 23,
                "municipio": "Sucre",


            },
            {
                "id_municipio": 461,
                "id_estado": 23,
                "municipio": "Valmore Rodríguez",


            },
            {
                "id_municipio": 462,
                "id_estado": 24,
                "municipio": "Libertador",


            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('municipios', null, {});
    }
};