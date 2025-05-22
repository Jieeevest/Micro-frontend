# 📁 Project Folder Structure (Hierarchy)

Dokumen ini menjelaskan struktur folder dalam proyek React yang dibagi menjadi dua bagian utama: **Producer** dan **Consumer**. Tujuannya adalah memisahkan antara komponen desain (UI library) dan implementasi logika bisnis.

Struktur ini mengikuti prinsip **Atomic Design** dan praktik modularisasi modern agar lebih mudah dikembangkan dan dirawat.

---

## 🌐 Global Structure
```
project-root/
│
├── src/
│ ├── pages/ # Halaman berdasarkan route
│ ├── helpers/ # Fungsi-fungsi bantu (e.g. format, hook wrapper)
│ ├── data/ # Fungsi fetch atau komunikasi ke API
│ ├── constants/ # Enum, ID, dan nilai tetap
│ ├── types/ # Struct / Interface / TypeScript types
│ ├── layouts/ # Template layout yang bisa di-extend
│ └── styles/
│ └── global.css # CSS global

```
---

## 🧑‍🎨 Producer

Bagian ini berisi komponen desain berbasis **Atomic Design**: Atom, Molekul, dan Layout. Cocok digunakan sebagai Design System internal.
```
Producer/
└── src/
├── Components/
│ ├── Atoms/
│ │ └── [ComponentName]/
│ │ ├── [ComponentName].tsx
│ │ ├── [ComponentName]-type.tsx
│ │ └── [ComponentName]-constant.tsx
│ │
│ ├── Molecules/
│ │ └── [ComponentName]/
│ │ ├── [ComponentName].tsx
│ │ ├── [ComponentName]-type.tsx
│ │ └── [ComponentName]-constant.tsx
│ │
│ └── Layouts/ # (TBD) layout komponen kompleks
│
└── styles/
└── global.css
```

### ✅ Naming Convention:
- Gunakan **PascalCase** untuk nama komponen.
- File `-type.tsx` berisi interface/tipe TypeScript.
- File `-constant.tsx` berisi nilai tetap yang hanya digunakan oleh komponen tersebut.

---

## 👨‍💻 Consumer

Bagian ini adalah implementasi aplikasi menggunakan komponen dari Producer. Berisi halaman, API hook, layout pengguna, dan utilitas.

```
Consumer/
└── src/
├── pages/
│ ├── auth/
│ │ ├── auth.tsx
│ │ └── login.tsx
│ │
│ └── masterContent/
│ └── rules/
│ ├── index.tsx
│ ├── create.tsx
│ └── view.tsx
│
├── layouts/
│ ├── landingLayout.tsx
│ └── mainLayout.tsx
│
├── apis/
│ ├── use-user.tsx
│ ├── use-auth.tsx
│ └── use-service.tsx
│
├── helpers/
│ ├── date-format.tsx
│ └── currency.tsx
│
├── slices/
│ └── user-slice.tsx
│
└── styles/
└── global.css
```

---

## 📌 Catatan Umum

- **`helpers/`**: Tempat untuk fungsi reusable seperti `formatTanggal`, `formatCurrency`, atau hook wrapper seperti `useQueryWrapper`.
- **`types/`**: Wajib digunakan untuk semua tipe data dan interface agar pengembangan lebih terstruktur.
- **`constants/`**: Tempat enum global, ID tetap, atau konfigurasi statis.
- **`pages/`**: Halaman berdasarkan route. Biasanya menjadi titik masuk utama dari setiap fitur.
- **`layouts/`**: Layout halaman global seperti sidebar, header, atau wrapper.

---

## 📎 Tips Pengembangan

- Jaga konsistensi penamaan folder dan file.
- Pisahkan antara _logic_, _view_, dan _type_ untuk memudahkan debugging dan maintainability.
- Gunakan `Producer` sebagai tempat membangun dan menguji UI komponen secara independen.
- `Consumer` fokus pada integrasi dan penggunaan komponen berdasarkan kebutuhan aplikasi.

---

## 📚 Referensi

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Folder Structure Best Practices](https://reactjs.org/docs/faq-structure.html)
- [Feature-Based Folder Structure](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks)

---




