var cartobj= JSON.parse(localStorage.getItem("McartData"))||[];
console.log(cartobj);

var totalmrp=0;
var totaldisc=0;
var totalamt=0;

displayData(cartobj);

function displayData(data){
    data.map(function(elem,index){

        var img=document.createElement("img");
        img.setAttribute("src",elem.image_url);
        
        var brand=document.createElement("div");
        brand.innerText=elem.brand;

        var name=document.createElement("p");
        name.innerText=elem.name;

        var sizediv=document.createElement("div");
        var size=document.createElement("button");
        size.innerText="Size"
        var qty=document.createElement("button");
        qty.innerText="Qty:1"
        sizediv.append(size,qty);

        var prizediv= document.createElement("div");
        var price=document.createElement("p");
        price.innerText="₹"+elem.price;
        price.style.fontWeight="600";
        totalamt += parseInt(elem.price);
        var strikedoffprice=document.createElement("p");
        strikedoffprice.innerText="₹"+elem.strikedoffprice;
        strikedoffprice.style.textDecoration="line-through";
        strikedoffprice.style.color="#94969f";
        totalmrp+=parseInt(elem.strikedoffprice);

        var disc=document.createElement("p");
        var off=Math.round(((elem.strikedoffprice-elem.price)/elem.strikedoffprice)*100);
        disc.innerText=off+"% OFF";
        disc.style.color="#f16565";
        totaldisc+=parseInt(elem.strikedoffprice-elem.price);
        prizediv.append(price,strikedoffprice,disc);

        var delivery=document.createElement("div");
        delivery.innerText="Express Delivery in 2 Days";

        var leftchild =document.createElement("div");
        leftchild.append(img);
        leftchild.setAttribute("class","leftchild");
        var rightchild= document.createElement("div");
        rightchild.append(brand,name,sizediv,prizediv,delivery);
        rightchild.setAttribute("class","rightchild");

        var crossdiv=document.createElement("div");
        var cross=document.createElement("img");
        cross.setAttribute("src","https://cdn.onlinewebfonts.com/svg/img_265949.png");
        crossdiv.setAttribute("class","crossdiv");
        crossdiv.append(cross);
        crossdiv.addEventListener("click",function(){
            removeRow(elem);
        });


        // var popupdiv=document.createElement("div");
        // popupdiv.setAttribute("class","popupdiv");
        // var selectdiv=document.createElement("div");
        // selectdiv.innerText="Select Quantity"
        // var crosspop=document.createElement("img");
        // crosspop.setAttribute("src","https://cdn.onlinewebfonts.com/svg/img_265949.png");
        // selectdiv.append(crosspop);
        
        // var numberdiv=document.createElement("div");
        // var n1=document.createElement("div");
        // n1.innerText= "1";
        // n1.setAttribute("id","n1");
        // var n2=document.createElement("div");
        // n2.innerText= "2";
        // n2.setAttribute("id","n2")
        // var n3=document.createElement("div");
        // n3.innerText= "3";
        // n3.setAttribute("id","n3")
        // var n4=document.createElement("div");
        // n4.innerText= "4";
        // n4.setAttribute("id","n4")
        // var n5=document.createElement("div");
        // n5.innerText= "5";
        // n5.setAttribute("id","n5")
        // var n6=document.createElement("div");
        // n6.innerText= "6";
        // n6.setAttribute("id","n6")
        // var n7=document.createElement("div");
        // n7.innerText= "7";
        // n7.setAttribute("id","n7")
        // var n8=document.createElement("div");
        // n8.innerText= "8";
        // n8.setAttribute("id","n8")
        // var n9=document.createElement("div");
        // n9.innerText= "9";
        // n9.setAttribute("id","n9")
        // var n10=document.createElement("div");
        // n10.innerText= "10";
        // n10.setAttribute("id","n10")
        // numberdiv.append(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);

        // var done=document.createElement("button");
        // done.innerText="Done";
        
        // popupdiv.append(selectdiv,numberdiv,done);
        var cartitemdiv=document.createElement("div");
        cartitemdiv.setAttribute("class","cartItemsList");
        cartitemdiv.append(leftchild,rightchild,crossdiv);

        document.querySelector("#cartitemparent").append(cartitemdiv);

    })
}
displayRightside()

function displayRightside(){
    var mrpdiv=document.createElement("div");
    var mrp1=document.createElement("div");
    var mrp2=document.createElement("div");
    mrp1.innerText="Total MRP";
    mrp2.innerText="₹"+totalmrp;
    mrpdiv.append(mrp1,mrp2);

    var discdiv=document.createElement("div");
    var disc1=document.createElement("div");
    var disc2=document.createElement("div");
    disc1.innerText="Discount on MRP";
    disc2.innerText="₹"+totaldisc;
    discdiv.append(disc1,disc2);

    var coupondiv=document.createElement("div");
    var coupon1=document.createElement("div");
    var coupon2=document.createElement("div");
    coupon1.innerText="Coupon Discount";
    coupon2.innerText="Apply Coupon";
    coupondiv.append(coupon1,coupon2);

    var convdiv=document.createElement("div");
    var conv1=document.createElement("div");
    conv1.innerText="Convenience Fee";
    var conv2=document.createElement("div");
    var span1= document.createElement("span");
    span1.innerText="₹99";
    span1.style.textDecoration="line-through";
    var span2=document.createElement("span");
    span2.innerText="FREE";
    span2.style.color= "#03a685";
    conv2.append(span1,span2);
    convdiv.append(conv1,conv2);

    var totaldiv=document.createElement("div");
    var total1=document.createElement("div");
    total1.innerText="Total Amount";
    var total2=document.createElement("div");
    total2.innerText="₹"+totalamt;
    totaldiv.append(total1,total2);

    var btn=document.createElement("button");
    btn.innerText="PLACE ORDER";

    document.getElementById("priceBreakup").append(mrpdiv,discdiv,coupondiv,convdiv,totaldiv,btn);


}
function removeRow(){
    event.target.parentNode.remove();
}