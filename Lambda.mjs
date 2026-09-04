import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({ region: 'ap-south-1' });
const ddb = DynamoDBDocumentClient.from(ddbClient);

export const handler = async (event) => {
  const allowedOrigin = 'https://d2g878ll5lg4xj.cloudfront.net';

  // ✅ Handle CORS Preflight Request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400', // Optional: cache preflight response
      },
      body: '',
    };
  }

  const userId = event.queryStringParameters?.userId;
  if (!userId) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Missing userId query parameter" }),
    };
  }

  const params = {
    TableName: 'UserData',
    Key: { userId }
  };

  try {
    const command = new GetCommand(params);
    const { Item } = await ddb.send(command);

    return {
      statusCode: Item ? 200 : 404,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Item || { message: "No user data found" }),
    };
  } catch (err) {
    console.error("Error fetching user data:", err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Failed to retrieve user data" }),
    };
  }
};
