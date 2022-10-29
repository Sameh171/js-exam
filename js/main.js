let btnSlide = document.getElementById("btnSlide");
let navSlider = document.getElementById("navSlider");
navSlider.style.display = "none";
let searchBtn = document.getElementById("Search");
let categoryBtn = document.getElementById("Categories");
let areaBtn = document.getElementById("Area");
let ingrediantsBtn = document.getElementById("Ingrediants");
let ContactUsBtn = document.getElementById("Contact Us");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let footer = document.querySelector("footer");
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
if (inp1 != null && inp2 != null) {
  inp1.addEventListener("input", function (e) {
    searchByName(e.target.value);
  });
  inp2.addEventListener("input", function (e) {
    searchByFirstLetter(e.target.value);
  });
}
displayFirst();

searchBtn.addEventListener("click", function () {
  s1.style.display = "none";
  s3.style.display = "none";
  s2.style.display = "block";
  footer.style.display = "none";
  row1.classList.remove("d-none");
  row1.classList.add("d-flex");
});
categoryBtn.addEventListener("click", function () {
  s1.style.display = "block";
  s3.style.display = "none";
  s2.style.display = "none";
  footer.style.display = "none";
  row3.classList.remove("d-flex");
  row3.classList.add("d-none");
  row1.classList.remove("d-none");
  row1.classList.add("d-flex");
  category();
});
ingrediantsBtn.addEventListener("click", function () {
  s1.style.display = "block";
  s3.style.display = "none";
  s2.style.display = "none";
  footer.style.display = "none";
  row1.classList.remove("d-flex");
  row1.classList.add("d-none");
  row3.classList.remove("d-none");
  row3.classList.add("d-flex");
  Ingrediant();
});
ContactUsBtn.addEventListener("click",function (){
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "none";
    footer.style.display = "block";
})
areaBtn.addEventListener("click",function(){
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
    footer.style.display = "none";
    row1.classList.remove("d-none");
    row1.classList.add("d-flex");
    Area()
})
btnSlide.addEventListener("click", function () {
  if (navSlider.style.display == "none") {
    $("nav").animate({ left: "200px" }, 1000);
    $(navSlider).animate({ width: "200px" }, 1000, function () {
      $("#ul").slideDown(1000);
      document.querySelector(".slider .icons").style.display = "block";
    });
    navSlider.style.display = "block";
  } else {
    $("nav").animate({ left: "0px" }, 1000);
    $(navSlider).animate({ width: "0px" }, 1000, function () {
      navSlider.style.display = "none";
    });
    document.querySelector(".slider .icons").style.display = "none";
    $("#ul").slideUp(500);
  }
});
async function searchByNameApi(name) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function searchByFirstLetterApi(letter) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function CategoriesApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function FilterByCategoryApi(cat) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function IngrediantsApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function FilterByIngrediantsApi(Ingrediant) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingrediant}`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function filterByAreaApi(area = "egyptian") {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  let finalResult = await response.json();
  return finalResult;
}
async function AreaApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let finalResult = await response.json();
  return finalResult;
}

async function displayFirst() {
  let data = await filterByAreaApi();
  let cartoona = ``;
  for (let i = 0; i < data.meals.length; i++) {
    cartoona += `<div class="col-md-3">
            <img src="${data.meals[i].strMealThumb}" class="w-100" alt="">
            <div class="text">
              <h2 class="click">${data.meals[i].strMeal}</h2>
            </div>
          </div>`;
  }
  document.getElementById("row1").innerHTML = cartoona;
  s2.style.display = "none";
  footer.style.display = "none";
  s1.style.display = "block";
  s3.style.display = "none";
  let click1 = document.querySelectorAll(".click");
for (let i = 0; i < click1.length; i++) {
  click1[i].addEventListener("click", function (e) {
     description(e.target.innerHTML);
     s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "block";
    footer.style.display = "none";
  });
}
}
async function searchByName(name) {
  let data = await searchByNameApi(name);
  let cartoona = ``;
  for (let i = 0; i < data.meals.length; i++) {
    cartoona += `<div class="col-md-3">
            <img src="${data.meals[i].strMealThumb}" class="w-100" alt="">
            <div class="text">
              <h2 class="click">${data.meals[i].strMeal}</h2>
            </div>
          </div>`;
  }
  document.getElementById("row2").innerHTML = cartoona;
  let click1 = document.querySelectorAll(".click");
  for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener("click", function (e) {
       description(e.target.innerHTML);
       s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "block";
      footer.style.display = "none";
    });
  }
}
async function searchByFirstLetter(name) {
  let data = await searchByFirstLetterApi(name);
  let cartoona = ``;
  for (let i = 0; i < data.meals.length; i++) {
    cartoona += `<div class="col-md-3">
            <img src="${data.meals[i].strMealThumb}" class="w-100" alt="">
            <div class="text">
              <h2 class="click">${data.meals[i].strMeal}</h2>
            </div>
          </div>`;
  }
  document.getElementById("row2").innerHTML = cartoona;
  let click1 = document.querySelectorAll(".click");
  for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener("click", function (e) {
       description(e.target.innerHTML);
       s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "block";
      footer.style.display = "none";
    });
  }
}

async function category() {
  let data = await CategoriesApi();
  data = data.categories;
  let cartoona = ``;
  for (let i = 0; i < data.length; i++) {
    cartoona += `<div class="col-md-3">
            <img src="${data[i].strCategoryThumb}" class="w-100" alt="">
            <div class="text">
              <h2 class="event">${data[i].strCategory}</h2>
            </div>
          </div>`;
  }
  document.getElementById("row1").innerHTML = cartoona;
  let click = document.querySelectorAll(".event");
  for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function (e) {
      FilterByCategory(e.target.innerHTML);
    });
  }
}
async function FilterByCategory(name) {
  let data = await FilterByCategoryApi(name);
  data = data.meals;
  let cartoona = ``;
  for (let i = 0; i < data.length; i++) {
    cartoona += `<div class="col-md-3">
            <img src="${data[i].strMealThumb}" class="w-100" alt="">
            <div class="text">
              <h2 class="click">${data[i].strMeal}</h2>
            </div>
          </div>`;
  }
  document.getElementById("row1").innerHTML = cartoona;
  let click1 = document.querySelectorAll(".click");
  for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener("click", function (e) {
       description(e.target.innerHTML);
       s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "block";
      footer.style.display = "none";
    });
  }
}

async function Area() {
  let data = await AreaApi();
  data = data.meals;
  let cartoona = ``;
  for (let i = 0; i < data.length; i++) {
    cartoona += `<div class="col-md-3">
    <div class="item">
      <i class="fa-solid fa-city fa-3x"></i>
      <h2 class="event">${data[i].strArea}</h2>
    </div>
  </div>`;
  }
  document.getElementById("row1").innerHTML = cartoona;
  let click = document.querySelectorAll(".event");
  for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function (e) {
      FilterByArea(e.target.innerHTML);
    });
  }
}
async function FilterByArea(name) {
  let data = await filterByAreaApi(name);
  data = data.meals;
  let cartoona = ``;
  for (let i = 0; i < data.length; i++) {
    cartoona += `<div class="col-md-3">
                  <img src="${data[i].strMealThumb}" class="w-100" alt="">
                  <div class="text">
                    <h2 class="click">${data[i].strMeal}</h2>
                  </div>
                </div>`;
  }
  document.getElementById("row1").innerHTML = cartoona;
  let click1 = document.querySelectorAll(".click");
  for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener("click", function (e) {
       description(e.target.innerHTML);
       s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "block";
      footer.style.display = "none";
    });
  }
}

async function Ingrediant() {
  let data = await IngrediantsApi();
  data = data.meals;
  let cartoona = ``;
  for (let i = 0; i < 20; i++) {
    cartoona += `<div class="col-md-3 p-2">
          <i class="fa-solid fa-bowl-food fa-3x"></i>
          <div class="post">
            <h2 class="event">${data[i].strIngredient}</h2>
            <p>${data[i].strDescription.slice(0, 200)}</p>
          </div>
        </div>`;
  }
  document.getElementById("row3").innerHTML = cartoona;
  let click = document.querySelectorAll(".event");
  for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function (e) {
      FilterByIngrediant(e.target.innerHTML);
    });
  }
}
async function FilterByIngrediant(name) {
  let data = await FilterByIngrediantsApi(name);
  data = data.meals;
  let cartoona = ``;
  for (let i = 0; i < data.length; i++) {
    cartoona += `<div class="col-md-3">
                  <img src="${data[i].strMealThumb}" class="w-100" alt="">
                  <div class="text">
                    <h2 class="click">${data[i].strMeal}</h2>
                  </div>
                </div>`;
  }
  row1.classList.remove("d-none");
  row1.classList.add("d-flex");
  document.getElementById("row1").innerHTML = cartoona;
  row3.classList.remove("d-flex");
  row3.classList.add("d-none");
  let click1 = document.querySelectorAll(".click");
  for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener("click", function (e) {
       description(e.target.innerHTML);
       s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "block";
      footer.style.display = "none";
    });
  }
}
async function description(name){
    let data = await searchByNameApi(name);
  data = data.meals[0];
    let cartoona =``
    cartoona += `<div class="p-5 m-3 row g-3 d-flex align-items-center">
    <div class="col-md-6 text-center">
      <div class="img">
        <img src="${data.strMealThumb}" alt="" class="w-75">
      </div>
      <h2>${data.strMeal}</h2>
    </div>
    <div class="col-md-6">
      <div class="item2">
        <h1>instruction</h1>
        <p>${data.strInstructions}</p>
        <p><span class="fw-bolder">Area:</span>${data.strArea}</p>
        <p><span class="fw-bolder">category:</span>${data.strCategory}</p>
        <h3>Tags:</h3>
        <a class="btn btn-danger" href="${data.strYoutube}">youtube</a>
        <a class="btn btn-success" href="${data.strSource}">source</a>
      </div>
    </div>
  </div>`
  document.getElementById("row4").innerHTML=cartoona;


}
