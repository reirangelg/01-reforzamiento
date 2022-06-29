import React from 'react';
import { deflate } from 'zlib';
//import { TiposBasicos } from './typescript/TiposBasicos';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { Funciones } from './typescript/funciones';
//import { Contador } from './components/contador';
//import { ContadorConHook } from './components/contadorConHook';
//import {Login} from './components/Login';
import { Usuarios } from './components/Usuarios';


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React </h1>
      <hr />
      {/*<TiposBasicos />*/}
      {/*ObjetosLiterales */}
      {/*<Funciones />*/}
      {/* <ContadorConHook />*/}
      {/* <Login />*/}
      <Usuarios />
    </div>
  )
}
export default App;
