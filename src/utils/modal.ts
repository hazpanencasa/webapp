import Swal from "sweetalert2";

export const modalWelcome = (user: string) =>
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
export const modalSignedIn = (user: string) =>
  Swal.fire({
    title: `<h1 class="modalHead"> Thanks For Signed In ${user} </h1>`,
    padding: "2em",
    icon: "info",
    width: 500,
    confirmButtonColor: "#881918",
    showCancelButton: true,
    background: "url(https://i.gifer.com/uI7.gif) no-repeat 50% 50%",
    cancelButtonColor: "#d33",
    confirmButtonText: `<div class='modalLogOutButton'>
      <p>Log In</p>
      <ion-icon name="log-in-outline"></ion-icon>
      </div>`,
    position: "center",
    showClass: {
      popup: "animate__animated animate__bounceInLeft",
    },
    hideClass: {
      popup: "animate__animated animate__bounceOut",
    },
  });
export const modalAuthErrors = (message: string) => {
  Swal.fire({
    title: `<h4 class="modalHead">${message}</h4>`,
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
export const modalFormula = (img: string) => {
  Swal.fire({
    showCloseButton: true,
    showConfirmButton: false,
    width: 600,
    padding: "6em",
    background: `url(${img}) no-repeat 50% 50%`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },
  });
};
export const modalResetPassword = () =>
  Swal.fire({
    title: `<h4 class="modalHead">Email has been sent to you, Please check and verefy</h4>`,
    showConfirmButton: true,
    width: 600,
    padding: "6em",
    background: `url('https://i.gifer.com/uI7.gif') no-repeat 50% 50%`,
    confirmButtonColor: "#881918",
    confirmButtonText: `<div class='modalLogOutButton'>
      <p>Sign In</p>
      <ion-icon name="log-in-outline"></ion-icon>
      </div>`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutDown",
    },
  });
