
exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
      try {
        // Process the GET request as needed
        const fs = require("fs");
        const { parse } = require("csv-parse");
        fs.createReadStream("./nykysuomensanalista2022.csv")
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
          console.log(row);
        })
        .on("error", function (error) {
          console.log(error.message);
        })
        .on("end", function () {
          console.log("finished");
        });
      
        //const data = require('./db.json');
  
        const helloWorld = {
            hello: "world"
        }
        // Return the data as the response
        return {
          statusCode: 200,
          body: JSON.stringify(helloWorld),
        };
      } catch (error) {
        // Return an error response if there was an issue processing the request
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to process GET request' }),
        };
      }
    }
  };