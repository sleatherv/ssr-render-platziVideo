require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8000,
    apiUrl: process.env.API_URL,
    apiKeyToken: process.env.API_KEY_TOKEN,
    googleClientId: process.env.googleClientId,
    googleClientSecret: process.env.googleClientSecret
};

module.exports = { config: config };