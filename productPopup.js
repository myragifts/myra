/* ==============================
   MYRA PRODUCT POPUP - PART 1
   Image Fullscreen Gallery + Base CSS
   ============================== */

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
      display:none;
      overflow-y:auto;
      font-family:'Poppins',sans-serif;
    }

    .myra-popup-overlay.show{
      display:block;
    }

    .myra-popup-wrap{
      min-height:100vh;
      background:#F8F8F8;
      padding-bottom:110px;
    }

    .myra-gallery{
      position:relative;
      width:100%;
      height:72vh;
      background:#F3EEE6;
      overflow:hidden;
    }

    .myra-main-img{
      width:100%;
      height:100%;
      display:flex;
      transition:transform .35s ease;
    }

    .myra-main-img img{
      min-width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      background:#F3EEE6;
    }

    .myra-close{
      position:absolute;
      top:22px;
      left:22px;
      width:64px;
      height:64px;
      border-radius:50%;
      border:none;
      background:#fff;
      font-size:30px;
      font-weight:600;
      color:#111;
      z-index:5;
      box-shadow:0 10px 30px rgba(0,0,0,.16);
      cursor:pointer;
    }

    .myra-arrow{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      width:60px;
      height:60px;
      border-radius:50%;
      border:none;
      background:#fff;
      font-size:34px;
      font-weight:800;
      color:#111;
      z-index:5;
      box-shadow:0 10px 30px rgba(0,0,0,.14);
      cursor:pointer;
    }

    .myra-arrow.left{
      left:22px;
    }

    .myra-arrow.right{
      right:22px;
    }

    .myra-dots{
      position:absolute;
      left:0;
      right:0;
      bottom:22px;
      display:flex;
      justify-content:center;
      gap:10px;
      z-index:5;
    }

    .myra-dot{
      width:14px;
      height:14px;
      border-radius:50%;
      background:#D1D5DB;
    }

    .myra-dot.active{
      background:#C9A227;
    }

    .myra-info-card{
      position:relative;
      margin:-6px 28px 0;
      background:#fff;
      border-radius:34px 34px 0 0;
      padding:34px 34px 120px;
      box-shadow:0 -12px 45px rgba(0,0,0,.10);
      z-index:2;
    }

    .myra-product-id{
      font-size:15px;
      color:#6B7280;
      font-weight:700;
      margin-bottom:18px;
      letter-spacing:.5px;
    }

    .myra-title{
      font-size:36px;
      line-height:1.15;
      color:#111827;
      font-weight:900;
      margin-bottom:18px;
    }

    .myra-price-box{
      border:1px solid #E8E0D4;
      border-radius:24px;
      padding:18px;
      background:#FFFCF8;
      margin-bottom:18px;
    }

    .myra-mrp{
      color:#9CA3AF;
      text-decoration:line-through;
      font-size:18px;
      margin-right:10px;
    }

    .myra-price{
      color:#2E2E2E;
      font-size:34px;
      font-weight:900;
      margin-right:10px;
    }

    .myra-discount{
      color:#059669;
      font-size:14px;
      font-weight:900;
      background:#ECFDF5;
      padding:7px 10px;
      border-radius:999px;
    }

    .myra-live{
      display:inline-block;
      background:#ECFDF5;
      color:#059669;
      padding:9px 14px;
      border-radius:999px;
      font-size:13px;
      font-weight:900;
      margin:6px 0 18px;
    }

    .myra-short{
      color:#4B5563;
      font-size:15px;
      line-height:1.7;
      margin-bottom:18px;
    }

    .myra-bottom-bar{
      position:fixed;
      left:0;
      right:0;
      bottom:0;
      height:96px;
      background:#fff;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:18px;
      padding:14px 24px;
      box-shadow:0 -12px 35px rgba(0,0,0,.12);
      z-index:100000;
    }

    .myra-bottom-bar button{
      border-radius:22px;
      border:none;
      font-size:17px;
      font-weight:900;
      cursor:pointer;
    }

    .myra-more-btn{
      background:#fff;
      color:#9B7B22;
      border:2px solid #E8E0D4 !important;
    }

    .myra-cart-btn{
      background:linear-gradient(135deg,#C9A227,#E7D08A);
      color:#2E2E2E;
    }

    @media(min-width:900px){
      .myra-popup-wrap{
        display:grid;
        grid-template-columns:52% 48%;
        min-height:100vh;
      }

      .myra-gallery{
        height:100vh;
        position:sticky;
        top:0;
      }

      .myra-info-card{
        margin:0;
        border-radius:0;
        min-height:100vh;
        padding:60px 58px 130px;
        overflow-y:auto;
      }

      .myra-title{
        font-size:42px;
      }
    }

    @media(max-width:520px){
      .myra-gallery{
        height:70vh;
      }

      .myra-close{
        width:56px;
        height:56px;
        font-size:28px;
        top:18px;
        left:18px;
      }

      .myra-arrow{
        width:54px;
        height:54px;
        font-size:32px;
      }

      .myra-info-card{
        margin:-4px 22px 0;
        padding:30px 26px 120px;
        border-radius:32px 32px 0 0;
      }

      .myra-title{
        font-size:31px;
      }

      .myra-price{
        font-size:30px;
      }

      .myra-bottom-bar{
        height:92px;
        padding:13px 18px;
        gap:14px;
      }
    }
  `;
  document.head.appendChild(style);
})();

let myraPopupProduct = null;
let myraCurrentImage = 0;

function openProductPopup(productId){
  let product = null;

  if(window.demoProducts && Array.isArray(window.demoProducts)){
    product = window.demoProducts.find(p => p.product_id === productId);
  }

  if(!product){
    try{
      const saved = localStorage.getItem("myra_selected_product");
      product = saved ? JSON.parse(saved) : null;
    }catch(e){}
  }

  if(!product){
    alert("Product not found");
    return;
  }

  myraPopupProduct = product;
  myraCurrentImage = 0;

  createMyraPopup(product);
}

function createMyraPopup(product){
  let old = document.getElementById("myraProductPopup");
  if(old) old.remove();

  const images = [
    product.image1,
    product.image2,
    product.image3,
    product.image4
  ].filter(Boolean);

  const viewers = Math.floor(Math.random() * 80) + 24;
  const discount = product.mrp && product.price
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  const overlay = document.createElement("div");
  overlay.className = "myra-popup-overlay show";
  overlay.id = "myraProductPopup";

  overlay.innerHTML = `
    <div class="myra-popup-wrap">

      <section class="myra-gallery">
        <button class="myra-close" onclick="closeMyraPopup()">×</button>

        <button class="myra-arrow left" onclick="changeMyraImage(-1)">‹</button>
        <button class="myra-arrow right" onclick="changeMyraImage(1)">›</button>

        <div class="myra-main-img" id="myraImageSlider">
          ${images.map(img => `<img src="${img}" alt="${product.name}">`).join("")}
        </div>

        <div class="myra-dots" id="myraDots">
          ${images.map((_,i)=>`<span class="myra-dot ${i===0?'active':''}"></span>`).join("")}
        </div>
      </section>

      <section class="myra-info-card">
        <div class="myra-product-id">${product.product_id || "MY00000"}</div>

        <h1 class="myra-title">${product.name || "MYRA Candle"}</h1>

        <div class="myra-price-box">
          <span class="myra-mrp">₹${product.mrp || product.price}</span>
          <span class="myra-price">₹${product.price}</span>
          <span class="myra-discount">${discount}% OFF</span>
        </div>

        <div class="myra-live">${viewers} people viewing now</div>

        <p class="myra-short">
          ${product.short_description || ""}
        </p>

        <div id="myraPart2Content"></div>
      </section>

    </div>

    <div class="myra-bottom-bar">
      <button class="myra-more-btn" onclick="myraMoreLikeThis()">More Like This</button>
      <button class="myra-cart-btn" onclick="myraAddToCart()">Add To Cart</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  updateMyraSlider();
}

function closeMyraPopup(){
  const popup = document.getElementById("myraProductPopup");
  if(popup) popup.remove();
  document.body.style.overflow = "";
}

function changeMyraImage(dir){
  const product = myraPopupProduct;
  if(!product) return;

  const images = [
    product.image1,
    product.image2,
    product.image3,
    product.image4
  ].filter(Boolean);

  myraCurrentImage += dir;

  if(myraCurrentImage < 0) myraCurrentImage = images.length - 1;
  if(myraCurrentImage >= images.length) myraCurrentImage = 0;

  updateMyraSlider();
}

function updateMyraSlider(){
  const slider = document.getElementById("myraImageSlider");
  const dots = document.querySelectorAll(".myra-dot");

  if(slider){
    slider.style.transform = `translateX(-${myraCurrentImage * 100}%)`;
  }

  dots.forEach((dot,i)=>{
    dot.classList.toggle("active", i === myraCurrentImage);
  });
}

function myraMoreLikeThis(){
  alert("Related products coming in Part 3");
}

function myraAddToCart(){
  alert("Quantity selection and cart logic coming in Part 2");
}
