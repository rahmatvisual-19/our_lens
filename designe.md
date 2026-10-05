---
theme: "Studio Ghibli Aesthetic"
version: "1.0.0"
author: "AI Agent & Creator"
description: "Sistem desain berbasis markdown untuk AI Agent guna menciptakan antarmuka UI dengan nuansa magis, hangat, bernuansa alam, dan nyaman di mata."
tokens:
  colors:
    primary: "#2C5E3B"      # Totoro Forest Green (Alami, teduh)
    secondary: "#D4A373"    # Warm Meadow Straw (Hangat, nostalgik)
    background: "#FDFBF7"   # Watercolor Cream (Lembut, seperti kertas cat air)
    surface: "#F4EAE1"      # Soft Clay (Kontras halus untuk kartu & kontainer)
    text: "#2B2D42"         # Charcoal Ink (Mudah dibaca, tidak sekaku hitam pekat)
    accent: "#E76F51"       # Sunset Orange (Untuk tombol aksi utama/CTA)
    sky_blue: "#A8DADC"     # Laputa Sky (Aksen pendukung elemen interaktif)
  typography:
    sans: "'Quicksand', 'Nunito', sans-serif"
    serif: "'Playfair Display', 'Lora', serif"
    base_size: "16px"
  spacing:
    unit: 4
    scale: [0, 4, 8, 16, 24, 32, 48, 64]
  radius:
    soft: "12px"
    pill: "9999px"
---

# 🍃 Studio Ghibli UI Design System

Sistem desain ini merefleksikan kehangatan, keajaiban, dan keindahan alam khas film-film Studio Ghibli. UI harus terasa organik, nyaman dipandang untuk sesi yang lama, dan memiliki sentuhan magis yang halus.

## 🎨 Palet Warna (Color Palette)

*   **Latar Belakang (`background`):** ` #FDFBF7` — Menggunakan warna krim lembut yang menyerupai kertas gambar klasik, menghindari warna putih digital yang menusuk mata.
*   **Warna Utama (`primary`):** ` #2C5E3B` — Warna hijau hutan yang merepresentasikan elemen alam melimpah.
*   **Warna Aksen (`accent`):** ` #E76F51` — Warna jingga matahari terbenam untuk menarik perhatian pada tombol krusial.
*   **Teks Utama (`text`):** ` #2B2D42` — Tinta arang gelap untuk kenyamanan membaca optimal tanpa kontras yang terlalu tajam.

## ✍️ Tipografi (Typography)

*   **Judul (Headings):** Gunakan **Font Serif** (`'Playfair Display'` atau `'Lora'`) dengan bobot *Medium* hingga *Bold*. Memberikan kesan cerita dongeng dan keanggunan klasik.
*   **Teks Isi (Body text):** Gunakan **Font Sans-Serif bulat** (`'Quicksand'` atau `'Nunito'`) agar UI terlihat ramah, kasual, dan modern tetapi tetap organik.

## 📦 Komponen UI (Component Recipes)

### 1. Kartu Kontainer (Cards & Surfaces)
*   **Gaya:** Latar belakang menggunakan `#F4EAE1` dengan radius sudut melengkung halus (`border-radius: 12px`).
*   **Efek Bayangan:** Hindari bayangan hitam pekat. Gunakan bayangan super halus berwarna kecokelatan untuk memberikan efek kartu yang mengapung lembut di atas kertas cat air:
    `box-shadow: 0 4px 20px rgba(43, 45, 66, 0.05);`

### 2. Tombol Utama (Primary Buttons)
*   **Latar Belakang:** `#2C5E3B` (Hijau Hutan).
*   **Teks:** `#FDFBF7` (Krim).
*   **Bentuk:** Membulat penuh (`border-radius: 9999px`) atau melengkung tebal (`12px`).
*   **Efek Hover:** Transisi warna yang halus ke arah yang lebih terang dengan transformasi *scale* mini saat ditekan (`transform: scale(0.98)`).

### 3. Elemen Dekoratif & Mikro-Interaksi
*   **Ikon:** Gunakan ikon dengan gaya *line-art* yang ujungnya membulat atau ikon bertema alam (daun, awan, bintang).
*   **Animasi:** Setiap transisi harus menggunakan efek *easing* yang organik dan lambat (seperti gerakan angin atau kelopak bunga jatuh):
    `transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);`

## 🧱 Aturan Tata Letak (Layout Rules)

1.  **Beri Ruang Bernapas (White Space):** Jangan menumpuk komponen terlalu padat. Ghibli sangat mengedepankan atmosfer kelapangan (*Ma* - ruang kosong yang bermakna).
2.  **Sudut yang Lembut:** Hindari sudut lancip `0px` pada tombol, gambar, atau kontainer. Semua sudut harus dihaluskan minimal `8px` hingga `12px`.
3.  **Ilustrasi Pendukung:** AI disarankan memadukan latar belakang dengan tekstur cat air transparan yang samar atau ilustrasi lanskap bertema fantasi alam jika memungkinkan.
