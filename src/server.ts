import express, { Router, Request, Response } from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import MainRouters from './routes/router.js';
dotenv.config();

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'mustache');
server.set('mustache', mustache());

server.use(MainRouters);

server.listen(3000);
