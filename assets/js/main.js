// custom video
let video = document.getElementById("video");
let palyBtn = document.querySelector(".play_btn");
let headerContent = document.querySelector(".header_content");
let videoWrapper = document.querySelector(".video_wrapper");
let closeIcon = document.querySelector(".close_icon");
let mouse = document.querySelector(".mouse");

palyBtn.addEventListener("click", () => {
  video.play();
  headerContent.classList.add("fade");
  videoWrapper.classList.add("show");
  mouse.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  video.load();
  headerContent.classList.remove("fade");
  videoWrapper.classList.remove("show");
  mouse.classList.remove("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    video.load();
    headerContent.classList.remove("fade");
    videoWrapper.classList.remove("show");
    mouse.classList.remove("active");
  } else if (window.scrollY > 200) {
    mouse.classList.add("active");
  } else {
    mouse.classList.remove("active");
  }
});

//custom modal and forms
let form1 = document.querySelector('.form-1')
let form2 = document.querySelector('.form-2')
let fieldInput1 = document.querySelector('.field_input-1')
let fieldInput2 = document.querySelector('.field_input-2')
let label = document.querySelectorAll('.label_1')
let label_2 = document.querySelectorAll('.label_2')
let ModalForm = document.querySelector(".representation_modal");
let btn = document.getElementById("btn");
let closeModal = document.querySelector(".modal_close_icon");

label.forEach((la)=>{
    la.addEventListener('click',()=>{
        if(fieldInput2.checked = true){
            form2.reset()
        }
    })
})
label_2.forEach((la2)=>{
    la2.addEventListener('click',()=>{
        if(fieldInput1.checked = true){
            form1.reset()
        }
    })
})
btn.addEventListener("click", (e) => {
  e.preventDefault();
  ModalForm.classList.add("active");
});

closeModal.addEventListener("click", () => {
  ModalForm.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target == ModalForm) {
    ModalForm.classList.remove("active");
  }
});

// form-representation
let calculation = document.getElementById("calculation");
calculation.addEventListener("click", (e) => {
  e.preventDefault();
  let customer = document.getElementById("select1");
  let valueCustomer = customer[customer.selectedIndex].value;
  let date = document.getElementById("select2");
  let valuedate = date[date.selectedIndex];
  let price = document.getElementById("select3");
  let valuePrice = price[price.selectedIndex].value;
  let percent = document.getElementById("select4");
  let valuePercent = percent[percent.selectedIndex].value;
  let income = document.getElementById("income");
  let time = document.getElementById("time");
  let result =
    (parseInt(valueCustomer) * parseInt(valuePrice) * parseInt(valuePercent)) /
    100;
  let final = new Intl.NumberFormat().format(result);

  if (valuedate.value == "یک سال") {
    time.innerHTML = "یک سال";
    income.innerHTML = final;
  } else {
    time.innerHTML = "یک ماه";
    income.innerHTML = final;
  }
});

// Explanation Box
let Content = document.querySelector(".content_box");
let knowMore = document.querySelector(".know_more");
let shadow = document.querySelector(".shadow_line");

knowMore.addEventListener("click", () => {
  Content.classList.toggle("show_text");
  if (knowMore.textContent != "کمتر") {
    knowMore.textContent = "کمتر";
    shadow.classList.add("show");
  } else {
    knowMore.textContent = "بیشتر";
    shadow.classList.remove("show");
  }
});
