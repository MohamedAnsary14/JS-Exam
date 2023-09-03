closeSideNav()
$(".side-nav-menu i.open-close-icon").click(() => {
    if ($(".side-nav-menu").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})
function openSideNav() {
    $(".side-nav-menu").animate({
        left: 0
    }, 500)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");



    // for (let i = 0; i < 5; i++) {
    //     $(".links li").eq(i).animate({
    //         top: 50
    //     }, (i + 5) * 100)
    // }
}

function closeSideNav() {
    let boxWidth = $(".side-nav-menu .nav-link").outerWidth()
    $(".side-nav-menu").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}
// $(document).ready(() => {
//     searchByName("").then(() => {
//         $(".loading-screen").fadeOut(500)
//         $("body").css("overflow", "visible")

//     })
// })

let data = [];
async function getApiData() {
    let http = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
    data = (await http.json()).meals
    displayData()
}
getApiData()

let cartona = ``;
function displayData() {
    // console.log(data.length);
    for (let i = 0; i < data.length; i++) {

        cartona += `
    <div class="col-md-3">
    <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img src="${data[i].strMealThumb}" class="w-100" alt="">
        <div class="layer">
            <h3>${data[i].strMeal}</h3>
        </div>
    </div>
</div>
    `
    }


    document.getElementById('menu').innerHTML = cartona

}
document.getElementById('search').addEventListener('click', () => {
    // console.log('hello');
    document.querySelector('#menu').classList.add('d-none')

    document.querySelector('#searchContainer').classList.replace('d-none', 'd-block')
    // getSearchData()
})
document.getElementById('nameinput').addEventListener('input', function (e) {
    SearchMealByName(e.target.value)
    // console.log(e.target.value);
})
document.getElementById('Categories').addEventListener('click', () => {
    // console.log('hello');
    document.querySelector('#menu').classList.add('d-none')

    document.querySelector('#CategoriesContainer').classList.replace('d-none', 'd-flex')
    getApidisplayCategories()
})
document.getElementById('area').addEventListener('click', () => {
    console.log('hello');
    document.querySelector('#menu').classList.add('d-none')

    getApiarea()
})
document.getElementById('Ingred').addEventListener('click', () => {
    console.log('hello');
    document.querySelector('#menu').classList.add('d-none')
    document.querySelector('#Ingredients').classList.replace('d-none', 'd-flex')
    getApiIngredients()
})
document.getElementById('Contact').addEventListener('click', () => {
    document.querySelector('#menu').classList.add('d-none')

    document.querySelector('#contact-us').classList.replace('d-none', 'd-flex')
}
)
// async function SearchMealByName(search) {
// console.log(search);
//     let http = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//     data = (await http.json()).meals
//     console.log(data);
//     // displaySearch();

// }
function displaySearch() {
    // console.log(data.length);

    for (let i = 0; i < data.length; i++) {

        cartona += `
        <div class="col-md-3">
        <div class="meal position-relative overflow-hidden  rounded-2 cursor-pointer">
            <img src="${data[i].strMeal}" class="w-100" alt="">
            <div class="layer">
                <h3>${data[i].strCategory}</h3>
            </div>
        </div>
    </div>
        `
    }

    document.getElementById('infosearch').innerHTML = cartona
}

async function getApidisplayCategories() {
    let http = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    data = (await http.json()).categories
    displayCategories()
}
function displayCategories() {


    for (let i = 0; i < data.length; i++) {

        cartona += `
               <div class="col-md-3">
                <div class="meal-info position-relative overflow-hidden rounded-2 cursor-pointer ">
                    <img class="w-100" src="${data[i].strCategoryThumb}" alt="">
                    <div class="meal-layer p-2">
                        <h3 class="m-5">${data[i].strCategory}</h3>
                        <p>${data[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>
           `
    }

    document.getElementById('CategoriesContainer').innerHTML = cartona
}
async function getApiarea() {
    let http = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    data = (await http.json()).meals
    displayarea();
}
function displayarea() {
    for (let i = 0; i < data.length; i++) {

        cartona += `
        <div class="col-md-3">
                <div class="text-center text-white">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${data[i].strArea}</h3>
                </div>
            </div>
        `
    }
    document.getElementById('rowData').innerHTML = cartona


}
async function getApiIngredients() {
    let http = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    data = (await http.json()).meals
    displayIngredients();
}
function displayIngredients() {
    for (let i = 0; i < data.length; i++) {

        cartona += `
        <div class="col-md-3 text-white">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${data[i].strIngredient}</h3>
            <p>${data[i].strDescription}</p>
            </div>
        `
    }
    document.getElementById('Ingredients').innerHTML = cartona


}




