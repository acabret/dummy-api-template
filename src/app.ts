import express from 'express';
import axios from 'axios';
import { Blob } from 'node:buffer';
require('dotenv').config();
import { Request, Response, NextFunction } from 'express';
import { arrayDummyRoutes, usersRoutes } from './routes';

const app = express();

// app.use("/", express.static(`${__dirname}\\dist\\array-dummy-fe`));

app.use(express.json());

arrayDummyRoutes(app);
usersRoutes(app);

app.get('/health-check', (req, res) => res.status(200).json({ message: 'api funcionando correctamente' }));

app.get('/download', async (req, res) => {
  const { data, headers } = await axios.get(
    'https://thumbs.dreamstime.com/z/picture-beautiful-small-leafs-herb-pictu-219877846.jpg',
    {
      responseType: 'arraybuffer',
    }
  );
    const buf = Buffer.from(data)
    

  res.set('Content-Type', 'image/jpg');
  res.set('Content-Disposition', 'attachment; filename="IMAGE.jpg"');
  res.send(Buffer.from(data));
});
app.use((req: Request, res: Response) => {
  // const newError = new Error("no se encuentra la ruta");

  return res.status(404).end();
});

export default app;
