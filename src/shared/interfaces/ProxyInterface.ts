export type MethodHttp = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface RutaProxy {
    method: MethodHttp;
    route: string;
    destiny: string;
}