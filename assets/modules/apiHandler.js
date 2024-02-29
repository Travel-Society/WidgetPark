// apiHandler.js
  /* Obtener y enviar datos de hoteles y parques 
  ===================================================================*/
let getData = (url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (callback) callback(data);
    })
    .catch((error) => console.error("Error:", error));
};

let sendData = (father, origen, idaff, formulario, message, lang, event, btnColor ,bgColor) => {
  event.preventDefault();
  document.getElementById("sitioOrigen").value = origen;
  document.getElementById("postWidget").value = "send";
  document.getElementById("idaff").value = idaff;
  const formData = new FormData(formulario);
  formData.append("bgColor", bgColor);
  formData.append("btnColor", btnColor);

  fetch(`${father}handlers/ParksHdl.php`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status == false) {
        alert(message[lang][2]);
      }
      if (data.status == true) {
        document.getElementById("postWidget").value = "received";
        formulario.action = data.redirect;
        formulario.submit();
      }
    })
    .catch((error) => console.error("Error:", error));
};

export { getData, sendData };
