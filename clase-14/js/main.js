const sweetBtn = document.querySelector('#sweetalert');
const toastBtn = document.querySelector('#toastify');


// funcion sweet alert
const handleClickSweetAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
    console.log('holi')
}

sweetBtn.addEventListener('click', handleClickSweetAlert);


//funcion toastify
const handleClickToastify = () => {
    Toastify({
        text: "Esta es una notificacion de toastify!",
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        className: "info",
        close: true,
        duration: 3000
    }).showToast()
}


