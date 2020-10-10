'use strict';

module.exports.main = async (event, context, callback) => {
    const output = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": "Usuário :D (Seu nome aqui)",
        "isBase64Encoded": false
    };

    callback(null, output)
};