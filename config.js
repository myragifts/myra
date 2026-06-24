/* ==========================================
   MYRA CONFIG FILE
   Where Every Gift Tells A Story
========================================== */

const CONFIG = {

  /* ==========================================
     BRAND
  ========================================== */

  APP_NAME: "MYRA",

  APP_TAGLINE: "Where Every Gift Tells A Story",

  APP_DESCRIPTION:
    "Discover thoughtfully curated gifts, handcrafted treasures, luxury candles, elegant jewellery, and timeless art.",

  CURRENCY: "₹",

  COUNTRY: "India",

  LANGUAGE: "en-IN",

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
     THEME COLORS
  ========================================== */

  COLORS: {

    PRIMARY: "#2E2E2E",

    GOLD: "#C6A55C",

    GOLD_LIGHT: "#E6D2A0",

    GOLD_DARK: "#A8841D",

    CREAM: "#FFF8F0",

    WARM_WHITE: "#FFFCF8",

    SAGE: "#7A8B6F",

    WHITE: "#FFFFFF",

    TEXT: "#2C1A0B",

    MUTED: "#777777",

    BORDER: "#E8E0D3",

    SUCCESS: "#7A8B6F",

    WARNING: "#D8B56A",

    DANGER: "#C98F8F"

  },

  /* ==========================================
     FONTS
  ========================================== */

  FONTS: {

    LOGO: "'Cormorant Garamond', serif",

    HEADING: "'Cormorant Garamond', serif",

    BODY: "'Poppins', sans-serif"

  },

  /* ==========================================
     SUPABASE
  ========================================== */

  SUPABASE_URL:
    "https://ijclbrwofsgrdnlyzkro.supabase.co",

  SUPABASE_ANON_KEY:
    "YOUR_SUPABASE_ANON_KEY",

  /* ==========================================
     CLOUDINARY
  ========================================== */

  CLOUDINARY_CLOUD_NAME:
    "YOUR_CLOUDINARY_NAME",

  CLOUDINARY_UPLOAD_PRESET:
    "YOUR_UPLOAD_PRESET",

  /* ==========================================
     RAZORPAY
  ========================================== */

  RAZORPAY_KEY_ID:
    "YOUR_RAZORPAY_KEY",

  /* ==========================================
     BUSINESS
  ========================================== */

  SELLER_WHATSAPP:
    "919836697502",

  SUPPORT_EMAIL:
    "support@myragifts.in",

  /* ==========================================
     SHIPPING
  ========================================== */

  SHIPPING: {

    FREE_SHIPPING_THRESHOLD: 500,

    SHIPPING_CHARGE: 40,

    DELIVERY_DAYS_MIN: 3,

    DELIVERY_DAYS_MAX: 7,

    FREE_SHIPPING_MESSAGE:
      "Congratulations! You get free shipping",

    ADD_MORE_MESSAGE:
      "Add more items to get free shipping"

  },

  /* ==========================================
     REFERRAL PROGRAM
  ========================================== */

  REFERRAL: {

    ENABLED: true,

    REWARD_AMOUNT: 25,

    MIN_ORDER_VALUE: 499,

    REWARD_AFTER_STATUS: "Delivered",

    FIRST_ORDER_ONLY: true,

    MAX_REWARD_BALANCE: 500,

    MAX_USAGE_PER_ORDER: 50,

    REWARD_EXPIRY_DAYS: 90,

    APPLY_AFTER_COUPON: true,

    SHARE_TAGLINE:
      "Where Every Gift Tells A Story"

  },

  /* ==========================================
     PRODUCT RULES
  ========================================== */

  PRODUCT_ID_PREFIX: "MY",

  PRODUCT_IMAGE_LIMIT: 6,

  PRODUCT_NAME_WORD_LIMIT: 8,

  /* ==========================================
     CATEGORIES
  ========================================== */

  CATEGORIES: [

    {
      name: "Aroma Candles",

      subcategories: [
        "Jar Candles",
        "Tin Candles",
        "Soy Wax Candles",
        "Scented Candles",
        "Gift Candles",
        "Luxury Candles"
      ]
    },

    {
      name: "Handmade Jewellery",

      subcategories: [
        "Earrings",
        "Necklaces",
        "Bracelets",
        "Rings",
        "Jewellery Sets",
        "Gift Jewellery"
      ]
    },

    {
      name: "Real Paintings",

      subcategories: [
        "Abstract Art",
        "Landscape Paintings",
        "Modern Art",
        "Floral Paintings",
        "Portrait Paintings",
        "Mini Paintings"
      ]
    },

    {
      name: "Trending Gifts",

      subcategories: [
        "Birthday Gifts",
        "Anniversary Gifts",
        "Wedding Gifts",
        "Couple Gifts",
        "Home Decor Gifts",
        "Corporate Gifts"
      ]
    }

  ],

  /* ==========================================
     COUPON SYSTEM
  ========================================== */

  COUPONS: {

    ENABLED: true,

    WELCOME: {

      CODE: "WELCOME",

      TYPE: "PERCENT",

      VALUE: 10,

      MIN_ORDER: 499

    }

  },

  /* ==========================================
     ORDER STATUS
  ========================================== */

  ORDER_STATUS: [

    "Order Placed",

    "Confirmed",

    "Packed",

    "Shipped",

    "Out For Delivery",

    "Delivered",

    "Cancelled"

  ],

  /* ==========================================
     STORAGE KEYS
  ========================================== */

  STORAGE_KEYS: {

    USER_ID: "myra_user_id",

    USER_NAME: "myra_user_name",

    USER_PHONE: "myra_user_phone",

    USER_DATA: "myra_user_data",

    DEVICE_ID: "myra_device_id",

    CART: "myra_cart",

    FAVOURITES: "myra_favourites",

    CART_COUNT: "myra_cart_count",

    REFERRAL_CODE: "myra_referral_code",

    REFERRED_BY: "myra_referred_by",

    REWARD_BALANCE: "myra_reward_balance",

    REWARD_HISTORY: "myra_reward_history"

  },

  /* ==========================================
     CUSTOMER LABELS
  ========================================== */

  CUSTOMER_LABELS: [

    "New Customer",

    "Returning Customer",

    "VIP Customer",

    "High Buyer",

    "Referral Customer"

  ],

  /* ==========================================
     MESSAGES
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

    LOGOUT_SUCCESS:
      "Logged out successfully",

    CART_ADDED:
      "Added to cart",

    PROFILE_UPDATED:
      "Profile updated successfully",

    ORDER_SUCCESS:
      "Order placed successfully",

    REFERRAL_APPLIED:
      "Referral code applied successfully",

    REFERRAL_PENDING:
      "Reward will be credited after delivery",

    REFERRAL_SUCCESS:
      "Referral reward credited successfully"

  }

};

/* ==========================================
   GLOBAL ACCESS
========================================== */

window.CONFIG = CONFIG;
