const fs = require('fs');

exports.handler = function (event, context, callback) {
    fs.readFile('html/index.html', function(err, data) {
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
