/* ==============================
   MYRA PRODUCT POPUP FULL FINAL
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

    .myra-popup-overlay.show{display:block;}

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
      font-weight:700;
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
      font-weight:900;
      color:#111;
      z-index:5;
      box-shadow:0 10px 30px rgba(0,0,0,.14);
      cursor:pointer;
    }

    .myra-arrow.left{left:22px;}
    .myra-arrow.right{right:22px;}

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
      width:13px;
      height:13px;
      border-radius:50%;
      background:#D1D5DB;
    }

    .myra-dot.active{background:#C9A227;}

    .myra-info-card{
      position:relative;
      margin:-6px 28px 0;
      background:#fff;
      border-radius:34px 34px 0 0;
      padding:34px 34px 130px;
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
      margin-bottom:16px;
    }

    .myra-price-box{
      border:1px solid #E8E0D4;
      border-radius:24px;
      padding:18px;
      background:#FFFCF8;
      margin-bottom:16px;
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
      margin:6px 0 16px;
    }

    .myra-short,
    .myra-long{
      color:#4B5563;
      font-size:15px;
      line-height:1.7;
      margin-bottom:16px;
    }

    .myra-section{
      margin-top:22px;
    }

    .myra-section h3{
      font-size:17px;
      font-weight:900;
      color:#111827;
      margin-bottom:12px;
    }

    .myra-box-grid{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
    }

    .myra-option{
      border:1px solid #E8E0D4;
      background:#fff;
      color:#555;
      padding:10px 13px;
      border-radius:14px;
      font-size:13px;
      font-weight:700;
      cursor:pointer;
    }

    .myra-option.active{
      background:#FFF8E1;
      color:#7A5A00;
      border-color:#C9A227;
      box-shadow:0 8px 20px rgba(201,162,39,.12);
    }

    .myra-option.selected{
      background:#2E2E2E;
      color:#fff;
      border-color:#2E2E2E;
    }

    .myra-rating{
      background:#FFF8E1;
      color:#7A5A00;
      padding:12px 14px;
      border-radius:18px;
      font-weight:800;
      display:inline-block;
      margin-bottom:12px;
    }

    .myra-ship{
      background:#ECFDF5;
      color:#059669;
      border-radius:18px;
      padding:14px;
      font-weight:800;
      line-height:1.6;
    }

    .myra-love-list{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:10px;
    }

    .myra-love-list div{
      background:#FFFCF8;
      border:1px solid #E8E0D4;
      border-radius:16px;
      padding:12px;
      font-size:13px;
      font-weight:700;
      color:#555;
    }

    .myra-emotion{
      background:linear-gradient(135deg,#FFF8E1,#FFFCF8);
      border:1px solid #E8E0D4;
      color:#5B4300;
      border-radius:22px;
      padding:18px;
      font-size:15px;
      line-height:1.7;
      font-weight:700;
    }

    .myra-review{
      background:#FFFCF8;
      border:1px solid #E8E0D4;
      border-radius:18px;
      padding:14px;
      margin-bottom:10px;
      font-size:14px;
      color:#555;
      line-height:1.6;
    }

    .myra-related{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:12px;
    }

    .myra-related-card{
      border:1px solid #E8E0D4;
      border-radius:18px;
      overflow:hidden;
      background:#fff;
      cursor:pointer;
    }

    .myra-related-card img{
      width:100%;
      height:120px;
      object-fit:cover;
      display:block;
    }

    .myra-related-card div{
      padding:10px;
      font-size:13px;
      font-weight:800;
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

    .myra-cart-btn{
      background:#fff;
      color:#9B7B22;
      border:2px solid #E8E0D4 !important;
    }

    .myra-buy-btn{
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
        padding:60px 58px 140px;
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
        padding:30px 26px 130px;
        border-radius:32px 32px 0 0;
      }

      .myra-title{
        font-size:31px;
      }

      .myra-price{
        font-size:30px;
      }

      .myra-love-list{
        grid-template-columns:1fr;
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
let myraSelectedQuantity = "";
let myraSelectedBurnTime = "";

const MYRA_BURN_TIMES = [
  "60 minutes",
  "120 minutes",
  "180 minutes",
  "240 minutes",
  "300 minutes"
];

const MYRA_QUANTITIES = [
  "1 pcs",
  "2 pcs",
  "3 pcs",
  "4 pcs",
  "6 pcs",
  "12 pcs",
  "24 pcs",
  "50 pcs",
  "100 pcs"
];

const MYRA_MOODS = [
  "✨ Positive Vibes",
  "😌 Stress Relief",
  "🧘 Mind Calmness",
  "🌟 Mood Enhancer",
  "❤️ Romantic Ambience",
  "🕉️ Divine Temple Feeling",
  "🙏 Spiritual Peace",
  "🕯️ Prayer & Meditation",
  "💤 Better Sleep Environment",
  "🎉 Festival Celebration Mood",
  "🌿 Fresh Morning Energy"
];

const MYRA_OCCASIONS = [
  "🏡 Home Decor",
  "🎁 Gift Purpose",
  "🕉️ Puja Room",
  "💕 Date Night",
  "🛁 Self Care",
  "🎉 Festival Use",
  "💼 Office Desk",
  "🧘 Meditation"
];

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
  myraSelectedQuantity = "";
  myraSelectedBurnTime = product.burn_time || "";

  createMyraPopup(product);
}

function createMyraPopup(product){
  let old = document.getElementById("myraProductPopup");
  if(old) old.remove();

  const images = [product.image1,product.image2,product.image3,product.image4].filter(Boolean);
  const viewers = Math.floor(Math.random() * 80) + 24;
  const discount = product.mrp && product.price ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

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

        <div class="myra-rating">⭐ ${product.rating || "4.8"} (${product.reviews || 120} reviews)</div>

        <br>

        <div class="myra-live">${viewers} people viewing now</div>

        <p class="myra-short">${product.short_description || ""}</p>

        <div class="myra-section">
          <h3>Long Description</h3>
          <p class="myra-long">${product.long_description || "Premium handcrafted scented candle made to bring warmth calmness and fragrance into your home."}</p>
        </div>

        <div class="myra-section">
          <h3>Fragrance</h3>
          <div class="myra-box-grid">
            ${renderActiveBoxes(["Vanilla","Lavender","Rose","Jasmine","Sandalwood","Coffee","Ocean Breeze","Mixed"], product.fragrance)}
          </div>
        </div>

        <div class="myra-section">
          <h3>Burn Time</h3>
          <div class="myra-box-grid">
            ${MYRA_BURN_TIMES.map(t => `
              <button class="myra-option ${t === myraSelectedBurnTime ? "selected" : ""}" onclick="selectBurnTime('${t}', this)">
                ${t}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="myra-section">
          <h3>Wax Type</h3>
          <div class="myra-box-grid">
            ${renderActiveBoxes(["Soy Wax","Beeswax","Paraffin Wax"], product.wax_type)}
          </div>
        </div>

        <div class="myra-section">
          <h3>Quantity</h3>
          <div class="myra-box-grid">
            ${MYRA_QUANTITIES.map(q => `
              <button class="myra-option" onclick="selectMyraQuantity('${q}', this)">
                ${q}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="myra-section">
          <h3>Mood Benefits</h3>
          <div class="myra-box-grid">
            ${renderMoodBoxes(product.moods || [])}
          </div>
        </div>

        <div class="myra-section">
          <h3>Best For</h3>
          <div class="myra-box-grid">
            ${renderOccasionBoxes(product.occasions || [])}
          </div>
        </div>

        <div class="myra-section">
          <h3>Emotional Message</h3>
          <div class="myra-emotion">
            ${product.emotional_message || "Light this candle and transform your space into a moment of calm happiness."}
          </div>
        </div>

        <div class="myra-section">
          <h3>Shipping Information</h3>
          <div class="myra-ship">
            Orders below ₹499: Shipping ₹40<br>
            Orders ₹499 and above: Free Shipping
          </div>
        </div>

        <div class="myra-section">
          <h3>Why You'll Love It</h3>
          <div class="myra-love-list">
            <div>✓ Long Lasting Fragrance</div>
            <div>✓ Smokeless Clean Burn</div>
            <div>✓ Handcrafted Quality</div>
            <div>✓ Perfect For Home Decor</div>
            <div>✓ Ideal Gift Option</div>
            <div>✓ Premium MYRA Feel</div>
          </div>
        </div>

        <div class="myra-section">
          <h3>Trust</h3>
          <div class="myra-love-list">
            <div>🚚 Fast Delivery</div>
            <div>🔒 Secure Checkout</div>
            <div>🎁 Gift Ready</div>
            <div>⭐ Premium Candles</div>
          </div>
        </div>

        <div class="myra-section">
          <h3>Customer Reviews</h3>
          <div class="myra-review">⭐ ⭐ ⭐ ⭐ ⭐ Beautiful fragrance and very premium feel.</div>
          <div class="myra-review">⭐ ⭐ ⭐ ⭐ ⭐ Perfect for gifting and home decoration.</div>
        </div>

        <div class="myra-section">
          <h3>Related Products</h3>
          <div class="myra-related" id="myraRelated"></div>
        </div>
      </section>
    </div>

    <div class="myra-bottom-bar">
      <button class="myra-cart-btn" onclick="myraAddToCart()">Add To Cart</button>
      <button class="myra-buy-btn" onclick="myraBuyNow()">Buy Now</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  updateMyraSlider();
  renderRelatedProducts();
}

function renderActiveBoxes(list, active){
  return list.map(item => `
    <span class="myra-option ${item === active ? "active" : ""}">${item}</span>
  `).join("");
}

function renderMoodBoxes(selected){
  return MYRA_MOODS.map(item => {
    const plain = item.replace(/^.\s/,"");
    const active = selected.some(s => item.includes(s) || s.includes(plain));
    return `<span class="myra-option ${active ? "active" : ""}">${item}</span>`;
  }).join("");
}

function renderOccasionBoxes(selected){
  return MYRA_OCCASIONS.map(item => {
    const plain = item.replace(/^.\s/,"");
    const active = selected.some(s => item.includes(s) || s.includes(plain));
    return `<span class="myra-option ${active ? "active" : ""}">${item}</span>`;
  }).join("");
}

function selectMyraQuantity(q, btn){
  myraSelectedQuantity = q;
  btn.parentElement.querySelectorAll(".myra-option").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function selectBurnTime(t, btn){
  myraSelectedBurnTime = t;
  btn.parentElement.querySelectorAll(".myra-option").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function closeMyraPopup(){
  const popup = document.getElementById("myraProductPopup");
  if(popup) popup.remove();
  document.body.style.overflow = "";
}

function changeMyraImage(dir){
  const images = [myraPopupProduct.image1,myraPopupProduct.image2,myraPopupProduct.image3,myraPopupProduct.image4].filter(Boolean);
  myraCurrentImage += dir;
  if(myraCurrentImage < 0) myraCurrentImage = images.length - 1;
  if(myraCurrentImage >= images.length) myraCurrentImage = 0;
  updateMyraSlider();
}

function updateMyraSlider(){
  const slider = document.getElementById("myraImageSlider");
  const dots = document.querySelectorAll(".myra-dot");
  if(slider) slider.style.transform = `translateX(-${myraCurrentImage * 100}%)`;
  dots.forEach((dot,i)=>dot.classList.toggle("active", i === myraCurrentImage));
}

function myraAddToCart(){
  if(!myraSelectedQuantity){
    alert("Please select quantity");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("myra_cart_items") || "[]");

  cart.push({
    ...myraPopupProduct,
    selected_quantity:myraSelectedQuantity,
    selected_burn_time:myraSelectedBurnTime
  });

  localStorage.setItem("myra_cart_items", JSON.stringify(cart));
  alert("Candle added to cart");
}

function myraBuyNow(){
  if(!myraSelectedQuantity){
    alert("Please select quantity");
    return;
  }

  myraAddToCart();
  window.location.href = "cart.html";
}

function renderRelatedProducts(){
  const box = document.getElementById("myraRelated");
  if(!box || !window.demoProducts) return;

  box.innerHTML = window.demoProducts
    .filter(p => p.product_id !== myraPopupProduct.product_id)
    .slice(0,4)
    .map(p => `
      <div class="myra-related-card" onclick="openProductPopup('${p.product_id}')">
        <img src="${p.image1}" alt="${p.name}">
        <div>${p.name}</div>
      </div>
    `).join("");
}
