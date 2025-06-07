import { Hono } from 'hono';
import { Flaskresponse } from '../../shared/interfaces/FlaskInterface';

const compilador = new Hono();

compilador.get('/compilar', async (c) => {
    const response = await fetch('ruta compilador');
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
})

compilador.get('/evaluar', async (c) => {
    const response = await fetch('ruta compilador');
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
})

compilador.get('/tarea', async (c) => {
    const response = await fetch('ruta compilador');
    const data = (await response.json()) as Flaskresponse;
    return c.json(data.data);
})

// compilador.get('/compilar', async (c) => {
//     const response = await fetch('ruta compilador');
//     const data = (await response.json()) as Flaskresponse;
//     return c.json(data.data);
// })
export default compilador;
