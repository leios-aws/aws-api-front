const fs = require('fs');

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify({pathParameters: event.pathParameters, stageVariables: event.stageVariables}, null, 2));

    console.log(`Response: ${event.pathParameters.type}.html`);
    fs.readFile(`html/${event.pathParameters.type}.html`, function(err, data) {
        callback(err, {
            "statusCode": 200,
            "headers": {
                'content-type': 'text/html'
            },
            "body": data.toString(),
            "isBase64Encoded": false
        });
    });
};
