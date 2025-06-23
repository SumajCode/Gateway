import { generarRutasProxy } from "../../features/secure/proxys/ProxyRoutes";
import { RutaProxy } from "../../shared/interfaces/ProxyInterface";

const rutasContenido: RutaProxy[] = [
    { method: 'post', route: '/archivo/crear', destiny: '/archivo/crear'},
    { method: 'patch', route: '/archivo/editar', destiny: '/archivo/editar'},
    { method: 'delete', route: '/archivo/eliminar', destiny: '/archivo/eliminar'},
    { method: 'get', route: '/archivo/listar', destiny: '/archivo/listar'},
    { method: 'post', route: '/modulo/crear', destiny: '/modulo/crear'},
    { method: 'patch', route: '/modulo/editar', destiny: '/modulo/editar'},
    { method: 'delete', route: '/modulo/eliminar', destiny: '/modulo/eliminar'},
    { method: 'get', route: '/modulo/listar', destiny: '/modulo/listar'},
    { method: 'get', route:'/', destiny: '/'}
]

export const rutasApiContenido = (route: string) => generarRutasProxy('/apicontenido/v1', route, rutasContenido);