const config = {

    /**
     * PER_PAGE - {Number} Paginacion de las busquedas
     */
    PER_PAGE: 15,
    SERVER_IP: 'http://localhost:3000',


    CRYPTO_KEY: '',

    EMAIL_CONFIG: {
        PROVIDER: '',
        DOMAIN: '',
        SERVICE: '',
        PORT: 587,
        SECURE: true,
        AUTH: {
            user: '',
            pass: ''
        },
    },
}

module.exports = config;