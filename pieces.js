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
    name: "Antique 1920s School Cupboard by the North of England School Furnishing Company",
    era: "1920s · Solid wood",
    category: "storage",
    price: "$650",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "schoolbookcase.jpg"
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
    name: "Fully Refinished Vintage Broyhill Brasilia Side Table",
    era: "1960s · Walnut",
    category: "tables",
    price: "$575",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "brasiliasidetable.jpg"
  },
  {
    name: "Vintage Mini Lucite Table/Desk Lamp",
    era: "1970s · Lucite",
    category: "lighting-decor",
    price: "$35",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "lucitelight.jpg"
  },
  {
    name: "Mid Century MCM Tapered Leg Side Table",
    era: "20th Century · Solid Wood",
    category: "tables",
    price: "$75",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "sidetable.jpg"
  },
  {
    name: "Vintage Brass Waterfall/Tiered Eyeball Lamp after Sonneman",
    era: "1970s · Brass",
    category: "lighting-decor",
    price: "$450",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "waterfalllamp.jpg"
  },
  {
    name: "Vintage \u201CBoulevard of Broken Dreams\u201D Painting Print with Pink Neon Light",
    era: "1980s · Neon",
    category: "lighting-decor",
    price: "$525",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "singleneon.jpg"
  },
  {
    name: "Victorian Footed Marble and Brass Table Lamp with Fabric Fringe/Tassel Lamp Shade",
    era: "1960s · Brass/Marble",
    category: "lighting-decor",
    price: "$375",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "artdecolamp.jpg"
  },
  {
    name: "Rare Lane Altavista Brutalist Rosewood and Walnut Headboard by Paul McCobb in King",
    era: "1970s · Rosewood and Walnut",
    category: "seating",
    price: "$975",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "rosewoodheadboard.jpg"
  },
  {
    name: "Vintage 1970s Groovy Loveseat Sofa with Jack Lenor Larson Fabric",
    era: "1970s · Jack Lenor Larson",
    category: "seating",
    price: "$750",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "jllsofa.jpg"
  },
  {
    name: "Monte Design Group \u201CJoya\u201D Rocker Rocking Chair",
    era: "2020s · Walnut",
    category: "seating",
    price: "$575",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "joya.jpg"
  },
  {
    name: "Custom-Made Modern Solid Walnut Wood L-Shaped Desk",
    era: "2020s · Walnut",
    category: "tables",
    price: "$450",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZdEithGwW5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "leftdesk.jpg"
  },
  {
    name: "Antique Forest Furniture Company Vanity and Mirror Set Circa 1940",
    era: "1940s · Solid wood",
    category: "storage",
    price: "$150",
    status: "sold",
    soldDate: "2026-06-04",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZLW2OaG-N0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "vanity.jpg"
  },
  {
    name: "Vintage MCM Tobago Style Brutalist Lighted China Cabinet",
    era: "1970s · Project",
    category: "storage",
    price: "$295",
    oldPrice: "$325",
    status: "sold",
    soldDate: "2026-06-20",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZGCdj9G83_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "tobago.jpg"
  },
  {
    name: "Vintage Charlton Lounge Chair and Ottoman Set in the Style of Eames",
    era: "1970s · Walnut",
    category: "seating",
    price: "$1450",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/taaffevintage",
    image: "charlton.jpg"
  },
  {
    name: "1990s Verner Panton for Vitra Sculptural Molded Fiberglass Dining Chairs",
    era: "1990s · Fiberglass",
    category: "seating",
    price: "$2450",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZLcOqom5ll/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "vernerpanton.jpg"
  },
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
    status: "sold",
    soldDate: "2026-06-15",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DRF1zuvkmly/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "parlor-painting.jpg"
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
    name: "Vintage Glass Mirror and Lucite Vanity Tray",
    era: "1970s · Glass",
    category: "lighting-decor",
    price: "$25",
    status: "sold",
    soldDate: "2026-06-05",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DW2CEWElH7n/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "tray.jpg"
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
    status: "sold",
    soldDate: "2026-06-08",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/DZNdH_CEWNt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
    name: "Anchor Hocking Amber Yellow Pinched Glass Chip and Dip Bowl Set",
    era: "1970s · Glass",
    category: "lighting-decor",
    price: "$30",
    status: "available",
    featured: false,
    instagramUrl: "https://www.instagram.com/p/Cs_ciMDg5FG/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    image: "chipdip.jpg"
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
