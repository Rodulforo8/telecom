'use strict';
var moment = require('moment')
module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('parroquias', [{
                "id_parroquia": 1,
                "id_municipio": 1,
                "parroquia": "Alto Orinoco",

            },
            {
                "id_parroquia": 2,
                "id_municipio": 1,
                "parroquia": "Huachamacare Acanaña",

            },
            {
                "id_parroquia": 3,
                "id_municipio": 1,
                "parroquia": "Marawaka Toky Shamanaña",

            },
            {
                "id_parroquia": 4,
                "id_municipio": 1,
                "parroquia": "Mavaka Mavaka",

            },
            {
                "id_parroquia": 5,
                "id_municipio": 1,
                "parroquia": "Sierra Parima Parimabé",

            },
            {
                "id_parroquia": 6,
                "id_municipio": 2,
                "parroquia": "Ucata Laja Lisa",

            },
            {
                "id_parroquia": 7,
                "id_municipio": 2,
                "parroquia": "Yapacana Macuruco",

            },
            {
                "id_parroquia": 8,
                "id_municipio": 2,
                "parroquia": "Caname Guarinuma",

            },
            {
                "id_parroquia": 9,
                "id_municipio": 3,
                "parroquia": "Fernando Girón Tovar",

            },
            {
                "id_parroquia": 10,
                "id_municipio": 3,
                "parroquia": "Luis Alberto Gómez",

            },
            {
                "id_parroquia": 11,
                "id_municipio": 3,
                "parroquia": "Pahueña Limón de Parhueña",

            },
            {
                "id_parroquia": 12,
                "id_municipio": 3,
                "parroquia": "Platanillal Platanillal",

            },
            {
                "id_parroquia": 13,
                "id_municipio": 4,
                "parroquia": "Samariapo",

            },
            {
                "id_parroquia": 14,
                "id_municipio": 4,
                "parroquia": "Sipapo",

            },
            {
                "id_parroquia": 15,
                "id_municipio": 4,
                "parroquia": "Munduapo",

            },
            {
                "id_parroquia": 16,
                "id_municipio": 4,
                "parroquia": "Guayapo",

            },
            {
                "id_parroquia": 17,
                "id_municipio": 5,
                "parroquia": "Alto Ventuari",

            },
            {
                "id_parroquia": 18,
                "id_municipio": 5,
                "parroquia": "Medio Ventuari",

            },
            {
                "id_parroquia": 19,
                "id_municipio": 5,
                "parroquia": "Bajo Ventuari",

            },
            {
                "id_parroquia": 20,
                "id_municipio": 6,
                "parroquia": "Victorino",

            },
            {
                "id_parroquia": 21,
                "id_municipio": 6,
                "parroquia": "Comunidad",

            },
            {
                "id_parroquia": 22,
                "id_municipio": 7,
                "parroquia": "Casiquiare",

            },
            {
                "id_parroquia": 23,
                "id_municipio": 7,
                "parroquia": "Cocuy",

            },
            {
                "id_parroquia": 24,
                "id_municipio": 7,
                "parroquia": "San Carlos de Río Negro",

            },
            {
                "id_parroquia": 25,
                "id_municipio": 7,
                "parroquia": "Solano",

            },
            {
                "id_parroquia": 26,
                "id_municipio": 8,
                "parroquia": "Anaco",

            },
            {
                "id_parroquia": 27,
                "id_municipio": 8,
                "parroquia": "San Joaquín",

            },
            {
                "id_parroquia": 28,
                "id_municipio": 9,
                "parroquia": "Cachipo",

            },
            {
                "id_parroquia": 29,
                "id_municipio": 9,
                "parroquia": "Aragua de Barcelona",

            },
            {
                "id_parroquia": 30,
                "id_municipio": 11,
                "parroquia": "Lechería",

            },
            {
                "id_parroquia": 31,
                "id_municipio": 11,
                "parroquia": "El Morro",

            },
            {
                "id_parroquia": 32,
                "id_municipio": 12,
                "parroquia": "Puerto Píritu",

            },
            {
                "id_parroquia": 33,
                "id_municipio": 12,
                "parroquia": "San Miguel",

            },
            {
                "id_parroquia": 34,
                "id_municipio": 12,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 35,
                "id_municipio": 13,
                "parroquia": "Valle de Guanape",

            },
            {
                "id_parroquia": 36,
                "id_municipio": 13,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 37,
                "id_municipio": 14,
                "parroquia": "El Chaparro",

            },
            {
                "id_parroquia": 38,
                "id_municipio": 14,
                "parroquia": "Tomás Alfaro",

            },
            {
                "id_parroquia": 39,
                "id_municipio": 14,
                "parroquia": "Calatrava",

            },
            {
                "id_parroquia": 40,
                "id_municipio": 15,
                "parroquia": "Guanta",

            },
            {
                "id_parroquia": 41,
                "id_municipio": 15,
                "parroquia": "Chorrerón",

            },
            {
                "id_parroquia": 42,
                "id_municipio": 16,
                "parroquia": "Mamo",

            },
            {
                "id_parroquia": 43,
                "id_municipio": 16,
                "parroquia": "Soledad",

            },
            {
                "id_parroquia": 44,
                "id_municipio": 17,
                "parroquia": "Mapire",

            },
            {
                "id_parroquia": 45,
                "id_municipio": 17,
                "parroquia": "Piar",

            },
            {
                "id_parroquia": 46,
                "id_municipio": 17,
                "parroquia": "Santa Clara",

            },
            {
                "id_parroquia": 47,
                "id_municipio": 17,
                "parroquia": "San Diego de Cabrutica",

            },
            {
                "id_parroquia": 48,
                "id_municipio": 17,
                "parroquia": "Uverito",

            },
            {
                "id_parroquia": 49,
                "id_municipio": 17,
                "parroquia": "Zuata",

            },
            {
                "id_parroquia": 50,
                "id_municipio": 18,
                "parroquia": "Puerto La Cruz",

            },
            {
                "id_parroquia": 51,
                "id_municipio": 18,
                "parroquia": "Pozuelos",

            },
            {
                "id_parroquia": 52,
                "id_municipio": 19,
                "parroquia": "Onoto",

            },
            {
                "id_parroquia": 53,
                "id_municipio": 19,
                "parroquia": "San Pablo",

            },
            {
                "id_parroquia": 54,
                "id_municipio": 20,
                "parroquia": "San Mateo",

            },
            {
                "id_parroquia": 55,
                "id_municipio": 20,
                "parroquia": "El Carito",

            },
            {
                "id_parroquia": 56,
                "id_municipio": 20,
                "parroquia": "Santa Inés",

            },
            {
                "id_parroquia": 57,
                "id_municipio": 20,
                "parroquia": "La Romereña",

            },
            {
                "id_parroquia": 58,
                "id_municipio": 21,
                "parroquia": "Atapirire",

            },
            {
                "id_parroquia": 59,
                "id_municipio": 21,
                "parroquia": "Boca del Pao",

            },
            {
                "id_parroquia": 60,
                "id_municipio": 21,
                "parroquia": "El Pao",

            },
            {
                "id_parroquia": 61,
                "id_municipio": 21,
                "parroquia": "Pariaguán",

            },
            {
                "id_parroquia": 62,
                "id_municipio": 22,
                "parroquia": "Cantaura",

            },
            {
                "id_parroquia": 63,
                "id_municipio": 22,
                "parroquia": "Libertador",

            },
            {
                "id_parroquia": 64,
                "id_municipio": 22,
                "parroquia": "Santa Rosa",

            },
            {
                "id_parroquia": 65,
                "id_municipio": 22,
                "parroquia": "Urica",

            },
            {
                "id_parroquia": 66,
                "id_municipio": 23,
                "parroquia": "Píritu",

            },
            {
                "id_parroquia": 67,
                "id_municipio": 23,
                "parroquia": "San Francisco",

            },
            {
                "id_parroquia": 68,
                "id_municipio": 24,
                "parroquia": "San José de Guanipa",

            },
            {
                "id_parroquia": 69,
                "id_municipio": 25,
                "parroquia": "Boca de Uchire",

            },
            {
                "id_parroquia": 70,
                "id_municipio": 25,
                "parroquia": "Boca de Chávez",

            },
            {
                "id_parroquia": 71,
                "id_municipio": 26,
                "parroquia": "Pueblo Nuevo",

            },
            {
                "id_parroquia": 72,
                "id_municipio": 26,
                "parroquia": "Santa Ana",

            },
            {
                "id_parroquia": 73,
                "id_municipio": 27,
                "parroquia": "Bergantín",

            },
            {
                "id_parroquia": 74,
                "id_municipio": 27,
                "parroquia": "Caigua",

            },
            {
                "id_parroquia": 75,
                "id_municipio": 27,
                "parroquia": "El Carmen",

            },
            {
                "id_parroquia": 76,
                "id_municipio": 27,
                "parroquia": "El Pilar",

            },
            {
                "id_parroquia": 77,
                "id_municipio": 27,
                "parroquia": "Naricual",

            },
            {
                "id_parroquia": 78,
                "id_municipio": 27,
                "parroquia": "San Crsitóbal",

            },
            {
                "id_parroquia": 79,
                "id_municipio": 28,
                "parroquia": "Edmundo Barrios",

            },
            {
                "id_parroquia": 80,
                "id_municipio": 28,
                "parroquia": "Miguel Otero Silva",

            },
            {
                "id_parroquia": 81,
                "id_municipio": 29,
                "parroquia": "Achaguas",

            },
            {
                "id_parroquia": 82,
                "id_municipio": 29,
                "parroquia": "Apurito",

            },
            {
                "id_parroquia": 83,
                "id_municipio": 29,
                "parroquia": "El Yagual",

            },
            {
                "id_parroquia": 84,
                "id_municipio": 29,
                "parroquia": "Guachara",

            },
            {
                "id_parroquia": 85,
                "id_municipio": 29,
                "parroquia": "Mucuritas",

            },
            {
                "id_parroquia": 86,
                "id_municipio": 29,
                "parroquia": "Queseras del medio",

            },
            {
                "id_parroquia": 87,
                "id_municipio": 30,
                "parroquia": "Biruaca",

            },
            {
                "id_parroquia": 88,
                "id_municipio": 31,
                "parroquia": "Bruzual",

            },
            {
                "id_parroquia": 89,
                "id_municipio": 31,
                "parroquia": "Mantecal",

            },
            {
                "id_parroquia": 90,
                "id_municipio": 31,
                "parroquia": "Quintero",

            },
            {
                "id_parroquia": 91,
                "id_municipio": 31,
                "parroquia": "Rincón Hondo",

            },
            {
                "id_parroquia": 92,
                "id_municipio": 31,
                "parroquia": "San Vicente",

            },
            {
                "id_parroquia": 93,
                "id_municipio": 32,
                "parroquia": "Guasdualito",

            },
            {
                "id_parroquia": 94,
                "id_municipio": 32,
                "parroquia": "Aramendi",

            },
            {
                "id_parroquia": 95,
                "id_municipio": 32,
                "parroquia": "El Amparo",

            },
            {
                "id_parroquia": 96,
                "id_municipio": 32,
                "parroquia": "San Camilo",

            },
            {
                "id_parroquia": 97,
                "id_municipio": 32,
                "parroquia": "Urdaneta",

            },
            {
                "id_parroquia": 98,
                "id_municipio": 33,
                "parroquia": "San Juan de Payara",

            },
            {
                "id_parroquia": 99,
                "id_municipio": 33,
                "parroquia": "Codazzi",

            },
            {
                "id_parroquia": 100,
                "id_municipio": 33,
                "parroquia": "Cunaviche",

            },
            {
                "id_parroquia": 101,
                "id_municipio": 34,
                "parroquia": "Elorza",

            },
            {
                "id_parroquia": 102,
                "id_municipio": 34,
                "parroquia": "La Trinidad",

            },
            {
                "id_parroquia": 103,
                "id_municipio": 35,
                "parroquia": "San Fernando",

            },
            {
                "id_parroquia": 104,
                "id_municipio": 35,
                "parroquia": "El Recreo",

            },
            {
                "id_parroquia": 105,
                "id_municipio": 35,
                "parroquia": "Peñalver",

            },
            {
                "id_parroquia": 106,
                "id_municipio": 35,
                "parroquia": "San Rafael de Atamaica",

            },
            {
                "id_parroquia": 107,
                "id_municipio": 36,
                "parroquia": "Pedro José Ovalles",

            },
            {
                "id_parroquia": 108,
                "id_municipio": 36,
                "parroquia": "Joaquín Crespo",

            },
            {
                "id_parroquia": 109,
                "id_municipio": 36,
                "parroquia": "José Casanova Godoy",

            },
            {
                "id_parroquia": 110,
                "id_municipio": 36,
                "parroquia": "Madre María de San José",

            },
            {
                "id_parroquia": 111,
                "id_municipio": 36,
                "parroquia": "Andrés Eloy Blanco",

            },
            {
                "id_parroquia": 112,
                "id_municipio": 36,
                "parroquia": "Los Tacarigua",

            },
            {
                "id_parroquia": 113,
                "id_municipio": 36,
                "parroquia": "Las Delicias",

            },
            {
                "id_parroquia": 114,
                "id_municipio": 36,
                "parroquia": "Choroní",

            },
            {
                "id_parroquia": 115,
                "id_municipio": 37,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 116,
                "id_municipio": 38,
                "parroquia": "Camatagua",

            },
            {
                "id_parroquia": 117,
                "id_municipio": 38,
                "parroquia": "Carmen de Cura",

            },
            {
                "id_parroquia": 118,
                "id_municipio": 39,
                "parroquia": "Santa Rita",

            },
            {
                "id_parroquia": 119,
                "id_municipio": 39,
                "parroquia": "Francisco de Miranda",

            },
            {
                "id_parroquia": 120,
                "id_municipio": 39,
                "parroquia": "Moseñor Feliciano González",

            },
            {
                "id_parroquia": 121,
                "id_municipio": 40,
                "parroquia": "Santa Cruz",

            },
            {
                "id_parroquia": 122,
                "id_municipio": 41,
                "parroquia": "José Félix Ribas",

            },
            {
                "id_parroquia": 123,
                "id_municipio": 41,
                "parroquia": "Castor Nieves Ríos",

            },
            {
                "id_parroquia": 124,
                "id_municipio": 41,
                "parroquia": "Las Guacamayas",

            },
            {
                "id_parroquia": 125,
                "id_municipio": 41,
                "parroquia": "Pao de Zárate",

            },
            {
                "id_parroquia": 126,
                "id_municipio": 41,
                "parroquia": "Zuata",

            },
            {
                "id_parroquia": 127,
                "id_municipio": 42,
                "parroquia": "José Rafael Revenga",

            },
            {
                "id_parroquia": 128,
                "id_municipio": 43,
                "parroquia": "Palo Negro",

            },
            {
                "id_parroquia": 129,
                "id_municipio": 43,
                "parroquia": "San Martín de Porres",

            },
            {
                "id_parroquia": 130,
                "id_municipio": 44,
                "parroquia": "El Limón",

            },
            {
                "id_parroquia": 131,
                "id_municipio": 44,
                "parroquia": "Caña de Azúcar",

            },
            {
                "id_parroquia": 132,
                "id_municipio": 45,
                "parroquia": "Ocumare de la Costa",

            },
            {
                "id_parroquia": 133,
                "id_municipio": 46,
                "parroquia": "San Casimiro",

            },
            {
                "id_parroquia": 134,
                "id_municipio": 46,
                "parroquia": "Güiripa",

            },
            {
                "id_parroquia": 135,
                "id_municipio": 46,
                "parroquia": "Ollas de Caramacate",

            },
            {
                "id_parroquia": 136,
                "id_municipio": 46,
                "parroquia": "Valle Morín",

            },
            {
                "id_parroquia": 137,
                "id_municipio": 47,
                "parroquia": "San Sebastían",

            },
            {
                "id_parroquia": 138,
                "id_municipio": 48,
                "parroquia": "Turmero",

            },
            {
                "id_parroquia": 139,
                "id_municipio": 48,
                "parroquia": "Arevalo Aponte",

            },
            {
                "id_parroquia": 140,
                "id_municipio": 48,
                "parroquia": "Chuao",

            },
            {
                "id_parroquia": 141,
                "id_municipio": 48,
                "parroquia": "Samán de Güere",

            },
            {
                "id_parroquia": 142,
                "id_municipio": 48,
                "parroquia": "Alfredo Pacheco Miranda",

            },
            {
                "id_parroquia": 143,
                "id_municipio": 49,
                "parroquia": "Santos Michelena",

            },
            {
                "id_parroquia": 144,
                "id_municipio": 49,
                "parroquia": "Tiara",

            },
            {
                "id_parroquia": 145,
                "id_municipio": 50,
                "parroquia": "Cagua",

            },
            {
                "id_parroquia": 146,
                "id_municipio": 50,
                "parroquia": "Bella Vista",

            },
            {
                "id_parroquia": 147,
                "id_municipio": 51,
                "parroquia": "Tovar",

            },
            {
                "id_parroquia": 148,
                "id_municipio": 52,
                "parroquia": "Urdaneta",

            },
            {
                "id_parroquia": 149,
                "id_municipio": 52,
                "parroquia": "Las Peñitas",

            },
            {
                "id_parroquia": 150,
                "id_municipio": 52,
                "parroquia": "San Francisco de Cara",

            },
            {
                "id_parroquia": 151,
                "id_municipio": 52,
                "parroquia": "Taguay",

            },
            {
                "id_parroquia": 152,
                "id_municipio": 53,
                "parroquia": "Zamora",

            },
            {
                "id_parroquia": 153,
                "id_municipio": 53,
                "parroquia": "Magdaleno",

            },
            {
                "id_parroquia": 154,
                "id_municipio": 53,
                "parroquia": "San Francisco de Asís",

            },
            {
                "id_parroquia": 155,
                "id_municipio": 53,
                "parroquia": "Valles de Tucutunemo",

            },
            {
                "id_parroquia": 156,
                "id_municipio": 53,
                "parroquia": "Augusto Mijares",

            },
            {
                "id_parroquia": 157,
                "id_municipio": 54,
                "parroquia": "Sabaneta",

            },
            {
                "id_parroquia": 158,
                "id_municipio": 54,
                "parroquia": "Juan Antonio Rodríguez Domínguez",

            },
            {
                "id_parroquia": 159,
                "id_municipio": 55,
                "parroquia": "El Cantón",

            },
            {
                "id_parroquia": 160,
                "id_municipio": 55,
                "parroquia": "Santa Cruz de Guacas",

            },
            {
                "id_parroquia": 161,
                "id_municipio": 55,
                "parroquia": "Puerto Vivas",

            },
            {
                "id_parroquia": 162,
                "id_municipio": 56,
                "parroquia": "Ticoporo",

            },
            {
                "id_parroquia": 163,
                "id_municipio": 56,
                "parroquia": "Nicolás Pulido",

            },
            {
                "id_parroquia": 164,
                "id_municipio": 56,
                "parroquia": "Andrés Bello",

            },
            {
                "id_parroquia": 165,
                "id_municipio": 57,
                "parroquia": "Arismendi",

            },
            {
                "id_parroquia": 166,
                "id_municipio": 57,
                "parroquia": "Guadarrama",

            },
            {
                "id_parroquia": 167,
                "id_municipio": 57,
                "parroquia": "La Unión",

            },
            {
                "id_parroquia": 168,
                "id_municipio": 57,
                "parroquia": "San Antonio",

            },
            {
                "id_parroquia": 169,
                "id_municipio": 58,
                "parroquia": "Barinas",

            },
            {
                "id_parroquia": 170,
                "id_municipio": 58,
                "parroquia": "Alberto Arvelo Larriva",

            },
            {
                "id_parroquia": 171,
                "id_municipio": 58,
                "parroquia": "San Silvestre",

            },
            {
                "id_parroquia": 172,
                "id_municipio": 58,
                "parroquia": "Santa Inés",

            },
            {
                "id_parroquia": 173,
                "id_municipio": 58,
                "parroquia": "Santa Lucía",

            },
            {
                "id_parroquia": 174,
                "id_municipio": 58,
                "parroquia": "Torumos",

            },
            {
                "id_parroquia": 175,
                "id_municipio": 58,
                "parroquia": "El Carmen",

            },
            {
                "id_parroquia": 176,
                "id_municipio": 58,
                "parroquia": "Rómulo Betancourt",

            },
            {
                "id_parroquia": 177,
                "id_municipio": 58,
                "parroquia": "Corazón de Jesús",

            },
            {
                "id_parroquia": 178,
                "id_municipio": 58,
                "parroquia": "Ramón Ignacio Méndez",

            },
            {
                "id_parroquia": 179,
                "id_municipio": 58,
                "parroquia": "Alto Barinas",

            },
            {
                "id_parroquia": 180,
                "id_municipio": 58,
                "parroquia": "Manuel Palacio Fajardo",

            },
            {
                "id_parroquia": 181,
                "id_municipio": 58,
                "parroquia": "Juan Antonio Rodríguez Domínguez",

            },
            {
                "id_parroquia": 182,
                "id_municipio": 58,
                "parroquia": "Dominga Ortiz de Páez",

            },
            {
                "id_parroquia": 183,
                "id_municipio": 59,
                "parroquia": "Barinitas",

            },
            {
                "id_parroquia": 184,
                "id_municipio": 59,
                "parroquia": "Altamira de Cáceres",

            },
            {
                "id_parroquia": 185,
                "id_municipio": 59,
                "parroquia": "Calderas",

            },
            {
                "id_parroquia": 186,
                "id_municipio": 60,
                "parroquia": "Barrancas",

            },
            {
                "id_parroquia": 187,
                "id_municipio": 60,
                "parroquia": "El Socorro",

            },
            {
                "id_parroquia": 188,
                "id_municipio": 60,
                "parroquia": "Mazparrito",

            },
            {
                "id_parroquia": 189,
                "id_municipio": 61,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 190,
                "id_municipio": 61,
                "parroquia": "Pedro Briceño Méndez",

            },
            {
                "id_parroquia": 191,
                "id_municipio": 61,
                "parroquia": "Ramón Ignacio Méndez",

            },
            {
                "id_parroquia": 192,
                "id_municipio": 61,
                "parroquia": "José Ignacio del Pumar",

            },
            {
                "id_parroquia": 193,
                "id_municipio": 62,
                "parroquia": "Obispos",

            },
            {
                "id_parroquia": 194,
                "id_municipio": 62,
                "parroquia": "Guasimitos",

            },
            {
                "id_parroquia": 195,
                "id_municipio": 62,
                "parroquia": "El Real",

            },
            {
                "id_parroquia": 196,
                "id_municipio": 62,
                "parroquia": "La Luz",

            },
            {
                "id_parroquia": 197,
                "id_municipio": 63,
                "parroquia": "Ciudad Bolívia",

            },
            {
                "id_parroquia": 198,
                "id_municipio": 63,
                "parroquia": "José Ignacio Briceño",

            },
            {
                "id_parroquia": 199,
                "id_municipio": 63,
                "parroquia": "José Félix Ribas",

            },
            {
                "id_parroquia": 200,
                "id_municipio": 63,
                "parroquia": "Páez",

            },
            {
                "id_parroquia": 201,
                "id_municipio": 64,
                "parroquia": "Libertad",

            },
            {
                "id_parroquia": 202,
                "id_municipio": 64,
                "parroquia": "Dolores",

            },
            {
                "id_parroquia": 203,
                "id_municipio": 64,
                "parroquia": "Santa Rosa",

            },
            {
                "id_parroquia": 204,
                "id_municipio": 64,
                "parroquia": "Palacio Fajardo",

            },
            {
                "id_parroquia": 205,
                "id_municipio": 65,
                "parroquia": "Ciudad de Nutrias",

            },
            {
                "id_parroquia": 206,
                "id_municipio": 65,
                "parroquia": "El Regalo",

            },
            {
                "id_parroquia": 207,
                "id_municipio": 65,
                "parroquia": "Puerto Nutrias",

            },
            {
                "id_parroquia": 208,
                "id_municipio": 65,
                "parroquia": "Santa Catalina",

            },
            {
                "id_parroquia": 209,
                "id_municipio": 66,
                "parroquia": "Cachamay",

            },
            {
                "id_parroquia": 210,
                "id_municipio": 66,
                "parroquia": "Chirica",

            },
            {
                "id_parroquia": 211,
                "id_municipio": 66,
                "parroquia": "Dalla Costa",

            },
            {
                "id_parroquia": 212,
                "id_municipio": 66,
                "parroquia": "Once de Abril",

            },
            {
                "id_parroquia": 213,
                "id_municipio": 66,
                "parroquia": "Simón Bolívar",

            },
            {
                "id_parroquia": 214,
                "id_municipio": 66,
                "parroquia": "Unare",

            },
            {
                "id_parroquia": 215,
                "id_municipio": 66,
                "parroquia": "Universidad",

            },
            {
                "id_parroquia": 216,
                "id_municipio": 66,
                "parroquia": "Vista al Sol",

            },
            {
                "id_parroquia": 217,
                "id_municipio": 66,
                "parroquia": "Pozo Verde",

            },
            {
                "id_parroquia": 218,
                "id_municipio": 66,
                "parroquia": "Yocoima",

            },
            {
                "id_parroquia": 219,
                "id_municipio": 66,
                "parroquia": "5 de Julio",

            },
            {
                "id_parroquia": 220,
                "id_municipio": 67,
                "parroquia": "Cedeño",

            },
            {
                "id_parroquia": 221,
                "id_municipio": 67,
                "parroquia": "Altagracia",

            },
            {
                "id_parroquia": 222,
                "id_municipio": 67,
                "parroquia": "Ascensión Farreras",

            },
            {
                "id_parroquia": 223,
                "id_municipio": 67,
                "parroquia": "Guaniamo",

            },
            {
                "id_parroquia": 224,
                "id_municipio": 67,
                "parroquia": "La Urbana",

            },
            {
                "id_parroquia": 225,
                "id_municipio": 67,
                "parroquia": "Pijiguaos",

            },
            {
                "id_parroquia": 226,
                "id_municipio": 68,
                "parroquia": "El Callao",

            },
            {
                "id_parroquia": 227,
                "id_municipio": 69,
                "parroquia": "Gran Sabana",

            },
            {
                "id_parroquia": 228,
                "id_municipio": 69,
                "parroquia": "Ikabarú",

            },
            {
                "id_parroquia": 229,
                "id_municipio": 70,
                "parroquia": "Catedral",

            },
            {
                "id_parroquia": 230,
                "id_municipio": 70,
                "parroquia": "Zea",

            },
            {
                "id_parroquia": 231,
                "id_municipio": 70,
                "parroquia": "Orinoco",

            },
            {
                "id_parroquia": 232,
                "id_municipio": 70,
                "parroquia": "José Antonio Páez",

            },
            {
                "id_parroquia": 233,
                "id_municipio": 70,
                "parroquia": "Marhuanta",

            },
            {
                "id_parroquia": 234,
                "id_municipio": 70,
                "parroquia": "Agua Salada",

            },
            {
                "id_parroquia": 235,
                "id_municipio": 70,
                "parroquia": "Vista Hermosa",

            },
            {
                "id_parroquia": 236,
                "id_municipio": 70,
                "parroquia": "La Sabanita",

            },
            {
                "id_parroquia": 237,
                "id_municipio": 70,
                "parroquia": "Panapana",

            },
            {
                "id_parroquia": 238,
                "id_municipio": 71,
                "parroquia": "Andrés Eloy Blanco",

            },
            {
                "id_parroquia": 239,
                "id_municipio": 71,
                "parroquia": "Pedro Cova",

            },
            {
                "id_parroquia": 240,
                "id_municipio": 72,
                "parroquia": "Raúl Leoni",

            },
            {
                "id_parroquia": 241,
                "id_municipio": 72,
                "parroquia": "Barceloneta",

            },
            {
                "id_parroquia": 242,
                "id_municipio": 72,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 243,
                "id_municipio": 72,
                "parroquia": "San Francisco",

            },
            {
                "id_parroquia": 244,
                "id_municipio": 73,
                "parroquia": "Roscio",

            },
            {
                "id_parroquia": 245,
                "id_municipio": 73,
                "parroquia": "Salóm",

            },
            {
                "id_parroquia": 246,
                "id_municipio": 74,
                "parroquia": "Sifontes",

            },
            {
                "id_parroquia": 247,
                "id_municipio": 74,
                "parroquia": "Dalla Costa",

            },
            {
                "id_parroquia": 248,
                "id_municipio": 74,
                "parroquia": "San Isidro",

            },
            {
                "id_parroquia": 249,
                "id_municipio": 75,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 250,
                "id_municipio": 75,
                "parroquia": "Aripao",

            },
            {
                "id_parroquia": 251,
                "id_municipio": 75,
                "parroquia": "Guarataro",

            },
            {
                "id_parroquia": 252,
                "id_municipio": 75,
                "parroquia": "Las Majadas",

            },
            {
                "id_parroquia": 253,
                "id_municipio": 75,
                "parroquia": "Moitaco",

            },
            {
                "id_parroquia": 254,
                "id_municipio": 76,
                "parroquia": "Padre Pedro Chien",

            },
            {
                "id_parroquia": 255,
                "id_municipio": 76,
                "parroquia": "Río Grande",

            },
            {
                "id_parroquia": 256,
                "id_municipio": 77,
                "parroquia": "Bejuma",

            },
            {
                "id_parroquia": 257,
                "id_municipio": 77,
                "parroquia": "Canoabo",

            },
            {
                "id_parroquia": 258,
                "id_municipio": 77,
                "parroquia": "Simón Bolívar",

            },
            {
                "id_parroquia": 259,
                "id_municipio": 78,
                "parroquia": "Güigüe",

            },
            {
                "id_parroquia": 260,
                "id_municipio": 78,
                "parroquia": "Carabobo",

            },
            {
                "id_parroquia": 261,
                "id_municipio": 78,
                "parroquia": "Tacarigua",

            },
            {
                "id_parroquia": 262,
                "id_municipio": 79,
                "parroquia": "Mariara",

            },
            {
                "id_parroquia": 263,
                "id_municipio": 79,
                "parroquia": "Aguas Calientes",

            },
            {
                "id_parroquia": 264,
                "id_municipio": 80,
                "parroquia": "Ciudad Alianza",

            },
            {
                "id_parroquia": 265,
                "id_municipio": 80,
                "parroquia": "Guacara",

            },
            {
                "id_parroquia": 266,
                "id_municipio": 80,
                "parroquia": "Yagua",

            },
            {
                "id_parroquia": 267,
                "id_municipio": 81,
                "parroquia": "Morón",

            },
            {
                "id_parroquia": 268,
                "id_municipio": 81,
                "parroquia": "Yagua",

            },
            {
                "id_parroquia": 269,
                "id_municipio": 82,
                "parroquia": "Tocuyito",

            },
            {
                "id_parroquia": 270,
                "id_municipio": 82,
                "parroquia": "Independencia",

            },
            {
                "id_parroquia": 271,
                "id_municipio": 83,
                "parroquia": "Los Guayos",

            },
            {
                "id_parroquia": 272,
                "id_municipio": 84,
                "parroquia": "Miranda",

            },
            {
                "id_parroquia": 273,
                "id_municipio": 85,
                "parroquia": "Montalbán",

            },
            {
                "id_parroquia": 274,
                "id_municipio": 86,
                "parroquia": "Naguanagua",

            },
            {
                "id_parroquia": 275,
                "id_municipio": 87,
                "parroquia": "Bartolomé Salóm",

            },
            {
                "id_parroquia": 276,
                "id_municipio": 87,
                "parroquia": "Democracia",

            },
            {
                "id_parroquia": 277,
                "id_municipio": 87,
                "parroquia": "Fraternidad",

            },
            {
                "id_parroquia": 278,
                "id_municipio": 87,
                "parroquia": "Goaigoaza",

            },
            {
                "id_parroquia": 279,
                "id_municipio": 87,
                "parroquia": "Juan José Flores",

            },
            {
                "id_parroquia": 280,
                "id_municipio": 87,
                "parroquia": "Unión",

            },
            {
                "id_parroquia": 281,
                "id_municipio": 87,
                "parroquia": "Borburata",

            },
            {
                "id_parroquia": 282,
                "id_municipio": 87,
                "parroquia": "Patanemo",

            },
            {
                "id_parroquia": 283,
                "id_municipio": 88,
                "parroquia": "San Diego",

            },
            {
                "id_parroquia": 284,
                "id_municipio": 89,
                "parroquia": "San Joaquín",

            },
            {
                "id_parroquia": 285,
                "id_municipio": 90,
                "parroquia": "Candelaria",

            },
            {
                "id_parroquia": 286,
                "id_municipio": 90,
                "parroquia": "Catedral",

            },
            {
                "id_parroquia": 287,
                "id_municipio": 90,
                "parroquia": "El Socorro",

            },
            {
                "id_parroquia": 288,
                "id_municipio": 90,
                "parroquia": "Miguel Peña",

            },
            {
                "id_parroquia": 289,
                "id_municipio": 90,
                "parroquia": "Rafael Urdaneta",

            },
            {
                "id_parroquia": 290,
                "id_municipio": 90,
                "parroquia": "San Blas",

            },
            {
                "id_parroquia": 291,
                "id_municipio": 90,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 292,
                "id_municipio": 90,
                "parroquia": "Santa Rosa",

            },
            {
                "id_parroquia": 293,
                "id_municipio": 90,
                "parroquia": "Negro Primero",

            },
            {
                "id_parroquia": 294,
                "id_municipio": 91,
                "parroquia": "Cojedes",

            },
            {
                "id_parroquia": 295,
                "id_municipio": 91,
                "parroquia": "Juan de Mata Suárez",

            },
            {
                "id_parroquia": 296,
                "id_municipio": 92,
                "parroquia": "Tinaquillo",

            },
            {
                "id_parroquia": 297,
                "id_municipio": 93,
                "parroquia": "El Baúl",

            },
            {
                "id_parroquia": 298,
                "id_municipio": 93,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 299,
                "id_municipio": 94,
                "parroquia": "La Aguadita",

            },
            {
                "id_parroquia": 300,
                "id_municipio": 94,
                "parroquia": "Macapo",

            },
            {
                "id_parroquia": 301,
                "id_municipio": 95,
                "parroquia": "El Pao",

            },
            {
                "id_parroquia": 302,
                "id_municipio": 96,
                "parroquia": "El Amparo",

            },
            {
                "id_parroquia": 303,
                "id_municipio": 96,
                "parroquia": "Libertad de Cojedes",

            },
            {
                "id_parroquia": 304,
                "id_municipio": 97,
                "parroquia": "Rómulo Gallegos",

            },
            {
                "id_parroquia": 305,
                "id_municipio": 98,
                "parroquia": "San Carlos de Austria",

            },
            {
                "id_parroquia": 306,
                "id_municipio": 98,
                "parroquia": "Juan Ángel Bravo",

            },
            {
                "id_parroquia": 307,
                "id_municipio": 98,
                "parroquia": "Manuel Manrique",

            },
            {
                "id_parroquia": 308,
                "id_municipio": 99,
                "parroquia": "General en Jefe José Laurencio Silva",

            },
            {
                "id_parroquia": 309,
                "id_municipio": 100,
                "parroquia": "Curiapo",

            },
            {
                "id_parroquia": 310,
                "id_municipio": 100,
                "parroquia": "Almirante Luis Brión",

            },
            {
                "id_parroquia": 311,
                "id_municipio": 100,
                "parroquia": "Francisco Aniceto Lugo",

            },
            {
                "id_parroquia": 312,
                "id_municipio": 100,
                "parroquia": "Manuel Renaud",

            },
            {
                "id_parroquia": 313,
                "id_municipio": 100,
                "parroquia": "Padre Barral",

            },
            {
                "id_parroquia": 314,
                "id_municipio": 100,
                "parroquia": "Santos de Abelgas",

            },
            {
                "id_parroquia": 315,
                "id_municipio": 101,
                "parroquia": "Imataca",

            },
            {
                "id_parroquia": 316,
                "id_municipio": 101,
                "parroquia": "Cinco de Julio",

            },
            {
                "id_parroquia": 317,
                "id_municipio": 101,
                "parroquia": "Juan Bautista Arismendi",

            },
            {
                "id_parroquia": 318,
                "id_municipio": 101,
                "parroquia": "Manuel Piar",

            },
            {
                "id_parroquia": 319,
                "id_municipio": 101,
                "parroquia": "Rómulo Gallegos",

            },
            {
                "id_parroquia": 320,
                "id_municipio": 102,
                "parroquia": "Pedernales",

            },
            {
                "id_parroquia": 321,
                "id_municipio": 102,
                "parroquia": "Luis Beltrán Prieto Figueroa",

            },
            {
                "id_parroquia": 322,
                "id_municipio": 103,
                "parroquia": "San José (Delta Amacuro)",

            },
            {
                "id_parroquia": 323,
                "id_municipio": 103,
                "parroquia": "José Vidal Marcano",

            },
            {
                "id_parroquia": 324,
                "id_municipio": 103,
                "parroquia": "Juan Millán",

            },
            {
                "id_parroquia": 325,
                "id_municipio": 103,
                "parroquia": "Leonardo Ruíz Pineda",

            },
            {
                "id_parroquia": 326,
                "id_municipio": 103,
                "parroquia": "Mariscal Antonio José de Sucre",

            },
            {
                "id_parroquia": 327,
                "id_municipio": 103,
                "parroquia": "Monseñor Argimiro García",

            },
            {
                "id_parroquia": 328,
                "id_municipio": 103,
                "parroquia": "San Rafael (Delta Amacuro)",

            },
            {
                "id_parroquia": 329,
                "id_municipio": 103,
                "parroquia": "Virgen del Valle",

            },
            {
                "id_parroquia": 330,
                "id_municipio": 10,
                "parroquia": "Clarines",

            },
            {
                "id_parroquia": 331,
                "id_municipio": 10,
                "parroquia": "Guanape",

            },
            {
                "id_parroquia": 332,
                "id_municipio": 10,
                "parroquia": "Sabana de Uchire",

            },
            {
                "id_parroquia": 333,
                "id_municipio": 104,
                "parroquia": "Capadare",

            },
            {
                "id_parroquia": 334,
                "id_municipio": 104,
                "parroquia": "La Pastora",

            },
            {
                "id_parroquia": 335,
                "id_municipio": 104,
                "parroquia": "Libertador",

            },
            {
                "id_parroquia": 336,
                "id_municipio": 104,
                "parroquia": "San Juan de los Cayos",

            },
            {
                "id_parroquia": 337,
                "id_municipio": 105,
                "parroquia": "Aracua",

            },
            {
                "id_parroquia": 338,
                "id_municipio": 105,
                "parroquia": "La Peña",

            },
            {
                "id_parroquia": 339,
                "id_municipio": 105,
                "parroquia": "San Luis",

            },
            {
                "id_parroquia": 340,
                "id_municipio": 106,
                "parroquia": "Bariro",

            },
            {
                "id_parroquia": 341,
                "id_municipio": 106,
                "parroquia": "Borojó",

            },
            {
                "id_parroquia": 342,
                "id_municipio": 106,
                "parroquia": "Capatárida",

            },
            {
                "id_parroquia": 343,
                "id_municipio": 106,
                "parroquia": "Guajiro",

            },
            {
                "id_parroquia": 344,
                "id_municipio": 106,
                "parroquia": "Seque",

            },
            {
                "id_parroquia": 345,
                "id_municipio": 106,
                "parroquia": "Zazárida",

            },
            {
                "id_parroquia": 346,
                "id_municipio": 106,
                "parroquia": "Valle de Eroa",

            },
            {
                "id_parroquia": 347,
                "id_municipio": 107,
                "parroquia": "Cacique Manaure",

            },
            {
                "id_parroquia": 348,
                "id_municipio": 108,
                "parroquia": "Norte",

            },
            {
                "id_parroquia": 349,
                "id_municipio": 108,
                "parroquia": "Carirubana",

            },
            {
                "id_parroquia": 350,
                "id_municipio": 108,
                "parroquia": "Santa Ana",

            },
            {
                "id_parroquia": 351,
                "id_municipio": 108,
                "parroquia": "Urbana Punta Cardón",

            },
            {
                "id_parroquia": 352,
                "id_municipio": 109,
                "parroquia": "La Vela de Coro",

            },
            {
                "id_parroquia": 353,
                "id_municipio": 109,
                "parroquia": "Acurigua",

            },
            {
                "id_parroquia": 354,
                "id_municipio": 109,
                "parroquia": "Guaibacoa",

            },
            {
                "id_parroquia": 355,
                "id_municipio": 109,
                "parroquia": "Las Calderas",

            },
            {
                "id_parroquia": 356,
                "id_municipio": 109,
                "parroquia": "Macoruca",

            },
            {
                "id_parroquia": 357,
                "id_municipio": 110,
                "parroquia": "Dabajuro",

            },
            {
                "id_parroquia": 358,
                "id_municipio": 111,
                "parroquia": "Agua Clara",

            },
            {
                "id_parroquia": 359,
                "id_municipio": 111,
                "parroquia": "Avaria",

            },
            {
                "id_parroquia": 360,
                "id_municipio": 111,
                "parroquia": "Pedregal",

            },
            {
                "id_parroquia": 361,
                "id_municipio": 111,
                "parroquia": "Piedra Grande",

            },
            {
                "id_parroquia": 362,
                "id_municipio": 111,
                "parroquia": "Purureche",

            },
            {
                "id_parroquia": 363,
                "id_municipio": 112,
                "parroquia": "Adaure",

            },
            {
                "id_parroquia": 364,
                "id_municipio": 112,
                "parroquia": "Adícora",

            },
            {
                "id_parroquia": 365,
                "id_municipio": 112,
                "parroquia": "Baraived",

            },
            {
                "id_parroquia": 366,
                "id_municipio": 112,
                "parroquia": "Buena Vista",

            },
            {
                "id_parroquia": 367,
                "id_municipio": 112,
                "parroquia": "Jadacaquiva",

            },
            {
                "id_parroquia": 368,
                "id_municipio": 112,
                "parroquia": "El Vínculo",

            },
            {
                "id_parroquia": 369,
                "id_municipio": 112,
                "parroquia": "El Hato",

            },
            {
                "id_parroquia": 370,
                "id_municipio": 112,
                "parroquia": "Moruy",

            },
            {
                "id_parroquia": 371,
                "id_municipio": 112,
                "parroquia": "Pueblo Nuevo",

            },
            {
                "id_parroquia": 372,
                "id_municipio": 113,
                "parroquia": "Agua Larga",

            },
            {
                "id_parroquia": 373,
                "id_municipio": 113,
                "parroquia": "El Paují",

            },
            {
                "id_parroquia": 374,
                "id_municipio": 113,
                "parroquia": "Independencia",

            },
            {
                "id_parroquia": 375,
                "id_municipio": 113,
                "parroquia": "Mapararí",

            },
            {
                "id_parroquia": 376,
                "id_municipio": 114,
                "parroquia": "Agua Linda",

            },
            {
                "id_parroquia": 377,
                "id_municipio": 114,
                "parroquia": "Araurima",

            },
            {
                "id_parroquia": 378,
                "id_municipio": 114,
                "parroquia": "Jacura",

            },
            {
                "id_parroquia": 379,
                "id_municipio": 115,
                "parroquia": "Tucacas",

            },
            {
                "id_parroquia": 380,
                "id_municipio": 115,
                "parroquia": "Boca de Aroa",

            },
            {
                "id_parroquia": 381,
                "id_municipio": 116,
                "parroquia": "Los Taques",

            },
            {
                "id_parroquia": 382,
                "id_municipio": 116,
                "parroquia": "Judibana",

            },
            {
                "id_parroquia": 383,
                "id_municipio": 117,
                "parroquia": "Mene de Mauroa",

            },
            {
                "id_parroquia": 384,
                "id_municipio": 117,
                "parroquia": "San Félix",

            },
            {
                "id_parroquia": 385,
                "id_municipio": 117,
                "parroquia": "Casigua",

            },
            {
                "id_parroquia": 386,
                "id_municipio": 118,
                "parroquia": "Guzmán Guillermo",

            },
            {
                "id_parroquia": 387,
                "id_municipio": 118,
                "parroquia": "Mitare",

            },
            {
                "id_parroquia": 388,
                "id_municipio": 118,
                "parroquia": "Río Seco",

            },
            {
                "id_parroquia": 389,
                "id_municipio": 118,
                "parroquia": "Sabaneta",

            },
            {
                "id_parroquia": 390,
                "id_municipio": 118,
                "parroquia": "San Antonio",

            },
            {
                "id_parroquia": 391,
                "id_municipio": 118,
                "parroquia": "San Gabriel",

            },
            {
                "id_parroquia": 392,
                "id_municipio": 118,
                "parroquia": "Santa Ana",

            },
            {
                "id_parroquia": 393,
                "id_municipio": 119,
                "parroquia": "Boca del Tocuyo",

            },
            {
                "id_parroquia": 394,
                "id_municipio": 119,
                "parroquia": "Chichiriviche",

            },
            {
                "id_parroquia": 395,
                "id_municipio": 119,
                "parroquia": "Tocuyo de la Costa",

            },
            {
                "id_parroquia": 396,
                "id_municipio": 120,
                "parroquia": "Palmasola",

            },
            {
                "id_parroquia": 397,
                "id_municipio": 121,
                "parroquia": "Cabure",

            },
            {
                "id_parroquia": 398,
                "id_municipio": 121,
                "parroquia": "Colina",

            },
            {
                "id_parroquia": 399,
                "id_municipio": 121,
                "parroquia": "Curimagua",

            },
            {
                "id_parroquia": 400,
                "id_municipio": 122,
                "parroquia": "San José de la Costa",

            },
            {
                "id_parroquia": 401,
                "id_municipio": 122,
                "parroquia": "Píritu",

            },
            {
                "id_parroquia": 402,
                "id_municipio": 123,
                "parroquia": "San Francisco",

            },
            {
                "id_parroquia": 403,
                "id_municipio": 124,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 404,
                "id_municipio": 124,
                "parroquia": "Pecaya",

            },
            {
                "id_parroquia": 405,
                "id_municipio": 125,
                "parroquia": "Tocópero",

            },
            {
                "id_parroquia": 406,
                "id_municipio": 126,
                "parroquia": "El Charal",

            },
            {
                "id_parroquia": 407,
                "id_municipio": 126,
                "parroquia": "Las Vegas del Tuy",

            },
            {
                "id_parroquia": 408,
                "id_municipio": 126,
                "parroquia": "Santa Cruz de Bucaral",

            },
            {
                "id_parroquia": 409,
                "id_municipio": 127,
                "parroquia": "Bruzual",

            },
            {
                "id_parroquia": 410,
                "id_municipio": 127,
                "parroquia": "Urumaco",

            },
            {
                "id_parroquia": 411,
                "id_municipio": 128,
                "parroquia": "Puerto Cumarebo",

            },
            {
                "id_parroquia": 412,
                "id_municipio": 128,
                "parroquia": "La Ciénaga",

            },
            {
                "id_parroquia": 413,
                "id_municipio": 128,
                "parroquia": "La Soledad",

            },
            {
                "id_parroquia": 414,
                "id_municipio": 128,
                "parroquia": "Pueblo Cumarebo",

            },
            {
                "id_parroquia": 415,
                "id_municipio": 128,
                "parroquia": "Zazárida",

            },
            {
                "id_parroquia": 416,
                "id_municipio": 113,
                "parroquia": "Churuguara",

            },
            {
                "id_parroquia": 417,
                "id_municipio": 129,
                "parroquia": "Camaguán",

            },
            {
                "id_parroquia": 418,
                "id_municipio": 129,
                "parroquia": "Puerto Miranda",

            },
            {
                "id_parroquia": 419,
                "id_municipio": 129,
                "parroquia": "Uverito",

            },
            {
                "id_parroquia": 420,
                "id_municipio": 130,
                "parroquia": "Chaguaramas",

            },
            {
                "id_parroquia": 421,
                "id_municipio": 131,
                "parroquia": "El Socorro",

            },
            {
                "id_parroquia": 422,
                "id_municipio": 132,
                "parroquia": "Tucupido",

            },
            {
                "id_parroquia": 423,
                "id_municipio": 132,
                "parroquia": "San Rafael de Laya",

            },
            {
                "id_parroquia": 424,
                "id_municipio": 133,
                "parroquia": "Altagracia de Orituco",

            },
            {
                "id_parroquia": 425,
                "id_municipio": 133,
                "parroquia": "San Rafael de Orituco",

            },
            {
                "id_parroquia": 426,
                "id_municipio": 133,
                "parroquia": "San Francisco Javier de Lezama",

            },
            {
                "id_parroquia": 427,
                "id_municipio": 133,
                "parroquia": "Paso Real de Macaira",

            },
            {
                "id_parroquia": 428,
                "id_municipio": 133,
                "parroquia": "Carlos Soublette",

            },
            {
                "id_parroquia": 429,
                "id_municipio": 133,
                "parroquia": "San Francisco de Macaira",

            },
            {
                "id_parroquia": 430,
                "id_municipio": 133,
                "parroquia": "Libertad de Orituco",

            },
            {
                "id_parroquia": 431,
                "id_municipio": 134,
                "parroquia": "Cantaclaro",

            },
            {
                "id_parroquia": 432,
                "id_municipio": 134,
                "parroquia": "San Juan de los Morros",

            },
            {
                "id_parroquia": 433,
                "id_municipio": 134,
                "parroquia": "Parapara",

            },
            {
                "id_parroquia": 434,
                "id_municipio": 135,
                "parroquia": "El Sombrero",

            },
            {
                "id_parroquia": 435,
                "id_municipio": 135,
                "parroquia": "Sosa",

            },
            {
                "id_parroquia": 436,
                "id_municipio": 136,
                "parroquia": "Las Mercedes",

            },
            {
                "id_parroquia": 437,
                "id_municipio": 136,
                "parroquia": "Cabruta",

            },
            {
                "id_parroquia": 438,
                "id_municipio": 136,
                "parroquia": "Santa Rita de Manapire",

            },
            {
                "id_parroquia": 439,
                "id_municipio": 137,
                "parroquia": "Valle de la Pascua",

            },
            {
                "id_parroquia": 440,
                "id_municipio": 137,
                "parroquia": "Espino",

            },
            {
                "id_parroquia": 441,
                "id_municipio": 138,
                "parroquia": "San José de Unare",

            },
            {
                "id_parroquia": 442,
                "id_municipio": 138,
                "parroquia": "Zaraza",

            },
            {
                "id_parroquia": 443,
                "id_municipio": 139,
                "parroquia": "San José de Tiznados",

            },
            {
                "id_parroquia": 444,
                "id_municipio": 139,
                "parroquia": "San Francisco de Tiznados",

            },
            {
                "id_parroquia": 445,
                "id_municipio": 139,
                "parroquia": "San Lorenzo de Tiznados",

            },
            {
                "id_parroquia": 446,
                "id_municipio": 139,
                "parroquia": "Ortiz",

            },
            {
                "id_parroquia": 447,
                "id_municipio": 140,
                "parroquia": "Guayabal",

            },
            {
                "id_parroquia": 448,
                "id_municipio": 140,
                "parroquia": "Cazorla",

            },
            {
                "id_parroquia": 449,
                "id_municipio": 141,
                "parroquia": "San José de Guaribe",

            },
            {
                "id_parroquia": 450,
                "id_municipio": 141,
                "parroquia": "Uveral",

            },
            {
                "id_parroquia": 451,
                "id_municipio": 142,
                "parroquia": "Santa María de Ipire",

            },
            {
                "id_parroquia": 452,
                "id_municipio": 142,
                "parroquia": "Altamira",

            },
            {
                "id_parroquia": 453,
                "id_municipio": 143,
                "parroquia": "El Calvario",

            },
            {
                "id_parroquia": 454,
                "id_municipio": 143,
                "parroquia": "El Rastro",

            },
            {
                "id_parroquia": 455,
                "id_municipio": 143,
                "parroquia": "Guardatinajas",

            },
            {
                "id_parroquia": 456,
                "id_municipio": 143,
                "parroquia": "Capital Urbana Calabozo",

            },
            {
                "id_parroquia": 457,
                "id_municipio": 144,
                "parroquia": "Quebrada Honda de Guache",

            },
            {
                "id_parroquia": 458,
                "id_municipio": 144,
                "parroquia": "Pío Tamayo",

            },
            {
                "id_parroquia": 459,
                "id_municipio": 144,
                "parroquia": "Yacambú",

            },
            {
                "id_parroquia": 460,
                "id_municipio": 145,
                "parroquia": "Fréitez",

            },
            {
                "id_parroquia": 461,
                "id_municipio": 145,
                "parroquia": "José María Blanco",

            },
            {
                "id_parroquia": 462,
                "id_municipio": 146,
                "parroquia": "Catedral",

            },
            {
                "id_parroquia": 463,
                "id_municipio": 146,
                "parroquia": "Concepción",

            },
            {
                "id_parroquia": 464,
                "id_municipio": 146,
                "parroquia": "El Cují",

            },
            {
                "id_parroquia": 465,
                "id_municipio": 146,
                "parroquia": "Juan de Villegas",

            },
            {
                "id_parroquia": 466,
                "id_municipio": 146,
                "parroquia": "Santa Rosa",

            },
            {
                "id_parroquia": 467,
                "id_municipio": 146,
                "parroquia": "Tamaca",

            },
            {
                "id_parroquia": 468,
                "id_municipio": 146,
                "parroquia": "Unión",

            },
            {
                "id_parroquia": 469,
                "id_municipio": 146,
                "parroquia": "Aguedo Felipe Alvarado",

            },
            {
                "id_parroquia": 470,
                "id_municipio": 146,
                "parroquia": "Buena Vista",

            },
            {
                "id_parroquia": 471,
                "id_municipio": 146,
                "parroquia": "Juárez",

            },
            {
                "id_parroquia": 472,
                "id_municipio": 147,
                "parroquia": "Juan Bautista Rodríguez",

            },
            {
                "id_parroquia": 473,
                "id_municipio": 147,
                "parroquia": "Cuara",

            },
            {
                "id_parroquia": 474,
                "id_municipio": 147,
                "parroquia": "Diego de Lozada",

            },
            {
                "id_parroquia": 475,
                "id_municipio": 147,
                "parroquia": "Paraíso de San José",

            },
            {
                "id_parroquia": 476,
                "id_municipio": 147,
                "parroquia": "San Miguel",

            },
            {
                "id_parroquia": 477,
                "id_municipio": 147,
                "parroquia": "Tintorero",

            },
            {
                "id_parroquia": 478,
                "id_municipio": 147,
                "parroquia": "José Bernardo Dorante",

            },
            {
                "id_parroquia": 479,
                "id_municipio": 147,
                "parroquia": "Coronel Mariano Peraza ",

            },
            {
                "id_parroquia": 480,
                "id_municipio": 148,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 481,
                "id_municipio": 148,
                "parroquia": "Anzoátegui",

            },
            {
                "id_parroquia": 482,
                "id_municipio": 148,
                "parroquia": "Guarico",

            },
            {
                "id_parroquia": 483,
                "id_municipio": 148,
                "parroquia": "Hilario Luna y Luna",

            },
            {
                "id_parroquia": 484,
                "id_municipio": 148,
                "parroquia": "Humocaro Alto",

            },
            {
                "id_parroquia": 485,
                "id_municipio": 148,
                "parroquia": "Humocaro Bajo",

            },
            {
                "id_parroquia": 486,
                "id_municipio": 148,
                "parroquia": "La Candelaria",

            },
            {
                "id_parroquia": 487,
                "id_municipio": 148,
                "parroquia": "Morán",

            },
            {
                "id_parroquia": 488,
                "id_municipio": 149,
                "parroquia": "Cabudare",

            },
            {
                "id_parroquia": 489,
                "id_municipio": 149,
                "parroquia": "José Gregorio Bastidas",

            },
            {
                "id_parroquia": 490,
                "id_municipio": 149,
                "parroquia": "Agua Viva",

            },
            {
                "id_parroquia": 491,
                "id_municipio": 150,
                "parroquia": "Sarare",

            },
            {
                "id_parroquia": 492,
                "id_municipio": 150,
                "parroquia": "Buría",

            },
            {
                "id_parroquia": 493,
                "id_municipio": 150,
                "parroquia": "Gustavo Vegas León",

            },
            {
                "id_parroquia": 494,
                "id_municipio": 151,
                "parroquia": "Trinidad Samuel",

            },
            {
                "id_parroquia": 495,
                "id_municipio": 151,
                "parroquia": "Antonio Díaz",

            },
            {
                "id_parroquia": 496,
                "id_municipio": 151,
                "parroquia": "Camacaro",

            },
            {
                "id_parroquia": 497,
                "id_municipio": 151,
                "parroquia": "Castañeda",

            },
            {
                "id_parroquia": 498,
                "id_municipio": 151,
                "parroquia": "Cecilio Zubillaga",

            },
            {
                "id_parroquia": 499,
                "id_municipio": 151,
                "parroquia": "Chiquinquirá",

            },
            {
                "id_parroquia": 500,
                "id_municipio": 151,
                "parroquia": "El Blanco",

            },
            {
                "id_parroquia": 501,
                "id_municipio": 151,
                "parroquia": "Espinoza de los Monteros",

            },
            {
                "id_parroquia": 502,
                "id_municipio": 151,
                "parroquia": "Lara",

            },
            {
                "id_parroquia": 503,
                "id_municipio": 151,
                "parroquia": "Las Mercedes",

            },
            {
                "id_parroquia": 504,
                "id_municipio": 151,
                "parroquia": "Manuel Morillo",

            },
            {
                "id_parroquia": 505,
                "id_municipio": 151,
                "parroquia": "Montaña Verde",

            },
            {
                "id_parroquia": 506,
                "id_municipio": 151,
                "parroquia": "Montes de Oca",

            },
            {
                "id_parroquia": 507,
                "id_municipio": 151,
                "parroquia": "Torres",

            },
            {
                "id_parroquia": 508,
                "id_municipio": 151,
                "parroquia": "Heriberto Arroyo",

            },
            {
                "id_parroquia": 509,
                "id_municipio": 151,
                "parroquia": "Reyes Vargas",

            },
            {
                "id_parroquia": 510,
                "id_municipio": 151,
                "parroquia": "Altagracia",

            },
            {
                "id_parroquia": 511,
                "id_municipio": 152,
                "parroquia": "Siquisique",

            },
            {
                "id_parroquia": 512,
                "id_municipio": 152,
                "parroquia": "Moroturo",

            },
            {
                "id_parroquia": 513,
                "id_municipio": 152,
                "parroquia": "San Miguel",

            },
            {
                "id_parroquia": 514,
                "id_municipio": 152,
                "parroquia": "Xaguas",

            },
            {
                "id_parroquia": 515,
                "id_municipio": 179,
                "parroquia": "Presidente Betancourt",

            },
            {
                "id_parroquia": 516,
                "id_municipio": 179,
                "parroquia": "Presidente Páez",

            },
            {
                "id_parroquia": 517,
                "id_municipio": 179,
                "parroquia": "Presidente Rómulo Gallegos",

            },
            {
                "id_parroquia": 518,
                "id_municipio": 179,
                "parroquia": "Gabriel Picón González",

            },
            {
                "id_parroquia": 519,
                "id_municipio": 179,
                "parroquia": "Héctor Amable Mora",

            },
            {
                "id_parroquia": 520,
                "id_municipio": 179,
                "parroquia": "José Nucete Sardi",

            },
            {
                "id_parroquia": 521,
                "id_municipio": 179,
                "parroquia": "Pulido Méndez",

            },
            {
                "id_parroquia": 522,
                "id_municipio": 180,
                "parroquia": "La Azulita",

            },
            {
                "id_parroquia": 523,
                "id_municipio": 181,
                "parroquia": "Santa Cruz de Mora",

            },
            {
                "id_parroquia": 524,
                "id_municipio": 181,
                "parroquia": "Mesa Bolívar",

            },
            {
                "id_parroquia": 525,
                "id_municipio": 181,
                "parroquia": "Mesa de Las Palmas",

            },
            {
                "id_parroquia": 526,
                "id_municipio": 182,
                "parroquia": "Aricagua",

            },
            {
                "id_parroquia": 527,
                "id_municipio": 182,
                "parroquia": "San Antonio",

            },
            {
                "id_parroquia": 528,
                "id_municipio": 183,
                "parroquia": "Canagua",

            },
            {
                "id_parroquia": 529,
                "id_municipio": 183,
                "parroquia": "Capurí",

            },
            {
                "id_parroquia": 530,
                "id_municipio": 183,
                "parroquia": "Chacantá",

            },
            {
                "id_parroquia": 531,
                "id_municipio": 183,
                "parroquia": "El Molino",

            },
            {
                "id_parroquia": 532,
                "id_municipio": 183,
                "parroquia": "Guaimaral",

            },
            {
                "id_parroquia": 533,
                "id_municipio": 183,
                "parroquia": "Mucutuy",

            },
            {
                "id_parroquia": 534,
                "id_municipio": 183,
                "parroquia": "Mucuchachí",

            },
            {
                "id_parroquia": 535,
                "id_municipio": 184,
                "parroquia": "Fernández Peña",

            },
            {
                "id_parroquia": 536,
                "id_municipio": 184,
                "parroquia": "Matriz",

            },
            {
                "id_parroquia": 537,
                "id_municipio": 184,
                "parroquia": "Montalbán",

            },
            {
                "id_parroquia": 538,
                "id_municipio": 184,
                "parroquia": "Acequias",

            },
            {
                "id_parroquia": 539,
                "id_municipio": 184,
                "parroquia": "Jají",

            },
            {
                "id_parroquia": 540,
                "id_municipio": 184,
                "parroquia": "La Mesa",

            },
            {
                "id_parroquia": 541,
                "id_municipio": 184,
                "parroquia": "San José del Sur",

            },
            {
                "id_parroquia": 542,
                "id_municipio": 185,
                "parroquia": "Tucaní",

            },
            {
                "id_parroquia": 543,
                "id_municipio": 185,
                "parroquia": "Florencio Ramírez",

            },
            {
                "id_parroquia": 544,
                "id_municipio": 186,
                "parroquia": "Santo Domingo",

            },
            {
                "id_parroquia": 545,
                "id_municipio": 186,
                "parroquia": "Las Piedras",

            },
            {
                "id_parroquia": 546,
                "id_municipio": 187,
                "parroquia": "Guaraque",

            },
            {
                "id_parroquia": 547,
                "id_municipio": 187,
                "parroquia": "Mesa de Quintero",

            },
            {
                "id_parroquia": 548,
                "id_municipio": 187,
                "parroquia": "Río Negro",

            },
            {
                "id_parroquia": 549,
                "id_municipio": 188,
                "parroquia": "Arapuey",

            },
            {
                "id_parroquia": 550,
                "id_municipio": 188,
                "parroquia": "Palmira",

            },
            {
                "id_parroquia": 551,
                "id_municipio": 189,
                "parroquia": "San Cristóbal de Torondoy",

            },
            {
                "id_parroquia": 552,
                "id_municipio": 189,
                "parroquia": "Torondoy",

            },
            {
                "id_parroquia": 553,
                "id_municipio": 190,
                "parroquia": "Antonio Spinetti Dini",

            },
            {
                "id_parroquia": 554,
                "id_municipio": 190,
                "parroquia": "Arias",

            },
            {
                "id_parroquia": 555,
                "id_municipio": 190,
                "parroquia": "Caracciolo Parra Pérez",

            },
            {
                "id_parroquia": 556,
                "id_municipio": 190,
                "parroquia": "Domingo Peña",

            },
            {
                "id_parroquia": 557,
                "id_municipio": 190,
                "parroquia": "El Llano",

            },
            {
                "id_parroquia": 558,
                "id_municipio": 190,
                "parroquia": "Gonzalo Picón Febres",

            },
            {
                "id_parroquia": 559,
                "id_municipio": 190,
                "parroquia": "Jacinto Plaza",

            },
            {
                "id_parroquia": 560,
                "id_municipio": 190,
                "parroquia": "Juan Rodríguez Suárez",

            },
            {
                "id_parroquia": 561,
                "id_municipio": 190,
                "parroquia": "Lasso de la Vega",

            },
            {
                "id_parroquia": 562,
                "id_municipio": 190,
                "parroquia": "Mariano Picón Salas",

            },
            {
                "id_parroquia": 563,
                "id_municipio": 190,
                "parroquia": "Milla",

            },
            {
                "id_parroquia": 564,
                "id_municipio": 190,
                "parroquia": "Osuna Rodríguez",

            },
            {
                "id_parroquia": 565,
                "id_municipio": 190,
                "parroquia": "Sagrario",

            },
            {
                "id_parroquia": 566,
                "id_municipio": 190,
                "parroquia": "El Morro",

            },
            {
                "id_parroquia": 567,
                "id_municipio": 190,
                "parroquia": "Los Nevados",

            },
            {
                "id_parroquia": 568,
                "id_municipio": 191,
                "parroquia": "Andrés Eloy Blanco",

            },
            {
                "id_parroquia": 569,
                "id_municipio": 191,
                "parroquia": "La Venta",

            },
            {
                "id_parroquia": 570,
                "id_municipio": 191,
                "parroquia": "Piñango",

            },
            {
                "id_parroquia": 571,
                "id_municipio": 191,
                "parroquia": "Timotes",

            },
            {
                "id_parroquia": 572,
                "id_municipio": 192,
                "parroquia": "Eloy Paredes",

            },
            {
                "id_parroquia": 573,
                "id_municipio": 192,
                "parroquia": "San Rafael de Alcázar",

            },
            {
                "id_parroquia": 574,
                "id_municipio": 192,
                "parroquia": "Santa Elena de Arenales",

            },
            {
                "id_parroquia": 575,
                "id_municipio": 193,
                "parroquia": "Santa María de Caparo",

            },
            {
                "id_parroquia": 576,
                "id_municipio": 194,
                "parroquia": "Pueblo Llano",

            },
            {
                "id_parroquia": 577,
                "id_municipio": 195,
                "parroquia": "Cacute",

            },
            {
                "id_parroquia": 578,
                "id_municipio": 195,
                "parroquia": "La Toma",

            },
            {
                "id_parroquia": 579,
                "id_municipio": 195,
                "parroquia": "Mucuchíes",

            },
            {
                "id_parroquia": 580,
                "id_municipio": 195,
                "parroquia": "Mucurubá",

            },
            {
                "id_parroquia": 581,
                "id_municipio": 195,
                "parroquia": "San Rafael",

            },
            {
                "id_parroquia": 582,
                "id_municipio": 196,
                "parroquia": "Gerónimo Maldonado",

            },
            {
                "id_parroquia": 583,
                "id_municipio": 196,
                "parroquia": "Bailadores",

            },
            {
                "id_parroquia": 584,
                "id_municipio": 197,
                "parroquia": "Tabay",

            },
            {
                "id_parroquia": 585,
                "id_municipio": 198,
                "parroquia": "Chiguará",

            },
            {
                "id_parroquia": 586,
                "id_municipio": 198,
                "parroquia": "Estánquez",

            },
            {
                "id_parroquia": 587,
                "id_municipio": 198,
                "parroquia": "Lagunillas",

            },
            {
                "id_parroquia": 588,
                "id_municipio": 198,
                "parroquia": "La Trampa",

            },
            {
                "id_parroquia": 589,
                "id_municipio": 198,
                "parroquia": "Pueblo Nuevo del Sur",

            },
            {
                "id_parroquia": 590,
                "id_municipio": 198,
                "parroquia": "San Juan",

            },
            {
                "id_parroquia": 591,
                "id_municipio": 199,
                "parroquia": "El Amparo",

            },
            {
                "id_parroquia": 592,
                "id_municipio": 199,
                "parroquia": "El Llano",

            },
            {
                "id_parroquia": 593,
                "id_municipio": 199,
                "parroquia": "San Francisco",

            },
            {
                "id_parroquia": 594,
                "id_municipio": 199,
                "parroquia": "Tovar",

            },
            {
                "id_parroquia": 595,
                "id_municipio": 200,
                "parroquia": "Independencia",

            },
            {
                "id_parroquia": 596,
                "id_municipio": 200,
                "parroquia": "María de la Concepción Palacios Blanco",

            },
            {
                "id_parroquia": 597,
                "id_municipio": 200,
                "parroquia": "Nueva Bolivia",

            },
            {
                "id_parroquia": 598,
                "id_municipio": 200,
                "parroquia": "Santa Apolonia",

            },
            {
                "id_parroquia": 599,
                "id_municipio": 201,
                "parroquia": "Caño El Tigre",

            },
            {
                "id_parroquia": 600,
                "id_municipio": 201,
                "parroquia": "Zea",

            },
            {
                "id_parroquia": 601,
                "id_municipio": 223,
                "parroquia": "Aragüita",

            },
            {
                "id_parroquia": 602,
                "id_municipio": 223,
                "parroquia": "Arévalo González",

            },
            {
                "id_parroquia": 603,
                "id_municipio": 223,
                "parroquia": "Capaya",

            },
            {
                "id_parroquia": 604,
                "id_municipio": 223,
                "parroquia": "Caucagua",

            },
            {
                "id_parroquia": 605,
                "id_municipio": 223,
                "parroquia": "Panaquire",

            },
            {
                "id_parroquia": 606,
                "id_municipio": 223,
                "parroquia": "Ribas",

            },
            {
                "id_parroquia": 607,
                "id_municipio": 223,
                "parroquia": "El Café",

            },
            {
                "id_parroquia": 608,
                "id_municipio": 223,
                "parroquia": "Marizapa",

            },
            {
                "id_parroquia": 609,
                "id_municipio": 224,
                "parroquia": "Cumbo",

            },
            {
                "id_parroquia": 610,
                "id_municipio": 224,
                "parroquia": "San José de Barlovento",

            },
            {
                "id_parroquia": 611,
                "id_municipio": 225,
                "parroquia": "El Cafetal",

            },
            {
                "id_parroquia": 612,
                "id_municipio": 225,
                "parroquia": "Las Minas",

            },
            {
                "id_parroquia": 613,
                "id_municipio": 225,
                "parroquia": "Nuestra Señora del Rosario",

            },
            {
                "id_parroquia": 614,
                "id_municipio": 226,
                "parroquia": "Higuerote",

            },
            {
                "id_parroquia": 615,
                "id_municipio": 226,
                "parroquia": "Curiepe",

            },
            {
                "id_parroquia": 616,
                "id_municipio": 226,
                "parroquia": "Tacarigua de Brión",

            },
            {
                "id_parroquia": 617,
                "id_municipio": 227,
                "parroquia": "Mamporal",

            },
            {
                "id_parroquia": 618,
                "id_municipio": 228,
                "parroquia": "Carrizal",

            },
            {
                "id_parroquia": 619,
                "id_municipio": 229,
                "parroquia": "Chacao",

            },
            {
                "id_parroquia": 620,
                "id_municipio": 230,
                "parroquia": "Charallave",

            },
            {
                "id_parroquia": 621,
                "id_municipio": 230,
                "parroquia": "Las Brisas",

            },
            {
                "id_parroquia": 622,
                "id_municipio": 231,
                "parroquia": "El Hatillo",

            },
            {
                "id_parroquia": 623,
                "id_municipio": 232,
                "parroquia": "Altagracia de la Montaña",

            },
            {
                "id_parroquia": 624,
                "id_municipio": 232,
                "parroquia": "Cecilio Acosta",

            },
            {
                "id_parroquia": 625,
                "id_municipio": 232,
                "parroquia": "Los Teques",

            },
            {
                "id_parroquia": 626,
                "id_municipio": 232,
                "parroquia": "El Jarillo",

            },
            {
                "id_parroquia": 627,
                "id_municipio": 232,
                "parroquia": "San Pedro",

            },
            {
                "id_parroquia": 628,
                "id_municipio": 232,
                "parroquia": "Tácata",

            },
            {
                "id_parroquia": 629,
                "id_municipio": 232,
                "parroquia": "Paracotos",

            },
            {
                "id_parroquia": 630,
                "id_municipio": 233,
                "parroquia": "Cartanal",

            },
            {
                "id_parroquia": 631,
                "id_municipio": 233,
                "parroquia": "Santa Teresa del Tuy",

            },
            {
                "id_parroquia": 632,
                "id_municipio": 234,
                "parroquia": "La Democracia",

            },
            {
                "id_parroquia": 633,
                "id_municipio": 234,
                "parroquia": "Ocumare del Tuy",

            },
            {
                "id_parroquia": 634,
                "id_municipio": 234,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 635,
                "id_municipio": 235,
                "parroquia": "San Antonio de los Altos",

            },
            {
                "id_parroquia": 636,
                "id_municipio": 236,
                "parroquia": "Río Chico",

            },
            {
                "id_parroquia": 637,
                "id_municipio": 236,
                "parroquia": "El Guapo",

            },
            {
                "id_parroquia": 638,
                "id_municipio": 236,
                "parroquia": "Tacarigua de la Laguna",

            },
            {
                "id_parroquia": 639,
                "id_municipio": 236,
                "parroquia": "Paparo",

            },
            {
                "id_parroquia": 640,
                "id_municipio": 236,
                "parroquia": "San Fernando del Guapo",

            },
            {
                "id_parroquia": 641,
                "id_municipio": 237,
                "parroquia": "Santa Lucía del Tuy",

            },
            {
                "id_parroquia": 642,
                "id_municipio": 238,
                "parroquia": "Cúpira",

            },
            {
                "id_parroquia": 643,
                "id_municipio": 238,
                "parroquia": "Machurucuto",

            },
            {
                "id_parroquia": 644,
                "id_municipio": 239,
                "parroquia": "Guarenas",

            },
            {
                "id_parroquia": 645,
                "id_municipio": 240,
                "parroquia": "San Antonio de Yare",

            },
            {
                "id_parroquia": 646,
                "id_municipio": 240,
                "parroquia": "San Francisco de Yare",

            },
            {
                "id_parroquia": 647,
                "id_municipio": 241,
                "parroquia": "Leoncio Martínez",

            },
            {
                "id_parroquia": 648,
                "id_municipio": 241,
                "parroquia": "Petare",

            },
            {
                "id_parroquia": 649,
                "id_municipio": 241,
                "parroquia": "Caucagüita",

            },
            {
                "id_parroquia": 650,
                "id_municipio": 241,
                "parroquia": "Filas de Mariche",

            },
            {
                "id_parroquia": 651,
                "id_municipio": 241,
                "parroquia": "La Dolorita",

            },
            {
                "id_parroquia": 652,
                "id_municipio": 242,
                "parroquia": "Cúa",

            },
            {
                "id_parroquia": 653,
                "id_municipio": 242,
                "parroquia": "Nueva Cúa",

            },
            {
                "id_parroquia": 654,
                "id_municipio": 243,
                "parroquia": "Guatire",

            },
            {
                "id_parroquia": 655,
                "id_municipio": 243,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 656,
                "id_municipio": 258,
                "parroquia": "San Antonio de Maturín",

            },
            {
                "id_parroquia": 657,
                "id_municipio": 258,
                "parroquia": "San Francisco de Maturín",

            },
            {
                "id_parroquia": 658,
                "id_municipio": 259,
                "parroquia": "Aguasay",

            },
            {
                "id_parroquia": 659,
                "id_municipio": 260,
                "parroquia": "Caripito",

            },
            {
                "id_parroquia": 660,
                "id_municipio": 261,
                "parroquia": "El Guácharo",

            },
            {
                "id_parroquia": 661,
                "id_municipio": 261,
                "parroquia": "La Guanota",

            },
            {
                "id_parroquia": 662,
                "id_municipio": 261,
                "parroquia": "Sabana de Piedra",

            },
            {
                "id_parroquia": 663,
                "id_municipio": 261,
                "parroquia": "San Agustín",

            },
            {
                "id_parroquia": 664,
                "id_municipio": 261,
                "parroquia": "Teresen",

            },
            {
                "id_parroquia": 665,
                "id_municipio": 261,
                "parroquia": "Caripe",

            },
            {
                "id_parroquia": 666,
                "id_municipio": 262,
                "parroquia": "Areo",

            },
            {
                "id_parroquia": 667,
                "id_municipio": 262,
                "parroquia": "Capital Cedeño",

            },
            {
                "id_parroquia": 668,
                "id_municipio": 262,
                "parroquia": "San Félix de Cantalicio",

            },
            {
                "id_parroquia": 669,
                "id_municipio": 262,
                "parroquia": "Viento Fresco",

            },
            {
                "id_parroquia": 670,
                "id_municipio": 263,
                "parroquia": "El Tejero",

            },
            {
                "id_parroquia": 671,
                "id_municipio": 263,
                "parroquia": "Punta de Mata",

            },
            {
                "id_parroquia": 672,
                "id_municipio": 264,
                "parroquia": "Chaguaramas",

            },
            {
                "id_parroquia": 673,
                "id_municipio": 264,
                "parroquia": "Las Alhuacas",

            },
            {
                "id_parroquia": 674,
                "id_municipio": 264,
                "parroquia": "Tabasca",

            },
            {
                "id_parroquia": 675,
                "id_municipio": 264,
                "parroquia": "Temblador",

            },
            {
                "id_parroquia": 676,
                "id_municipio": 265,
                "parroquia": "Alto de los Godos",

            },
            {
                "id_parroquia": 677,
                "id_municipio": 265,
                "parroquia": "Boquerón",

            },
            {
                "id_parroquia": 678,
                "id_municipio": 265,
                "parroquia": "Las Cocuizas",

            },
            {
                "id_parroquia": 679,
                "id_municipio": 265,
                "parroquia": "La Cruz",

            },
            {
                "id_parroquia": 680,
                "id_municipio": 265,
                "parroquia": "San Simón",

            },
            {
                "id_parroquia": 681,
                "id_municipio": 265,
                "parroquia": "El Corozo",

            },
            {
                "id_parroquia": 682,
                "id_municipio": 265,
                "parroquia": "El Furrial",

            },
            {
                "id_parroquia": 683,
                "id_municipio": 265,
                "parroquia": "Jusepín",

            },
            {
                "id_parroquia": 684,
                "id_municipio": 265,
                "parroquia": "La Pica",

            },
            {
                "id_parroquia": 685,
                "id_municipio": 265,
                "parroquia": "San Vicente",

            },
            {
                "id_parroquia": 686,
                "id_municipio": 266,
                "parroquia": "Aparicio",

            },
            {
                "id_parroquia": 687,
                "id_municipio": 266,
                "parroquia": "Aragua de Maturín",

            },
            {
                "id_parroquia": 688,
                "id_municipio": 266,
                "parroquia": "Chaguamal",

            },
            {
                "id_parroquia": 689,
                "id_municipio": 266,
                "parroquia": "El Pinto",

            },
            {
                "id_parroquia": 690,
                "id_municipio": 266,
                "parroquia": "Guanaguana",

            },
            {
                "id_parroquia": 691,
                "id_municipio": 266,
                "parroquia": "La Toscana",

            },
            {
                "id_parroquia": 692,
                "id_municipio": 266,
                "parroquia": "Taguaya",

            },
            {
                "id_parroquia": 693,
                "id_municipio": 267,
                "parroquia": "Cachipo",

            },
            {
                "id_parroquia": 694,
                "id_municipio": 267,
                "parroquia": "Quiriquire",

            },
            {
                "id_parroquia": 695,
                "id_municipio": 268,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 696,
                "id_municipio": 269,
                "parroquia": "Barrancas",

            },
            {
                "id_parroquia": 697,
                "id_municipio": 269,
                "parroquia": "Los Barrancos de Fajardo",

            },
            {
                "id_parroquia": 698,
                "id_municipio": 270,
                "parroquia": "Uracoa",

            },
            {
                "id_parroquia": 699,
                "id_municipio": 271,
                "parroquia": "Antolín del Campo",

            },
            {
                "id_parroquia": 700,
                "id_municipio": 272,
                "parroquia": "Arismendi",

            },
            {
                "id_parroquia": 701,
                "id_municipio": 273,
                "parroquia": "García",

            },
            {
                "id_parroquia": 702,
                "id_municipio": 273,
                "parroquia": "Francisco Fajardo",

            },
            {
                "id_parroquia": 703,
                "id_municipio": 274,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 704,
                "id_municipio": 274,
                "parroquia": "Guevara",

            },
            {
                "id_parroquia": 705,
                "id_municipio": 274,
                "parroquia": "Matasiete",

            },
            {
                "id_parroquia": 706,
                "id_municipio": 274,
                "parroquia": "Santa Ana",

            },
            {
                "id_parroquia": 707,
                "id_municipio": 274,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 708,
                "id_municipio": 275,
                "parroquia": "Aguirre",

            },
            {
                "id_parroquia": 709,
                "id_municipio": 275,
                "parroquia": "Maneiro",

            },
            {
                "id_parroquia": 710,
                "id_municipio": 276,
                "parroquia": "Adrián",

            },
            {
                "id_parroquia": 711,
                "id_municipio": 276,
                "parroquia": "Juan Griego",

            },
            {
                "id_parroquia": 712,
                "id_municipio": 276,
                "parroquia": "Yaguaraparo",

            },
            {
                "id_parroquia": 713,
                "id_municipio": 277,
                "parroquia": "Porlamar",

            },
            {
                "id_parroquia": 714,
                "id_municipio": 278,
                "parroquia": "San Francisco de Macanao",

            },
            {
                "id_parroquia": 715,
                "id_municipio": 278,
                "parroquia": "Boca de Río",

            },
            {
                "id_parroquia": 716,
                "id_municipio": 279,
                "parroquia": "Tubores",

            },
            {
                "id_parroquia": 717,
                "id_municipio": 279,
                "parroquia": "Los Baleales",

            },
            {
                "id_parroquia": 718,
                "id_municipio": 280,
                "parroquia": "Vicente Fuentes",

            },
            {
                "id_parroquia": 719,
                "id_municipio": 280,
                "parroquia": "Villalba",

            },
            {
                "id_parroquia": 720,
                "id_municipio": 281,
                "parroquia": "San Juan Bautista",

            },
            {
                "id_parroquia": 721,
                "id_municipio": 281,
                "parroquia": "Zabala",

            },
            {
                "id_parroquia": 722,
                "id_municipio": 283,
                "parroquia": "Capital Araure",

            },
            {
                "id_parroquia": 723,
                "id_municipio": 283,
                "parroquia": "Río Acarigua",

            },
            {
                "id_parroquia": 724,
                "id_municipio": 284,
                "parroquia": "Capital Esteller",

            },
            {
                "id_parroquia": 725,
                "id_municipio": 284,
                "parroquia": "Uveral",

            },
            {
                "id_parroquia": 726,
                "id_municipio": 285,
                "parroquia": "Guanare",

            },
            {
                "id_parroquia": 727,
                "id_municipio": 285,
                "parroquia": "Córdoba",

            },
            {
                "id_parroquia": 728,
                "id_municipio": 285,
                "parroquia": "San José de la Montaña",

            },
            {
                "id_parroquia": 729,
                "id_municipio": 285,
                "parroquia": "San Juan de Guanaguanare",

            },
            {
                "id_parroquia": 730,
                "id_municipio": 285,
                "parroquia": "Virgen de la Coromoto",

            },
            {
                "id_parroquia": 731,
                "id_municipio": 286,
                "parroquia": "Guanarito",

            },
            {
                "id_parroquia": 732,
                "id_municipio": 286,
                "parroquia": "Trinidad de la Capilla",

            },
            {
                "id_parroquia": 733,
                "id_municipio": 286,
                "parroquia": "Divina Pastora",

            },
            {
                "id_parroquia": 734,
                "id_municipio": 287,
                "parroquia": "Monseñor José Vicente de Unda",

            },
            {
                "id_parroquia": 735,
                "id_municipio": 287,
                "parroquia": "Peña Blanca",

            },
            {
                "id_parroquia": 736,
                "id_municipio": 288,
                "parroquia": "Capital Ospino",

            },
            {
                "id_parroquia": 737,
                "id_municipio": 288,
                "parroquia": "Aparición",

            },
            {
                "id_parroquia": 738,
                "id_municipio": 288,
                "parroquia": "La Estación",

            },
            {
                "id_parroquia": 739,
                "id_municipio": 289,
                "parroquia": "Páez",

            },
            {
                "id_parroquia": 740,
                "id_municipio": 289,
                "parroquia": "Payara",

            },
            {
                "id_parroquia": 741,
                "id_municipio": 289,
                "parroquia": "Pimpinela",

            },
            {
                "id_parroquia": 742,
                "id_municipio": 289,
                "parroquia": "Ramón Peraza",

            },
            {
                "id_parroquia": 743,
                "id_municipio": 290,
                "parroquia": "Papelón",

            },
            {
                "id_parroquia": 744,
                "id_municipio": 290,
                "parroquia": "Caño Delgadito",

            },
            {
                "id_parroquia": 745,
                "id_municipio": 291,
                "parroquia": "San Genaro de Boconoito",

            },
            {
                "id_parroquia": 746,
                "id_municipio": 291,
                "parroquia": "Antolín Tovar",

            },
            {
                "id_parroquia": 747,
                "id_municipio": 292,
                "parroquia": "San Rafael de Onoto",

            },
            {
                "id_parroquia": 748,
                "id_municipio": 292,
                "parroquia": "Santa Fe",

            },
            {
                "id_parroquia": 749,
                "id_municipio": 292,
                "parroquia": "Thermo Morles",

            },
            {
                "id_parroquia": 750,
                "id_municipio": 293,
                "parroquia": "Santa Rosalía",

            },
            {
                "id_parroquia": 751,
                "id_municipio": 293,
                "parroquia": "Florida",

            },
            {
                "id_parroquia": 752,
                "id_municipio": 294,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 753,
                "id_municipio": 294,
                "parroquia": "Concepción",

            },
            {
                "id_parroquia": 754,
                "id_municipio": 294,
                "parroquia": "San Rafael de Palo Alzado",

            },
            {
                "id_parroquia": 755,
                "id_municipio": 294,
                "parroquia": "Uvencio Antonio Velásquez",

            },
            {
                "id_parroquia": 756,
                "id_municipio": 294,
                "parroquia": "San José de Saguaz",

            },
            {
                "id_parroquia": 757,
                "id_municipio": 294,
                "parroquia": "Villa Rosa",

            },
            {
                "id_parroquia": 758,
                "id_municipio": 295,
                "parroquia": "Turén",

            },
            {
                "id_parroquia": 759,
                "id_municipio": 295,
                "parroquia": "Canelones",

            },
            {
                "id_parroquia": 760,
                "id_municipio": 295,
                "parroquia": "Santa Cruz",

            },
            {
                "id_parroquia": 761,
                "id_municipio": 295,
                "parroquia": "San Isidro Labrador",

            },
            {
                "id_parroquia": 762,
                "id_municipio": 296,
                "parroquia": "Mariño",

            },
            {
                "id_parroquia": 763,
                "id_municipio": 296,
                "parroquia": "Rómulo Gallegos",

            },
            {
                "id_parroquia": 764,
                "id_municipio": 297,
                "parroquia": "San José de Aerocuar",

            },
            {
                "id_parroquia": 765,
                "id_municipio": 297,
                "parroquia": "Tavera Acosta",

            },
            {
                "id_parroquia": 766,
                "id_municipio": 298,
                "parroquia": "Río Caribe",

            },
            {
                "id_parroquia": 767,
                "id_municipio": 298,
                "parroquia": "Antonio José de Sucre",

            },
            {
                "id_parroquia": 768,
                "id_municipio": 298,
                "parroquia": "El Morro de Puerto Santo",

            },
            {
                "id_parroquia": 769,
                "id_municipio": 298,
                "parroquia": "Puerto Santo",

            },
            {
                "id_parroquia": 770,
                "id_municipio": 298,
                "parroquia": "San Juan de las Galdonas",

            },
            {
                "id_parroquia": 771,
                "id_municipio": 299,
                "parroquia": "El Pilar",

            },
            {
                "id_parroquia": 772,
                "id_municipio": 299,
                "parroquia": "El Rincón",

            },
            {
                "id_parroquia": 773,
                "id_municipio": 299,
                "parroquia": "General Francisco Antonio Váquez",

            },
            {
                "id_parroquia": 774,
                "id_municipio": 299,
                "parroquia": "Guaraúnos",

            },
            {
                "id_parroquia": 775,
                "id_municipio": 299,
                "parroquia": "Tunapuicito",

            },
            {
                "id_parroquia": 776,
                "id_municipio": 299,
                "parroquia": "Unión",

            },
            {
                "id_parroquia": 777,
                "id_municipio": 300,
                "parroquia": "Santa Catalina",

            },
            {
                "id_parroquia": 778,
                "id_municipio": 300,
                "parroquia": "Santa Rosa",

            },
            {
                "id_parroquia": 779,
                "id_municipio": 300,
                "parroquia": "Santa Teresa",

            },
            {
                "id_parroquia": 780,
                "id_municipio": 300,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 781,
                "id_municipio": 300,
                "parroquia": "Maracapana",

            },
            {
                "id_parroquia": 782,
                "id_municipio": 302,
                "parroquia": "Libertad",

            },
            {
                "id_parroquia": 783,
                "id_municipio": 302,
                "parroquia": "El Paujil",

            },
            {
                "id_parroquia": 784,
                "id_municipio": 302,
                "parroquia": "Yaguaraparo",

            },
            {
                "id_parroquia": 785,
                "id_municipio": 303,
                "parroquia": "Cruz Salmerón Acosta",

            },
            {
                "id_parroquia": 786,
                "id_municipio": 303,
                "parroquia": "Chacopata",

            },
            {
                "id_parroquia": 787,
                "id_municipio": 303,
                "parroquia": "Manicuare",

            },
            {
                "id_parroquia": 788,
                "id_municipio": 304,
                "parroquia": "Tunapuy",

            },
            {
                "id_parroquia": 789,
                "id_municipio": 304,
                "parroquia": "Campo Elías",

            },
            {
                "id_parroquia": 790,
                "id_municipio": 305,
                "parroquia": "Irapa",

            },
            {
                "id_parroquia": 791,
                "id_municipio": 305,
                "parroquia": "Campo Claro",

            },
            {
                "id_parroquia": 792,
                "id_municipio": 305,
                "parroquia": "Maraval",

            },
            {
                "id_parroquia": 793,
                "id_municipio": 305,
                "parroquia": "San Antonio de Irapa",

            },
            {
                "id_parroquia": 794,
                "id_municipio": 305,
                "parroquia": "Soro",

            },
            {
                "id_parroquia": 795,
                "id_municipio": 306,
                "parroquia": "Mejía",

            },
            {
                "id_parroquia": 796,
                "id_municipio": 307,
                "parroquia": "Cumanacoa",

            },
            {
                "id_parroquia": 797,
                "id_municipio": 307,
                "parroquia": "Arenas",

            },
            {
                "id_parroquia": 798,
                "id_municipio": 307,
                "parroquia": "Aricagua",

            },
            {
                "id_parroquia": 799,
                "id_municipio": 307,
                "parroquia": "Cogollar",

            },
            {
                "id_parroquia": 800,
                "id_municipio": 307,
                "parroquia": "San Fernando",

            },
            {
                "id_parroquia": 801,
                "id_municipio": 307,
                "parroquia": "San Lorenzo",

            },
            {
                "id_parroquia": 802,
                "id_municipio": 308,
                "parroquia": "Villa Frontado (Muelle de Cariaco)",

            },
            {
                "id_parroquia": 803,
                "id_municipio": 308,
                "parroquia": "Catuaro",

            },
            {
                "id_parroquia": 804,
                "id_municipio": 308,
                "parroquia": "Rendón",

            },
            {
                "id_parroquia": 805,
                "id_municipio": 308,
                "parroquia": "San Cruz",

            },
            {
                "id_parroquia": 806,
                "id_municipio": 308,
                "parroquia": "Santa María",

            },
            {
                "id_parroquia": 807,
                "id_municipio": 309,
                "parroquia": "Altagracia",

            },
            {
                "id_parroquia": 808,
                "id_municipio": 309,
                "parroquia": "Santa Inés",

            },
            {
                "id_parroquia": 809,
                "id_municipio": 309,
                "parroquia": "Valentín Valiente",

            },
            {
                "id_parroquia": 810,
                "id_municipio": 309,
                "parroquia": "Ayacucho",

            },
            {
                "id_parroquia": 811,
                "id_municipio": 309,
                "parroquia": "San Juan",

            },
            {
                "id_parroquia": 812,
                "id_municipio": 309,
                "parroquia": "Raúl Leoni",

            },
            {
                "id_parroquia": 813,
                "id_municipio": 309,
                "parroquia": "Gran Mariscal",

            },
            {
                "id_parroquia": 814,
                "id_municipio": 310,
                "parroquia": "Cristóbal Colón",

            },
            {
                "id_parroquia": 815,
                "id_municipio": 310,
                "parroquia": "Bideau",

            },
            {
                "id_parroquia": 816,
                "id_municipio": 310,
                "parroquia": "Punta de Piedras",

            },
            {
                "id_parroquia": 817,
                "id_municipio": 310,
                "parroquia": "Güiria",

            },
            {
                "id_parroquia": 818,
                "id_municipio": 341,
                "parroquia": "Andrés Bello",

            },
            {
                "id_parroquia": 819,
                "id_municipio": 342,
                "parroquia": "Antonio Rómulo Costa",

            },
            {
                "id_parroquia": 820,
                "id_municipio": 343,
                "parroquia": "Ayacucho",

            },
            {
                "id_parroquia": 821,
                "id_municipio": 343,
                "parroquia": "Rivas Berti",

            },
            {
                "id_parroquia": 822,
                "id_municipio": 343,
                "parroquia": "San Pedro del Río",

            },
            {
                "id_parroquia": 823,
                "id_municipio": 344,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 824,
                "id_municipio": 344,
                "parroquia": "Palotal",

            },
            {
                "id_parroquia": 825,
                "id_municipio": 344,
                "parroquia": "General Juan Vicente Gómez",

            },
            {
                "id_parroquia": 826,
                "id_municipio": 344,
                "parroquia": "Isaías Medina Angarita",

            },
            {
                "id_parroquia": 827,
                "id_municipio": 345,
                "parroquia": "Cárdenas",

            },
            {
                "id_parroquia": 828,
                "id_municipio": 345,
                "parroquia": "Amenodoro Ángel Lamus",

            },
            {
                "id_parroquia": 829,
                "id_municipio": 345,
                "parroquia": "La Florida",

            },
            {
                "id_parroquia": 830,
                "id_municipio": 346,
                "parroquia": "Córdoba",

            },
            {
                "id_parroquia": 831,
                "id_municipio": 347,
                "parroquia": "Fernández Feo",

            },
            {
                "id_parroquia": 832,
                "id_municipio": 347,
                "parroquia": "Alberto Adriani",

            },
            {
                "id_parroquia": 833,
                "id_municipio": 347,
                "parroquia": "Santo Domingo",

            },
            {
                "id_parroquia": 834,
                "id_municipio": 348,
                "parroquia": "Francisco de Miranda",

            },
            {
                "id_parroquia": 835,
                "id_municipio": 349,
                "parroquia": "García de Hevia",

            },
            {
                "id_parroquia": 836,
                "id_municipio": 349,
                "parroquia": "Boca de Grita",

            },
            {
                "id_parroquia": 837,
                "id_municipio": 349,
                "parroquia": "José Antonio Páez",

            },
            {
                "id_parroquia": 838,
                "id_municipio": 350,
                "parroquia": "Guásimos",

            },
            {
                "id_parroquia": 839,
                "id_municipio": 351,
                "parroquia": "Independencia",

            },
            {
                "id_parroquia": 840,
                "id_municipio": 351,
                "parroquia": "Juan Germán Roscio",

            },
            {
                "id_parroquia": 841,
                "id_municipio": 351,
                "parroquia": "Román Cárdenas",

            },
            {
                "id_parroquia": 842,
                "id_municipio": 352,
                "parroquia": "Jáuregui",

            },
            {
                "id_parroquia": 843,
                "id_municipio": 352,
                "parroquia": "Emilio Constantino Guerrero",

            },
            {
                "id_parroquia": 844,
                "id_municipio": 352,
                "parroquia": "Monseñor Miguel Antonio Salas",

            },
            {
                "id_parroquia": 845,
                "id_municipio": 353,
                "parroquia": "José María Vargas",

            },
            {
                "id_parroquia": 846,
                "id_municipio": 354,
                "parroquia": "Junín",

            },
            {
                "id_parroquia": 847,
                "id_municipio": 354,
                "parroquia": "La Petrólea",

            },
            {
                "id_parroquia": 848,
                "id_municipio": 354,
                "parroquia": "Quinimarí",

            },
            {
                "id_parroquia": 849,
                "id_municipio": 354,
                "parroquia": "Bramón",

            },
            {
                "id_parroquia": 850,
                "id_municipio": 355,
                "parroquia": "Libertad",

            },
            {
                "id_parroquia": 851,
                "id_municipio": 355,
                "parroquia": "Cipriano Castro",

            },
            {
                "id_parroquia": 852,
                "id_municipio": 355,
                "parroquia": "Manuel Felipe Rugeles",

            },
            {
                "id_parroquia": 853,
                "id_municipio": 356,
                "parroquia": "Libertador",

            },
            {
                "id_parroquia": 854,
                "id_municipio": 356,
                "parroquia": "Doradas",

            },
            {
                "id_parroquia": 855,
                "id_municipio": 356,
                "parroquia": "Emeterio Ochoa",

            },
            {
                "id_parroquia": 856,
                "id_municipio": 356,
                "parroquia": "San Joaquín de Navay",

            },
            {
                "id_parroquia": 857,
                "id_municipio": 357,
                "parroquia": "Lobatera",

            },
            {
                "id_parroquia": 858,
                "id_municipio": 357,
                "parroquia": "Constitución",

            },
            {
                "id_parroquia": 859,
                "id_municipio": 358,
                "parroquia": "Michelena",

            },
            {
                "id_parroquia": 860,
                "id_municipio": 359,
                "parroquia": "Panamericano",

            },
            {
                "id_parroquia": 861,
                "id_municipio": 359,
                "parroquia": "La Palmita",

            },
            {
                "id_parroquia": 862,
                "id_municipio": 360,
                "parroquia": "Pedro María Ureña",

            },
            {
                "id_parroquia": 863,
                "id_municipio": 360,
                "parroquia": "Nueva Arcadia",

            },
            {
                "id_parroquia": 864,
                "id_municipio": 361,
                "parroquia": "Delicias",

            },
            {
                "id_parroquia": 865,
                "id_municipio": 361,
                "parroquia": "Pecaya",

            },
            {
                "id_parroquia": 866,
                "id_municipio": 362,
                "parroquia": "Samuel Darío Maldonado",

            },
            {
                "id_parroquia": 867,
                "id_municipio": 362,
                "parroquia": "Boconó",

            },
            {
                "id_parroquia": 868,
                "id_municipio": 362,
                "parroquia": "Hernández",

            },
            {
                "id_parroquia": 869,
                "id_municipio": 363,
                "parroquia": "La Concordia",

            },
            {
                "id_parroquia": 870,
                "id_municipio": 363,
                "parroquia": "San Juan Bautista",

            },
            {
                "id_parroquia": 871,
                "id_municipio": 363,
                "parroquia": "Pedro María Morantes",

            },
            {
                "id_parroquia": 872,
                "id_municipio": 363,
                "parroquia": "San Sebastián",

            },
            {
                "id_parroquia": 873,
                "id_municipio": 363,
                "parroquia": "Dr. Francisco Romero Lobo",

            },
            {
                "id_parroquia": 874,
                "id_municipio": 364,
                "parroquia": "Seboruco",

            },
            {
                "id_parroquia": 875,
                "id_municipio": 365,
                "parroquia": "Simón Rodríguez",

            },
            {
                "id_parroquia": 876,
                "id_municipio": 366,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 877,
                "id_municipio": 366,
                "parroquia": "Eleazar López Contreras",

            },
            {
                "id_parroquia": 878,
                "id_municipio": 366,
                "parroquia": "San Pablo",

            },
            {
                "id_parroquia": 879,
                "id_municipio": 367,
                "parroquia": "Torbes",

            },
            {
                "id_parroquia": 880,
                "id_municipio": 368,
                "parroquia": "Uribante",

            },
            {
                "id_parroquia": 881,
                "id_municipio": 368,
                "parroquia": "Cárdenas",

            },
            {
                "id_parroquia": 882,
                "id_municipio": 368,
                "parroquia": "Juan Pablo Peñalosa",

            },
            {
                "id_parroquia": 883,
                "id_municipio": 368,
                "parroquia": "Potosí",

            },
            {
                "id_parroquia": 884,
                "id_municipio": 369,
                "parroquia": "San Judas Tadeo",

            },
            {
                "id_parroquia": 885,
                "id_municipio": 370,
                "parroquia": "Araguaney",

            },
            {
                "id_parroquia": 886,
                "id_municipio": 370,
                "parroquia": "El Jaguito",

            },
            {
                "id_parroquia": 887,
                "id_municipio": 370,
                "parroquia": "La Esperanza",

            },
            {
                "id_parroquia": 888,
                "id_municipio": 370,
                "parroquia": "Santa Isabel",

            },
            {
                "id_parroquia": 889,
                "id_municipio": 371,
                "parroquia": "Boconó",

            },
            {
                "id_parroquia": 890,
                "id_municipio": 371,
                "parroquia": "El Carmen",

            },
            {
                "id_parroquia": 891,
                "id_municipio": 371,
                "parroquia": "Mosquey",

            },
            {
                "id_parroquia": 892,
                "id_municipio": 371,
                "parroquia": "Ayacucho",

            },
            {
                "id_parroquia": 893,
                "id_municipio": 371,
                "parroquia": "Burbusay",

            },
            {
                "id_parroquia": 894,
                "id_municipio": 371,
                "parroquia": "General Ribas",

            },
            {
                "id_parroquia": 895,
                "id_municipio": 371,
                "parroquia": "Guaramacal",

            },
            {
                "id_parroquia": 896,
                "id_municipio": 371,
                "parroquia": "Vega de Guaramacal",

            },
            {
                "id_parroquia": 897,
                "id_municipio": 371,
                "parroquia": "Monseñor Jáuregui",

            },
            {
                "id_parroquia": 898,
                "id_municipio": 371,
                "parroquia": "Rafael Rangel",

            },
            {
                "id_parroquia": 899,
                "id_municipio": 371,
                "parroquia": "San Miguel",

            },
            {
                "id_parroquia": 900,
                "id_municipio": 371,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 901,
                "id_municipio": 372,
                "parroquia": "Sabana Grande",

            },
            {
                "id_parroquia": 902,
                "id_municipio": 372,
                "parroquia": "Cheregüé",

            },
            {
                "id_parroquia": 903,
                "id_municipio": 372,
                "parroquia": "Granados",

            },
            {
                "id_parroquia": 904,
                "id_municipio": 373,
                "parroquia": "Arnoldo Gabaldón",

            },
            {
                "id_parroquia": 905,
                "id_municipio": 373,
                "parroquia": "Bolivia",

            },
            {
                "id_parroquia": 906,
                "id_municipio": 373,
                "parroquia": "Carrillo",

            },
            {
                "id_parroquia": 907,
                "id_municipio": 373,
                "parroquia": "Cegarra",

            },
            {
                "id_parroquia": 908,
                "id_municipio": 373,
                "parroquia": "Chejendé",

            },
            {
                "id_parroquia": 909,
                "id_municipio": 373,
                "parroquia": "Manuel Salvador Ulloa",

            },
            {
                "id_parroquia": 910,
                "id_municipio": 373,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 911,
                "id_municipio": 374,
                "parroquia": "Carache",

            },
            {
                "id_parroquia": 912,
                "id_municipio": 374,
                "parroquia": "La Concepción",

            },
            {
                "id_parroquia": 913,
                "id_municipio": 374,
                "parroquia": "Cuicas",

            },
            {
                "id_parroquia": 914,
                "id_municipio": 374,
                "parroquia": "Panamericana",

            },
            {
                "id_parroquia": 915,
                "id_municipio": 374,
                "parroquia": "Santa Cruz",

            },
            {
                "id_parroquia": 916,
                "id_municipio": 375,
                "parroquia": "Escuque",

            },
            {
                "id_parroquia": 917,
                "id_municipio": 375,
                "parroquia": "La Unión",

            },
            {
                "id_parroquia": 918,
                "id_municipio": 375,
                "parroquia": "Santa Rita",

            },
            {
                "id_parroquia": 919,
                "id_municipio": 375,
                "parroquia": "Sabana Libre",

            },
            {
                "id_parroquia": 920,
                "id_municipio": 376,
                "parroquia": "El Socorro",

            },
            {
                "id_parroquia": 921,
                "id_municipio": 376,
                "parroquia": "Los Caprichos",

            },
            {
                "id_parroquia": 922,
                "id_municipio": 376,
                "parroquia": "Antonio José de Sucre",

            },
            {
                "id_parroquia": 923,
                "id_municipio": 377,
                "parroquia": "Campo Elías",

            },
            {
                "id_parroquia": 924,
                "id_municipio": 377,
                "parroquia": "Arnoldo Gabaldón",

            },
            {
                "id_parroquia": 925,
                "id_municipio": 378,
                "parroquia": "Santa Apolonia",

            },
            {
                "id_parroquia": 926,
                "id_municipio": 378,
                "parroquia": "El Progreso",

            },
            {
                "id_parroquia": 927,
                "id_municipio": 378,
                "parroquia": "La Ceiba",

            },
            {
                "id_parroquia": 928,
                "id_municipio": 378,
                "parroquia": "Tres de Febrero",

            },
            {
                "id_parroquia": 929,
                "id_municipio": 379,
                "parroquia": "El Dividive",

            },
            {
                "id_parroquia": 930,
                "id_municipio": 379,
                "parroquia": "Agua Santa",

            },
            {
                "id_parroquia": 931,
                "id_municipio": 379,
                "parroquia": "Agua Caliente",

            },
            {
                "id_parroquia": 932,
                "id_municipio": 379,
                "parroquia": "El Cenizo",

            },
            {
                "id_parroquia": 933,
                "id_municipio": 379,
                "parroquia": "Valerita",

            },
            {
                "id_parroquia": 934,
                "id_municipio": 380,
                "parroquia": "Monte Carmelo",

            },
            {
                "id_parroquia": 935,
                "id_municipio": 380,
                "parroquia": "Buena Vista",

            },
            {
                "id_parroquia": 936,
                "id_municipio": 380,
                "parroquia": "Santa María del Horcón",

            },
            {
                "id_parroquia": 937,
                "id_municipio": 381,
                "parroquia": "Motatán",

            },
            {
                "id_parroquia": 938,
                "id_municipio": 381,
                "parroquia": "El Baño",

            },
            {
                "id_parroquia": 939,
                "id_municipio": 381,
                "parroquia": "Jalisco",

            },
            {
                "id_parroquia": 940,
                "id_municipio": 382,
                "parroquia": "Pampán",

            },
            {
                "id_parroquia": 941,
                "id_municipio": 382,
                "parroquia": "Flor de Patria",

            },
            {
                "id_parroquia": 942,
                "id_municipio": 382,
                "parroquia": "La Paz",

            },
            {
                "id_parroquia": 943,
                "id_municipio": 382,
                "parroquia": "Santa Ana",

            },
            {
                "id_parroquia": 944,
                "id_municipio": 383,
                "parroquia": "Pampanito",

            },
            {
                "id_parroquia": 945,
                "id_municipio": 383,
                "parroquia": "La Concepción",

            },
            {
                "id_parroquia": 946,
                "id_municipio": 383,
                "parroquia": "Pampanito II",

            },
            {
                "id_parroquia": 947,
                "id_municipio": 384,
                "parroquia": "Betijoque",

            },
            {
                "id_parroquia": 948,
                "id_municipio": 384,
                "parroquia": "José Gregorio Hernández",

            },
            {
                "id_parroquia": 949,
                "id_municipio": 384,
                "parroquia": "La Pueblita",

            },
            {
                "id_parroquia": 950,
                "id_municipio": 384,
                "parroquia": "Los Cedros",

            },
            {
                "id_parroquia": 951,
                "id_municipio": 385,
                "parroquia": "Carvajal",

            },
            {
                "id_parroquia": 952,
                "id_municipio": 385,
                "parroquia": "Campo Alegre",

            },
            {
                "id_parroquia": 953,
                "id_municipio": 385,
                "parroquia": "Antonio Nicolás Briceño",

            },
            {
                "id_parroquia": 954,
                "id_municipio": 385,
                "parroquia": "José Leonardo Suárez",

            },
            {
                "id_parroquia": 955,
                "id_municipio": 386,
                "parroquia": "Sabana de Mendoza",

            },
            {
                "id_parroquia": 956,
                "id_municipio": 386,
                "parroquia": "Junín",

            },
            {
                "id_parroquia": 957,
                "id_municipio": 386,
                "parroquia": "Valmore Rodríguez",

            },
            {
                "id_parroquia": 958,
                "id_municipio": 386,
                "parroquia": "El Paraíso",

            },
            {
                "id_parroquia": 959,
                "id_municipio": 387,
                "parroquia": "Andrés Linares",

            },
            {
                "id_parroquia": 960,
                "id_municipio": 387,
                "parroquia": "Chiquinquirá",

            },
            {
                "id_parroquia": 961,
                "id_municipio": 387,
                "parroquia": "Cristóbal Mendoza",

            },
            {
                "id_parroquia": 962,
                "id_municipio": 387,
                "parroquia": "Cruz Carrillo",

            },
            {
                "id_parroquia": 963,
                "id_municipio": 387,
                "parroquia": "Matriz",

            },
            {
                "id_parroquia": 964,
                "id_municipio": 387,
                "parroquia": "Monseñor Carrillo",

            },
            {
                "id_parroquia": 965,
                "id_municipio": 387,
                "parroquia": "Tres Esquinas",

            },
            {
                "id_parroquia": 966,
                "id_municipio": 388,
                "parroquia": "Cabimbú",

            },
            {
                "id_parroquia": 967,
                "id_municipio": 388,
                "parroquia": "Jajó",

            },
            {
                "id_parroquia": 968,
                "id_municipio": 388,
                "parroquia": "La Mesa de Esnujaque",

            },
            {
                "id_parroquia": 969,
                "id_municipio": 388,
                "parroquia": "Santiago",

            },
            {
                "id_parroquia": 970,
                "id_municipio": 388,
                "parroquia": "Tuñame",

            },
            {
                "id_parroquia": 971,
                "id_municipio": 388,
                "parroquia": "La Quebrada",

            },
            {
                "id_parroquia": 972,
                "id_municipio": 389,
                "parroquia": "Juan Ignacio Montilla",

            },
            {
                "id_parroquia": 973,
                "id_municipio": 389,
                "parroquia": "La Beatriz",

            },
            {
                "id_parroquia": 974,
                "id_municipio": 389,
                "parroquia": "La Puerta",

            },
            {
                "id_parroquia": 975,
                "id_municipio": 389,
                "parroquia": "Mendoza del Valle de Momboy",

            },
            {
                "id_parroquia": 976,
                "id_municipio": 389,
                "parroquia": "Mercedes Díaz",

            },
            {
                "id_parroquia": 977,
                "id_municipio": 389,
                "parroquia": "San Luis",

            },
            {
                "id_parroquia": 978,
                "id_municipio": 390,
                "parroquia": "Caraballeda",

            },
            {
                "id_parroquia": 979,
                "id_municipio": 390,
                "parroquia": "Carayaca",

            },
            {
                "id_parroquia": 980,
                "id_municipio": 390,
                "parroquia": "Carlos Soublette",

            },
            {
                "id_parroquia": 981,
                "id_municipio": 390,
                "parroquia": "Caruao Chuspa",

            },
            {
                "id_parroquia": 982,
                "id_municipio": 390,
                "parroquia": "Catia La Mar",

            },
            {
                "id_parroquia": 983,
                "id_municipio": 390,
                "parroquia": "El Junko",

            },
            {
                "id_parroquia": 984,
                "id_municipio": 390,
                "parroquia": "La Guaira",

            },
            {
                "id_parroquia": 985,
                "id_municipio": 390,
                "parroquia": "Macuto",

            },
            {
                "id_parroquia": 986,
                "id_municipio": 390,
                "parroquia": "Maiquetía",

            },
            {
                "id_parroquia": 987,
                "id_municipio": 390,
                "parroquia": "Naiguatá",

            },
            {
                "id_parroquia": 988,
                "id_municipio": 390,
                "parroquia": "Urimare",

            },
            {
                "id_parroquia": 989,
                "id_municipio": 391,
                "parroquia": "Arístides Bastidas",

            },
            {
                "id_parroquia": 990,
                "id_municipio": 392,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 991,
                "id_municipio": 407,
                "parroquia": "Chivacoa",

            },
            {
                "id_parroquia": 992,
                "id_municipio": 407,
                "parroquia": "Campo Elías",

            },
            {
                "id_parroquia": 993,
                "id_municipio": 408,
                "parroquia": "Cocorote",

            },
            {
                "id_parroquia": 994,
                "id_municipio": 409,
                "parroquia": "Independencia",

            },
            {
                "id_parroquia": 995,
                "id_municipio": 410,
                "parroquia": "José Antonio Páez",

            },
            {
                "id_parroquia": 996,
                "id_municipio": 411,
                "parroquia": "La Trinidad",

            },
            {
                "id_parroquia": 997,
                "id_municipio": 412,
                "parroquia": "Manuel Monge",

            },
            {
                "id_parroquia": 998,
                "id_municipio": 413,
                "parroquia": "Salóm",

            },
            {
                "id_parroquia": 999,
                "id_municipio": 413,
                "parroquia": "Temerla",

            },
            {
                "id_parroquia": 1000,
                "id_municipio": 413,
                "parroquia": "Nirgua",

            },
            {
                "id_parroquia": 1001,
                "id_municipio": 414,
                "parroquia": "San Andrés",

            },
            {
                "id_parroquia": 1002,
                "id_municipio": 414,
                "parroquia": "Yaritagua",

            },
            {
                "id_parroquia": 1003,
                "id_municipio": 415,
                "parroquia": "San Javier",

            },
            {
                "id_parroquia": 1004,
                "id_municipio": 415,
                "parroquia": "Albarico",

            },
            {
                "id_parroquia": 1005,
                "id_municipio": 415,
                "parroquia": "San Felipe",

            },
            {
                "id_parroquia": 1006,
                "id_municipio": 416,
                "parroquia": "Sucre",

            },
            {
                "id_parroquia": 1007,
                "id_municipio": 417,
                "parroquia": "Urachiche",

            },
            {
                "id_parroquia": 1008,
                "id_municipio": 418,
                "parroquia": "El Guayabo",

            },
            {
                "id_parroquia": 1009,
                "id_municipio": 418,
                "parroquia": "Farriar",

            },
            {
                "id_parroquia": 1010,
                "id_municipio": 441,
                "parroquia": "Isla de Toas",

            },
            {
                "id_parroquia": 1011,
                "id_municipio": 441,
                "parroquia": "Monagas",

            },
            {
                "id_parroquia": 1012,
                "id_municipio": 442,
                "parroquia": "San Timoteo",

            },
            {
                "id_parroquia": 1013,
                "id_municipio": 442,
                "parroquia": "General Urdaneta",

            },
            {
                "id_parroquia": 1014,
                "id_municipio": 442,
                "parroquia": "Libertador",

            },
            {
                "id_parroquia": 1015,
                "id_municipio": 442,
                "parroquia": "Marcelino Briceño",

            },
            {
                "id_parroquia": 1016,
                "id_municipio": 442,
                "parroquia": "Pueblo Nuevo",

            },
            {
                "id_parroquia": 1017,
                "id_municipio": 442,
                "parroquia": "Manuel Guanipa Matos",

            },
            {
                "id_parroquia": 1018,
                "id_municipio": 443,
                "parroquia": "Ambrosio",

            },
            {
                "id_parroquia": 1019,
                "id_municipio": 443,
                "parroquia": "Carmen Herrera",

            },
            {
                "id_parroquia": 1020,
                "id_municipio": 443,
                "parroquia": "La Rosa",

            },
            {
                "id_parroquia": 1021,
                "id_municipio": 443,
                "parroquia": "Germán Ríos Linares",

            },
            {
                "id_parroquia": 1022,
                "id_municipio": 443,
                "parroquia": "San Benito",

            },
            {
                "id_parroquia": 1023,
                "id_municipio": 443,
                "parroquia": "Rómulo Betancourt",

            },
            {
                "id_parroquia": 1024,
                "id_municipio": 443,
                "parroquia": "Jorge Hernández",

            },
            {
                "id_parroquia": 1025,
                "id_municipio": 443,
                "parroquia": "Punta Gorda",

            },
            {
                "id_parroquia": 1026,
                "id_municipio": 443,
                "parroquia": "Arístides Calvani",

            },
            {
                "id_parroquia": 1027,
                "id_municipio": 444,
                "parroquia": "Encontrados",

            },
            {
                "id_parroquia": 1028,
                "id_municipio": 444,
                "parroquia": "Udón Pérez",

            },
            {
                "id_parroquia": 1029,
                "id_municipio": 445,
                "parroquia": "Moralito",

            },
            {
                "id_parroquia": 1030,
                "id_municipio": 445,
                "parroquia": "San Carlos del Zulia",

            },
            {
                "id_parroquia": 1031,
                "id_municipio": 445,
                "parroquia": "Santa Cruz del Zulia",

            },
            {
                "id_parroquia": 1032,
                "id_municipio": 445,
                "parroquia": "Santa Bárbara",

            },
            {
                "id_parroquia": 1033,
                "id_municipio": 445,
                "parroquia": "Urribarrí",

            },
            {
                "id_parroquia": 1034,
                "id_municipio": 446,
                "parroquia": "Carlos Quevedo",

            },
            {
                "id_parroquia": 1035,
                "id_municipio": 446,
                "parroquia": "Francisco Javier Pulgar",

            },
            {
                "id_parroquia": 1036,
                "id_municipio": 446,
                "parroquia": "Simón Rodríguez",

            },
            {
                "id_parroquia": 1037,
                "id_municipio": 446,
                "parroquia": "Guamo-Gavilanes",

            },
            {
                "id_parroquia": 1038,
                "id_municipio": 448,
                "parroquia": "La Concepción",

            },
            {
                "id_parroquia": 1039,
                "id_municipio": 448,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 1040,
                "id_municipio": 448,
                "parroquia": "Mariano Parra León",

            },
            {
                "id_parroquia": 1041,
                "id_municipio": 448,
                "parroquia": "José Ramón Yépez",

            },
            {
                "id_parroquia": 1042,
                "id_municipio": 449,
                "parroquia": "Jesús María Semprún",

            },
            {
                "id_parroquia": 1043,
                "id_municipio": 449,
                "parroquia": "Barí",

            },
            {
                "id_parroquia": 1044,
                "id_municipio": 450,
                "parroquia": "Concepción",

            },
            {
                "id_parroquia": 1045,
                "id_municipio": 450,
                "parroquia": "Andrés Bello",

            },
            {
                "id_parroquia": 1046,
                "id_municipio": 450,
                "parroquia": "Chiquinquirá",

            },
            {
                "id_parroquia": 1047,
                "id_municipio": 450,
                "parroquia": "El Carmelo",

            },
            {
                "id_parroquia": 1048,
                "id_municipio": 450,
                "parroquia": "Potreritos",

            },
            {
                "id_parroquia": 1049,
                "id_municipio": 451,
                "parroquia": "Libertad",

            },
            {
                "id_parroquia": 1050,
                "id_municipio": 451,
                "parroquia": "Alonso de Ojeda",

            },
            {
                "id_parroquia": 1051,
                "id_municipio": 451,
                "parroquia": "Venezuela",

            },
            {
                "id_parroquia": 1052,
                "id_municipio": 451,
                "parroquia": "Eleazar López Contreras",

            },
            {
                "id_parroquia": 1053,
                "id_municipio": 451,
                "parroquia": "Campo Lara",

            },
            {
                "id_parroquia": 1054,
                "id_municipio": 452,
                "parroquia": "Bartolomé de las Casas",

            },
            {
                "id_parroquia": 1055,
                "id_municipio": 452,
                "parroquia": "Libertad",

            },
            {
                "id_parroquia": 1056,
                "id_municipio": 452,
                "parroquia": "Río Negro",

            },
            {
                "id_parroquia": 1057,
                "id_municipio": 452,
                "parroquia": "San José de Perijá",

            },
            {
                "id_parroquia": 1058,
                "id_municipio": 453,
                "parroquia": "San Rafael",

            },
            {
                "id_parroquia": 1059,
                "id_municipio": 453,
                "parroquia": "La Sierrita",

            },
            {
                "id_parroquia": 1060,
                "id_municipio": 453,
                "parroquia": "Las Parcelas",

            },
            {
                "id_parroquia": 1061,
                "id_municipio": 453,
                "parroquia": "Luis de Vicente",

            },
            {
                "id_parroquia": 1062,
                "id_municipio": 453,
                "parroquia": "Monseñor Marcos Sergio Godoy",

            },
            {
                "id_parroquia": 1063,
                "id_municipio": 453,
                "parroquia": "Ricaurte",

            },
            {
                "id_parroquia": 1064,
                "id_municipio": 453,
                "parroquia": "Tamare",

            },
            {
                "id_parroquia": 1065,
                "id_municipio": 454,
                "parroquia": "Antonio Borjas Romero",

            },
            {
                "id_parroquia": 1066,
                "id_municipio": 454,
                "parroquia": "Bolívar",

            },
            {
                "id_parroquia": 1067,
                "id_municipio": 454,
                "parroquia": "Cacique Mara",

            },
            {
                "id_parroquia": 1068,
                "id_municipio": 454,
                "parroquia": "Carracciolo Parra Pérez",

            },
            {
                "id_parroquia": 1069,
                "id_municipio": 454,
                "parroquia": "Cecilio Acosta",

            },
            {
                "id_parroquia": 1070,
                "id_municipio": 454,
                "parroquia": "Cristo de Aranza",

            },
            {
                "id_parroquia": 1071,
                "id_municipio": 454,
                "parroquia": "Coquivacoa",

            },
            {
                "id_parroquia": 1072,
                "id_municipio": 454,
                "parroquia": "Chiquinquirá",

            },
            {
                "id_parroquia": 1073,
                "id_municipio": 454,
                "parroquia": "Francisco Eugenio Bustamante",

            },
            {
                "id_parroquia": 1074,
                "id_municipio": 454,
                "parroquia": "Idelfonzo Vásquez",

            },
            {
                "id_parroquia": 1075,
                "id_municipio": 454,
                "parroquia": "Juana de Ávila",

            },
            {
                "id_parroquia": 1076,
                "id_municipio": 454,
                "parroquia": "Luis Hurtado Higuera",

            },
            {
                "id_parroquia": 1077,
                "id_municipio": 454,
                "parroquia": "Manuel Dagnino",

            },
            {
                "id_parroquia": 1078,
                "id_municipio": 454,
                "parroquia": "Olegario Villalobos",

            },
            {
                "id_parroquia": 1079,
                "id_municipio": 454,
                "parroquia": "Raúl Leoni",

            },
            {
                "id_parroquia": 1080,
                "id_municipio": 454,
                "parroquia": "Santa Lucía",

            },
            {
                "id_parroquia": 1081,
                "id_municipio": 454,
                "parroquia": "Venancio Pulgar",

            },
            {
                "id_parroquia": 1082,
                "id_municipio": 454,
                "parroquia": "San Isidro",

            },
            {
                "id_parroquia": 1083,
                "id_municipio": 455,
                "parroquia": "Altagracia",

            },
            {
                "id_parroquia": 1084,
                "id_municipio": 455,
                "parroquia": "Faría",

            },
            {
                "id_parroquia": 1085,
                "id_municipio": 455,
                "parroquia": "Ana María Campos",

            },
            {
                "id_parroquia": 1086,
                "id_municipio": 455,
                "parroquia": "San Antonio",

            },
            {
                "id_parroquia": 1087,
                "id_municipio": 455,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 1088,
                "id_municipio": 456,
                "parroquia": "Donaldo García",

            },
            {
                "id_parroquia": 1089,
                "id_municipio": 456,
                "parroquia": "El Rosario",

            },
            {
                "id_parroquia": 1090,
                "id_municipio": 456,
                "parroquia": "Sixto Zambrano",

            },
            {
                "id_parroquia": 1091,
                "id_municipio": 457,
                "parroquia": "San Francisco",

            },
            {
                "id_parroquia": 1092,
                "id_municipio": 457,
                "parroquia": "El Bajo",

            },
            {
                "id_parroquia": 1093,
                "id_municipio": 457,
                "parroquia": "Domitila Flores",

            },
            {
                "id_parroquia": 1094,
                "id_municipio": 457,
                "parroquia": "Francisco Ochoa",

            },
            {
                "id_parroquia": 1095,
                "id_municipio": 457,
                "parroquia": "Los Cortijos",

            },
            {
                "id_parroquia": 1096,
                "id_municipio": 457,
                "parroquia": "Marcial Hernández",

            },
            {
                "id_parroquia": 1097,
                "id_municipio": 458,
                "parroquia": "Santa Rita",

            },
            {
                "id_parroquia": 1098,
                "id_municipio": 458,
                "parroquia": "El Mene",

            },
            {
                "id_parroquia": 1099,
                "id_municipio": 458,
                "parroquia": "Pedro Lucas Urribarrí",

            },
            {
                "id_parroquia": 1100,
                "id_municipio": 458,
                "parroquia": "José Cenobio Urribarrí",

            },
            {
                "id_parroquia": 1101,
                "id_municipio": 459,
                "parroquia": "Rafael Maria Baralt",

            },
            {
                "id_parroquia": 1102,
                "id_municipio": 459,
                "parroquia": "Manuel Manrique",

            },
            {
                "id_parroquia": 1103,
                "id_municipio": 459,
                "parroquia": "Rafael Urdaneta",

            },
            {
                "id_parroquia": 1104,
                "id_municipio": 460,
                "parroquia": "Bobures",

            },
            {
                "id_parroquia": 1105,
                "id_municipio": 460,
                "parroquia": "Gibraltar",

            },
            {
                "id_parroquia": 1106,
                "id_municipio": 460,
                "parroquia": "Heras",

            },
            {
                "id_parroquia": 1107,
                "id_municipio": 460,
                "parroquia": "Monseñor Arturo Álvarez",

            },
            {
                "id_parroquia": 1108,
                "id_municipio": 460,
                "parroquia": "Rómulo Gallegos",

            },
            {
                "id_parroquia": 1109,
                "id_municipio": 460,
                "parroquia": "El Batey",

            },
            {
                "id_parroquia": 1110,
                "id_municipio": 461,
                "parroquia": "Rafael Urdaneta",

            },
            {
                "id_parroquia": 1111,
                "id_municipio": 461,
                "parroquia": "La Victoria",

            },
            {
                "id_parroquia": 1112,
                "id_municipio": 461,
                "parroquia": "Raúl Cuenca",

            },
            {
                "id_parroquia": 1113,
                "id_municipio": 447,
                "parroquia": "Sinamaica",

            },
            {
                "id_parroquia": 1114,
                "id_municipio": 447,
                "parroquia": "Alta Guajira",

            },
            {
                "id_parroquia": 1115,
                "id_municipio": 447,
                "parroquia": "Elías Sánchez Rubio",

            },
            {
                "id_parroquia": 1116,
                "id_municipio": 447,
                "parroquia": "Guajira",

            },
            {
                "id_parroquia": 1117,
                "id_municipio": 462,
                "parroquia": "Altagracia",

            },
            {
                "id_parroquia": 1118,
                "id_municipio": 462,
                "parroquia": "Antímano",

            },
            {
                "id_parroquia": 1119,
                "id_municipio": 462,
                "parroquia": "Caricuao",

            },
            {
                "id_parroquia": 1120,
                "id_municipio": 462,
                "parroquia": "Catedral",

            },
            {
                "id_parroquia": 1121,
                "id_municipio": 462,
                "parroquia": "Coche",

            },
            {
                "id_parroquia": 1122,
                "id_municipio": 462,
                "parroquia": "El Junquito",

            },
            {
                "id_parroquia": 1123,
                "id_municipio": 462,
                "parroquia": "El Paraíso",

            },
            {
                "id_parroquia": 1124,
                "id_municipio": 462,
                "parroquia": "El Recreo",

            },
            {
                "id_parroquia": 1125,
                "id_municipio": 462,
                "parroquia": "El Valle",

            },
            {
                "id_parroquia": 1126,
                "id_municipio": 462,
                "parroquia": "La Candelaria",

            },
            {
                "id_parroquia": 1127,
                "id_municipio": 462,
                "parroquia": "La Pastora",

            },
            {
                "id_parroquia": 1128,
                "id_municipio": 462,
                "parroquia": "La Vega",

            },
            {
                "id_parroquia": 1129,
                "id_municipio": 462,
                "parroquia": "Macarao",

            },
            {
                "id_parroquia": 1130,
                "id_municipio": 462,
                "parroquia": "San Agustín",

            },
            {
                "id_parroquia": 1131,
                "id_municipio": 462,
                "parroquia": "San Bernardino",

            },
            {
                "id_parroquia": 1132,
                "id_municipio": 462,
                "parroquia": "San José",

            },
            {
                "id_parroquia": 1133,
                "id_municipio": 462,
                "parroquia": "San Juan",

            },
            {
                "id_parroquia": 1134,
                "id_municipio": 462,
                "parroquia": "San Pedro",

            },
            {
                "id_parroquia": 1135,
                "id_municipio": 462,
                "parroquia": "Santa Rosalía",

            },
            {
                "id_parroquia": 1136,
                "id_municipio": 462,
                "parroquia": "Santa Teresa",

            },
            {
                "id_parroquia": 1137,
                "id_municipio": 462,
                "parroquia": "Sucre (Catia)",

            },
            {
                "id_parroquia": 1138,
                "id_municipio": 462,
                "parroquia": "23 de enero",

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
        await queryInterface.bulkDelete('parroquias', null, {});
    }
};