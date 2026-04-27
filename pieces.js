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
    price: "$425",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DW1cdNODijV/?igsh=NmpzbzM5MjVkcjBp",
    image: "tessellated-table.jpg",
  },
  {
    name: "Vintage Glass Mirror and Lucite Vanity Tray",
    era: "Postmodern · Lucite",
    category: "decor",
    price: "$25",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DW2CEWElH7n/?igsh=MXgyMDJodG84b2F6ag==",
    image: "lucite-tray.jpg",
  },
  {
    name: "Adrian Pearsall for Craft Associates Mid-Century Modern Cube Plinth Planter",
    era: "1960s · Walnut",
    category: "decor",
    price: "$375",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DWZp7p2FLF7/?igsh=MTJhbTVudjljZTN4OQ==",
    image: "pearsall-planter",
  },
  {
    name: "Vintage 1980s Danish “Puzzle Piece” Sliding Credenza / Console",
    era: "1980z · Teak",
    category: "storage",
    price: "$950",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DWZWDZ3ERHK/?igsh=Z3lrc3NtdHJzaDAz",
    image: "danish-puzzle.jpg
  },
  {
    name: "Vintage Danish Teak Tallboy Chifforobe or Tallboy Dresser",
    era: "1970s · Teak",
    category: "storage",
    price: "$1500",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DWJ0OLhjnkE/?igsh=MTltamdiN3dsZWMzZA==",
    image: "chifforobe.jpg",
  },
  {
    name: "Vintage Lane Staccato Brutalist Mid Century Oak Nightstand",
    era: "1970s · Oak",
    category: "tables",
    price: "$395",
    old price: "$495",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DWJqXE0jhh6/?igsh=dXM2YWxkZWsyYW55",
    image: "brutalist-table.jpg",
  },
  {
    name: "Vintage Postmodern Sirmos Plaster Faux Rock Console Table",
    era: "1980s · 2 available",
    category: "tables",
    price: "$275",
    oldPrice: "$350",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DV_ozETEXsP/?igsh=YjljajFpcmRnaWJw",
    image: "sirmos-console",
  }
  {
    name: "Pair of 1980s Danish Teak Side Tables by A.B.J.",
    era: "1980s · teak",
    category: "tables",
    price: "$550",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DV1CHqMDro2/?igsh=MWl6cTZhNGpkanM5eQ==",
    image: "teak-tables.jpg",
  }
];
