const fs = require('fs');
const ejs = require('ejs');

exports.handler = function (event, context, callback) {
    console.log(event);

    console.log(`Response: ${event.pathParameters.type}.ejs`);

    ejs.renderFile(`html/${event.pathParameters.type}.ejs`, {qs: event.queryStringParameters}, {}, function (err, html) {
        // str => Rendered HTML string
        callback(err, {
            "statusCode": 200,
            "headers": {
                'content-type': 'text/html'
            },
            "body": html,
            "isBase64Encoded": false
        });
    });

};
