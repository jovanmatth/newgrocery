# Panduan Lengkap Fitur & Peta Layar (Screen Map) untuk Desain UI di Stitch

Dokumen ini memuat **seluruh fitur, modul, modal, komponen mikro, dan state UI** aplikasi **KeranjangPintar (Smart Grocery Budget Companion)** secara komprehensif tanpa ada yang terlewat, disusun khusus untuk kebutuhan pembuatan UI, wireframe, atau prototype di **Stitch**.

---

## 🎨 1. Desain Sistem & Tema Visual (Cyber-Glass Dark Fintech)

Gunakan token desain berikut saat membuat prompt atau mengatur styling di Stitch:

| Elemen | Token / Nilai Desain | Deskripsi / Penggunaan |
| :--- | :--- | :--- |
| **Latar Belakang (Base)** | `#080c14` (Deep Slate Obsidian) | Background utama aplikasi dengan radial glow halus |
| **Surface Kontainer** | `#0d1322` & `#131b2e` (Obsidian Navy) | Kartu, modal, dan sheet dengan `backdrop-filter: blur(16px)` |
| **Borders & Dividers** | `rgba(255, 255, 255, 0.08 - 0.12)` | Garis batas tipis transparan modern kaca frosted |
| **Aksen Primer (Emerald)**| `#10b981` (Electric Emerald) | Status aman, tombol utama CTA, checklist aktif, nominal total |
| **Aksen Sekunder (Cyan)** | `#06b6d4` (Cyber Cyan) | Tag kategori, info fluktuasi stabil, highlight diskon bertingkat |
| **Aksen Waspada (Amber)** | `#f59e0b` (Sunset Amber) | Peringatan mendekati limit dompet, voucher diskon, badge impulsif |
| **Aksen Bahaya (Rose)** | `#f43f5e` (Neon Rose / Coral) | Indikator overbudget/defisit, hapus barang, kosongkan troli |
| **Tipografi** | *Space Grotesk* / *Plus Jakarta Sans* + *JetBrains Mono* | Modern clean typography dengan monospace untuk angka moneter |

---

## 📱 2. Peta Layar Utama (Screen Map)

Berikut adalah daftar seluruh layar/tampilan yang perlu dibuat di Stitch:

### SCREEN 01: Layar Masuk & Autentikasi (Auth Screen)
*Tampilan gerbang masuk aplikasi dengan opsi username/password dan Google Auth.*

- [x] **Header Brand**: Logo squircle tas belanja glow neon + judul *"KeranjangPintar"* + subtitle *"Asisten Belanja Anti-Boncos"*.
- [x] **Tab Selector**: Toggle pill tab antara *"Masuk"* dan *"Daftar Akun"*.
- [x] **Form Masuk (Login)**:
  - Input Username / Email (ikon person, background `#131b2e`, border transparan).
  - Input Password dengan toggle icon show/hide (mata).
  - Link teks *"Lupa Password?"* rata kanan bawah.
  - Tombol CTA gradasi Emerald-Cyan: *"Masuk ke Akun"* dengan panah neon.
  - Alert banner in-line (error state dengan shake animation untuk password salah / username belum terdaftar).
- [x] **Form Pendaftaran (Register)**:
  - Input Username baru.
  - Input Alamat Email.
  - Input Password baru dengan toggle show/hide.
  - Tombol CTA *"Buat Akun Sekarang"*.
- [x] **Divider Sosial**: Garis pembatas tipis *"atau masuk lebih cepat dengan"*.
- [x] **Tombol Google Auth**:
  - Tombol gelap berborder elegan dengan logo resmi Google berwarna (G logo).
  - Teks *"Lanjutkan dengan Akun Google"*.
- [x] **Badge Privasi Bawah**: Ikon gembok + teks *"Data tersimpan privat & mandiri per akun"*.

---

### SCREEN 02: Pop-up Pemilih Akun Google (Google Account Chooser Modal)
*Layar dialog khusus autentikasi Google (`google-auth.html`).*

- [x] **Card Dialog Modal**: Desain frosted glass gelap dengan header resmi *"Google"* dan *"Pilih akun untuk melanjutkan ke KeranjangPintar"*.
- [x] **Daftar Akun Siap Pakai**:
  - Akun 1: Avatar Rian Pratama (`rian.pratama@gmail.com`).
  - Akun 2: Avatar Jovan Matthew (`jovan.matthew@gmail.com`).
  - Akun 3: Avatar Sarah Amalia (`sarah.amalia@gmail.com`).
  - Ikon panah `chevron_right` di setiap kartu akun.
- [x] **Opsi Akun Lain**: Tombol *"Gunakan akun lain"* untuk mengetik nama & email custom.
- [x] **Footer Legal**: Kebijakan Privasi & Ketentuan Layanan Google.

---

### SCREEN 03: Top Header & Cockpit Radar Budget HUD
*Header sticky dan instrumen radar keuangan di bagian paling atas aplikasi.*

- [x] **Header Bar**:
  - Kiri: Squircle bag icon hijau glowing + teks *"KeranjangPintar"* + badge mini `"PRO"`.
  - Dropdown Supermarket Aktif: Tombol pill dengan ikon toko (`storefront`) dan panah bawah, menampilkan nama toko yang sedang dipilih (cth: *"Lotte Mart Grocery - Puri Indah"*).
  - Date Picker Session: Selector tanggal aktif belanja (`calendar_month`).
  - Cloud Sync Pill: Indikator Supabase Realtime dengan pulsating dot hijau (*"ONLINE"*).
  - Budget Limit Pill: Menampilkan batas dompet aktif (*"Rp 350k"*).
  - User Avatar Button: Lingkaran inisial profil user dengan gradasi emerald.
- [x] **Cockpit Radar HUD (Instrument Card)**:
  - Header HUD: Label *"SAFETY RADAR"* + Status Badge (`RADAR-ACTIVE` / `DEFISIT`) + Total Hemat Badge (`HEMAT Rp 0`).
  - Nilai Pengeluaran Utama: Angka moneter raksasa glowing (*"Rp 0"* atau *"Rp 148.000"*).
  - Status Sisa Anggaran: Teks status dinamis (*"Sisa Aman: Rp 202.000"* atau *"Defisit: -Rp 25.000"*).
  - **10-Segment LED Meter**: Bar indikator dengan 10 blok visual yang menyala bertahap (hijau 0-70%, kuning 71-85%, merah berkedip 86-100%+).
  - Subtick Persentase: Skala `0% (Rp 0)`, `50%`, dan `Max Limit (Rp 350k)`.
  - Tombol Cepat Saran Pangkas: Muncul otomatis saat status defisit/merah (*"Saran Pangkas Belanja"*).

---

### SCREEN 04: Tab 1 — Troli Belanja Utama (Active Cart View)
*Layar inti operasional belanja saat mengelilingi lorong rak supermarket.*

- [x] **Category Filter Pills**: Scroll horizontal filter kategori dengan badge angka produk:
  - *Semua*, *Bahan Pokok*, *Makanan & Minuman*, *Kebersihan*, *Dapur & Bumbu*, *Lainnya*.
- [x] **In-Cart Search Bar**: Input pencarian barang di troli dengan ikon kaca pembesar & tombol hapus query.
- [x] **Tombol Tambah Produk Manual**: Tombol mencolok bertuliskan *"+ Tambah Barang"* untuk membuka modal input manual.
- [x] **Empty State Troli**:
  - Ilustrasi troli kosong modern dengan glow cyan/emerald.
  - Judul *"Troli Masih Kosong"*.
  - Teks panduan: ambil dari rencana belanja atau cari produk di katalog toko.
  - Tombol cepat buka *Rencana Belanja*.
- [x] **Daftar Kartu Barang (Neo-Ticket Cards)**:
  - **Top Row**:
    - Tombol Checkbox *DI RAK* (lingkaran transparan yang berubah menjadi emerald menyala saat dicentang).
    - Label Nomor Lot: `LOT #01`, `LOT #02`, dst.
    - Tag Kategori Cyber Cyan.
    - Barcode strip visual mini.
    - Stempel Status: `DI RAK ✓` (hijau) vs `PENDING` (kuning/amber).
    - Quick Action Buttons: Ikon Edit (pensil) dan Ikon Hapus (tempat sampah).
  - **Middle Row**:
    - Judul/Nama Produk: Tipografi tebal tegas (cth: *"Minyak Goreng Sania 2L"*).
    - Spesifikasi Kemasan: `Kemasan: pouch / 2 liter`.
    - Badge Asal Barang: `Rencana` (hijau) jika ada di checklist, atau `Impulsif` (amber) jika spontan diambil di toko.
  - **Pricing & Fluktuasi Row**:
    - Harga Satuan: Harga coret jika ada diskon + Harga satuan bersih tebal + satuan (`/pouch`).
    - **Badge Fluktuasi Harga vs Bulan Lalu**:
      - `HARGA TETAP` (biru/cyan).
      - `NAIK +Rp 2.000 (+6%)` (rose/merah) dengan ikon tren naik.
      - `TURUN -Rp 1.500 (-5%)` (emerald/hijau) dengan ikon hemat.
    - **Stempel Diskon Toko**: Badge stempel merah bata (cth: `DISKON 20%` atau `HEMAT Rp 5.000`).
    - **Diskon Kompound Multi-Layer**: Kotak formula ungu neon untuk diskon bertumpuk (cth: `10% + 10% Lapis: Hemat Rp 6.800`).
  - **Bottom Row (POS Stepper & Subtotal)**:
    - **Tactile Stepper**: Tombol minus (berubah jadi ikon tempat sampah merah saat qty = 1), input kuantitas angka langsung di tengah, tombol plus.
    - Subtotal Produk: Label `SUBTOTAL (X pcs)` + Angka subtotal moneter tebal menyala.
- [x] **Sticky Bottom Summary Bar (Footer Troli)**:
  - Ringkasan Jumlah Barang: `X Item di Troli` & `X Item Sudah di Rak`.
  - Total Akhir Belanja: Teks `TOTAL BELANJA` + angka total tebal.
  - Tombol Hapus: Ikon tempat sampah untuk membuka konfirmasi kosongkan troli.
  - Tombol CTA Utama: *"Bayar di Kasir (Rp ...)"* dengan ikon kartu kasir.

---

### SCREEN 05: Tab 2 — Katalog Toko & Rak Cepat (Astro Catalog Shelf)
*Layar eksplorasi produk toko resmi untuk menambahkan barang dalam 1-klik.*

- [x] **Banner Toko**: Banner informasi supermarket terpilih (Lotte Mart / GrandLucky) dengan info jam operasional & status ketersediaan rak.
- [x] **Search Catalog Input**: Kolom cari produk supermarket secara real-time.
- [x] **Grid / List Produk Katalog**:
  - Foto / Ikon Representasi Produk.
  - Nama Produk & Kategori.
  - Satuan Kemasan Standar.
  - Harga Resmi Toko & Harga Acuan Bulan Lalu.
  - Tombol Cepat `+ Tambah ke Troli`.
  - Indikator Status Stok: *Tersedia di Rak*.
- [x] **Komponen Paginasi Taktil**:
  - Info Rentang: *"Produk 1-12 dari 48"*.
  - Indikator Halaman: *"Halaman 1 / 4"*.
  - Tombol *Prev* & *Next* bernuansa dark acrylic.
  - Tombol nomor halaman bernomor (1, 2, 3, 4) dengan efek glow pada halaman aktif.

---

### SCREEN 06: Tab 3 — Rencana Belanja (Shopping Planner Checklist)
*Layar perencana sebelum ke supermarket agar belanja tetap terkontrol.*

- [x] **Header Rencana Belanja**: Total item direncanakan & perkiraan anggaran estimasi.
- [x] **Progress Bar Kebutuhan**: Persentase barang rencana yang sudah masuk ke troli fisik.
- [x] **Form Tambah Rencana Cepat**:
  - Kolom nama barang yang ingin dibeli dari rumah.
  - Dropdown kategori & satuan.
  - Input estimasi harga acuan bulan lalu.
  - Tombol *"Tambah ke Rencana"*.
- [x] **Daftar Checklist Rencana**:
  - Checkbox penanda sudah dibeli.
  - Nama barang & kategori.
  - Estimasi harga acuan.
  - Tombol Aksi Cepat: *"Ambil ke Troli"* (membuka modal input harga rak untuk memasukkan harga aktual di supermarket).
  - Tombol hapus rencana.

---

### SCREEN 07: Tab 4 — Struk Digital & Acuan Harga Bulan Lalu
*Layar arsip struk pembayaran kasir dan master database fluktuasi harga.*

- [x] **Sub-Tab Switcher**: Toggle antara *"Riwayat Struk"* dan *"Database Acuan Harga"*.
- [x] **Bagian 1: Riwayat Struk Kasir**:
  - Filter struk berdasarkan akun aktif.
  - Empty state jika belum ada transaksi belanja kasir.
  - Kartu Riwayat Belanja:
    - Tanggal transaksi & jam kasir.
    - Nomor transaksi unik (`LOTTE-PURI-XXXXX`).
    - Total bayar akhir & jumlah jenis barang.
    - Total penghematan promo voucher (`Hemat: Rp ...`).
    - Tombol *"Buka Struk"* (membuka thermal slip digital).
- [x] **Bagian 2: Master Database Fluktuasi Harga**:
  - Search bar database barang acuan.
  - Tabel/Daftar Barang Acuan:
    - Nama barang & kemasan.
    - Harga terendah, harga tertinggi, dan harga bulan lalu.
    - Status tren harga (stabil, naik tajam, turun).
    - Tombol update harga acuan baru.

---

### SCREEN 08: Tab 5 — Anggaran & Analisis Dompet (Budget Management)
*Layar manajemen batas finansial dan pembagian pengeluaran belanja.*

- [x] **Pengaturan Limit Dompet**:
  - Nilai limit aktif saat ini (cth: *"Rp 350.000"*).
  - Input kustom nominal anggaran belanja bulanan.
  - 4 Tombol Cepat Preset Anggaran: `Rp 100k`, `Rp 250k`, `Rp 350k`, `Rp 500k`.
  - Tombol simpan perubahan limit.
- [x] **Rasio Belanja Impulsif vs Terencana**:
  - Meter/Progress bar membandingkan persentase belanja barang rencana vs belanja impulsif spontan.
  - Nominal total belanja yang tidak direncanakan sebelumnya.
- [x] **Breakdown Pengeluaran per Kategori**:
  - Progress bar proporsi belanja Bahan Pokok, Makanan & Minuman, Kebersihan, Dapur, dll.
- [x] **Tips & Insight Penghematan**: Rekomendasi belanja cerdas agar terhindar dari defisit.

---

### SCREEN 09: Mesin Kasir POS — Tahap 1: Review & Pilih Pembayaran
*Tahap pertama checkout di mana user memilih voucher dan metode bayar (`#modalAstroCheckout`).*

- [x] **Header Kasir Supermarket**:
  - Ikon terminal POS hijau neon.
  - Judul *"Kasir Pembayaran Lotte Mart"* + badge lokasi toko *"Puri Indah"*.
  - Tombol close silang.
- [x] **Info Pembeli & Kasir**:
  - Avatar user pembeli & nama akun.
  - Nama toko kasir.
  - Badge hijau *"Ready Kasir"*.
- [x] **Preview Barang Belanjaan (Collapsible)**:
  - Jumlah total barang (`X Produk`).
  - Ringkasan ringkas nama barang, qty, dan subtotal per item.
- [x] **Pemilih Voucher Promo Supermarket**:
  - Header kartu voucher dengan ikon tiket emas & badge *"Hemat Ekstra"*.
  - 4 Tombol Pilihan Voucher:
    1. `LOTTESAVE` — Diskon Rp 15.000 (Min. Belanja Rp 50rb).
    2. `ONGKIRGRATIS` — Gratis Layanan (Min. Belanja Rp 10rb).
    3. `ANAKKOS5K` — Potongan Rp 5.000 (Min. Belanja Rp 25rb).
    4. `Tanpa Voucher` — Harga Standar.
- [x] **Kalkulasi Rincian Biaya Kasir**:
  - Subtotal Belanja.
  - Diskon Voucher (warna cyan/emerald).
  - Biaya Kemasan & Layanan Kasir (`Rp 1.000`).
  - **TOTAL BAYAR** (angka besar emerald neon).
  - Sisa Uang Saku Dompet setelah bayar (`Rp ... (Aman)`).
- [x] **4 Tab Metode Pembayaran Interaktif**:
  - **Metode 1: QRIS Supermarket**:
    - Panel QR code resolusi tinggi dengan logo keranjang belanja di tengah.
    - Countdown timer merah: `14:59` (sisa waktu bayar).
    - Kode NMID resmi & nomor referensi transaksi.
    - Keterangan aplikasi pendukung (BCA, GoPay, OVO, ShopeePay).
  - **Metode 2: LottePay / Saldo Dompet**:
    - Tampilan saldo dompet akun (`Rp 350.000`) + badge *"Saldo Cukup"*.
    - Kotak PIN Keamanan 6-digit (titik-titik interaktif).
  - **Metode 3: Virtual Account (VA)**:
    - Tab pilihan bank: *BCA*, *Mandiri*, *BRI*, *BNI*.
    - Tampilan nomor VA rekening tujuan (`8801 2948 1029 3847`).
    - Tombol *"Salin Nomor VA"*.
  - **Metode 4: Tunai / Cash**:
    - Preset tombol nominal uang tunai: *Uang Pas*, *Rp 100k*, *Rp 200k*, *Rp 250k*, *Rp 300k*, *Rp 500k*.
    - Input manual nominal uang tunai yang diserahkan.
    - Kalkulator Realtime Uang Kembalian Kasir (`Kembalian Kasir: Rp ...`).
- [x] **Sticky Action Footer**:
  - Tombol CTA Lebar: *"Bayar Sekarang (Rp ...)"* dengan ikon kartu pembayaran.

---

### SCREEN 10: Mesin Kasir POS — Tahap 2: Animasi Pemrosesan Transaksi
*Layar transisi pemrosesan kasir 3-fase dengan efek hologram futuristik.*

- [x] **Hologram Scanner Terminal**:
  - Ilustrasi mesin kasir neon berdenyut (*pulse*) dengan bayangan glow hijau menyala.
  - Laser scanner garis pemindaian animasi.
- [x] **Step Badge Indikator**:
  - Badge monospace: `FASE 1 / 3` -> `FASE 2 / 3` -> `FASE 3 / 3`.
- [x] **Judul & Deskripsi Langkah**:
  - *Fase 1*: "Menghubungkan ke Kasir Lotte Mart... Memverifikasi transaksi dan mengunci harga resmi barang belanjaan."
  - *Fase 2*: "Memverifikasi Pembayaran... Memvalidasi saldo dan memproses otorisasi pembayaran."
  - *Fase 3*: "Mencetak Struk Resmi... Menyiapkan struk digital dan mencatat riwayat transaksi."
- [x] **Progress Bar Berjalan**:
  - Bar gradasi emerald menyala yang bergerak maju dari 25% hingga 100%.
  - Label tracker di bawah bar: *Kasir Supermarket*, *Verifikasi Saldo*, *Cetak Struk*.
- [x] **Enkripsi Keamanan**: Teks garansi keamanan 256-bit dengan dot hijau berkedip.

---

### SCREEN 11: Mesin Kasir POS — Tahap 3: Struk Belanja Kasir (Thermal Receipt)
*Tampilan struk digital thermal yang keluar setelah pembayaran berhasil.*

- [x] **Top Green Bar**: Ikon verified centang + teks *"Pembayaran Berhasil!"* + tombol close.
- [x] **Thermal Paper Slip (Efek Kertas Nota Kasir)**:
  - Efek potongan kertas kasir bergerigi (*zig-zag cut*).
  - Header Supermarket:
    - Nama toko: `LOTTE MART GROCERY - PURI INDAH`.
    - Alamat cabang mall & lantai.
    - Timestamp tanggal & jam transaksi lengkap.
    - Nomor transaksi unik kasir: `TRX: LOTTE-PURI-XXXXXXXX`.
  - Detail Pelanggan & Kasir:
    - Nama Pelanggan: Nama akun pengguna aktif.
    - Nama Kasir: `Sistem Mandiri Lotte Mart`.
    - Metode Bayar: `QRIS / Tunai (Lunas)`.
  - Tabel Daftar Barang Belanjaan:
    - Pemisah garis putus-putus (*dashed line*).
    - Daftar item: Nama produk + (Qty x Satuan) + Harga total baris.
  - Rincian Keuangan:
    - Subtotal Belanja.
    - Hemat Promo Voucher (warna hijau negatif).
    - Biaya Layanan Kasir.
    - **TOTAL AKHIR** (tebal bergaris ganda).
    - Nominal Diterima & Uang Kembalian (jika bayar tunai).
  - Footer Struk:
    - Garis barcode digital monospaced.
    - Pesan ucapan terima kasih berbelanja cerdas.
- [x] **Footer Aksi Struk**:
  - Tombol *"Salin Teks Struk"*.
  - Tombol *"Buka Riwayat"*.
  - Tombol CTA Utama: *"Mulai Belanja Lagi (Troli Baru)"*.

---

## 🪟 3. Daftar Seluruh Modal & Dialog Interaktif

Pastikan komponen pop-up modal berikut didesain sebagai dialog overlay:

### MODAL 01: Input Harga Rak dari Rencana Belanja (`#modalShelfPriceBackdrop`)
- Handle drag bar atas (indikator bottom-sheet).
- Judul *"Ambil dari Rencana Belanja"* & Nama Barang yang dipilih.
- Tampilan kartu info *"Harga Acuan Bulan Lalu: Rp X"*.
- Input harga satuan aktual di rak supermarket.
- **Kotak Fluktuasi Seketika**: Memberi tahu seketika apakah harga di rak lebih mahal, stabil, atau lebih murah dari bulan lalu.
- Input diskon rak toko (opsional).
- Tombol *Batal* & Tombol *Masukkan ke Troli*.

### MODAL 02: Tambah / Edit Produk Manual (`#modalItemBackdrop`)
- Handle drag bar atas & judul *"Input Produk" / "Tambah ke Troli"*.
- Input nama produk dengan dropdown auto-suggest autocomplete dari master catalog.
- Grid 2-kolom: Dropdown *Kategori* & Dropdown *Kemasan/Satuan*.
- Stepper Kuantitas (Qty) bertombol sentuh `+` dan `-`.
- Grid 2-kolom: Input *Harga Satuan (Rp)* & Input *Harga Bulan Lalu (Rp)*.
- Badge perbandingan fluktuasi seketika.
- **Section Potongan / Diskon Toko Fleksibel**:
  - Kolom input bebas (mendukung format `10% + 10%`, `20%`, atau `5000`).
  - Tombol hapus diskon.
  - Deretan pil diskon cepat: `+5%`, `+10%`, `+20%`, `+25%`, `+50%`, `Rp 5.000`.
  - Preview real-time diskon: Harga setelah diskon, nominal dihemat, dan rincian diskon kompound.
- Tampilan Subtotal kalkulasi.
- Tombol *Batal* & Tombol *Simpan ke Troli*.

### MODAL 03: Atur Batas Dompet (`#modalBudgetBackdrop`)
- Judul *"Kendali Dompet - Atur Batas Anggaran"*.
- Kolom input nominal target dompet (Rp).
- 4 Tombol cepat pilihan preset: `Rp 100k`, `Rp 250k`, `Rp 350k`, `Rp 500k`.
- Tombol *Batal* & Tombol *Simpan*.

### MODAL 04: Struk Digital Riwayat Transaksi (`#modalReceiptBackdrop`)
- Tampilan full receipt paper slip untuk transaksi masa lalu dengan rincian per barang, total bayar, tanggal, dan nama kasir.
- Tombol close silang.

### MODAL 05: Saran Pangkas Belanja / Anti-Defisit (`#modalTrimBackdrop`)
- Judul *"Saran Pangkas Belanja"* dengan deskripsi penyelamatan overbudget.
- Daftar rekomendasi barang berbiaya besar dan non-pokok (impulsif/snack) yang dapat dikurangi atau dihapus.
- Tombol potong per barang.
- Tombol *"Selesai Memangkas"*.

### MODAL 06: Pemilih Supermarket (`#modalStoreBackdrop`)
- Daftar pilihan toko supermarket resmi:
  1. *Lotte Mart Grocery - Puri Indah* (dengan centang hijau).
  2. *GrandLucky SCBD*.
  3. *Superindo Express*.
  4. *Hypermart Mega Mall*.
  5. *Alfamidi Super*.

### MODAL 07: Konfirmasi Kosongkan Troli (`#modalConfirmClearCart`)
- Dialog konfirmasi bahaya dengan ikon tempat sampah merah menyala.
- Teks peringatan: semua barang akan dihapus permanen.
- Tombol *Batal* & Tombol *Ya, Kosongkan*.

### MODAL 08: Profil Pengguna & Manajemen Data (`#modalUserProfileBackdrop`)
- Avatar profil besar + Nama Pengguna + Badge Provider (`Username` / `Google`).
- Status keamanan: `🔒 Data troli & limit terisolasi privat`.
- Ringkasan statistik: *Item di Troli* dan *Limit Dompet*.
- Manajemen Cadangan Data:
  - Tombol *Ekspor JSON*.
  - Tombol *Impor JSON*.
  - Tombol merah *Reset Data ke Standar*.
- Tombol *Ganti Username / Akun Lain*.
- Tombol merah *Keluar dari Akun Ini*.

### MODAL 09: Lupa Password & Reset OTP (`#modalForgotPasswordBackdrop`)
- **Tahap 1**: Input email terdaftar + Tombol *"Kirim Kode Verifikasi"*.
- **Tahap 2**: Banner email tujuan + Tombol buka Gmail + Input 6 digit OTP kode kotak monospace + Input password baru + Toggle show/hide password + Tombol *"Simpan Password Baru"*.

---

## 🧭 4. Navigasi Floating Dock Bawah (Bottom Navigation Dock)

Floating pill bar di bagian bawah layar dengan 4 tab interaktif:

1. **Tab 1: Troli Belanja (`tabCart`)**
   - Ikon keranjang belanja (`shopping_cart`).
   - Badge angka jumlah item di troli.
   - Label teks *"TROLI"*.
2. **Tab 2: Rencana Belanja (`tabBudget`)**
   - Ikon checklist dokumen (`checklist`).
   - Label teks *"RENCANA"*.
3. **Tab 3: Struk & Acuan (`tabHistory`)**
   - Ikon struk panjang (`receipt_long`).
   - Label teks *"STRUK"*.
4. **Tab 4: Anggaran Dompet (`tabDompet`)**
   - Ikon dompet finansial (`account_balance_wallet`).
   - Label teks *"ANGGARAN"*.

*State Aktif: Glowing background pill emerald + teks & ikon hijau menyala.*

---

## 💡 5. Rekomendasi Prompt untuk Stitch per Layar

Gunakan kalimat prompt berikut saat men-generate layar di Stitch:

- **Prompt Auth Screen**:
  > *"Ultra-sleek dark mode fintech authentication screen, frosted glass card with 1px subtle luminous border, emerald green and cyber cyan gradient CTA button, username and password fields, forgot password link, elegant Google sign-in button, deep obsidian background #080c14 with subtle neon glow."*

- **Prompt Cart & Radar Cockpit**:
  > *"Mobile grocery budget tracking dashboard in cyber-glass dark fintech aesthetic, sticky header with store selector pill, futuristic radar cockpit HUD card with 10-segment LED battery meter and glowing total spending number, category filter chips, perforated ticket grocery cart cards with quantity stepper and price fluctuation badges, floating bottom dock navigation."*

- **Prompt Interactive Cashier POS**:
  > *"Supermarket interactive cashier checkout modal for mobile app, dark cyber-glass theme, promo voucher discount cards, payment method selector with QRIS code, digital wallet PIN input, virtual account copy button, cash payment change calculator, sleek emerald confirmation button."*

- **Prompt Thermal Receipt Rollout**:
  > *"Realistic digital thermal receipt slip rollout on dark fintech background, zig-zag perforated edges, monospaced cashier details, store header, dashed divider lines, itemized purchase breakdown, total amount, barcode, copy receipt and new cart buttons."*

