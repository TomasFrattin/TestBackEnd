import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'
import cors from 'cors'

const app = express()
 
app.use(cors())
app.use(express.json())



/*
revisar
app.use(cors({
  origin: 'http://localhost:5173', // Permite solicitudes desde esta dirección
  methods: 'GET,POST,DELETE', // Métodos permitidos
  credentials: true // Habilita el intercambio de credenciales (por ejemplo, cookies)
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173', 'http://localhost:5174');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
revisar
*/

app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})