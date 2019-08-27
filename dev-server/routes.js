import taskRoutes from './api/task/tasks-routes';
import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/user-routes';
import authRoute from './api/auth/auth-routes'

//const express = require('express');
//let app = express.Router();
export function registerRoutes(app){
    app.use('/api',taskRoutes)
    app.use('/api',regRoutes)
    app.use('/api',userRoutes)
    app.use('/api',authRoute)
    
}