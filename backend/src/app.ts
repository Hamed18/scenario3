import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleeatres/globalErrorHandler';
import userRouter from './app/modules/user/user.router';
import authRouter from './app/modules/auth/auth.router';
import { TeamRegistrationRoutes } from './app/modules/teamRegistration/teamRegistration.router';

const app: Application = express();

//  CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:3000",
      "https://frontend-iota-drab-32.vercel.app/"
    ],
    credentials: true,
  })
);

//parsers
app.use(express.json());

// application routes
const getAController = (req: Request, res: Response) => {
    res.send('Hello World!')
};

app.get('/', getAController)
app.use(globalErrorHandler)

// routes
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter);
app.use('/api/team-registration', TeamRegistrationRoutes);

app.use("*", (req: Request, res: Response) =>{
  res.status(404).json({
    status: false,
    message: "Route not found"
  })
})
export default app;