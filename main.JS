dishes_array=["Chicken Tanddor Pizza",
                    "Deluxe Veggie Pizza",
                    "Panner Tikka Pizza",
                    "Veg Extravanganza Pizza",
                    "Veg Margherita Pizza",
                ];

function add_data()
{
    var add_item = document.getElementById("topping").value;

    dishes_array.push(add_item);

    console.log(dishes_array);

    document.getElementById("display_menu2").innerHTML = dishes_array;
}
function show()
{
    var name_1 = document.getElementById("dishes_array").value;
    console.log(dishes_array);
    document.getElementById("dishes_array").innerHTML = htmldata;
}