const product =[
    {
        image:'image/kitchen10.jpg',
        title: 'Wooden Spice Container',
        price: 2450
    },

    {
       image:'image/tote2.jpg',
        title: 'Jute tote bag',
        price: 1275 
    },

    {
       image:'image/bottle 5.jpj',
        title: 'Bamboo thermos',
        price: 2050
    },

    {
       image:'image/tote (1).jpj',
        title: 'Organic cotton tote bag',
        price: 925
    },

    {
       image:'image/kitchen4.jpg',
        title: 'Wooden cuttlery set',
        price: 975
    },
]

const categories = [...new Set(product.map((item)=>
{return item}))];

function delElement(a){
    categories.splice(a, 1);
    displaycart();
}

document.getElementById("check").addEventListener("click", function(){
    alert("Your items are successfully checked out.");
});



function promo(){
    let promocode=document.getElementById('promocode').value;
    if(promocode==1234){
        displaycart(100);
    }
    else{
        prompt("Enter correct promocode")
    }
}

function displaycart(c){
    let j=0, total=0;
    document.getElementById("itemA").innerHTML= categories.length+"Items";
    document.getElementById("itemB").innerHTML=categories.length+"Items";
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";

        document.getElementById("totalA").innerHTML="Rs.00.00";
        document.getElementById("totalB").innerHTML="Rs.00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>
        {
            let{image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "Rs."+ total +".00";

            if(c==100){
                document.getElementById("totalB").innerHTML = "Rs."+(total-c)+".00";
            }
            else{
                document.getElementById("totalB").innerHTML="Rs."+(total)+".00";
            }
        

            return(
                `<tr>
                   <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                   <td width="360"><p style='font-size:15px;'>${title}</p></td>
                   <td width="150"><h2 style='font-size:15px; color:red; '>Rs. ${price}.00</h2></td>
                   <td width="70">`+"<i class='fa-solid fa-trash'onclick='delElement("+(j++)+")'></i></td> "+
                   `</tr>`
            );
        }).join('');
    }
}
displaycart();