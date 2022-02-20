var numbers = document.getElementsByClassName("numbers");
var display1 = document.getElementById("display");
var store = document.getElementById("store");
store.innerHTML = "";
var operation = ""
number = 0

document.querySelectorAll(".numbers").forEach(function(item)
{
    item.addEventListener("click", function ()
    {
        if (display1.value[0] == 0)
        {
            display1.value = ""
        }
    })
})
numbers[0].addEventListener("click", function () {display1.value += numbers[0].innerHTML});
numbers[1].addEventListener("click", function () {display1.value += numbers[1].innerHTML});
numbers[2].addEventListener("click", function () {display1.value += numbers[2].innerHTML});
numbers[3].addEventListener("click", function () {display1.value += numbers[3].innerHTML});
numbers[4].addEventListener("click", function () {display1.value += numbers[4].innerHTML});
numbers[5].addEventListener("click", function () {display1.value += numbers[5].innerHTML});
numbers[6].addEventListener("click", function () {display1.value += numbers[6].innerHTML});
numbers[7].addEventListener("click", function () {display1.value += numbers[7].innerHTML});
numbers[8].addEventListener("click", function () {display1.value += numbers[8].innerHTML});
numbers[10].addEventListener("click", function () {display1.value += numbers[10].innerHTML});

function check() {
    number = display1.value
    display1.value = 0;
}

document.getElementById("plus").addEventListener("click", function () {

    check()
    store.innerHTML = number + " + "
    operation = "plus"
})

document.getElementById("minus").addEventListener("click", function () {
    check()
    store.innerHTML = number + " - "
    operation = "minus"
})

document.getElementById("mult").addEventListener("click", function () {
    check()
    store.innerHTML = number + " x "
    operation = "mult"
})

document.getElementById("iguals").addEventListener("click", function () {
    switch (operation) {
        case "mult":
            store.innerHTML += Number(display1.value) + " = " + (Number(number) * Number(display1.value));
            display1.value = 0;
            number = 0;
            break
        case "minus":
            store.innerHTML += Number(display1.value) + " = " + (Number(number) - Number(display1.value));
            display1.value = 0;
            number = 0;
            break
        case "plus":
            store.innerHTML += Number(display1.value) + " = " + (Number(number) + Number(display1.value));
            display1.value = 0;
            number = 0;
            break
    }
})

document.getElementById("clear").addEventListener("click", function () {
    display1.value = 0;
    store.innerHTML = ""
})
