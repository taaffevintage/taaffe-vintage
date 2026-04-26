// ============================================================
//  TAAFFE VINTAGE — INVENTORY
//  This is the only file you need to edit when pieces come and go.
//
//  FIELDS:
//    name         — display title (e.g. "Walnut Tallboy")
//    era          — small uppercase line below name
//    category     — "storage" | "tables" | "seating" | "lighting-decor"
//    price        — e.g. "$685" or "Not for sale"
//    oldPrice     — used when status is "drop" (the strike-through price)
//    status       — "available" | "sold" | "drop" | "kept"
//    featured     — true/false. Featured pieces show on the homepage.
//                   Mark up to 6 pieces as featured at a time.
//    soldDate     — only used when status is "sold".
//                   Format: "YYYY-MM-DD" (e.g. "2026-04-15")
//                   Sold items are automatically hidden from the site
//                   after 30 days from this date.
//    instagramUrl — full URL to the Instagram post for this piece
//    image        — filename of the photo (e.g. "walnut-tallboy.jpg")
//                   Leave as "" to show the placeholder illustration.
//
//  EXAMPLES:
//
//  AVAILABLE FEATURED PIECE:
//    {
//      name: "Walnut Tallboy",
//      era: "1960s · Mid-Century",
//      category: "storage",
//      price: "$650",
//      status: "available",
//      featured: true,
//      instagramUrl: "https://www.instagram.com/p/######",
//      image: "walnut-tallboy.jpg"
//    },
//
//  PRICE DROP:
//    {
//      name: "Oak Secretary Desk",
//      era: "1950s",
//      category: "tables",
//      price: "$540",
//      oldPrice: "$625",
//      status: "drop",
//      featured: false,
//      instagramUrl: "https://www.instagram.com/p/XXXXXX/",
//      image: "oak-desk.jpg"
//    },
//
//  SOLD (will auto-hide after 30 days):
//    {
//      name: "Cane-Back Rocker",
//      era: "1960s",
//      category: "seating",
//      price: "$380",
//      status: "sold",
//      soldDate: "2026-04-15",
//      featured: false,
//      instagramUrl: "https://www.instagram.com/p/XXXXXX/",
//      image: "cane-rocker.jpg"
//    },
//
//  NOT FOR SALE (e.g. The Goodwill Dresser):
//    {
//      name: "The Goodwill Dresser",
//      era: "1940s · Refinished 2024",
//      category: "storage",
//      price: "Not for sale",
//      status: "kept",
//      featured: true,
//      instagramUrl: "",
//      image: "goodwill-dresser.jpg"
//    },
// ============================================================

const pieces = [
  {
    name: "Vintage 1950s Walnut Credenza by Madison Furniture Company",
    era: "1950s · Mid-Century",
    category: "storage",
    price: "$850",
    oldPrice: "$1450",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DVrFUIuEUs1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "madison-credenza.jpg",
  },
  {
    name: "Vintage Mid Century Asian Inspired 12 Drawer Hickory Dresser by Tung Si",
    era: "1950s · Hickory",
    category: "storage",
    price: "$950",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DXM0B8ZkUA3/?igsh=YzBmcjhqMTJzNGF0",
    image: "tungsi-dresser.jpg",
  },
  {
    name: "Vintage 1980s Tessellated Mactan Stone Coffee Table by Maitland-Smith",
    era: "1980s · Stone",
    category: "tables",
    price: "425",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DW1cdNODijV/?igsh=NmpzbzM5MjVkcjBp",
    image: "tessellated-table.jpg",
  },
  {
    name: "Danish Credenza",
    era: "1970s · Teak",
    category: "storage",
    price: "$1,240",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#5a3420", "#7a4a2a", "#9a6a3a"],
    shape: "credenza"
  },
  {
    name: "Cane-Back Rocker",
    era: "1960s · Reglued & recaned",
    category: "seating",
    price: "$380",
    status: "sold",
    soldDate: "2026-04-10",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#6a4228", "#8a5a3b"],
    shape: "chair"
  },
  {
    name: "Brass-Pull Nightstand Pair",
    era: "1970s · Set of 2",
    category: "storage",
    price: "$520",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#3d2414", "#6a4228"],
    shape: "nightstand"
  },
  {
    name: "French Provincial Vanity",
    era: "1950s · Painted in bone",
    category: "storage",
    price: "$410",
    status: "sold",
    soldDate: "2026-04-15",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#e8dcc4", "#c4a884", "#8a7258"],
    shape: "vanity"
  },
  {
    name: "Solid Pine Farmhouse Table",
    era: "1980s · Restained",
    category: "tables",
    price: "$720",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#a67a4a", "#7a5530"],
    shape: "table"
  },
  {
    name: "Wingback Side Chair",
    era: "1960s · Reupholstered",
    category: "seating",
    price: "$295",
    oldPrice: "$345",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "",
    palette: ["#5a3420", "#7a4a2a", "#a4472f"],
    shape: "wingback"
  }
];
