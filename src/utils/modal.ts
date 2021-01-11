import Swal from "sweetalert2";

export const modalWelcome = (user) =>
  Swal.fire({
    position: "top-end",
    background: "url(https://i.gifer.com/uI7.gif) no-repeat 50% 50%",
    icon: "success",
    title: `<h2  class="modalHead">Welcome ${user} to make bread at home</h2>`,
    timer: 2000,
    showConfirmButton: false,
    showClass: {
      popup: "animate__animated animate__bounceInLeft",
    },
    hideClass: {
      popup: "animate__animated animate__bounceOut",
    },
  });

export const modalLogout = () =>
  Swal.fire({
    title: '<h1 class="modalHead"> Are you sure want to log out? </h1>',
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
export const modalAuthErrors = (message) => {
  Swal.fire({
    title: `<h4 style="color: white; margin: 0;">${message}</h4>`,
    padding: "2em",
    icon: "error",
    width: 600,
    confirmButtonColor: "#881918",
    background: `url('https://i.gifer.com/uI7.gif') no-repeat 50% 50%`,
    confirmButtonText: `<div class='modalLogOutButton'>
      <p>Try Again</p>
      <ion-icon name="hand-left-outline"></ion-icon>
      </div>`,
    position: "center",
    showClass: {
      popup: "animate__animated animate__rotateIn",
    },
    hideClass: {
      popup: "animate__animated animate__rollOut",
    },
  });
};
