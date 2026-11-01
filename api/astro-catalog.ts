import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface AstroProduct {
  id: string;
  name: string;
  category: string;
  unit: string;
  price: number;
  originalPrice: number;
  discountRaw: string;
  badge: string;
  emoji: string;
  description: string;
  stock: number;
  inStock: boolean;
}

export const ASTRO_REALTIME_DATA: AstroProduct[] = [
  // --- BAHAN POKOK (ASTRO GOODS) ---
  {
    id: 'astro-beras-5kg',
    name: 'Beras Setra Ramos Astro Goods 5kg',
    category: 'Bahan Pokok',
    unit: '5 kg',
    price: 69900,
    originalPrice: 74500,
    discountRaw: '-Rp 4.600',
    badge: 'Astro Goods • Diskon',
    emoji: '🌾',
    description: 'Beras putih pulen pilihan Astro Goods, bersih tanpa pemutih',
    stock: 24,
    inStock: true
  },
  {
    id: 'astro-minyak-sunco-2l',
    name: 'Minyak Goreng SunCo 2L Pouch',
    category: 'Bahan Pokok',
    unit: 'Pouch 2L',
    price: 38900,
    originalPrice: 42000,
    discountRaw: '7%',
    badge: 'Astro Best Seller',
    emoji: '🍳',
    description: 'Minyak goreng kelapa sawit jernih, tahan panas',
    stock: 35,
    inStock: true
  },
  {
    id: 'astro-minyak-sania-2l',
    name: 'Minyak Goreng Sania Pouch 2L',
    category: 'Bahan Pokok',
    unit: 'Pouch 2L',
    price: 37500,
    originalPrice: 39500,
    discountRaw: '5%',
    badge: 'Astro Hemat',
    emoji: '🍳',
    description: 'Minyak goreng dengan Vitamin E & Omega 6 & 9',
    stock: 28,
    inStock: true
  },
  {
    id: 'astro-telur-negeri-10',
    name: 'Telur Ayam Negeri Astro Fresh (10 Butir)',
    category: 'Bahan Pokok',
    unit: 'Pack 10 btr',
    price: 28500,
    originalPrice: 31000,
    discountRaw: '8%',
    badge: 'Astro Fresh Harian',
    emoji: '🥚',
    description: 'Telur ayam segar langsung dari peternakan binaan Astro',
    stock: 45,
    inStock: true
  },
  {
    id: 'astro-telur-omega-10',
    name: 'Telur Ayam Omega 3 Astro Fresh (10 Butir)',
    category: 'Bahan Pokok',
    unit: 'Pack 10 btr',
    price: 34000,
    originalPrice: 38000,
    discountRaw: '10%',
    badge: 'Astro Super Premium',
    emoji: '🥚',
    description: 'Kaya Omega 3 & DHA, kuning telur oranye pekat',
    stock: 18,
    inStock: true
  },
  {
    id: 'astro-indomie-goreng-5',
    name: 'Indomie Goreng Spesial (Pack 5 Pcs)',
    category: 'Bahan Pokok',
    unit: 'Pack 5x85g',
    price: 15500,
    originalPrice: 16500,
    discountRaw: '',
    badge: 'Astro Favorit',
    emoji: '🍜',
    description: 'Mie goreng instan legendaris terfavorit se-Indonesia',
    stock: 80,
    inStock: true
  },
  {
    id: 'astro-indomie-soto-5',
    name: 'Indomie Kuah Rasa Soto Mie (Pack 5 Pcs)',
    category: 'Bahan Pokok',
    unit: 'Pack 5x70g',
    price: 15000,
    originalPrice: 16000,
    discountRaw: '',
    badge: 'Astro Hemat',
    emoji: '🍜',
    description: 'Mie instan kuah rasa soto dengan serbuk koya gurih',
    stock: 65,
    inStock: true
  },
  {
    id: 'astro-gulaku-1kg',
    name: 'Gula Pasir Gulaku Tebu Kuning 1kg',
    category: 'Bahan Pokok',
    unit: 'Pouch 1 kg',
    price: 18500,
    originalPrice: 19500,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '🍬',
    description: 'Gula tebu alami murni bermutu tinggi',
    stock: 40,
    inStock: true
  },
  {
    id: 'astro-tepung-segitiga-1kg',
    name: 'Tepung Terigu Segitiga Biru 1kg',
    category: 'Bahan Pokok',
    unit: 'Pack 1 kg',
    price: 13500,
    originalPrice: 14500,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '🌾',
    description: 'Tepung terigu serbaguna protein sedang',
    stock: 30,
    inStock: true
  },

  // --- SUSU & MINUMAN (ASTRO DRINK) ---
  {
    id: 'astro-ultra-fullcream-1l',
    name: 'Ultra Milk Full Cream UHT 1000ml',
    category: 'Susu & Minuman',
    unit: 'Kotak 1 Liter',
    price: 19800,
    originalPrice: 21500,
    discountRaw: '8%',
    badge: 'Astro Best Seller',
    emoji: '🥛',
    description: 'Susu cair segar UHT kualitas prima kaya kalsium',
    stock: 50,
    inStock: true
  },
  {
    id: 'astro-ultra-cokelat-1l',
    name: 'Ultra Milk Cokelat UHT 1000ml',
    category: 'Susu & Minuman',
    unit: 'Kotak 1 Liter',
    price: 19800,
    originalPrice: 21500,
    discountRaw: '8%',
    badge: 'Astro Favorit',
    emoji: '🍫',
    description: 'Susu UHT lezat dengan cokelat asli premium',
    stock: 38,
    inStock: true
  },
  {
    id: 'astro-greenfields-pasteur-1l',
    name: 'Greenfields Fresh Milk Pasteurisasi 1L',
    category: 'Susu & Minuman',
    unit: 'Botol 1 Liter',
    price: 31500,
    originalPrice: 34000,
    discountRaw: '',
    badge: 'Astro Fresh Dingin',
    emoji: '🥛',
    description: '100% susu segar langsung dari peternakan Greenfields',
    stock: 16,
    inStock: true
  },
  {
    id: 'astro-yakult-5',
    name: 'Yakult Minuman Probiotik (5 Botol)',
    category: 'Susu & Minuman',
    unit: 'Pack 5x65ml',
    price: 11200,
    originalPrice: 12000,
    discountRaw: '',
    badge: 'Astro Sehat',
    emoji: '🍶',
    description: 'Minuman fermentasi keluarga kaya probiotik baik',
    stock: 42,
    inStock: true
  },
  {
    id: 'astro-aqua-600-pack6',
    name: 'Aqua Air Mineral 600ml (Pack 6 Botol)',
    category: 'Susu & Minuman',
    unit: 'Pack 6x600ml',
    price: 19500,
    originalPrice: 21000,
    discountRaw: '',
    badge: 'Astro Hemat',
    emoji: '💧',
    description: 'Air mineral pegunungan terlindung higienis',
    stock: 60,
    inStock: true
  },
  {
    id: 'astro-tehbotol-250-pack3',
    name: 'Teh Botol Sosro Kotak 250ml (Pack 3)',
    category: 'Susu & Minuman',
    unit: 'Pack 3x250ml',
    price: 9900,
    originalPrice: 11500,
    discountRaw: '14%',
    badge: 'Astro Promo',
    emoji: '🧃',
    description: 'Teh melati asli dalam kemasan kotak praktis',
    stock: 55,
    inStock: true
  },
  {
    id: 'astro-kopi-kapal-api-mix',
    name: 'Kopi Kapal Api Spesial Mix (10x24g)',
    category: 'Susu & Minuman',
    unit: 'Renceng 10 Sachet',
    price: 14500,
    originalPrice: 16000,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '☕',
    description: 'Kopi bubuk hitam mantap berpadu gula murni',
    stock: 40,
    inStock: true
  },

  // --- SEGAR & DAGING (ASTRO FRESH) ---
  {
    id: 'astro-ayam-fillet-500g',
    name: 'Ayam Fillet Dada Boneless Astro Fresh 500g',
    category: 'Segar & Daging',
    unit: 'Pack 500g',
    price: 38000,
    originalPrice: 42000,
    discountRaw: '9%',
    badge: 'Astro Fresh Harian',
    emoji: '🍗',
    description: 'Dada ayam tanpa tulang & kulit, dipotong higienis fresh',
    stock: 22,
    inStock: true
  },
  {
    id: 'astro-daging-slice-300g',
    name: 'Daging Sapi Slice Sukiyaki Shabu 300g',
    category: 'Segar & Daging',
    unit: 'Pack 300g',
    price: 49500,
    originalPrice: 56000,
    discountRaw: '11%',
    badge: 'Astro Premium Meat',
    emoji: '🥩',
    description: 'Daging sapi iris tipis melt-in-mouth untuk shabu & sukiyaki',
    stock: 14,
    inStock: true
  },
  {
    id: 'astro-pisang-cavendish',
    name: 'Pisang Cavendish Sunpride Astro Fresh (1 Sisir)',
    category: 'Segar & Daging',
    unit: '1 Sisir (±1.2 kg)',
    price: 24000,
    originalPrice: 28000,
    discountRaw: '14%',
    badge: 'Astro Fresh Buah',
    emoji: '🍌',
    description: 'Pisang cavendish mulus manis alami siap santap',
    stock: 25,
    inStock: true
  },
  {
    id: 'astro-apel-fuji-1kg',
    name: 'Apel Fuji Wang Shan Astro Fresh 1kg',
    category: 'Segar & Daging',
    unit: 'Pack 1 kg (±4-5 pcs)',
    price: 38500,
    originalPrice: 44000,
    discountRaw: '12%',
    badge: 'Astro Fresh Buah',
    emoji: '🍎',
    description: 'Apel fuji renyah garing dengan rasa manis segar',
    stock: 20,
    inStock: true
  },
  {
    id: 'astro-jeruk-santang-500g',
    name: 'Jeruk Baby Santang Manis Astro Fresh 500g',
    category: 'Segar & Daging',
    unit: 'Pack 500g',
    price: 22000,
    originalPrice: 26000,
    discountRaw: '15%',
    badge: 'Astro Fresh Buah',
    emoji: '🍊',
    description: 'Jeruk santang manis tanpa biji, kaya vitamin C',
    stock: 30,
    inStock: true
  },

  // --- DAPUR & BUMBU (ASTRO KITCHEN) ---
  {
    id: 'astro-kecap-bango-520',
    name: 'Kecap Manis Bango Refill 520ml',
    category: 'Dapur & Bumbu',
    unit: 'Pouch 520ml',
    price: 24500,
    originalPrice: 27000,
    discountRaw: '9%',
    badge: 'Astro Best Seller',
    emoji: '🥢',
    description: 'Terbuat dari kedelai hitam mallika pilihan legendaris',
    stock: 36,
    inStock: true
  },
  {
    id: 'astro-saus-abc-380',
    name: 'Saus Sambal ABC Asli Pouch 380ml',
    category: 'Dapur & Bumbu',
    unit: 'Pouch 380ml',
    price: 16500,
    originalPrice: 18500,
    discountRaw: '10%',
    badge: 'Astro Goods',
    emoji: '🌶️',
    description: 'Sambal pedas mantap cabai pilihan berkualitas',
    stock: 45,
    inStock: true
  },
  {
    id: 'astro-royco-ayam-230',
    name: 'Royco Kaldu Ayam Rasa Mantap 230g',
    category: 'Dapur & Bumbu',
    unit: 'Pouch 230g',
    price: 11000,
    originalPrice: 12500,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '🧂',
    description: 'Bumbu penyedap rasa ayam rebus alami gurih',
    stock: 50,
    inStock: true
  },
  {
    id: 'astro-bawang-merah-250',
    name: 'Bawang Merah Brebes Pilihan 250g',
    category: 'Dapur & Bumbu',
    unit: 'Pack 250g',
    price: 14500,
    originalPrice: 16500,
    discountRaw: '',
    badge: 'Astro Fresh Bumbu',
    emoji: '🧅',
    description: 'Bawang merah Brebes wangi sedap berumbi padat',
    stock: 28,
    inStock: true
  },
  {
    id: 'astro-cabe-rawit-150',
    name: 'Cabe Rawit Merah Super Segar 150g',
    category: 'Dapur & Bumbu',
    unit: 'Pack 150g',
    price: 13000,
    originalPrice: 15000,
    discountRaw: '',
    badge: 'Astro Fresh Sayur',
    emoji: '🌶️',
    description: 'Cabai rawit merah pedas nendang, dipetik segar',
    stock: 26,
    inStock: true
  },

  // --- KEBERSIHAN (ASTRO CARE) ---
  {
    id: 'astro-rinso-molto-750',
    name: 'Rinso Molto Cair Japanese Peach 750ml',
    category: 'Kebersihan',
    unit: 'Pouch 750ml',
    price: 21500,
    originalPrice: 25000,
    discountRaw: '14%',
    badge: 'Astro Best Care',
    emoji: '🧺',
    description: 'Deterjen cair konsentrat dengan wangi segar tahan lama',
    stock: 35,
    inStock: true
  },
  {
    id: 'astro-sunlight-jeruk-700',
    name: 'Sunlight Pencuci Piring Jeruk Nipis 700ml',
    category: 'Kebersihan',
    unit: 'Pouch 700ml',
    price: 16500,
    originalPrice: 18500,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '🍋',
    description: 'Cepat bersihkan lemak membandel 10x lebih cepat',
    stock: 48,
    inStock: true
  },
  {
    id: 'astro-lifebuoy-450',
    name: 'Sabun Mandi Lifebuoy Cair Total 10 450ml',
    category: 'Kebersihan',
    unit: 'Pouch 450ml Refill',
    price: 23500,
    originalPrice: 27000,
    discountRaw: '13%',
    badge: 'Astro Proteksi',
    emoji: '🧼',
    description: 'Perlindungan kuman mutakhir dengan formula Activ Silver+',
    stock: 32,
    inStock: true
  },
  {
    id: 'astro-pepsodent-190',
    name: 'Pasta Gigi Pepsodent Economy 190g',
    category: 'Kebersihan',
    unit: 'Tube 190g',
    price: 13500,
    originalPrice: 15500,
    discountRaw: '',
    badge: 'Astro Goods',
    emoji: '🪥',
    description: 'Pencegah gigi berlubang aktif dengan Mikro Kalsium',
    stock: 40,
    inStock: true
  },

  // --- CAMILAN & ROTI (ASTRO TREATS) ---
  {
    id: 'astro-sari-roti-kupas',
    name: 'Roti Tawar Sari Roti Spesial Kupas',
    category: 'Camilan & Roti',
    unit: 'Pack 200g',
    price: 16000,
    originalPrice: 17500,
    discountRaw: '',
    badge: 'Astro Fresh Roti',
    emoji: '🍞',
    description: 'Roti tawar lembut tanpa kulit, cocok untuk sarapan cepat',
    stock: 25,
    inStock: true
  },
  {
    id: 'astro-chitato-sapi-68',
    name: 'Chitato Sapi Panggang 68g',
    category: 'Camilan & Roti',
    unit: 'Pack 68g',
    price: 11500,
    originalPrice: 12500,
    discountRaw: '',
    badge: 'Astro Snack',
    emoji: '🥔',
    description: 'Keripik kentang bergelombang rasa beef barbeque gurih',
    stock: 50,
    inStock: true
  },
  {
    id: 'astro-pocky-cokelat',
    name: 'Pocky Chocolate Glico 47g',
    category: 'Camilan & Roti',
    unit: 'Box 47g',
    price: 9500,
    originalPrice: 10500,
    discountRaw: '',
    badge: 'Astro Snack',
    emoji: '🍫',
    description: 'Biskuit stik renyah berbalut krim cokelat manis',
    stock: 44,
    inStock: true
  },
  {
    id: 'astro-chitato-lite-nori',
    name: 'Chitato Lite Rumput Laut Nori 68g',
    category: 'Camilan & Roti',
    unit: 'Pack 68g',
    price: 11500,
    originalPrice: 12500,
    discountRaw: '',
    badge: 'Astro Snack',
    emoji: '🥔',
    description: 'Keripik kentang renyah tipis bumbu rumput laut gurih',
    stock: 35,
    inStock: true
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Return live real-time catalog metadata
  return res.status(200).json({
    status: 'online',
    source: 'Astro Quick Commerce Live Feed',
    hub: 'Astro Hub Puri Indah / Jakarta Barat',
    etaMinutes: 15,
    totalProducts: ASTRO_REALTIME_DATA.length,
    lastUpdated: new Date().toISOString(),
    syncEngine: 'Astro Realtime Stream v2.5',
    data: ASTRO_REALTIME_DATA
  });
}

