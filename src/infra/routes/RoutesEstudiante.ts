import { generarRutasProxy } from "../../features/secure/proxys/ProxyRoutes";
import { RutaProxy } from "../../shared/interfaces/ProxyInterface";

const rutasEstudiante: RutaProxy[] = [
    { method: 'get', route: 'estudiantes', destiny: '/estudiantes'},
    { method: 'get', route: 'estudiantes/id', destiny: '/estudiantes/id'},
    { method: 'post', route: 'estudiantes/registrar', destiny: '/estudiantes/registrar'},
    { method: 'put', route: 'estudiantes/actualizar/id', destiny: '/estudiantes/actualizar/id'},
    { method: 'delete', route: 'estudiantes/eliminar/id', destiny: '/estudiantes/eliminar/id'},
    { method: 'get', route: 'login', destiny: '/login'},
    { method: 'put', route: 'login/cambiarContrasenia', destiny: '/login/cambiarContrasenia'},
    { method: 'post', route: 'registrarLoteEstudiantes', destiny: '/registrarLoteEstudiantes'},
    { method: 'get', route: '/', destiny: '/'}
]

export const rutasApiEstudainte = (route: string) => generarRutasProxy('/api', route, rutasEstudiante);