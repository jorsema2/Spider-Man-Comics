

## SPIDER-MAN COMICS

App creada con React. Consta de dos páginas:

1. Master: presenta una lista de cómics de Spider-man.

2. Detail: muestra la información del cómic escogido.

Live demo: https://spider-man-comics.herokuapp.com/

### Bibliotecas:

- React
- Context API
- React Router
- styled-components
- react-top-loading-bar
- React Lazy Load Image Component

### API

Utiliza la API [Developer Marvel](https://developer.marvel.com/), la cual ofrece información sobre los cómics de Marvel.

[Aquí](http://developer.marvel.com) puedes acceder a su documentación y [aquí](http://developer.marvel.com) puedes conseguir las keys para acceder a la API.

En mi caso, tuve dificultad para encontrar información sobre cómo usar las imágenes de la API. Puedes encontrar la documentación al respecto [aquí](https://developer.marvel.com/documentation/images).

La URL base de esta API es http://gateway.marvel.com.

### Para ejecutar la App localmente

1. Abre la terminal y escribe: 

`$ git clone https://github.com/jorsema2/Spider-Man-Comics`

2. "cd" para acceder a la nueva carpeta.

3. Instala las dependencias escribiendo: 

`npm install`

4. Utiliza `npm start` para que se abra http://localhost:3000.