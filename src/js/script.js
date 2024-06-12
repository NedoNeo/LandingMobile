import "../css/style.css"

let buttons = document.querySelectorAll('.button_to_form');
let form = document.querySelector(".form")
let formWrapper = document.querySelector('.form_wrapper');
let exitButton = document.querySelectorAll(".form_exit");
let plusButtons = document.querySelectorAll(".plus_button");
let sectionWidth = document.querySelector(".career");
let jobButtons = document.querySelectorAll(".job_buttons_item");
let contactButtons = document.querySelectorAll(".contact_button");
let productButtons = document.querySelectorAll(".products_button");
let careerPattern = `<li class="jobs_container_item">
<div class="new_container">
<div class ="container">
<div class="jobs_container_name">
    <div class="name_icon"></div>
    <span></span>
</div>
<div class="jobs_container_item_sallary">
    <div class="sallary_icon"></div>
    <span></span>
</div>
</div>
<button class="plus_button"></button>
</div>
<div class="hidden_class job_conditions">
    <h3 class="job_conditions_header tusk">Задачи</h3>
    <ul>
    </ul>
    <h3 class="job_conditions_header expections">Наши ожидания:</h3>
    <ul>
    </ul>
    <h3 class="job_conditions_header offers">Мы предлагаем:</h3>
    <ul>
    </ul>
</div>

</li>`
let careerObject ={
  "строительный отдел": [{"name":"прораб", "sallary": "от 00 000руб","tasks": ["описание", "Описание", "описание"],"expectations": ["описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]},
  {"name":"Специалист службы снабжения", "sallary": "от 00 000руб","tasks": ["описание", "Описание", "описание"],"expectations": ["описание","описание","описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]},
  {"name":"Логист", "sallary": "от 00 000руб","tasks": ["описание",],"expectations": ["описание","описание","описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]},
  {"name":"Проектировщик", "sallary": "от 00 000руб","tasks": ["описание", "описание"],"expectations": ["описание","описание","описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]}],
  "офис":[{"name":"Бухгалтер", "sallary": "от 00 000руб","tasks": ["описание", "Описание", "описание"],"expectations": ["описание","описание","описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]},
  {"name":"Секретарь", "sallary": "от 00 000руб","tasks": ["описание", "Описание", "описание"],"expectations": ["описание","описание","описание","описание"],"offers": ["график 5/2 с гибким началом рабочего дня;","оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;","ежеквартальную премию по итогам работы;"]}],
  "финансовый отдел": false,
  "отдел продаж": false,
  "внештатный сотрудник": false
}


  document.querySelectorAll(".career_item").forEach(item => {
    item.style.width = sectionWidth.clientWidth + "px";
  })


 $(document).ready(function(){
  $('.career_slider').slick({
      autoplay: false, // Автоматическое прокручивание слайдов
      dots: false ,
      arrows:true,
      variableWidth: true,
      slidesToShow: 1, // Количество отображаемых слайдов за раз
        slidesToScroll: 1,
      adaptiveHeight: true,
  });
})




buttons.forEach((element) => {
  element.addEventListener('click', () => {
    formWrapper.style.top = "50px";
  })
})

exitButton.forEach((element) => {
  element.addEventListener('click', () => {
    formWrapper.style.top = "-100%";

    if(buttons[1].classList.contains("hidden_class")) {
    setTimeout(() => {
      buttons[1].classList.toggle("hidden_class");
      formWrapper.querySelector(".form").classList.toggle("hidden_class");
      formWrapper.querySelector(".form_header").textContent = "заполните анкету"; 
      formWrapper.querySelector(".acces_form").classList.toggle("hidden_class");
    }, 800)
  }
  })
})

form.addEventListener('submit', () => {
    event.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "путь до обработчкиа событий(вы мне его не дали)",true)
    xhr.send(formData);

    buttons[1].classList.toggle("hidden_class");
    formWrapper.querySelector(".form").classList.toggle("hidden_class");
    formWrapper.querySelector(".form_header").textContent = "Анкета отправлена"; 
    formWrapper.querySelector(".acces_form").classList.toggle("hidden_class");
})


function buttonLogic(container) {
  container.forEach((element) => {
  element.addEventListener('click', () => {
    let nextElem = element.parentNode.nextElementSibling;
    if(nextElem.classList.contains("hidden_class")) {
      nextElem.classList.toggle("hidden_class");
      let height =nextElem.scrollHeight;
      nextElem.style.height = "0";
      setTimeout (()=> {
        nextElem.style.height = height + "px";
      },10)
      element.style.transform = "rotateZ(45deg)";
    } else {
      console.log(12);
      nextElem.style.height = "0px";
      element.style.transform = "rotateZ(0deg)";
      setTimeout(() => {
        nextElem.classList.toggle("hidden_class");
      }, 500)
    }
  })
})

};

buttonLogic(plusButtons);


window.addEventListener("resize", () => {
  document.querySelectorAll(".career_item").forEach(item => {
    item.style.width = sectionWidth.clientWidth + "px";
  })
})


jobButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".button_checked").classList.toggle("button_checked");
    button.classList.toggle("button_checked");



    document.querySelectorAll(".jobs_container_item").forEach(item => {
      item.remove();
    })

   
    if(document.querySelector(".cancel_answer") != null) {
    document.querySelector(".cancel_answer").remove();
    }

    if(careerObject[button.textContent] === false) {
      document.querySelector(".jobs_container").insertAdjacentHTML("beforeend", "<h3 class=cancel_answer>К сожалению, пока нет вакансий</h3>");
    }
    else {
      careerObject[`${button.textContent}`].forEach(element => {
        document.querySelector(".jobs_container").insertAdjacentHTML("beforeend", careerPattern);
        
        let marker = document.querySelector(".jobs_container").lastChild;
      
        marker.querySelector(".name_icon").nextElementSibling.textContent = element["name"];
        marker.querySelector(".sallary_icon").nextElementSibling.textContent = element["sallary"];
        element["tasks"].forEach(task => {
        marker.querySelector(".tusk").nextElementSibling.insertAdjacentHTML("beforeend",
            `<li>${task}</li>`)
        });
        element["expectations"].forEach(expectation => {
        marker.querySelector(".expections").nextElementSibling.insertAdjacentHTML("beforeend",  `<li>${expectation}</li>`)
      })

      element["offers"].forEach(offer => {
        marker.querySelector(".offers").nextElementSibling.insertAdjacentHTML("beforeend",  `<li>${offer}</li>`)
          })
        
          console.log(careerObject[button.textContent]);
        
      if((careerObject[`${button.textContent}`].indexOf(element) ===  (careerObject[`${button.textContent}`].length - 1))) {
        buttonLogic(document.querySelector(".jobs_container").querySelectorAll(".plus_button"));
      }
      })
    
    }
  })
}
)

contactButtons.forEach(contactButon => {
  contactButon.addEventListener("click", () => {
    document.querySelector(".contacts_button_container").querySelector(".button_checked").classList.toggle("button_checked");
    contactButon.classList.toggle("button_checked");

    if(contactButon.textContent === "САНКТ-ПЕТЕРБУРГ") {
      let mobile =document.querySelector(".mobile").nextElementSibling;
      let email =document.querySelector(".mail").nextElementSibling;
      let map = document.querySelector(".map").nextElementSibling;
      
      mobile.textContent = "8 (812) 602-77-60"
      mobile.href = `tel:8 (812) 602-77-60`;
      email.textContent = "info@pplk.ru";
      email.href = `mailto:info@pplk.ru`;
      map.textContent = "ул. Заозёрная, д. 8 к. 2, офис 202</br>(7 мин. пешком от метро Фрунзенская)";
      map.href = `https://yandex.com.ge/maps/2/saint-petersburg/house/zaozyornaya_ulitsa_8k2/Z0kYdQVkTkwAQFtjfXVxdnhkbA==/?ll=30.324647%2C59.907575&z=18.04`

      document.querySelector(".map_container").lastElementChild.remove();
      document.querySelector(".map_container").insertAdjacentHTML("beforeend",`<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4a1068ef282b3f77eadb943a8f1bd6b829d7c4c46ba01fe360565042f3e7277&amp;source=constructor" width="100%" height="224" frameborder="0"></iframe>`)
    } else {
      let mobile =document.querySelector(".mobile").nextElementSibling;
      console.log(mobile)
      let email =document.querySelector(".mail").nextElementSibling;
      let map = document.querySelector(".map").nextElementSibling;
      
      mobile.textContent = mobile.dataset.moscow;
      mobile.href = `tel:${mobile.dataset.moscow}`;
      email.textContent = email.dataset.moscow;
      email.href = `mailto:${email.dataset.moscow}`;
      map.textContent = "Лаврушинский пер., 10, стр. 4";
      map.href = `${map.dataset.moscow}`

      document.querySelector(".map_container").lastElementChild.remove();
      document.querySelector(".map_container").insertAdjacentHTML("beforeend",`<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A56c93419dbfaf9f00399179178d0aafb0371da9f5744d008bd12dc1b5bdc4e0c&amp;source=constructor" width="100%" height="224" frameborder="0"></iframe>`)
    }


})
})

console.log(productButtons)
productButtons.forEach(productItem => {
  productItem.addEventListener('click', () => {
    document.querySelector(".products_container").querySelector(".button_checked").classList.toggle("button_checked");
    productItem.classList.toggle("button_checked");

    document.querySelector(".products").querySelectorAll(".slider_item").forEach((elem => {
      if(productItem.textContent === "Дома") {
        elem.classList.add("black_background")
      } else {
        elem.classList.remove("black_background")
      }
      
    }))

  })
})

