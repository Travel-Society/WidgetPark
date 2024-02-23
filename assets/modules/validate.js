let validate = {
  // Método de validación mejorado
  validateFields: function (date, campos, message, lang) {
    let allValid = true;
    let nextDate = date;

    campos.forEach((campo) => {
      let input = document.getElementById(campo);

      if (!this.isFieldValid(input, nextDate)) {
        input.style.borderColor = "red";
        if (allValid) input.focus();
        allValid = false;
      } else {
        input.style.borderColor = "";
      }
    });
    if (allValid == false) {
      alert(message[lang][1]);
    }
    return allValid;
  },
  // Verifica si un campo es válido
  isFieldValid: function (input, nextDate) {
    if (input.id == "date") {
      // Convertir la fecha de "d/m/Y" a componentes individuales
      let dateParts = input.value.split("/");
      let year = parseInt(dateParts[2], 10);
      let month = parseInt(dateParts[1], 10) - 1; // Meses en JavaScript empiezan en 0
      let day = parseInt(dateParts[0], 10);

      // Crear la fecha como una fecha local

      let date = new Date(year, month, day);

      // console.log(date);

      // console.log(nextDate);
      return date >= nextDate;
    }

    return input.value.trim() !== "";
  },
};

export default validate;
