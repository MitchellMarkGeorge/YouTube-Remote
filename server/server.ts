import express from 'express';
import { Server, Socket } from "socket.io";
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.port || 6000

app.use(cors());




server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    
} );


