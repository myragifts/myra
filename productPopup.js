/* MYRA PRODUCT POPUP - CLEAN FINAL PART 1 */

(function(){
if(document.getElementById("myraPopupStyle")) return;

const style=document.createElement("style");
style.id="myraPopupStyle";

style.innerHTML=`
.myra-popup-overlay{
position:fixed;
inset:0;
background:#F8F8F8;
z-index:99999;
overflow-y:auto;
display:none;
font-family:'Poppins',sans-serif;
}
.myra-popup-overlay.show{display:block;}
.myra-popup-wrap{
min-height:100vh;
background:#F8F8F8;
padding-bottom:120px;
}
.myra-gallery{
position:relative;
width:100%;
height:72vh;
overflow:hidden;
background:#F3EEE6;
}
.myra-main-img{
display:flex;
width:100%;
height:100%;
transition:transform .35s ease;
}
@media (min-width:768px){

  .myra-gallery{
    height:70vh;
    background:#0f0f0f;
  }

  .myra-main-img img{
    object-fit:cover;
    object-position:center;
  }

}
.myra-close{
position:absolute;
top:18px;
left:18px;
z-index:10;
background:transparent;
border:none;
font-size:42px;
font-weight:700;
color:#fff;
cursor:pointer;
text-shadow:0 2px 10px rgba(0,0,0,.55);
}
.myra-arrow{
position:absolute;
top:50%;
transform:translateY(-50%);
width:auto;
height:auto;
border-radius:0;
border:none;
background:transparent;
box-shadow:none;
font-size:48px;
font-weight:700;
color:#fff;
cursor:pointer;
z-index:10;
text-shadow:0 2px 8px rgba(0,0,0,.6);
padding:0;
}

.myra-arrow.left{
left:8px;
}

.myra-arrow.right{
right:8px;
}
.myra-dots{
position:absolute;
bottom:18px;
left:0;
right:0;
display:flex;
justify-content:center;
gap:12px;
z-index:10;
}
.myra-dot{
width:14px;
height:14px;
border-radius:50%;
background:rgba(255,255,255,.75);
}
.myra-dot.active{background:#D4AF37;}
.myra-info-card{
margin-top:-6px;
background:#fff;
border-radius:34px 34px 0 0;
padding:34px 24px 130px;
box-shadow:0 -12px 45px rgba(0,0,0,.10);
}
.myra-product-id{
font-size:14px;
font-weight:700;
color:#6B7280;
margin-bottom:14px;
letter-spacing:1px;
}
.myra-title{
font-size:38px;
line-height:1.12;
font-weight:900;
color:#111827;
margin-bottom:24px;
font-family:'Playfair Display',serif;
}
.myra-price-box{
width:100%;
background:#FFFCF7;
border:1px solid #EEE7D7;
border-radius:26px;
padding:18px;
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:18px;
}
.myra-mrp{
font-size:22px;
text-decoration:line-through;
color:#9CA3AF;
font-weight:700;
}
.myra-price{
font-size:40px;
font-weight:900;
color:#111827;
}
.myra-discount{
background:#E7FAF3;
color:#059669;
padding:10px 14px;
border-radius:999px;
font-size:14px;
font-weight:800;
}
.qty-premium-box{
background:linear-gradient(135deg,#FFFDF8,#FFF8E6);
border:1px solid #E7D08A;
padding:18px;
border-radius:24px;
margin-bottom:22px;
}
.qty-title{
font-size:22px;
font-family:'Playfair Display',serif;
font-weight:700;
color:#111827;
margin-bottom:4px;
}
.qty-sub{
font-size:13px;
color:#7A6B4D;
margin-bottom:14px;
font-weight:600;
}
.myra-live{
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 18px;
border-radius:999px;
background:#FFF8E6;
color:#8B6914;
border:1px solid #E7D08A;
font-weight:800;
font-size:14px;
margin-bottom:22px;
}
.myra-description{
font-size:18px;
line-height:1.9;
color:#4B5563;
margin-bottom:28px;
}
.myra-section-title{
font-size:22px;
font-weight:800;
margin-bottom:14px;
color:#111827;
font-family:'Playfair Display',serif;
}
.option-grid{
display:flex;
flex-wrap:wrap;
gap:12px;
margin-bottom:28px;
}
.option-btn{
padding:14px 18px;
border-radius:20px;
border:1px solid #E5E7EB;
background:#fff;
font-weight:700;
font-size:15px;
cursor:pointer;
transition:.25s;
user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
touch-action:manipulation;
}
.option-btn.active{
background:linear-gradient(135deg,#FFF8E6,#FFF3C4);
border:2px solid #D4AF37;
color:#8B6914;

box-shadow:
0 0 0 1px rgba(212,175,55,.25),
0 8px 20px rgba(212,175,55,.25),
0 0 18px rgba(212,175,55,.20);

transform:translateY(-2px);
}
.shipping-card{
background:#FFFBF0;
border:1px solid #E7D08A;
color:#8B6914;
border-radius:20px;
padding:18px 22px;
margin-bottom:28px;
line-height:1.9;
font-weight:700;

box-shadow:
0 0 0 1px rgba(212,175,55,.15),
0 6px 18px rgba(212,175,55,.12);
}
.emotion-card{
background:linear-gradient(135deg,#FFFDF7,#FFF7E8);
border:1px solid #F0E0AE;
border-radius:26px;
padding:26px;
margin-bottom:28px;
}
.emotion-card p{
font-size:24px;
line-height:1.7;
font-family:'Playfair Display',serif;
color:#6F5310;
}
.review-card{
background:#FFFBEB;
color:#7C5A00;
display:inline-flex;
align-items:center;
gap:8px;
padding:14px 20px;
border-radius:999px;
font-size:16px;
font-weight:800;
margin-bottom:28px;
}
.qty-price-box{
background:#FFFDF7;
border:1px solid #E7D08A;
border-radius:20px;
padding:16px;
margin-top:14px;
margin-bottom:22px;
}

.qty-final-price{
font-size:28px;
font-weight:900;
color:#111827;
margin:8px 0;
}

.qty-old-price{
font-size:18px;
color:#9CA3AF;
text-decoration:line-through;
margin-right:10px;
}

.qty-save-msg{
font-size:14px;
font-weight:700;
color:#8B6914;
}
.myra-bottom-bar{
position:fixed;
left:0;
right:0;
bottom:0;
background:#fff;
padding:14px 18px;
display:grid;
grid-template-columns:1fr 1fr;
gap:14px;
box-shadow:0 -12px 30px rgba(0,0,0,.12);
z-index:100000;
}
.myra-btn{
height:64px;
border-radius:22px;
font-size:18px;
font-weight:900;
cursor:pointer;
}
.myra-cart-btn{
background:#fff;
border:2px solid #E6DED0;
color:#9B7B22;
}
.myra-buy-btn{
border:none;
background:linear-gradient(135deg,#D4AF37,#EAD57D);
color:#111827;
}
.myra-toast{
position:fixed;
left:50%;
bottom:100px;
transform:translateX(-50%);
background:#2E2E2E;
color:#fff;
padding:14px 20px;
border-radius:999px;
font-weight:700;
z-index:100001;
animation:fadeToast 3s forwards;
}
@keyframes fadeToast{
0%{opacity:0}
10%{opacity:1}
90%{opacity:1}
100%{opacity:0}
}
`;
document.head.appendChild(style);
})();
let myraPopupProduct=null;
let myraCurrentImage=0;
let selectedQty="";
let selectedFragrance="";

function openProductPopup(productId){

let product=null;

if(window.demoProducts){
product=window.demoProducts.find(
p=>p.product_id===productId
);
}

if(!product){
const saved=localStorage.getItem("myra_selected_product");
if(saved) product=JSON.parse(saved);
}

if(!product){
alert("Product not found");
return;
}

myraPopupProduct=product;
selectedFragrance=product.fragrance||"";
selectedQty="";
myraCurrentImage=0;

const images=[
product.image1,
product.image2,
product.image3,
product.image4
].filter(Boolean);

const discount=Math.round(
((product.mrp-product.price)/product.mrp)*100
);

let viewers=Math.floor(Math.random()*80)+20;

const popup=document.createElement("div");
popup.className="myra-popup-overlay show";
popup.id="myraProductPopup";

popup.innerHTML=`

<div class="myra-popup-wrap">

<div class="myra-gallery">

<button class="myra-close"
onclick="closeMyraPopup()">
×
</button>

<button class="myra-arrow left"
onclick="changeMyraImage(-1)">
‹
</button>

<button class="myra-arrow right"
onclick="changeMyraImage(1)">
›
</button>

<div class="myra-main-img"
id="myraImageSlider">

${images.map(img=>`
<img src="${img}">
`).join("")}

</div>

<div class="myra-dots">

${images.map((_,i)=>`
<div class="myra-dot
${i===0?'active':''}">
</div>
`).join("")}

</div>

</div>

<div class="myra-info-card">

<div class="myra-product-id">
${product.product_id}
</div>

<h1 class="myra-title">
${product.name}
</h1>

<div class="myra-price-box">

<div class="myra-mrp">
₹${product.mrp}
</div>

<div class="myra-price">
₹${product.price}
</div>

<div class="myra-discount">
${discount}% OFF
</div>

</div>

<!-- WORK NO 7 -->

<div class="qty-premium-box">

<div class="qty-title">
Choose Quantity
</div>

<div class="qty-sub">
Better value on higher quantity packs
</div>

<div class="option-grid">

${[
"1 pcs",
"2 pcs",
"4 pcs",
"12 pcs",
"24 pcs",
"50 pcs",
"100 pcs"
].map(q=>`

<button
class="option-btn qty-btn"
onclick="selectQty(this,'${q}')">

${q}

</button>

`).join("")}

</div>
<div id="myraQtyPriceBox" class="qty-price-box">

  <div>
    Selected: 1 pcs
  </div>

  <div class="qty-final-price">
    ₹${product.price}
  </div>

  <div class="qty-save-msg">
    💡 Increase Quantity and Lower Your Price
  </div>

</div>
</div>

<div class="myra-live">
👀 ${viewers} people viewing now
</div>

<div class="myra-description">
${product.long_description || ""}
</div>

<div class="myra-section-title">
Fragrance
</div>
<div class="option-grid">
  <button class="option-btn active" disabled>
    ${product.fragrance || "Sandalwood"}
  </button>
</div>

<div class="myra-section-title">
Burn Time
</div>

<div class="option-grid">
  <button class="option-btn active" disabled>
    ${product.burn_time || "240 minutes"}
  </button>
</div>

<div class="myra-section-title">
Wax Type
</div>

<div class="option-grid">
  <button class="option-btn active" disabled>
    ${product.wax_type || "Soy Wax"}
  </button>
</div>

<div class="myra-section-title">
Best For
</div>

<div class="option-grid">

${(product.best_for || [
"🏡 Home Decor",
"🎁 Gift Purpose",
"🕉️ Puja Room",
"🧘 Meditation"
]).slice(0,4).map(o=>`

<button class="option-btn active" disabled>
${o}
</button>

`).join("")}

</div>


<div class="shipping-card">
  🚚 Free Shipping on Orders ₹499+
  <br>
  📦 Flat ₹40 Shipping on Orders Below ₹499
  <br>
  🚛 Estimated Delivery 3–7 Days
</div>

<div class="myra-section-title">
Why You'll Love It
</div>

<div class="option-grid">
  <button class="option-btn active">Long Lasting Fragrance</button>
  <button class="option-btn active">Premium Gift Feel</button>
  <button class="option-btn active">Beautiful Home Decor</button>
  <button class="option-btn active">Peaceful Ambience</button>
</div>

<div class="myra-section-title">
Customer Reviews
</div>

<div class="review-card">
  ⭐ ${product.rating || "4.8"} Rating • ${product.reviews || "120"} Reviews
</div>

</div>

</div>

<div class="myra-bottom-bar">
  <button class="myra-btn myra-cart-btn" onclick="myraAddToCart()">
    More Like This
  </button>

  <button class="myra-btn myra-buy-btn" onclick="myraBuyNow()">
    Add To Cart
  </button>
</div>

`;

document.body.appendChild(popup);
document.body.style.overflow="hidden";

updateMyraSlider();


/* LIVE VIEW UPDATE EVERY 4 SECONDS */

const viewerBox = popup.querySelector(".myra-live");

setInterval(() => {

const count = Math.floor(Math.random()*80)+20;

viewerBox.innerHTML =
`👀 ${count} people viewing now`;

},4000);

}



function createMyraToast(message){
  const old=document.getElementById("myraToast");
  if(old) old.remove();

  const toast=document.createElement("div");
  toast.id="myraToast";
  toast.className="myra-toast";
  toast.innerHTML=`✨ ${message}`;

  document.body.appendChild(toast);

  setTimeout(()=>{
    toast.remove();
  },3000);
}

function closeMyraPopup(){
  const popup=document.getElementById("myraProductPopup");
  if(popup) popup.remove();

  document.body.style.overflow="";
}

function changeMyraImage(direction){
  const images=[
    myraPopupProduct.image1,
    myraPopupProduct.image2,
    myraPopupProduct.image3,
    myraPopupProduct.image4
  ].filter(Boolean);

  myraCurrentImage += direction;

  if(myraCurrentImage < 0){
    myraCurrentImage = images.length - 1;
  }

  if(myraCurrentImage >= images.length){
    myraCurrentImage = 0;
  }

  updateMyraSlider();
}

function updateMyraSlider(){
  const slider=document.getElementById("myraImageSlider");

  if(slider){
    slider.style.transform=
    `translateX(-${myraCurrentImage*100}%)`;
  }

  document.querySelectorAll(".myra-dot").forEach((dot,index)=>{
    dot.classList.toggle("active",index===myraCurrentImage);
  });
}

function selectFragrance(btn,value){
  selectedFragrance=value;

  document.querySelectorAll(".option-btn").forEach(b=>{
    if(b.innerText.trim()===value){
      b.classList.add("active");
    }
  });

  btn.classList.add("active");
}

function selectQty(btn,value){

selectedQty=value;

document.querySelectorAll(".qty-btn").forEach(b=>{
b.classList.remove("active");
});

btn.classList.add("active");

const deal=getQuantityDeal(value,myraPopupProduct.price);

const box=document.getElementById("myraQtyPriceBox");

if(!box) return;

if(deal.discount===0){

box.innerHTML=`
<div>
Selected: ${deal.count} pcs
</div>

<div class="qty-final-price">
₹${deal.finalTotal}
</div>

<div class="qty-save-msg">
${deal.msg}
</div>
`;

}else{

box.innerHTML=`
<div>
Selected: ${deal.count} pcs
</div>

<div>
<span class="qty-old-price">₹${deal.normalTotal}</span>
<span class="qty-final-price">₹${deal.finalTotal}</span>
</div>

<div class="qty-save-msg">
${
deal.count===50
? `🚀 You Saved ₹${deal.saved} • Perfect For Events`
: deal.count===100
? `👑 Maximum Savings • You Saved ₹${deal.saved}`
: `${deal.msg} ₹${deal.saved}`
}
</div>
`;

}

}
function getQuantityDeal(qty, price){
  const count = parseInt(qty);

  const deals = {
    1:{ discount:0,  msg:"💡 Increase Quantity and Lower Your Price" },
    2:{ discount:5,  msg:"💰 You Saved" },
    4:{ discount:10, msg:"⭐ Most Popular • You Saved" },
    12:{ discount:15,msg:"🔥 Best Value • You Saved" },
    24:{ discount:18,msg:"🏆 Smart Pack • Big Savings" },
    50:{ discount:22,msg:"🚀 You Saved • Perfect For Events" },
    100:{discount:25,msg:"👑 Maximum Savings • You Saved" }
  };

  const deal = deals[count] || deals[1];
  const normalTotal = price * count;
  const finalTotal = Math.round(normalTotal - (normalTotal * deal.discount / 100));
  const saved = normalTotal - finalTotal;

  return { count, normalTotal, finalTotal, saved, discount:deal.discount, msg:deal.msg };
}
function myraAddToCart(){
  if(!selectedQty){
    createMyraToast("Please select quantity");
    return;
  }

  createMyraToast(`${selectedQty} added to cart`);
}

function myraBuyNow(){
  if(!selectedQty){
    createMyraToast("Please select quantity");
    return;
  }

  createMyraToast(`${selectedQty} added to cart`);
}

window.openProductPopup=openProductPopup;
window.closeMyraPopup=closeMyraPopup;
window.changeMyraImage=changeMyraImage;
window.selectFragrance=selectFragrance;
window.selectQty=selectQty;
window.myraAddToCart=myraAddToCart;
window.myraBuyNow=myraBuyNow;
