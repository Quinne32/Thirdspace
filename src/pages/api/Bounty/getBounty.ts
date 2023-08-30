import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
  try {
  const bounties = await prisma.bounty.findMany({
  // You can add filtering, sorting, or other query parameters here
  });
  
  const bearerToken = localStorage.getItem('bearerToken');
  // Make a GET request to another API using fetch
  const response = await fetch("https://api.oxthirdspace.xyz/bounties", {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${bearerToken}`,
  },
  });
  
  
  if (!response.ok) {
  throw new Error('Failed to fetch data from the external API');
  }
  
  
  const externalApiResponse = await response.json();
  
  
  res.status(200).json({
  bounties: bounties,
  externalData: externalApiResponse,
  });
  } catch (error) {
  console.error('Failure', error);
  res.status(500).json({ error: 'An error occurred' });
  }
  }
  }
  
  
  export default handler;
  
  
  

