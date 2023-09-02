module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
          access_key: process.env.ACCESS_KEY
        },
        null,
        2
      ),
    };
  };