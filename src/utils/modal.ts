import Swal from "sweetalert2";

export const modalWelcome = () =>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Bienvenido a Pan en Casa",
    showConfirmButton: false,
    timer: 2000,
  });

export const modalLogout = () =>
  Swal.fire({
    title:
      '<h1 style="color: white; margin: 0;"> Are you sure want to log out? </h1>',
    padding: "2em",
    icon: "info",
    width: 500,
    confirmButtonColor: "#881918",
    showCancelButton: true,
    background: "url(https://i.gifer.com/uI7.gif) no-repeat 50% 50%",
    cancelButtonColor: "#d33",
    confirmButtonText: `<div class='modalLogOutButton'>
      <p>Log Out</p>
      <ion-icon name='log-out-outline'></ion-icon>
      </div>`,
    position: "center",
    showClass: {
      popup: "animate__animated animate__bounceInLeft",
    },
    hideClass: {
      popup: "animate__animated animate__bounceOut",
    },
  });
