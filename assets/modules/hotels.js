let _inputHotel = {
  inputHotel: null,
  inputPark: null,
  containerHotel: null,
  containerParks: null,
  hotels: null,
  parks: null,
  message:null,
  lang:null,
  init(hotels, parks, message, lang) {
    this.inputPark = document.getElementById("park");
    this.containerHotel = document.querySelector(".show-hotel");
    this.containerParks = document.querySelector(".show-parks");
    this.inputHotel = document.getElementById("hotel");
    this.hotels = hotels;
    this.parks = parks;
    this.message = message;
    this.lang = lang;
    this.addEvent();
  },

  addEvent: function () {
    this.inputHotel.addEventListener(
      "keyup",
      this.onInputKeyUp.bind(this, "hotel")
    );
    this.inputPark.addEventListener(
      "keyup",
      this.onInputKeyUp.bind(this, "park")
    );
    this.setupFocusOutEvent(this.inputHotel, ".show-hotel");
    this.setupFocusOutEvent(this.inputPark, ".show-parks");
    this.addClickEvent(this.containerHotel, "hotel");
    this.addClickEvent(this.containerParks, "park");
  },

  /* Método para manejar el evento keyup en inputs de hotel y parque
  ===================================================================================*/

  onInputKeyUp: function (type, event) {
    let dataList = type === "hotel" ? this.hotels : this.parks;
    let containerSelector = type === "hotel" ? ".show-hotel" : ".show-parks";
    let inputElement = type === "hotel" ? this.inputHotel : this.inputPark;

    let filteredData = dataList.filter((item) =>
      item.Hotel.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.renderHotel(filteredData, containerSelector, inputElement);
  },

  /* Método para manejar el evento focusout (muestra listado de hoteles connnn animacion)
  =======================================================================================*/

  setupFocusOutEvent: function (element, containerSelector) {
    $(element).on("focusout", () => $(containerSelector).fadeOut("slow"));
  },
  // setupFocusOutEvent: function (element, containerSelector) {
  //   element.addEventListener("focusout", () => {
  //     let container = document.querySelector(containerSelector);
  //     this.fadeOutEffect(container);
  //   });
  // },
  // fadeOutEffect: function (element) {
  //   // Cancelar cualquier animación en curso utilizando una propiedad para almacenar el ID del intervalo
  //   if (element.fadeOutIntervalId) {
  //     clearInterval(element.fadeOutIntervalId);
  //     element.fadeOutIntervalId = null;
  //   }
  
  //   // Restablecer la opacidad y asegurarse de que el elemento sea visible antes de empezar a desvanecer
  //   element.style.opacity = 1;
  //   element.style.display = '';
  
  //   let op = 1; // opacidad inicial
  //   let timer = setInterval(function () {
  //     if (op <= 0.01) {
  //       clearInterval(timer);
  //       element.style.display = 'none';
  //       element.style.opacity = 1; // Restablecer la opacidad para futuras llamadas
  //       element.fadeOutIntervalId = null; // Limpiar el ID del intervalo
  //     } else {
  //       op -= op * 0.1;
  //       element.style.opacity = op;
  //     }
  //   }, 50);
  
  //   // Almacenar el ID del intervalo en el elemento para poder cancelarlo luego
  //   element.fadeOutIntervalId = timer;
  // },
  
  
  

  /* Método para manejar clics en elementos de lista
  ========================================================================================*/
  addClickEvent: function (container, type) {
 
    container.addEventListener("click", (event) => {
      let element = event.target.closest(".elementHotel");
      if (!element) return;

      let input = type === "park" ? this.inputPark : this.inputHotel;
      input.value = element.getAttribute("data-nameHotel");
      input.setAttribute("data-id", element.getAttribute("data-idhotel"));
    });
  },

  // Método mejorado para renderizar hoteles o parques
  renderHotel: function (data, container, input) {
    let div = document.querySelector(container);
    div.innerHTML = ""; // Limpiar el contenido actual

    if (!Array.isArray(data)) {
      console.error("Data is not an array");
      return;
    }

    // Si no hay elementos, mostrar un mensaje
    if (data.length === 0) {
      div.innerHTML = `<li class="lista "><div class="boxHotelTo"><span>${
        this.message[this.lang][0]
      }</span></div></li>`;
      div.style.display = "block";
      return;
    }

    // Construir y agregar los elementos de la lista
    let listItems = data.map((hotel) => this.createListItem(hotel)).join("");
    div.innerHTML = listItems;
    div.style.display = "block";
  },

  createListItem: function (hotel) {
    return `<li class="lista elementHotel" data-idhotel="${hotel.IdHotel}" data-idzona="${hotel.fkIdZona}" data-nameHotel="${hotel.Hotel}">
              <div class="boxHotelTo">
                  <i class="fa fa-map-marker"></i><span>${hotel.Hotel}</span><br>
                  <small>${hotel.area}</small>
              </div>
              <div class="clr"></div>
            </li>`;
  },
};


export default _inputHotel;
