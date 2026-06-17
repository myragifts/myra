/* ==============================
   MYRA CONFIG FILE
   ============================== */

const CONFIG = {
  /* App Brand */
  APP_NAME: "MYRA",
  APP_TAGLINE: "Make Home Everywhere",

  /* Offer Text */
  SHIPPING_TEXT: "FREE SHIPPING on every candle",

  /* Page Links */
  LOGIN_PAGE: "index.html",
  HOME_PAGE: "home.html",
  PRODUCTS_PAGE: "products.html",
  CART_PAGE: "cart.html",
  ORDERS_PAGE: "orders.html",
  PROFILE_PAGE: "profile.html",

  /* Theme Colors */
  COLORS: {
    PRIMARY: "#2E2E2E",
    GOLD: "#C9A227",
    CREAM: "#FFF8F0",
    WARM_WHITE: "#FFFCF8",
    SAGE: "#7A8B6F",
    WHITE: "#FFFFFF",
    BLACK: "#1F1F1F",
    GRAY: "#6B7280",
    BORDER: "#E8E0D4",
    SUCCESS: "#16A34A",
    DANGER: "#DC2626",
    WARNING: "#F59E0B"
  },

  /* Fonts */
  FONTS: {
    LOGO: "'Playfair Display', serif",
    HEADING: "'Playfair Display', serif",
    BODY: "'Poppins', sans-serif"
  },

  /* Supabase */
  SUPABASE_URL: "https://ijclbrwofsgrdnlyzkro.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_FzFZFR7qCsSv89mxruHFDQ_Gdfs1Yqx",

  /* Cloudinary */
  CLOUDINARY_CLOUD_NAME: "PASTE_CLOUDINARY_CLOUD_NAME_HERE",
  CLOUDINARY_UPLOAD_PRESET: "PASTE_UPLOAD_PRESET_HERE",

  /* Razorpay */
  RAZORPAY_KEY_ID: "PASTE_RAZORPAY_KEY_ID_HERE",

  /* WhatsApp Seller Number */
  SELLER_WHATSAPP: "919836697502",

  /* Product Rules */
  PRODUCT_ID_PREFIX: "MY",
  PRODUCT_ID_START: 1,
  PRODUCT_ID_END: 99999,
  PRODUCT_NAME_WORD_LIMIT: 4,
  PRODUCT_IMAGE_LIMIT: 4,

  /* Shipping */
  FREE_SHIPPING: true,
  SHIPPING_CHARGE: 0,

  /* Coupon Codes */
  COUPONS: {
    WELCOME: "WELCOME",
    SPECIAL: "SPECIAL"
  },

  /* Coupon Discount Options */
  DISCOUNT_OPTIONS: [5, 10, 15, 20],

  /* Order Status */
  ORDER_STATUS: [
    "Order Processing",
    "Confirmed",
    "Packed",
    "Shipped",
    "Out For Delivery",
    "Delivered",
    "Cancelled"
  ],

  /* Customer Labels */
  CUSTOMER_LABELS: [
    "New Customer",
    "Regular Customer",
    "VIP Customer",
    "Cart No Order",
    "Coupon Sent",
    "Stock Request",
    "High Buyer"
  ],

  /* Admin Analytics Tabs */
  ANALYTICS_TABS: [
    "Last 3 Days",
    "Last 7 Days",
    "Last Month"
  ],

  /* Local Storage Keys */
  STORAGE_KEYS: {
    USER_ID: "myra_user_id",
    USER_NAME: "myra_user_name",
    USER_PHONE: "myra_user_phone",
    CART_COUNT: "myra_cart_count",
    DEVICE_ID: "myra_device_id"
  },

  /* Candle Variant Options */
  SIZES: [
    "Small Jar",
    "Medium Jar",
    "Large Jar",
    "Gift Box",
    "Single Wick",
    "Double Wick",
    "Combo Pack"
  ],

  /* Product Categories - 10 slots, rename later */
  CATEGORIES: [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10"
  ],

  /* Offer Types */
  OFFER_TYPES: [
    "New Arrival",
    "Best Seller",
    "Hand Poured",
    "Limited Edition",
    "Gift Special"
  ],

  /* Messages */
  MESSAGES: {
    LOGIN_REQUIRED: "Please sign in first",
    NAME_REQUIRED: "Please enter your name",
    PHONE_REQUIRED: "Please enter your phone number",
    INVALID_PHONE: "Please enter a valid phone number",
    LOGIN_SUCCESS: "Welcome to MYRA",
    LOGOUT_SUCCESS: "Logged out successfully",
    SIZE_REQUIRED: "Please select an option",
    CART_ADDED: "Candle added to cart",
    ADDRESS_REQUIRED: "Please fill all address details",
    PROFILE_UPDATED: "Profile updated successfully",
    ORDER_SUCCESS: "Order placed successfully"
  }
};

/* Make config global */
window.CONFIG = CONFIG;
