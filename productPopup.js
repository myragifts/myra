/* MYRA PRODUCT POPUP - CLEAN FINAL PART 1 */

(function(){
  if(document.getElementById("myraPopupStyle")) return;

  const style = document.createElement("style");
  style.id = "myraPopupStyle";

  style.innerHTML = `
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
.myra-main-img img{
  min-width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
  user-select:none;
  -webkit-user-drag:none;
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
  line-height:1;
  padding:0;
}
.myra-arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:52px;
  height:52px;
  border-radius:50%;
  border:none;
  background:rgba(255,255,255,.92);
  font-size:34px;
  font-weight:700;
  cursor:pointer;
  z-index:10;
  box-shadow:0 10px 28px rgba(0,0,0,.12);
}
.myra-arrow.left{left:4px;}
.myra-arrow.right{right:4px;}
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
  letter-spacing:1.2px;
}
.myra-title{
  font-family:'Playfair Display',serif;
  font-size:38px;
  line-height:1.12;
  font-weight:700;
  color:#111827;
  margin-bottom:24px;
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
  white-space:nowrap;
}
.qty-premium-box{
  background:linear-gradient(135deg,#FFFDF8,#FFF8E6);
  border:1px solid #E7D08A;
  padding:18px;
  border-radius:24px;
  margin-bottom:22px;
  box-shadow:0 12px 34px rgba(201,162,39,.10);
}
.qty-title{
  font-family:'Playfair Display',serif;
  font-size:22px;
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
`;
 .myra-live{
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 18px;
border-radius:999px;
background:#EEF4FF;
color:#4F46E5;
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
}
.option-btn.active{
background:#FFF8E6;
border:1px solid #D4AF37;
color:#8B6914;
}
.option-btn.locked{
pointer-events:none;
}
.shipping-card{
background:#F5F7FF;
border:1px solid #DDE4FF;
color:#334155;
border-radius:24px;
padding:20px;
margin-bottom:28px;
line-height:1.9;
font-weight:700;
}
.emotion-card{
background:linear-gradient(135deg,#FFFDF7,#FFF7E8);
border:1px solid #F0E0AE;
border-radius:26px;
padding:26px;
margin-bottom:28px;
box-shadow:0 12px 30px rgba(212,175,55,.08);
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
  
