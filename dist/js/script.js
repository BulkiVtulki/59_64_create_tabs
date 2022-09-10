/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", () => {
  // ! Создание табов 59 УРОК
  // * Три оснвовные задачи:
  // * привзаться событие назначнеие класса аквтивности
  // * привязать событие назначение класса (скрытия)
  // * назначить обработчик событий для конктреной строчки
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach(i => {
      i.classList.add("hide");
      i.classList.remove("show", "fade");
    });
    tabs.forEach(tab => {
      tab.classList.remove("tabheader__item_active");
    });
  } // * в стандарте ES6 появилась взможность устанавливать значение аргументов по умолчанию
  // * так, например нам необходимо при вызове функции назеачить какой нибуль таб по умолчанию для вывода на странице
  // * в таком случае присваиваем аргументу значение (в данном случае 0)


  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    // * здесь для сокращения кода чтобы не прописывать каждый раз совйство event.target вовдим переменную 
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // ! обратный отсчет на сайте 64 УРОК
  // * ряд необходимых действий
  // * необходимо создать функцию, которая задает начало отсчета таймера
  // * функция для расчета разницы времени пользователя и времени до истечения срока
  // * функция, которая будет обновлять таймер
  // * переменная которая определяет deadline

  const deadline = "2022-09-01"; // * функция, которая будет определять разницу между deadline и сегодняшним временем

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / 1000 / 60 % 60);
      seconds = Math.floor(t / 1000 % 60);
    }

    return {
      "total": t,
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000); // * Функция запускается вручную для того чтобы не ждать секунды обновления отсчета

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline); // ! Модальное окно 67 УРОК

  const modalTrigger = document.querySelectorAll("[data-modal]"),
        modalWindow = document.querySelector(".modal"),
        close = document.querySelector("[data-close]");

  function openModal() {
    // * вариант с classList
    // ? почему в уроке использовался этот метод ?
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide"); // * для отключения прокрутки во время открытого модального окна изменим свойство overflow

    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
    window.removeEventListener("scroll", showModalByScroll);
  }

  modalTrigger.forEach(item => {
    item.addEventListener("click", () => {
      // * вариант через style
      // modalWindow.style.display = "block";
      // * вариант через toggle
      // modalWindow.classList.toggle("show");
      openModal();
    });
  });

  function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.body.style.overflow = "visible";
  }

  close.addEventListener("click", closeModal); // * закрытие модального окна при нажатии на подложку (темная область)

  modalWindow.addEventListener("click", e => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.code === "Escape" && modalWindow.classList.contains("show")) {
      closeModal();
    }
  }); // ! Вызов модального окна при достижении футера или какого либо промежутка времени 68 УРОК
  // const modalTimerId = setTimeout(openModal, 5000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  } // window.addEventListener("scroll", showModalByScroll);
  // ! Создание классов в блоке menu__field 


  const blockMenuField = document.querySelector(".menu__field"),
        blockContainer = blockMenuField.querySelector(".container");

  class MenuClass {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price *= this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length != 0) {
        this.classes.forEach(className => element.classList.add(className));
      } else {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      }

      element.innerHTML = `
					<img src = ${this.src} alt = ${this.alt} >
					<h3 class = "menu__item-subtitle" > ${this.title} </h3> 
					<div class = "menu__item-descr"> 
						${this.descr} 
					</div> 
					<div class = "menu__item-divider"> </div> 
					<div class = "menu__item-price">
						<div class = "menu__item-cost"> Цена: </div> 
						<div class = "menu__item-total"> <span> ${this.price} </span> грн/день </div> 
					</div>`;
      this.parent.append(element);
    }

  } // * в случаях когда нам надо использовать свойство переменной на метсе (без повторного использования в коде)
  // * можно не присваивать имя


  new MenuClass("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 10, '.menu__field .container').render();
  new MenuClass("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 12, '.menu__field .container', "menu__item").render();
  new MenuClass("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 15, '.menu__field .container', "menu__item", "big").render();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map