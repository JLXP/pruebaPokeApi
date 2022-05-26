LA APLICACION FUE HECHA CON REACT Y REDUX

#Para correr la aplicacion solo basta con usar el npm install y descargar todos los modulos, posteriormente solamente se ejecuta el npm start

#Los paquetes utilizados en esta aplicacion esta
---Redux para realizar la estructura
---npm install react-redux redux 

#Para las conexiones asyncronas se uso thunk, tambien se pudo usar saga pero estoy mas acostumbrado con el thunk 
---npm install redux-thunk 

#Para poder realizar las consultas usamos axios, igual se podria hacer directamente fetch, pero axios facilita las consultas a gran manera

---npm install axios

#Para mostrar las alertas use el sweetAlert
---npm i sweetalert2

#Para realizar la muestra de Enrutamiento utilice react-router-dom
---npm i react-router-dom

#Para el diseño use React-bootstrap
---npm react-bootstrap

#Se hizo un proyecto responsivo

#Se validaron ciertos campos
--- Al iniciar la página hay un spinner para que señale al usuario que se estan cargando los datos
--- El usuario es capaz de escribir en mayuscula y de todas formas realiza la busqueda
--- El usuario no puede dejar el campo vacio de busqueda por que al momento de querer realizar vaya la redundancia la busqueda le marcara un error y se lo mostrará por medio de un modal
--- Si el usuario intenta buscar un pokemon con un nombre random, este le muestra por medio de un modal que el pokemon no se encontro
--- El boton PokemonAki lista de nueva cuenta todos los pokemones
--- Se uso un modal para mostrar el detalle de los pokemones
--- como controlador de versiones se uso GitHub
--- Para mostrar el demo de la aplicacion se uso Netlify cuya liga es :
https://luminous-paprenjak-97a7cf.netlify.app







