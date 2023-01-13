let __body = document.querySelector("body");
let __fluid = document.querySelector("#fluid"); 
let __child1 = document.querySelector("#child1");
let __child2 = document.querySelector("#child2");
let __child3 = document.querySelector("#child3");
let __child4 = document.querySelector("#child4");
let __active = document.querySelector("#active");

// console.log(__fluid);

__child1.addEventListener('click', () => {
    __fluid.style.transform = "translateX(0)";
    __active.style.right = "240px"
})
__child2.addEventListener('click', () => {
    __fluid.style.transform = "translateX(-25%)";
    __active.style.right = "160px"
    __active.style.background = "red"
})
__child3.addEventListener('click', () => {
    __fluid.style.transform = "translateX(-50%)";
    __active.style.right = "80px"
    __active.style.background = "green"

})
__child4.addEventListener('click', () => {
    __fluid.style.transform = "translateX(-75%)";
    __active.style.right = "0px"
    __active.style.background = "yellow"

});