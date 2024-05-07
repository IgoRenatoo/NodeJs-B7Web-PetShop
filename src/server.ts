import express, { Router, Request, Response, urlencoded } from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import MainRouters from './routes/routes';
dotenv.config();

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'mustache');
server.engine('mustache', mustache());

server.use(express.static (path.join(__dirname, '../public')));
server.use(urlencoded({extended:true}))
server.use(MainRouters);

server.listen(process.env.PORT);
