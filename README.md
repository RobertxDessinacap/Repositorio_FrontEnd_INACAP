# Repositorio FrontEnd INACAP
## Roberto Y. San
Esto es un repositorio para guardar el progeso de una pagina personal

## Tercera entrega

En la carpeta **mi-app** (la que se genera automáticamente cuando se instala React con Vite) está la migración del proyecto.

Luego de haber instalado NodeJS en  
<https://nodejs.org/en>  
ejecuté el comando en la terminal de Visual Studio Code:

```bash
npm create vite@latest mi-app --template react
```

seleccionando la configuración de **React** y **JavaScript**.

---

### Migrando mi HTML a React

Para hacer la migración del proyecto tuve que:

- Mover el archivo `style.css` a la carpeta **src**.

- Mover las imágenes que usé a la carpeta **public** para poder hacer uso de estas.

- Abrir `src/App.jsx` y reemplazar su contenido por mi propio HTML.

- Implementar en ese mismo archivo el contenido del `script.js` para hacer que funcione la página sin problemas.

Entre las dificultades que tuve fue cambiar:

- `class` por `className`  
- `for` por `htmlFor`

que es lo único que React requiere.

Combinar el HTML propio con JS en un único archivo **JSX** (`App.jsx`) fue complicado al inicio, pero después de investigar logré que funcionara.