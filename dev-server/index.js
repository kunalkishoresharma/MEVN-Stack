//const express = require('express')

import express from 'express';
const app = express();
import { registerRoutes } from './routes'

registerRoutes();
const port = 3000

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening son port ${port}!`))