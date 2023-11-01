
// setTimeout(() => {
//     console.log('carne con quesito');
// },);

//SET TIMEOUT = una funcion nativa, ejecuta una accion una vez que se finaliza el tiempo estimado, se podria decir como un cronometro con cuenta hacia atras para realizar dicha accion
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {

//     btn.innerHTML = `<p class="fade">'⏱ Enviando....'</p>`

//     setTimeout(() => {
//         btn.innerHTML = `<p class="fade">'Enviado con exito 👌🏻'</p>`
//     }, 3000);

// });

// console.log('pancito de abajo');


//SET INTERVAL = una funcion nativa, que repite codigo durante el tiempo que le propongamos
// let contando = 11;

// const intervalo = setInterval(() => {
//     contando--;
//     console.log(contando)

//     btn.textContent = contando

//     if(contando === 0) {
//         clearInterval(intervalo);
//         btn.textContent = 'la bomba exploto 💨'
//     }
// }, 1000);



// console.log('holi')

//PROMESAS

// new Promise( (resolve , reject) => {

// })

// const eventoAProcesar = (res) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (res == true) {
//                 resolve('Promesa resuelta');
//             } else {
//                 reject('Promesa rechazada');
//             }
//         }, 3000)
//     });
// }

// console.log(eventoAProcesar(true))

// const valor = true;

// eventoAProcesar(valor)
//     .then((respuesta) => {
//         console.log(respuesta)
//     })
//     .catch((respuesta) => {
//         console.log(respuesta)
//     })
//     .finally(() => {
//         console.log('finalizo el proceso')
//     })



// const db = [
//     { id: "Papa", nombre: "Papa", precio: 1000 },
//     { id: "Zanahoria", nombre: "Zanahoria", precio: 500 },
//     { id: "Cebolla", nombre: "Cebolla", precio: 300 },
//     { id: "Carnecita", nombre: "Carnecita", precio: 3000 },]

// let productos = [];

// const lista = document.querySelector('#lista');

// const pedirProductos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(db)
//         }, 3000);
//     })
// }

// const mostrarProductos = (prod) => {
//     prod.forEach(item => {
//         let li = document.createElement('li');
//         li.setAttribute('class', 'fade');
//         li.innerHTML = `<span>${item.nombre}</span> <span>  $${item.precio} </span>`;
//         lista.append(li);
//     });
// }

// pedirProductos()
//     .then((res) => {
//         productos = res;
//         mostrarProductos(productos);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



const form = document.querySelector('#formulario');
const btnForm = document.querySelector('#btn-form');
const title = document.querySelector('#title');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    const user = document.querySelector('#user').value;
    const pass = document.querySelector('#password').value;

    // console.log(user, pass)

    login(user, pass)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })

})


const login = (user, pass) => {
    return new Promise((resolve, reject) => {

        btnForm.textContent = 'Iniciando Sesion';

        const usuario = [{ user: 'fer', pass: 'admin' }]
        setTimeout(() => {
            let administrador = usuario.find(usuario => usuario.user === user && usuario.pass === pass);

            if (administrador) {
                console.log('Bienvenido: ', administrador);

                localStorage.setItem('user', JSON.stringify(administrador.user))
                resolve(administrador);
                btnForm.textContent = 'Cerrar Sesion';
                welcome();
            } else {
                console.log('Usuario no encontrado.')
                reject('Usuario no encontrado.');
            }
        }, 3000)
    })
}



const welcome = () => {
    form.remove();
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    user ? title.textContent = `Hola ${user}` : '';
}


const personas = [{name:'hola', age:23}, {name:'hola2', age:23}];

let [age] = personas;

console.log()