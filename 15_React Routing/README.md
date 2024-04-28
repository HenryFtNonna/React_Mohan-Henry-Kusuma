# Rangkuman React Routing
React Routing adalah proses mengelola tampilan aplikasi web React dengan menangani perubahan URL dan memastikan bahwa komponen yang sesuai dirender untuk setiap URL yang dikunjungi oleh pengguna. Ini memungkinkan Anda untuk membuat aplikasi web multipage atau single-page (SPA) yang kompleks dengan navigasi yang fleksibel.

### 1. BrowserRouter
digunakan sebagai pengelola navigasi utama di aplikasi React. Ini menggunakan HTML5 History API untuk membuat URL yang bersih dan ramah SEO.
### 2. Route
Komponen Route digunakan untuk menentukan aturan pencocokan URL dengan komponen yang akan dirender. Setiap Route memiliki properti path yang menentukan pola URL yang cocok, dan properti component yang menentukan komponen yang akan dirender jika URL cocok dengan pola yang diberikan.
### 3. Link
Komponen Link digunakan untuk membuat tautan antar halaman di aplikasi Anda. Ini bekerja seperti elemen <a> dalam HTML, tetapi dengan menyimpan state navigasi di dalam aplikasi React tanpa memuat ulang halaman.

### Kesimpulan
React Routing adalah teknik yang penting dalam pengembangan aplikasi web React yang memungkinkan penggunaan URL untuk menentukan tampilan yang dirender di aplikasi Anda. Dengan menggunakan React Router, Anda dapat membuat navigasi yang responsif, mengelola state navigasi, dan membuat aplikasi web yang lebih kompleks dengan lebih mudah.