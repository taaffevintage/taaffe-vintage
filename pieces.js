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
    name: "1970s Benny Linden Solid Teak Dining Chairs with new Upholstery - Set of Four",
    era: "1970s · Teak",
    category: "seating",
    price: "$895",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DY7Q1gam5qV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "bennylinden.jpg"
  },
  {
    name: "1950s Vintage Mid-Century Modern Cane Back Bench",
    era: "1950s · Plum Bench",
    category: "seating",
    price: "$1500",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DYsJP-kG-rL/?igsh=eGJkNWJmOGJhdmhh",
    image: "plumcanebench.jpg"
  },
  {
    name: "Vintage 5 Light Mushroom Arc Floor Lamp",
    era: "1990s · Chrome",
    category: "lighting-decor",
    price: "$195",
    status: "sold",
    featured: false,
    soldDate: "2026-05-18",
    instagramUrl: "https://www.instagram.com/p/DYXzlKiG1cw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "arcfloorlamp.jpg"
  },
  {
    name: "Vintage 1950s Walnut Credenza by Madison Furniture Company",
    era: "1950s · Mid-Century",
    category: "storage",
    price: "$850",
    oldPrice: "$1450",
    status: "sold",
    soldDate: "2026-05-05",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DVrFUIuEUs1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "madison-credenza.jpg"
  },
  {
    name: "Vintage 1970s Lane Staccato Brutalist Large Mirror",
    era: "1970s · Oak",
    category: "lighting-decor",
    price: "$95",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DYYOYSlmxHq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "brutalist-mirror.jpg"
  },
  {
    name: "Vintage Mid Century Modern Walnut 3 Drawer Dresser in the Style of Stanley",
    era: "1960s · Walnut",
    category: "storage",
    price: "$350",
    oldPrice: "$375",
    status: "sold",
    soldDate: "2026-05-11",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "stanley-like-dresser.jpg"
  },
  {
    name: "Vintage Mid Century Asian Inspired 12 Drawer Hickory Dresser by Tung Si",
    era: "1950s · Hickory",
    category: "storage",
    price: "$595",
    oldPrice: "$950",
    status: "sold",
    soldDate: "2026-05-18",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DXM0B8ZkUA3/?igsh=YzBmcjhqMTJzNGF0",
    image: "tungsi-dresser.jpg"
  },
  {
    name: "Vintage 1980s Tessellated Mactan Stone Coffee Table by Maitland-Smith",
    era: "1980s · Stone",
    category: "tables",
    price: "$395",
    oldPrice: "$425",
    status: "sold",
    soldDate: "2026-05-07",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DW1cdNODijV/?igsh=NmpzbzM5MjVkcjBp",
    image: "tessellated-table.jpg"
  },
  {
    name: "Vintage Henredon Mahogany Clawfoot or Claw Foot Side/End Table",
    era: "1970s · Mahogany",
    category: "tables",
    price: "$350",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DY7SgGIG9F5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "clawfoot-table.jpg"
  },
  {
    name: "Set of Four Vintage 1950s Walnut and Linen Dining Chairs After Conant Ball",
    era: "1960s · Walnut",
    category: "seating",
    price: "$975",
    oldPrice: "$1200",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/C_30-CUJ2W6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "conantball-chairs.jpg"
  },
  {
    name: "\u201CNight at the Parlor\u201D Billiards Painting Print with Neon Lights",
    era: "1980s · Painting",
    category: "lighting-decor",
    price: "$250",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DRF1zuvkmly/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "parlor-painting.jpg"
  },
  {
    name: "Custom-Made Modern Solid Walnut Wood L-Shaped Desk",
    era: "2020s · Walnut",
    category: "tables",
    price: "$500",
    soldDate: "2026-05-10",
    status: "sold",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "ldesk.jpg"
  },
  {
    name: "Vintage 1970’s Romeo Rega Style Chrome and Glass Etagere Shelf",
    era: "1970s · Chrome",
    category: "storage",
    price: "$795",
    oldPrice: "$950",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/C769jQDJi_T/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "romeorega-etagere.jpg"
  },
  {
    name: "Adrian Pearsall for Craft Associates Mid-Century Modern Cube Plinth Planter",
    era: "1960s · Walnut",
    category: "lighting-decor",
    price: "$375",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DWZp7p2FLF7/?igsh=MTJhbTVudjljZTN4OQ==",
    image: "pearsall-planter.jpg"
  },
  {
    name: "Vintage 1980s Danish \u201CPuzzle Piece\u201D Sliding Credenza / Console",
    era: "1980s · Teak",
    category: "storage",
    price: "$950",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DWZWDZ3ERHK/?igsh=Z3lrc3NtdHJzaDAz",
    image: "danish-puzzle.jpg"
  },
  {
    name: "Vintage Danish Teak Tallboy Chifforobe or Tallboy Dresser",
    era: "1970s · Teak",
    category: "storage",
    price: "$1295",
    oldPrice: "$1500",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DWJ0OLhjnkE/?igsh=MTltamdiN3dsZWMzZA==",
    image: "chifforobe.jpg"
  },
  {
    name: "Vintage Lane Staccato Brutalist Mid Century Oak Nightstand",
    era: "1970s · Oak",
    category: "tables",
    price: "$350",
    oldPrice: "$495",
    status: "sold",
    soldDate: "2026-05-15",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DWJqXE0jhh6/?igsh=dXM2YWxkZWsyYW55",
    image: "brutalist-table.jpg"
  },
  {
    name: "Vintage Postmodern Sirmos Plaster Faux Rock Console Table",
    era: "1980s · 2 available",
    category: "tables",
    price: "$220",
    oldPrice: "$350",
    status: "sold",
    soldDate: "2026-05-22",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DV_ozETEXsP/?igsh=YjljajFpcmRnaWJw",
    image: "sirmos-table.jpg"
  },
  {
    name: "Pair of 1980s Danish Teak Side Tables by A.B.J.",
    era: "1980s · Teak",
    category: "tables",
    price: "$550",
    status: "sold",
    soldDate: "2026-05-19",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DV1CHqMDro2/?igsh=MWl6cTZhNGpkanM5eQ==",
    image: "teak-tables.jpg"
  },
  {
    name: "Lane Staccato Brutalist Mid Century Walnut Queen Headboard",
    era: "1970s · Walnut",
    category: "storage",
    price: "$495",
    oldPrice: "$650",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DVRsYHQESQa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "lane-headboard.jpg"
  },
  {
    name: "Mid 20th Century Modern Rosewood Extendable Dining Table",
    era: "1960s · Rosewood",
    category: "tables",
    price: "$425",
    oldPrice: "$475",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DUtWLXskeW9/?igsh=MWZ2M2R6eTdzMG85",
    image: "rosewood-table.jpg"
  },
  {
    name: "Vintage Italian Dessert or Fruit Pedestal Stand Cream Ceramic Pottery",
    era: "1980s · Ceramic",
    category: "lighting-decor",
    price: "$25",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "grape-bowl.jpg"
  },
  {
    name: "Vintage Rustic Solid Reclaimed Wood Farmhouse Bookcase",
    era: "Vintage · Solid Wood",
    category: "storage",
    price: "$1295",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DXpYalNm1el/?igsh=aHBjbndmM3o4enJu",
    image: "reclaimed-bookcase.jpg"
  },
  {
    name: "Vintage Brutalist Iron Floor Candelabra in the Style of Harry Bertoia",
    era: "1960s · Iron",
    category: "lighting-decor",
    price: "$795",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/C5vuAy0AXEO/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "bertoia-decor.jpg"
  },
  {
    name: "Early 1900s 20th Century Depression Era Wooden Dining Table",
    era: "1900s · Tiger Oak",
    category: "tables",
    price: "$1295",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "antique-dining-table.jpg"
  },
  {
    name: "Vintage Tiffin Franciscan Pink Wisteria Stemware Glasses- 11 Pieces",
    era: "1950s · Glass",
    category: "lighting-decor",
    price: "$295",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "tiffin-glasses.jpg"
  },
  {
    name: "\u201CThe Loose Vine\u201D Street Signed Painting by Benedict",
    era: "1980s · Painting",
    category: "lighting-decor",
    price: "$40",
    oldPrice: "$95",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/CwvFAuhJTWp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "street-painting.jpg"
  },
  {
    name: "1980s Post Modern Painting of a Dancer by Jacky",
    era: "1980s · Painting",
    category: "lighting-decor",
    price: "$10",
    oldPrice: "$150",
    status: "sold",
    soldDate: "2026-04-25",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/CwgeT-_p7Zz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "dancer-painting.jpg"
  },
  {
    name: "Vintage 3-Way Dual Lamp after Gerald Thurston",
    era: "1960s · Metal",
    category: "lighting-decor",
    price: "$295",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/CjWXo_Yr82q/?igsh=Y2hwbXlwdmd3bnZp",
    image: "thurston-lamp.jpg"
  },
  {
    name: "1980s Postmodern Contemporary White Laminate Table",
    era: "1980s · Laminate",
    category: "tables",
    price: "$150",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/ChAbAzurq7k/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "white-table.jpg"
  }
];
