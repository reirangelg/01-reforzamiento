import { stringify } from 'node:querystring'
import { json } from 'node:stream/consumers'
import React from 'react'

export const ObjetosLiterales = () => {

    const persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Colombia',
            casaNo: 1-21
        }
    }
  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
            {JSON.stringify ( persona, null, 2)}
        </pre>
    </code>
    </>
  )
}
