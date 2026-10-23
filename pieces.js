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
    name: "Vintage Mid Century Mahogany Side Table by Mengel for Raymond Loewy",
    era: "1960s · Mahogany",
    category: "tables",
    price: "$350",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DefiuPXG2vl/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "mengel.jpg"
  },
  {
    name: "Victorian Footed Marble and Brass Table Lamp with Fabric Fringe/Tassel Lamp Shade",
    era: "1940s · Brass/Marble",
    category: "lighting-decor",
    price: "$275",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "artdecolamp.jpg"
  },
  {
    name: "Vintage 1950s Hülsta-Worke Rosewood Media Cabinet",
    era: "1950s · Rosewood",
    category: "storage",
    price: "$450",
    status: "sold",
    soldDate: "2026-10-20",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/Deh5YJrGwSA/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    image: "Hulsta.jpg"
  },
  {
    name: "Vintage 1970's Lane Brutalist Staccato 9-Drawer Walnut Mid Century Dresser",
    era: "1970s · Walnut",
    category: "storage",
    price: "$2895",
    status: "sold",
    soldDate: "2026-10-23",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "Brutalist.jpg"
  },
  {
    name: "Vintage Mid Century 9-drawer Walnut Lowboy Dresser by Stanley",
    era: "1960s · Walnut",
    category: "storage",
    price: "$1495",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/Dee73rsGyzO/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "Stanley.jpg"
  },
  {
    name: "Vintage Mid Century Chest of Drawers Tallboy Dresser by Rockford",
    era: "1960s · Teak",
    category: "storage",
    price: "$850",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DeSiVrMG91i/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    image: "Rockford.jpg"
  },
  {
    name: "Vintage 1960s Teak G Plan Fresco Tallboy Chest Dresser",
    era: "1970s · Teak",
    category: "storage",
    price: "$1250",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "Fresco.jpg"
  },
  {
    name: "Modernist Cal-Style Chrome Counter Height Bar Stools With Velvet Green Seats",
    era: "1970s · Velvet",
    category: "seating",
    price: "$1500",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "BacklessStools.jpg"
  },
  {
    name: "Vintage 1960s Broyhill Sculptra Walnut Mid Century Magna Chest Dresser",
    era: "1960s · Walnut",
    category: "storage",
    price: "$1650",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DeQHUY4m3aG/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    image: "Sculptra.jpg"
  },
  {
    name: "Vintage 1960s Mid Century Modern Kroehler Gondola Sofa after Adrian Pearsall",
    era: "1960s · Velvet",
    category: "seating",
    price: "$3500",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DeNRT-EG9-b/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    image: "Kroehler.jpg"
  },
  {
    name: "Vintage 1970s Lucite and Brass Floor Lamps - a Pair",
    era: "1970s · Brass",
    category: "lighting-decor",
    price: "$450",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DeKOdlpmyht/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    image: "LuciteLamps.jpg"
  },
  {
    name: "Mid-Century Modern 1960s Teak and Ceramic Tile Top Coffee Table",
    era: "1960s · Teak",
    category: "tables",
    price: "$395",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DcjGK8DkWeR/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    image: "danishtilecoffeetable.jpg"
  },
  {
    name: "Antique Art Deco Oak Credenza Sideboard / Stepped Buffet Cabinet",
    era: "1920s · Tiger Oak",
    category: "storage",
    price: "$950",
    status: "sold",
    soldDate: "2026-09-23",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DczFKcbG-v5/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    image: "artdeco.jpg"
  },
  {
    name: "Vintage Walnut Gate Leg Dining Table With Drop Leaves After George Nelson for Herman Miller",
    era: "1960s · Walnut",
    category: "tables",
    price: "$1250",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DcUGqcwmwXk/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "ConantTable.jpg"
  },
  {
    name: "Set of Four Vintage 1950s Walnut and Linen Dining Chairs After Conant Ball",
    era: "1960s · Walnut",
    category: "seating",
    price: "$750",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DcUDW5Em84R/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "conantball-chairs.jpg"
  },
  {
    name: "Vintage 1970s Mid Century MCM Tulip Style Chrome Swivel Bar Stools",
    era: "1970s · Chrome",
    category: "seating",
    price: "$895",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DczFkC3m98c/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    image: "SeafoamStools.jpg"
  },
  {
    name: "Vintage 1970s Chrome Waterfall Cantilever Dining Chairs after Milo Baughman",
    era: "1970s · Chrome",
    category: "seating",
    price: "$1250",
    status: "sold",
    featured: false,
    soldDate: "2026-10-12",
    instagramUrl: "https://www.instagram.com/p/DbwFX8wG6YW/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "MBChairs.jpg"
  },
  {
    name: "Vintage 1970s Modular Brown Velvet \u201CPlaypen\u201D Sofa and Ottoman After Milo Baughman",
    era: "1970s · Velvet",
    category: "seating",
    price: "$1450",
    status: "sold",
    soldDate: "2026-10-01",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DbeElPCm228/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "Playpen2.jpg"
  },
  {
    name: "Vintage 1970s MCM Teak Wood Converted Bar Cabinet",
    era: "1970s · Teak",
    category: "storage",
    price: "$595",
    oldPrice: "$795",
    status: "drop",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DbJ8SlMG8ec/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "BarCabinet.jpg"
  },
  {
    name: "Antique Solid Wood Barley Twist Lamp Side/Table With Claw Feet After Merklen Furniture Company",
    era: "1890s · Solid Wood",
    category: "tables",
    price: "$295",
    status: "sold",
    solDate: "2026-08-27",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/Db9Q9kOm3Ib/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    image: "BarleyTable.jpg"
  },
  {
    name: "Refinished American of Martinsville \u201CDania\u201D Walnut Modular Bench and Desk/Bar Cabinet Attachment by Merton Gershun",
    era: "1950s · Walnut",
    category: "storage",
    price: "$1200",
    status: "available",
    featured: true,
    instagramUrl: "https://www.instagram.com/p/DbbD4fkEV95/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "AoMDesk.jpg"
  },
  {
    name: "Vintage Rembrandt Stiffel Brass Table Lamp",
    era: "1970s · Brass",
    category: "lighting-decor",
    price: "$295",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "brasslamp.jpg"
  },
  {
    name: "Vintage Brass Waterfall/Tiered Eyeball Lamp after Sonneman",
    era: "1970s · Brass",
    category: "lighting-decor",
    price: "$425",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "waterfalllamp.jpg"
  },
  {
    name: "Rare Lane Altavista Brutalist Rosewood and Walnut Headboard by Paul McCobb in King",
    era: "1970s · Rosewood and Walnut",
    category: "storage",
    price: "$975",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "rosewoodheadboard.jpg"
  },
  {
    name: "Vintage Henredon Mahogany Clawfoot or Claw Foot Side/End Table",
    era: "1970s · Mahogany",
    category: "tables",
    price: "$195",
    oldPrice: "$295",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DY7SgGIG9F5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "clawfoot-table.jpg"
  },
  {
    name: "Vintage 1970’s Romeo Rega Style Chrome and Glass Etagere Shelf",
    era: "1970s · Chrome",
    category: "storage",
    price: "$575",
    oldPrice: "$795",
    status: "drop",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/C769jQDJi_T/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "romeorega-etagere.jpg"
  },
  {
    name: "Vintage Rustic Solid Reclaimed Wood Farmhouse Bookcase",
    era: "Vintage · Solid Wood",
    category: "storage",
    price: "$895",
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
    price: "$895",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage/",
    image: "antique-dining-table.jpg"
  },
  {
    name: "Set of 3 Vintage Ribbed Libbey Sundae Pedestal Glasses",
    era: "1990s · Glass",
    category: "lighting-decor",
    price: "$15",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/C6eMgaKARwe/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "sundaeglasses.jpg"
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
    name: "Vintage Anchor Hocking Lido Milano Blue Sherbet/Dessert Crinkle Glasses",
    era: "1970s · Glass",
    category: "lighting-decor",
    price: "$45",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/C0Pwz25pt3J/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "blueglasses.jpg"
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
    name: "Vintage 3-Way Dual Lamp after Gerald Thurston",
    era: "1960s · Metal",
    category: "lighting-decor",
    price: "$295",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/CjWXo_Yr82q/?igsh=Y2hwbXlwdmd3bnZp",
    image: "thurston-lamp.jpg"
  },
  {
    name: "1980s Postmodern Contemporary White Laminate Table",
    era: "1980s · Laminate",
    category: "tables",
    price: "$85",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZc0mK7EZJT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "white-table.jpg"
  }
];
