/* ==========================================
MYRA CONFIG
Where Every Gift Tells A Story
========================================== */

const CONFIG = {

/* ==========================================
BRAND
========================================== */

APP_NAME: "MYRA",

APP_TAGLINE: "Where Every Gift Tells A Story",

APP_DESCRIPTION:
"Discover thoughtfully curated gifts, handcrafted treasures, luxury candles, elegant jewellery, timeless paintings, and trending gift collections.",

DOMAIN: "https://myra.gifts",

VERSION: "1.0.0",

/* ==========================================
PAGE LINKS
========================================== */

LOGIN_PAGE: "index.html",

HOME_PAGE: "home.html",

COLLECTION_PAGE: "collection.html",

FAVOURITES_PAGE: "favourites.html",

CART_PAGE: "cart.html",

PROFILE_PAGE: "profile.html",

ADMIN_PAGE: "admin.html",

/* ==========================================
THEME
========================================== */

COLORS: {

PRIMARY: "#2C1A0B",

GOLD: "#C6A55C",

GOLD_LIGHT: "#E6D2A0",

GOLD_DARK: "#A8841D",

BACKGROUND: "#F8F5F0",

CARD: "#FFFFFF",

WARM: "#FFFCF8",

SAGE: "#7A8B6F",

TEXT: "#2C1A0B",

MUTED: "#777777",

BORDER: "#E8E0D3",

SUCCESS: "#16A34A",

DANGER: "#DC2626",

WARNING: "#F59E0B"

},

/* ==========================================
FONTS
========================================== */

FONTS: {

LOGO: "'Cormorant Garamond', serif",

HEADING: "'Cormorant Garamond', serif",

BODY: "'Cormorant Garamond', serif"

},

/* ==========================================
CATEGORIES
========================================== */

CATEGORIES: [

"All",

"Aroma Candles",

"Handmade Jewellery",

"Real Paintings",

"Trending Gifts"

],

/* ==========================================
PRODUCT TYPES
========================================== */

PRODUCT_TYPES: [

"Aroma Candle",

"Handmade Jewellery",

"Painting",

"Gift Item"

],

/* ==========================================
COLLECTION LABELS
========================================== */

COLLECTION_TAGS: [

"New Arrival",

"Best Seller",

"Trending",

"Limited Edition",

"Premium Collection",

"Gift Special"

],

/* ==========================================
SHIPPING
========================================== */

FREE_SHIPPING: true,

SHIPPING_CHARGE: 0,

SHIPPING_TEXT:
"Free Shipping Across India",

/* ==========================================
PAYMENT
========================================== */

RAZORPAY_KEY_ID:
"PASTE_RAZORPAY_KEY_ID",

UPI_ID:
"PASTE_UPI_ID",

UPI_NAME:
"MYRA",

/* ==========================================
CLOUDINARY
========================================== */

CLOUDINARY_CLOUD_NAME:
"PASTE_CLOUDINARY_NAME",

CLOUDINARY_UPLOAD_PRESET:
"PASTE_UPLOAD_PRESET",

/* ==========================================
SUPABASE
========================================== */

SUPABASE_URL:
"https://ijclbrwofsgrdnlyzkro.supabase.co",

SUPABASE_ANON_KEY:
"sb_publishable_FzFZFR7qCsSv89mxruHFDQ_Gdfs1Yqx",

/* ==========================================
CONTACT
========================================== */

SELLER_WHATSAPP:
"919836697502",

SUPPORT_EMAIL:
"[support@myra.gifts](mailto:support@myra.gifts)",

/* ==========================================
STORAGE
========================================== */

STORAGE_KEYS: {

USER_ID:
"myra_user_id",

USER_NAME:
"myra_user_name",

USER_PHONE:
"myra_user_phone",

DEVICE_ID:
"myra_device_id",

CART:
"myra_cart",

FAVOURITES:
"myra_favourites",

ORDERS:
"myra_orders",

CART_COUNT:
"myra_cart_count"

},

/* ==========================================
PWA
========================================== */

PWA: {

MOBILE_ONLY: true,

INSTALL_INTERVAL: 120000,

INSTALL_PAGES: [

"home.html",

"collection.html"

]

},

/* ==========================================
ORDER STATUS
========================================== */

ORDER_STATUS: [

"Order Processing",

"Confirmed",

"Packed",

"Shipped",

"Out For Delivery",

"Delivered",

"Cancelled"

],

/* ==========================================
COUPONS
========================================== */

COUPONS: {

WELCOME: "WELCOME",

SPECIAL: "SPECIAL"

},

DISCOUNT_OPTIONS: [

5,

10,

15,

20

],

/* ==========================================
ADMIN
========================================== */

ANALYTICS_TABS: [

"Last 3 Days",

"Last 7 Days",

"Last Month"

],

CUSTOMER_LABELS: [

"New Customer",

"Regular Customer",

"VIP Customer",

"Cart No Order",

"Coupon Sent",

"Stock Request",

"High Buyer"

],

/* ==========================================
TOAST MESSAGES
========================================== */

MESSAGES: {

LOGIN_REQUIRED:
"Please sign in first",

NAME_REQUIRED:
"Please enter your name",

PHONE_REQUIRED:
"Please enter your phone number",

INVALID_PHONE:
"Please enter a valid phone number",

LOGIN_SUCCESS:
"Welcome to MYRA",

SIGNUP_SUCCESS:
"Account created successfully",

LOGOUT_SUCCESS:
"Logged out successfully",

CART_ADDED:
"Gift added to cart",

FAVOURITE_ADDED:
"Added to favourites",

PROFILE_UPDATED:
"Profile updated successfully",

ADDRESS_REQUIRED:
"Please complete address details",

ORDER_SUCCESS:
"Order placed successfully"

}

};

/* ==========================================
GLOBAL ACCESS
========================================== */

window.CONFIG = CONFIG;
