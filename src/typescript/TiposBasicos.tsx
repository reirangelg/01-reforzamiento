

export const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes = ['velocidad', 'volar', 'respirar bajo el agua'];
    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>

    )
}
