## SPIDER-MAN COMICS

App created with React Hooks. It's composed by two pages:

1. Master: presents a list of Spider-Man Comics.

2. Detail: shows information of the chosen comic.

Live demo: https://spider-man-comics.herokuapp.com/

### Technologies

- React
- Context API
- React Router
- styled-components
- react-top-loading-bar
- React Lazy Load Image Component

### API

It uses the API [Developer Marvel](https://developer.marvel.com/), which offers information about Marvel comics.

[Here](http://developer.marvel.com) you can access to its documentation and get keys for the API.

In my case, I had difficulties to find information about how to use the images of the API. You can find documentation about it [here](https://developer.marvel.com/documentation/images).

The base URL for this API is http://gateway.marvel.com.

### To execute the APP locally

1. Open terminal and write: 

    `$ git clone https://github.com/jorsema2/Spider-Man-Comics`

2. "cd" to access the new folder.

3. Install dependencies by writing: 

    `npm install`

4. Use `npm start` to launch http://localhost:3000.
