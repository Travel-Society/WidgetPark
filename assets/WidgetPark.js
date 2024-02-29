import body from "./includes/body.js";
import styles from "./includes/styles.js";
import { getData, sendData } from "./modules/apiHandler.js";
import validate from "./modules/validate.js";
import _inputHotel from "./modules/hotels.js";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


let validadorFormulario = {
  // Variables globales
  path: `${window.location.protocol}//${window.location.hostname}/`,
  father:  document.getElementById("widgetPark").getAttribute("father"),
  parks: null,
  hotels: null,
  date: null,
  formulario: null,
  campos: ["hotel", "park", "date", "passengers"],
  boton: null,
  inputPassenger: null,
  inputDate: null,
  idaff: null,
  lang: null,
  bgcolor:document.getElementById("widgetPark").getAttribute("bg-color"),
  btncolor:document.getElementById("widgetPark").getAttribute("btn-color"),
  message: {
    en: [
      "There are no coincidences.",
      "There are missing fields to fill in or the date is invalid.",
      "Some field is not correct",
    ],
    es: [
      "No hay coincidencias.",
      "Faltan campos por rellenar o la fecha es inválida.",
      "Algun campo no esta correcto",
    ],
  },
  // Inicialización
  init: function () {
    this.renderHtml();

    getData(`${this.father}handlers/ParksHdl.php?widget=true`, (data) => {
      this.parks = data.parks;
      this.hotels = data.hotels;
      this.date = data.date;
      this.initVar();
      this.injectStyles();
      this.getNextDate();
      this.addEvent();
    });
  },

  initVar: function () {
    this.formulario = document.getElementById("widgetParkForm");
    this.boton = document.getElementById("btn-Parks");
    this.inputPassenger = document.getElementById("passengers");
    this.inputDate = document.getElementById("date");
    this.idaff = new URL(window.location.href).searchParams.get("idaff");
    this.lang = "en";
    this.setCustomColor(this.bgcolor,this.btncolor)
  },

  /*father, event , this.formulario, array[sitioOrigen, postWidget, idaff], this.campos, message*/
  sendData: function (event) {
    if ( validate.validateFields(this.date, this.campos, this.message, this.lang) ) {
      sendData(
        this.father,
        this.path,
        this.idaff,
        this.formulario,
        this.message,
        this.lang,
        event,
        this.btncolor,
        this.bgcolor
      );
    }
  },

  /* agregar eventos a los inputs
  ==================================================================================*/

  addEvent: function () {
    this.boton.addEventListener("click", this.sendData.bind(this));
    _inputHotel.init(this.hotels, this.parks, this.message, this.lang);
    flatpickr("#date", {
      dateFormat: "d/m/Y",
      minDate: this.date,
      defaultDate: this.date,
      locale: this.lang, // Español
    });
  },

  getNextDate: function () {
    //el server indica en que fecha puede reservar
    let dateParts = this.date.split("-");

    // console.log(dateParts);
    let tomorrow = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    // tomorrow.setDate(tomorrow.getDate() + 1);
    // console.log("--" + tomorrow);
    return (this.date = tomorrow);
  },

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  },

  renderHtml() {
    document.querySelector("#widgetPark").innerHTML = body;
    // Verifica si callback es una función y luego ejecútalo
  },
  setCustomColor(bg,btn) {

    document.documentElement.style.setProperty('--aside-park-primary', bg);
    document.documentElement.style.setProperty('--aside-park-secundary', btn);
  }


};

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("widgetPark")) {
    validadorFormulario.init();
  } else {
    console.log("El elemento widgetPark no existe en esta página.");
  }
});
