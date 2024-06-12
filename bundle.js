/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\nlet buttons = document.querySelectorAll('.button_to_form');\nlet form = document.querySelector(\".form\");\nlet formWrapper = document.querySelector('.form_wrapper');\nlet exitButton = document.querySelectorAll(\".form_exit\");\nlet plusButtons = document.querySelectorAll(\".plus_button\");\nlet sectionWidth = document.querySelector(\".career\");\nlet jobButtons = document.querySelectorAll(\".job_buttons_item\");\nlet contactButtons = document.querySelectorAll(\".contact_button\");\nlet productButtons = document.querySelectorAll(\".products_button\");\nlet careerPattern = `<li class=\"jobs_container_item\">\n<div class=\"new_container\">\n<div class =\"container\">\n<div class=\"jobs_container_name\">\n    <div class=\"name_icon\"></div>\n    <span></span>\n</div>\n<div class=\"jobs_container_item_sallary\">\n    <div class=\"sallary_icon\"></div>\n    <span></span>\n</div>\n</div>\n<button class=\"plus_button\"></button>\n</div>\n<div class=\"hidden_class job_conditions\">\n    <h3 class=\"job_conditions_header tusk\">Задачи</h3>\n    <ul>\n    </ul>\n    <h3 class=\"job_conditions_header expections\">Наши ожидания:</h3>\n    <ul>\n    </ul>\n    <h3 class=\"job_conditions_header offers\">Мы предлагаем:</h3>\n    <ul>\n    </ul>\n</div>\n\n</li>`;\nlet careerObject = {\n  \"строительный отдел\": [{\n    \"name\": \"прораб\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\", \"Описание\", \"описание\"],\n    \"expectations\": [\"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }, {\n    \"name\": \"Специалист службы снабжения\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\", \"Описание\", \"описание\"],\n    \"expectations\": [\"описание\", \"описание\", \"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }, {\n    \"name\": \"Логист\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\"],\n    \"expectations\": [\"описание\", \"описание\", \"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }, {\n    \"name\": \"Проектировщик\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\", \"описание\"],\n    \"expectations\": [\"описание\", \"описание\", \"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }],\n  \"офис\": [{\n    \"name\": \"Бухгалтер\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\", \"Описание\", \"описание\"],\n    \"expectations\": [\"описание\", \"описание\", \"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }, {\n    \"name\": \"Секретарь\",\n    \"sallary\": \"от 00 000руб\",\n    \"tasks\": [\"описание\", \"Описание\", \"описание\"],\n    \"expectations\": [\"описание\", \"описание\", \"описание\", \"описание\"],\n    \"offers\": [\"график 5/2 с гибким началом рабочего дня;\", \"оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;\", \"ежеквартальную премию по итогам работы;\"]\n  }],\n  \"финансовый отдел\": false,\n  \"отдел продаж\": false,\n  \"внештатный сотрудник\": false\n};\ndocument.querySelectorAll(\".career_item\").forEach(item => {\n  item.style.width = sectionWidth.clientWidth + \"px\";\n});\n$(document).ready(function () {\n  $('.career_slider').slick({\n    autoplay: false,\n    // Автоматическое прокручивание слайдов\n    dots: false,\n    arrows: true,\n    variableWidth: true,\n    slidesToShow: 1,\n    // Количество отображаемых слайдов за раз\n    slidesToScroll: 1,\n    adaptiveHeight: true\n  });\n});\nbuttons.forEach(element => {\n  element.addEventListener('click', () => {\n    formWrapper.style.top = \"50px\";\n  });\n});\nexitButton.forEach(element => {\n  element.addEventListener('click', () => {\n    formWrapper.style.top = \"-100%\";\n    if (buttons[1].classList.contains(\"hidden_class\")) {\n      setTimeout(() => {\n        buttons[1].classList.toggle(\"hidden_class\");\n        formWrapper.querySelector(\".form\").classList.toggle(\"hidden_class\");\n        formWrapper.querySelector(\".form_header\").textContent = \"заполните анкету\";\n        formWrapper.querySelector(\".acces_form\").classList.toggle(\"hidden_class\");\n      }, 800);\n    }\n  });\n});\nform.addEventListener('submit', () => {\n  event.preventDefault();\n  let formData = new FormData(form);\n  let xhr = new XMLHttpRequest();\n  xhr.open('POST', \"путь до обработчкиа событий(вы мне его не дали)\", true);\n  xhr.send(formData);\n  buttons[1].classList.toggle(\"hidden_class\");\n  formWrapper.querySelector(\".form\").classList.toggle(\"hidden_class\");\n  formWrapper.querySelector(\".form_header\").textContent = \"Анкета отправлена\";\n  formWrapper.querySelector(\".acces_form\").classList.toggle(\"hidden_class\");\n});\nfunction buttonLogic(container) {\n  container.forEach(element => {\n    element.addEventListener('click', () => {\n      let nextElem = element.parentNode.nextElementSibling;\n      if (nextElem.classList.contains(\"hidden_class\")) {\n        nextElem.classList.toggle(\"hidden_class\");\n        let height = nextElem.scrollHeight;\n        nextElem.style.height = \"0\";\n        setTimeout(() => {\n          nextElem.style.height = height + \"px\";\n        }, 10);\n        element.style.transform = \"rotateZ(45deg)\";\n      } else {\n        console.log(12);\n        nextElem.style.height = \"0px\";\n        element.style.transform = \"rotateZ(0deg)\";\n        setTimeout(() => {\n          nextElem.classList.toggle(\"hidden_class\");\n        }, 500);\n      }\n    });\n  });\n}\n;\nbuttonLogic(plusButtons);\nwindow.addEventListener(\"resize\", () => {\n  document.querySelectorAll(\".career_item\").forEach(item => {\n    item.style.width = sectionWidth.clientWidth + \"px\";\n  });\n});\njobButtons.forEach(button => {\n  button.addEventListener(\"click\", () => {\n    document.querySelector(\".button_checked\").classList.toggle(\"button_checked\");\n    button.classList.toggle(\"button_checked\");\n    document.querySelectorAll(\".jobs_container_item\").forEach(item => {\n      item.remove();\n    });\n    if (document.querySelector(\".cancel_answer\") != null) {\n      document.querySelector(\".cancel_answer\").remove();\n    }\n    if (careerObject[button.textContent] === false) {\n      document.querySelector(\".jobs_container\").insertAdjacentHTML(\"beforeend\", \"<h3 class=cancel_answer>К сожалению, пока нет вакансий</h3>\");\n    } else {\n      careerObject[`${button.textContent}`].forEach(element => {\n        document.querySelector(\".jobs_container\").insertAdjacentHTML(\"beforeend\", careerPattern);\n        let marker = document.querySelector(\".jobs_container\").lastChild;\n        marker.querySelector(\".name_icon\").nextElementSibling.textContent = element[\"name\"];\n        marker.querySelector(\".sallary_icon\").nextElementSibling.textContent = element[\"sallary\"];\n        element[\"tasks\"].forEach(task => {\n          marker.querySelector(\".tusk\").nextElementSibling.insertAdjacentHTML(\"beforeend\", `<li>${task}</li>`);\n        });\n        element[\"expectations\"].forEach(expectation => {\n          marker.querySelector(\".expections\").nextElementSibling.insertAdjacentHTML(\"beforeend\", `<li>${expectation}</li>`);\n        });\n        element[\"offers\"].forEach(offer => {\n          marker.querySelector(\".offers\").nextElementSibling.insertAdjacentHTML(\"beforeend\", `<li>${offer}</li>`);\n        });\n        console.log(careerObject[button.textContent]);\n        if (careerObject[`${button.textContent}`].indexOf(element) === careerObject[`${button.textContent}`].length - 1) {\n          buttonLogic(document.querySelector(\".jobs_container\").querySelectorAll(\".plus_button\"));\n        }\n      });\n    }\n  });\n});\ncontactButtons.forEach(contactButon => {\n  contactButon.addEventListener(\"click\", () => {\n    document.querySelector(\".contacts_button_container\").querySelector(\".button_checked\").classList.toggle(\"button_checked\");\n    contactButon.classList.toggle(\"button_checked\");\n    if (contactButon.textContent === \"САНКТ-ПЕТЕРБУРГ\") {\n      let mobile = document.querySelector(\".mobile\").nextElementSibling;\n      let email = document.querySelector(\".mail\").nextElementSibling;\n      let map = document.querySelector(\".map\").nextElementSibling;\n      mobile.textContent = \"8 (812) 602-77-60\";\n      mobile.href = `tel:8 (812) 602-77-60`;\n      email.textContent = \"info@pplk.ru\";\n      email.href = `mailto:info@pplk.ru`;\n      map.textContent = \"ул. Заозёрная, д. 8 к. 2, офис 202</br>(7 мин. пешком от метро Фрунзенская)\";\n      map.href = `https://yandex.com.ge/maps/2/saint-petersburg/house/zaozyornaya_ulitsa_8k2/Z0kYdQVkTkwAQFtjfXVxdnhkbA==/?ll=30.324647%2C59.907575&z=18.04`;\n      document.querySelector(\".map_container\").lastElementChild.remove();\n      document.querySelector(\".map_container\").insertAdjacentHTML(\"beforeend\", `<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Af4a1068ef282b3f77eadb943a8f1bd6b829d7c4c46ba01fe360565042f3e7277&amp;source=constructor\" width=\"100%\" height=\"224\" frameborder=\"0\"></iframe>`);\n    } else {\n      let mobile = document.querySelector(\".mobile\").nextElementSibling;\n      console.log(mobile);\n      let email = document.querySelector(\".mail\").nextElementSibling;\n      let map = document.querySelector(\".map\").nextElementSibling;\n      mobile.textContent = mobile.dataset.moscow;\n      mobile.href = `tel:${mobile.dataset.moscow}`;\n      email.textContent = email.dataset.moscow;\n      email.href = `mailto:${email.dataset.moscow}`;\n      map.textContent = \"Лаврушинский пер., 10, стр. 4\";\n      map.href = `${map.dataset.moscow}`;\n      document.querySelector(\".map_container\").lastElementChild.remove();\n      document.querySelector(\".map_container\").insertAdjacentHTML(\"beforeend\", `<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3A56c93419dbfaf9f00399179178d0aafb0371da9f5744d008bd12dc1b5bdc4e0c&amp;source=constructor\" width=\"100%\" height=\"224\" frameborder=\"0\"></iframe>`);\n    }\n  });\n});\nconsole.log(productButtons);\nproductButtons.forEach(productItem => {\n  productItem.addEventListener('click', () => {\n    document.querySelector(\".products_container\").querySelector(\".button_checked\").classList.toggle(\"button_checked\");\n    productItem.classList.toggle(\"button_checked\");\n    document.querySelector(\".products\").querySelectorAll(\".slider_item\").forEach(elem => {\n      if (productItem.textContent === \"Дома\") {\n        elem.classList.add(\"black_background\");\n      } else {\n        elem.classList.remove(\"black_background\");\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://test/./src/js/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.css ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-bold.eot */ \"./src/source/fonts/gothampro-bold.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-bold.woff2 */ \"./src/source/fonts/gothampro-bold.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-bold.woff */ \"./src/source/fonts/gothampro-bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-bold.ttf */ \"./src/source/fonts/gothampro-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-bold.svg */ \"./src/source/fonts/gothampro-bold.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-black.eot */ \"./src/source/fonts/gothampro-black.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-black.woff2 */ \"./src/source/fonts/gothampro-black.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-black.woff */ \"./src/source/fonts/gothampro-black.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-black.ttf */ \"./src/source/fonts/gothampro-black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../source/fonts/gothampro-black.svg */ \"./src/source/fonts/gothampro-black.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../source/form/acces-form.svg */ \"./src/source/form/acces-form.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../source/form/arrow.svg */ \"./src/source/form/arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Header/menu.svg */ \"./src/source/Header/menu.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Header/01-1-_2_.webp */ \"./src/source/Header/01-1-_2_.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Jobs/vacancy.svg */ \"./src/source/Jobs/vacancy.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Jobs/price.svg */ \"./src/source/Jobs/price.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Jobs/more.svg */ \"./src/source/Jobs/more.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../source/slider/VectorLeft.svg */ \"./src/source/slider/VectorLeft.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../source/slider/VectorRight.svg */ \"./src/source/slider/VectorRight.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../source/Succes/7449745 2.svg */ \"./src/source/Succes/7449745 2.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/footer-phone 1.svg */ \"./src/source/footer/footer-phone 1.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/footer-mail.svg */ \"./src/source/footer/footer-mail.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/footer-map.svg */ \"./src/source/footer/footer-map.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/bi_youtube.svg */ \"./src/source/footer/bi_youtube.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/uil_vk.svg */ \"./src/source/footer/uil_vk.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../source/footer/ic_round-telegram.svg */ \"./src/source/footer/ic_round-telegram.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: \"#gothampro-bold\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: \"#gothampro-black\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style-type: none;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n  @font-face {\r\n\tfont-family: 'GothamPro-Bold';\r\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* IE 9 Compatibility Mode */\r\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'), /* IE < 9 */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'), /* Super Modern Browsers */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'), /* Firefox >= 3.6, any other modern browser */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype'), /* Safari, Android, iOS */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'GothamPro';\r\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); /* IE 9 Compatibility Mode */\r\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('embedded-opentype'), /* IE < 9 */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('woff2'), /* Super Modern Browsers */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('woff'), /* Firefox >= 3.6, any other modern browser */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('truetype'), /* Safari, Android, iOS */\r\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\nbody {\r\n    font-family: GothamPro-Bold;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    /* .flex_center {\r\n        margin: 0 auto;\r\n    } */\r\n\r\n    .hidden_class {\r\n        display: none;\r\n    }\r\n\r\n    .acces_icon {\r\n        margin: 0 auto;\r\n        margin-top: 74px;\r\n    }\r\n\r\n    .acces_container {\r\n        width: 240px;\r\n        margin: 0 auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        margin-top: 45px;\r\n    }\r\n\r\n    .acces_container > :last-child {\r\n        margin: 100px 0 45px;\r\n    }\r\n\r\n    .form_wrapper {\r\n        width: 100%;\r\n        background-color: #262626; \r\n        position: fixed;\r\n        top: -100%;\r\n        text-align: center;\r\n        z-index: 20;\r\n\r\n        transition: top 1s;\r\n    }\r\n\r\n    .form_header {\r\n        margin-top: 45px;\r\n    }\r\n\r\n    .form_button {\r\n        margin-bottom: 45px;\r\n    }\r\n\r\n    .acces_form {\r\n        text-align: center;\r\n    }\r\n\r\n    .acces_icon{\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\r\n        background-position: center center;\r\n        width: 100px;\r\n        height: 100px;\r\n\r\n    }\r\n\r\n    .form {\r\n        padding: 45px 20px;\r\n        text-align: center;\r\n    }\r\n\r\n    .head_wrapper {\r\n        background-color: #1B1B1B;\r\n        padding: 10px;\r\n\r\n        display: flex;\r\n        justify-content: flex-end;\r\n\r\n    }\r\n\r\n    .exit_wrapper{\r\n        width: 22px;\r\n        height: 22px;\r\n\r\n        display:flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .exit_style{\r\n        display: block;\r\n        width: 26px;\r\n        height: 3px;\r\n        transform: rotateZ(45deg);\r\n        background-color:white;\r\n    }\r\n\r\n    .exit_style::after {\r\n        content: \"\";\r\n        display: block;\r\n        width: 26px;\r\n        height: 3px;\r\n        transform: rotateZ(90deg);\r\n        background-color:white;\r\n    }\r\n\r\n    .form_view {\r\n        width: 100%;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    border: none;\r\n    background-color: transparent;\r\n    height: 52px;\r\n    padding: 15px 10px;\r\n    border-bottom: 3px solid #999999;\r\n    font-size: 18px;\r\n    }\r\n\r\n    #wakancy_select {\r\n        width: 100%;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        border: none;\r\n        background-color: transparent;\r\n        height: 52px;\r\n        padding: 15px 10px;\r\n        border-bottom: 3px solid #999999;\r\n        font-size: 18px;\r\n\r\n       \r\n    }\r\n\r\n\r\n    .select_wrapper {\r\n        position: relative;\r\n    }\r\n\r\n    .select_wrapper::before {\r\n        content: \"\";\r\n        display: block;\r\n        width: 16px;\r\n        height: 16px;\r\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\r\n        background-repeat: no-repeat;\r\n        background-size: 16px 16px;\r\n        background-position: right center;\r\n        position: absolute;\r\n    right: 0px;\r\n    bottom: 19px;\r\n    }\r\n\r\n   \r\n\r\n    .wakancy_container {\r\n        text-align: left;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .wakancy_container h3 {\r\n        margin-top: 20px;\r\n    margin-bottom: 15px;\r\n    }\r\n    \r\n\r\n    .resume_span {\r\n        font-size: 10px;\r\n        font-weight: 400;\r\n        line-height: 15px;\r\n    }\r\n\r\n    .resume_button {\r\n        display: block;\r\n        width: 184px;\r\n        \r\n        background-color: #21A038;\r\n\r\n        font-size: 11px;\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n    \r\n        padding: 15px 36px;\r\n        border-radius: 30px;\r\n        opacity: 0px;\r\n\r\n        margin: 15px 0 35px 0;\r\n\r\n    }\r\n\r\n    #resume_file {\r\n        display: none;\r\n    }\r\n\r\n    #approval {\r\n        display: none;\r\n    }\r\n\r\n    #approval:checked + #approval_text::before {\r\n        background-color: #111311;\r\n    }\r\n\r\n    #approval_text {\r\n    color: white;\r\n    font-size: 10px;\r\n    font-weight: 400;\r\n    line-height: 15px;\r\n    text-align: left;\r\n\r\n    display: block;\r\n    padding-left: 17px;\r\n    position: relative;\r\n    }\r\n\r\n    #approval_text::before {\r\n        content:\"\";\r\n        display: block;\r\n        width: 12px;\r\n        height: 12px;\r\n\r\n        background-color: #D9D9D933;\r\n        border: 0.5px solid white;\r\n        border-radius: 3px;\r\n\r\n        position: absolute;\r\n        left: 0;\r\n    }\r\n\r\n    #approval_text p:nth-last-child(-n+1) {\r\n        margin-top:  12px;\r\n    }\r\n\r\n    .form_button {\r\n        margin-top: 35px;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n   .nuv {\r\n    padding: 2px 10px;\r\n    box-sizing: border-box;\r\n    background-color: #111311;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n   }\r\n\r\n\r\n.nuv_burger {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\r\n    background-repeat: no-repeat;\r\n    width:36px;\r\n    height: 36px;\r\n    margin-right: 49px;\r\n}\r\n\r\n.nuv_burger_menu {\r\n    display: none;\r\n}\r\n\r\n.nuv_logo {\r\n    width: 60px;\r\n    height: 30px;\r\n}\r\n\r\n.number_container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-end;\r\n    width: 85px;\r\n}\r\n\r\n\r\n.number {\r\n    font-family:GothamPro-Bold;\r\n    font-size: 9px;\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.content_container {\r\n    height: 585px;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n\r\n    padding: 40px 20px;\r\n\r\n    color: white;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: end;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.content_container_header {\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n\r\n.content_container_span {\r\n    font-size: 18px;\r\n}\r\n\r\n.red_button {\r\n    height: 40px;\r\n    padding: 10px 36px;\r\n    background-color: #DD3037;\r\n\r\n    font-size: 12px;\r\n    color:white;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    border-radius: 30px;\r\n}\r\n\r\n.main_content {\r\n    background-color: #212121;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    \r\n}\r\n\r\n.section_pudding {\r\n    padding: 0 20px;\r\n}\r\n\r\n\r\n.about {\r\n    height: 552px;\r\n    display: flex;\r\n    padding: 40px 20px;\r\n\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 35px;\r\n}\r\n\r\n.about_header {\r\n    color: #999999;\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n.about_item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 15px;\r\n}\r\n\r\n.about_item_container {\r\n    width: 80px;\r\n    height: 70px;\r\n\r\n    background-color: #000000B2;\r\n    border-radius: 5px;\r\n    border: 1px;\r\n\r\n    padding: 3px 10px;\r\n\r\n    color:#21A038;\r\n    font-size: 24px;\r\n    \r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    box-shadow: 0px 0px 10px 0px #B6FFBA;\r\n\r\n}\r\n\r\n.about_item_text {\r\n    font-family: GothamPro;\r\n    font-size: 16px;\r\n    color: white\r\n}\r\n\r\n.job {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.job_buttons {\r\n    margin-top: 33px;\r\n\r\n    \r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    \r\n}\r\n\r\n.job_buttons_item {\r\n    \r\n\r\n    transition: background-color 0.5s, color 0.5s;\r\n\r\n}\r\n\r\n.button_style {\r\n    background-color: transparent;\r\n    border: 3px solid #999999;\r\n    padding: 10px 12px;\r\n    border-radius: 5px;\r\n\r\n    text-transform: uppercase;\r\n    color: white;\r\n\r\n    font-family: GothamPro-Bold;\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n.button_checked {\r\n    background-color: #999999;\r\n    color: #212121;\r\n}\r\n\r\n.jobs_container {\r\n    margin-top: 17px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.jobs_container_item {\r\n    width: 100%;\r\n    min-height: 130px;\r\n    padding: 30px;\r\n\r\n    border: 3px solid #999999;\r\n    border-radius: 30px;\r\n\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    text-align: left;\r\n}\r\n\r\n.new_container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.container {\r\n    flex-grow: 1;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.jobs_container_name {\r\n    display: flex;\r\n    gap: 10px;\r\n    color: white;\r\n    align-items: center;\r\n\r\n    font-size: 18px;\r\n}\r\n\r\n.jobs_container_salllary {\r\n    display: flex;\r\n    gap: 10px;\r\n    font-size: 18px;\r\n    color: white;\r\n}\r\n\r\n.name_icon {\r\n    width: 25px;\r\n    height: 25px;\r\n    flex-shrink: 0;\r\n    \r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\r\n    background-repeat: no-repeat;\r\n\r\n}\r\n\r\n.jobs_container_item_sallary {\r\n    display: flex;\r\n    gap: 10px;\r\n    color: white;\r\n    font-size: 18px;\r\n\r\n    margin-top: 10px;\r\n}\r\n\r\n.sallary_icon {\r\n    width: 25px;\r\n    height: 25px;\r\n    flex-shrink: 0;\r\n    \r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});\r\n    background-repeat: no-repeat;\r\n  \r\n}\r\n\r\n.plus_button {\r\n    width: 25px;\r\n    height:25px;\r\n    border-radius: 50%;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});\r\n    background-position: center center;\r\n\r\n    transition: transform 0.5s;\r\n\r\n    flex-shrink: 0;\r\n\r\n    border: none;\r\n}\r\n\r\n.job_conditions {\r\n    box-sizing: content-box;\r\n    color: white;\r\n    text-align: left;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    line-height: 14.52px;\r\n\r\n    -webkit-transition: height  0.5s linear;\r\n    -moz-transition: height  0.5s linear;\r\n    -o-transition: height  0.5s linear;\r\n\r\n    padding-top: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.job_conditions ul li {\r\n    list-style-type: disc;\r\n    margin-left: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.job_button {\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.advantages {\r\n    background-color: #111311;\r\n    margin-top: 40px;\r\n    padding: 29px 0;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.advantages_list li {\r\n   \r\n\r\n    padding: 15px;\r\n    position: relative;\r\n\r\n    color: white;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n.advantages_container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.advantages_animation {\r\n    transition: height 0.5s;\r\n    overflow: hidden;\r\n}\r\n\r\n.advantages_list li::after {\r\n    display: block;\r\n    content: '';\r\n    width: 100%;\r\n    position: absolute;\r\n\r\n    height: 3px;\r\n    background-color: #999999;\r\n    left: 0;\r\n    bottom: 0;\r\n    \r\n\r\n}\r\n\r\n.black_background {\r\n    background-color: black !important;\r\n}\r\n\r\n\r\n.products {\r\n    width: 100%;\r\n    text-align: center;\r\n\r\n    padding: 40px 0;\r\n}\r\n\r\n.slider {\r\n   width: 100%;\r\n   position: relative;\r\n\r\n   margin-top: 10px;\r\n}\r\n\r\n .slick-arrow {\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 10;\r\n    font-size: 0;\r\n    border: none;\r\n    background-color: transparent;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n\r\n    width: 17px;\r\n    height: 30px;\r\n}\r\n\r\n.career_slider .slick-arrow {\r\n    top: 17%;\r\n}\r\n\r\n .slick-arrow.slick-prev {\r\n    left: 15px;\r\n    margin-top: -15px;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});\r\n    background-size: 100%;\r\n    \r\n}\r\n\r\n .slick-arrow.slick-next {\r\n    right: 15px;\r\n    margin-top: -15px;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\r\n    background-size: 100%;\r\n}\r\n\r\n.slider_item {\r\n    width: 100%;\r\n    height: 40.8vw;;\r\n    background-color: #D9D9D9;\r\n    margin: 0 auto;\r\n    border-radius: 10px;\r\n\r\n    transition: height 0.5s;\r\n}\r\n\r\n.slick-current .slider_item{\r\n    position: relative;\r\n    border: 3px solid gray;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    box-shadow: 25px 0px 20px 0px #212121, -25px 0px 20px 0px #212121;\r\n}\r\n\r\n.main_item {\r\n    width: 45.8vw;\r\n    height: 50.5vw !important;\r\n    display: flex !important;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.slick-track {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.slider .slick-dots {\r\n    display: flex; /* Для горизонтального расположения точек */\r\n    gap: 9px;\r\n    justify-content: center; /* Центрирование точек по горизонтали */\r\n    list-style: none; /* Удаление стандартного маркера */\r\n    padding: 0;\r\n}\r\n\r\n.slider .slick-dots li.slick-active button {\r\n    width: 42px;\r\n    background-color: white;\r\n    border-radius: 25px\r\n}\r\n\r\n.slider .slick-dots button {\r\n        font-size: 0;\r\n        width: 15px;\r\n        height: 15px;\r\n        border-radius: 50%;\r\n        background-color: #888988;\r\n        border: none;\r\n\r\n        transition: border-radius 0.5s;\r\n        transition: width 0.5s;\r\n}\r\n\r\n\r\n.slider.slick-slide {\r\n    width: 175px;\r\n    text-align: center;\r\n    \r\n    \r\n}\r\n\r\n\r\n.career {\r\n    width: 100%;\r\n    padding: 40px 0;\r\n\r\n    background-color: #111311;\r\n}\r\n\r\n.career_header {\r\n    padding-bottom: 20px;;\r\n}\r\n\r\n.career_text {\r\nfont-size: 14px;\r\nfont-weight: 700;\r\nline-height: 20px;\r\ntext-align: left;\r\ncolor: white;\r\n\r\nmargin: 20px 0;\r\n}\r\n\r\n.career_name{\r\n    margin: 0;\r\n}\r\n\r\n.career_job {\r\n    margin: 0;\r\n}\r\n\r\n.career_item {\r\n    display: flex  !important;\r\n    flex-direction: column;\r\n    align-items: center;\r\n   \r\n}\r\n\r\n.career_image {\r\n    width: 240px;\r\n}\r\n\r\n.career_list {\r\n    padding: 0 20px;\r\n\r\n}\r\n\r\n.career_list li {\r\n    list-style-type: disc;\r\n    margin-left: 20px;\r\n    margin-bottom: 15px;\r\n\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.succes {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}), radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(61,149,66,1) 0%, rgba(33,33,33,0.9215335792520133) 90%);\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-color: #212121;\r\n\r\n    padding: 40px 20px;\r\n\r\n}\r\n\r\n.succes_text {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n\r\n    color: white;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.succes_text:nth-child(n+2) {\r\n    margin-top: 15px;\r\n}\r\n\r\n.succes_enjoy {\r\n    padding: 20px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    text-align: center;\r\n\r\n    border: 3px solid #36853B;\r\n    border-radius: 20px;\r\n\r\n    box-shadow: 0px 0px 10px 0 #4FB756B2;\r\n\r\n    margin-top: 160px;\r\n}\r\n\r\n.succes_enjoy p {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    line-height: 22px;\r\n    color: white;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.enjoy_button {\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n/*Footer*/\r\n\r\n.footer {\r\n    background-color: #111311;\r\n}\r\n\r\n.contacts {\r\n    padding: 20px 23px;\r\n}\r\n\r\n.contacts_header {\r\n    font-size: 20px;\r\n}\r\n\r\n.contacts_button_container {\r\n    display: flex;\r\n    gap: 15px;\r\n\r\n    margin-top: 20px;\r\n}\r\n\r\n.contact_button {\r\n    width: 150px;\r\n    padding: 8px 11px;\r\n\r\n    flex-grow: 1;\r\n}\r\n\r\n.contacts_list {\r\n    margin-top: 40px;\r\n}\r\n\r\n.contacts_list li {\r\n    display:flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    margin-top: 16px;\r\n\r\n}\r\n\r\n.contacts_link {\r\n    font-family: GothamPro-Bold;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n    text-align: left;\r\n    color: white;\r\n\r\n    text-decoration: none;\r\n    font-style: normal;\r\n}\r\n\r\n.map_link {\r\n    text-decoration: underline;\r\n}\r\n\r\n.contacts_icon {\r\n    width: 32px;\r\n    height: 32px;\r\n\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.mobile {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___});\r\n}\r\n\r\n.mail {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___});\r\n}\r\n\r\n.map {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___});\r\n}\r\n\r\n.media_container {\r\n    display: flex;\r\n    gap: 30px;\r\n    justify-content: center;\r\n\r\n    margin-top: 42px;\r\n}\r\n\r\n.media_links {\r\n    display:block;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.youtube {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});\r\n}\r\n\r\n.vk {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___});\r\n}\r\n\r\n.telegram {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___});\r\n}\r\n\r\n\r\n\r\n.rules {\r\n    text-align: center;\r\n    padding: 51px 53px;\r\n}\r\n\r\n.rules ul {\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.copyright {\r\n    font-family: GothamPro-Bold;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n    text-decoration: none;\r\n    color: white;\r\n     \r\n}\r\n\r\n.rules_req {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n    color: white;\r\n\r\n}\r\n\r\n.rules_policy {\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n    color:white\r\n\r\n}\r\n\r\n\r\n.alpha_logo {\r\nmargin-top: 15px;\r\nwidth: 160px;\r\nheight: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test/./src/css/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://test/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/source/Header/01-1-_2_.webp":
/*!*****************************************!*\
  !*** ./src/source/Header/01-1-_2_.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00da9dd35571ce290229.webp\";\n\n//# sourceURL=webpack://test/./src/source/Header/01-1-_2_.webp?");

/***/ }),

/***/ "./src/source/Header/menu.svg":
/*!************************************!*\
  !*** ./src/source/Header/menu.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bff91258de7c7b3b6dd.svg\";\n\n//# sourceURL=webpack://test/./src/source/Header/menu.svg?");

/***/ }),

/***/ "./src/source/Jobs/more.svg":
/*!**********************************!*\
  !*** ./src/source/Jobs/more.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d443ef044019f43b1e27.svg\";\n\n//# sourceURL=webpack://test/./src/source/Jobs/more.svg?");

/***/ }),

/***/ "./src/source/Jobs/price.svg":
/*!***********************************!*\
  !*** ./src/source/Jobs/price.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6a38536d2ec7e180722.svg\";\n\n//# sourceURL=webpack://test/./src/source/Jobs/price.svg?");

/***/ }),

/***/ "./src/source/Jobs/vacancy.svg":
/*!*************************************!*\
  !*** ./src/source/Jobs/vacancy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fbbbd75e48438b115a0c.svg\";\n\n//# sourceURL=webpack://test/./src/source/Jobs/vacancy.svg?");

/***/ }),

/***/ "./src/source/Succes/7449745 2.svg":
/*!*****************************************!*\
  !*** ./src/source/Succes/7449745 2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ab82dfcee17e34f4ecb.svg\";\n\n//# sourceURL=webpack://test/./src/source/Succes/7449745_2.svg?");

/***/ }),

/***/ "./src/source/fonts/gothampro-black.eot":
/*!**********************************************!*\
  !*** ./src/source/fonts/gothampro-black.eot ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d7af9ae9d0446cce7bb.eot\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-black.eot?");

/***/ }),

/***/ "./src/source/fonts/gothampro-black.svg":
/*!**********************************************!*\
  !*** ./src/source/fonts/gothampro-black.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce2229a39bb642b1e7ed.svg\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-black.svg?");

/***/ }),

/***/ "./src/source/fonts/gothampro-black.ttf":
/*!**********************************************!*\
  !*** ./src/source/fonts/gothampro-black.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c2f478dfa880e2de0a1.ttf\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-black.ttf?");

/***/ }),

/***/ "./src/source/fonts/gothampro-black.woff":
/*!***********************************************!*\
  !*** ./src/source/fonts/gothampro-black.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"beb0211042b74a3a43e1.woff\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-black.woff?");

/***/ }),

/***/ "./src/source/fonts/gothampro-black.woff2":
/*!************************************************!*\
  !*** ./src/source/fonts/gothampro-black.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39d3c1c39a14e1bb4e7f.woff2\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-black.woff2?");

/***/ }),

/***/ "./src/source/fonts/gothampro-bold.eot":
/*!*********************************************!*\
  !*** ./src/source/fonts/gothampro-bold.eot ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2eca11eb8ebc1d254a45.eot\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-bold.eot?");

/***/ }),

/***/ "./src/source/fonts/gothampro-bold.svg":
/*!*********************************************!*\
  !*** ./src/source/fonts/gothampro-bold.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9ba29f323ef709e51c0.svg\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-bold.svg?");

/***/ }),

/***/ "./src/source/fonts/gothampro-bold.ttf":
/*!*********************************************!*\
  !*** ./src/source/fonts/gothampro-bold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"764ba13de4409a990823.ttf\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-bold.ttf?");

/***/ }),

/***/ "./src/source/fonts/gothampro-bold.woff":
/*!**********************************************!*\
  !*** ./src/source/fonts/gothampro-bold.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bb6f3ecbf0311a3ea99.woff\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-bold.woff?");

/***/ }),

/***/ "./src/source/fonts/gothampro-bold.woff2":
/*!***********************************************!*\
  !*** ./src/source/fonts/gothampro-bold.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad94330d291c377feb86.woff2\";\n\n//# sourceURL=webpack://test/./src/source/fonts/gothampro-bold.woff2?");

/***/ }),

/***/ "./src/source/footer/bi_youtube.svg":
/*!******************************************!*\
  !*** ./src/source/footer/bi_youtube.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea526f88e70be082d63b.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/bi_youtube.svg?");

/***/ }),

/***/ "./src/source/footer/footer-mail.svg":
/*!*******************************************!*\
  !*** ./src/source/footer/footer-mail.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50cf5b85211cfc9595a5.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/footer-mail.svg?");

/***/ }),

/***/ "./src/source/footer/footer-map.svg":
/*!******************************************!*\
  !*** ./src/source/footer/footer-map.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d87da3d01952dc48dc74.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/footer-map.svg?");

/***/ }),

/***/ "./src/source/footer/footer-phone 1.svg":
/*!**********************************************!*\
  !*** ./src/source/footer/footer-phone 1.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59b50e31751b1709ed34.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/footer-phone_1.svg?");

/***/ }),

/***/ "./src/source/footer/ic_round-telegram.svg":
/*!*************************************************!*\
  !*** ./src/source/footer/ic_round-telegram.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ecd801971cfa83ada4f.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/ic_round-telegram.svg?");

/***/ }),

/***/ "./src/source/footer/uil_vk.svg":
/*!**************************************!*\
  !*** ./src/source/footer/uil_vk.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"606785c8f117ca6087d1.svg\";\n\n//# sourceURL=webpack://test/./src/source/footer/uil_vk.svg?");

/***/ }),

/***/ "./src/source/form/acces-form.svg":
/*!****************************************!*\
  !*** ./src/source/form/acces-form.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4d57c8e6b2c51929c83.svg\";\n\n//# sourceURL=webpack://test/./src/source/form/acces-form.svg?");

/***/ }),

/***/ "./src/source/form/arrow.svg":
/*!***********************************!*\
  !*** ./src/source/form/arrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"daa61d19d50af84d520f.svg\";\n\n//# sourceURL=webpack://test/./src/source/form/arrow.svg?");

/***/ }),

/***/ "./src/source/slider/VectorLeft.svg":
/*!******************************************!*\
  !*** ./src/source/slider/VectorLeft.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c16374e78977b7f499d.svg\";\n\n//# sourceURL=webpack://test/./src/source/slider/VectorLeft.svg?");

/***/ }),

/***/ "./src/source/slider/VectorRight.svg":
/*!*******************************************!*\
  !*** ./src/source/slider/VectorRight.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5b2d77f05b1b3142286.svg\";\n\n//# sourceURL=webpack://test/./src/source/slider/VectorRight.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;