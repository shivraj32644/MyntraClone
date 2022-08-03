var cartobj= JSON.parse(localStorage.getItem("McartData"))||[];
console.log(cartobj);

var totalmrp=0;
var totaldisc=0;
var totalamt=0;

displayData(cartobj);

function displayData(data){
    data.map(function(elem){

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
        price.innerText=elem.price;
        totalamt += parseInt(elem.price);
        var strikedoffprice=document.createElement("p");
        strikedoffprice.innerText=elem.strikedoffprice;
        totalmrp+=parseInt(elem.strikedoffprice);

        var disc=document.createElement("p");
        var off=Math.round(((elem.strikedoffprice-elem.price)/elem.strikedoffprice)*100);
        disc.innerText=off+"% OFF";
        totaldisc+=parseInt(elem.strikedoffprice-elem.price);
        prizediv.append(price,strikedoffprice,disc);

        var delivery=document.createElement("div");
        delivery.innerText="Express Delivery in 2 Days";

        document.querySelector("#leftchild").append(img);
        document.querySelector("#rightchild").append(brand,name,sizediv,prizediv,delivery);

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