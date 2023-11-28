import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import percentageRoutes from "./routes/percentage.routes.js";

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', percentageRoutes)

export default app