import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const baseConfig = {

    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
};

export const alertSuccess = (message) => {

    toast.success(message, baseConfig);
        
}

export const alertError = (message) => {

    toast.error(message, {
        ...baseConfig,
        autoClose: 3000
    })
        
}

export const alertNotif = (message) => {

    toast.success(message, {
        ...baseConfig,
        autoClose: 3000
    })
        
}

export const checkoutError = (navigate) => {

    const error = Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema con tu orden",
        confirmButtonText: "Volver al carrito",
        confirmButtonColor: "#d33",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });

      return error;

}

export const checkoutSuccess = (orderId, navigate) => {
    Swal.fire({
      icon: "success",
      title: "¡Orden creada!",
      html: `
        <p class="font-base-regular" style="margin-bottom:8px; color: #000;">
          Orden creada con ID:
        </p>
        <div class="font-base-regular" style="
          font-size:18px;
          font-weight:bold;
          background:#f3f3f3;
          padding:8px 12px;
          border-radius:6px;
          color: #000;
        ">
          El ID de tu ORDEN es: ${orderId}
        </div>
      `,
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#3085d6",
      customClass: {
        confirmButton: "btn-accent-blue btn font-upper success-btn"
      },
      allowOutsideClick: false,
    })
  };

export const alertConfirm = async (title, text) => {

    const result = await Swal.fire({
        title,
        text, 
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro",
        cancelButtonText: "Cancelar",

    })

    return result.isConfirmed;

}