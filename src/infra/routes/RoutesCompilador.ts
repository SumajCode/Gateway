import { generarRutasProxy } from "../../features/secure/proxys/ProxyRoutes";
import { RutaProxy } from "../../shared/interfaces/ProxyInterface";

const rutasCompilador: RutaProxy[] = [
    { method: 'post', route: '/code/compilar', destiny: '/code/compilar'},
    { method: 'post', route: '/code/evaluar', destiny: '/code/evaluar'},
    { method: 'get', route: '/', destiny: '/'}
]

export const rutasApiCompilador = (route: string) => generarRutasProxy('/apicompilador/v1', route, rutasCompilador);