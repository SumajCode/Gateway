import { Hono } from 'hono';
import { Flaskresponse } from '../../shared/interfaces/FlaskInterface';

const app = new Hono()

app.get('/', (c) => { return c.text('New API Gateway in process!!!!!!!!') })
/**
 * ? Trabajar con webworkers para la ejecucion de los endpoints de forma que logren ser asincronos y reducir la latencia
 * ? entre peticiones del usuario
 */
app.get('/pythonApi', async (c) => { 
  const response = await fetch('http://127.0.0.1:5000/');
  const data = (await response.json()) as Flaskresponse;
  return c.json(data.message);
})



export default app
