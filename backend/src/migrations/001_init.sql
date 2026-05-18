-- =====================================================
-- Toba Mas Company Profile - Database Migration
-- Run this SQL against your PostgreSQL database
-- =====================================================

-- Table: about_company
CREATE TABLE IF NOT EXISTS about_company (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    history TEXT NOT NULL,
    vision TEXT NOT NULL,
    mission TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: portfolios
CREATE TABLE IF NOT EXISTS portfolios (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: contact_settings
CREATE TABLE IF NOT EXISTS contact_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    value VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- Seed Data: Toba Mas
-- =====================================================

-- Insert About Company
INSERT INTO about_company (company_name, history, vision, mission) VALUES (
    'Toba Mas',
    'Toba Mas lahir dari sebuah visi untuk mengangkat keagungan Danau Toba sebagai warisan dunia (UNESCO Global Geopark) ke tingkat yang lebih prestisius. Berawal dari kepedulian terhadap kelestarian ekosistem dan kekayaan budaya suku Batak, perusahaan ini didirikan oleh sekelompok putra daerah yang ingin menggabungkan konsep sustainable tourism (pariwisata berkelanjutan) dengan layanan standar internasional. Nama "Mas" (Emas) melambangkan nilai luhur dan kemilau kearifan lokal yang ingin kami tawarkan kepada setiap pengunjung. Sejak awal berdiri, Toba Mas berkomitmen untuk tidak hanya menjual pemandangan, tetapi juga narasi tentang sejarah bumi (geologi) dan sejarah manusia yang membentuk peradaban di sekeliling danau vulkanik terbesar di dunia ini.',
    'Menjadi pengelola destinasi wisata terintegrasi yang paling inovatif dan berkelanjutan di Asia Tenggara, dengan menonjolkan harmoni antara kemewahan modern dan autentisitas budaya Danau Toba.',
    'Melestarikan Warisan: Menjaga kelestarian alam dan situs budaya di kawasan Danau Toba melalui praktik wisata ramah lingkungan.
Memberdayakan Masyarakat: Melibatkan komunitas lokal secara aktif dalam ekosistem pariwisata untuk meningkatkan kesejahteraan ekonomi daerah.
Pengalaman Premium: Menyediakan layanan kelas dunia yang memberikan pengalaman mendalam (immersive) bagi wisatawan domestik maupun mancanegara.
Inovasi Pariwisata: Mengembangkan infrastruktur dan aktivitas wisata baru yang unik tanpa merusak integritas lingkungan.'
) ON CONFLICT DO NOTHING;

-- Insert Portfolios: Destinasi & Akomodasi
INSERT INTO portfolios (category, title, description, image_url) VALUES
('Destinasi & Akomodasi', 'The Mas Lakefront Resort', 'Resort butik eksklusif di tepian danau yang menggunakan arsitektur adaptif dari rumah Bolon dengan sentuhan minimalis modern. Nikmati kamar dengan balkon pribadi menghadap Danau Toba, spa tradisional Batak, dan restoran fine dining dengan bahan lokal.', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'),
('Destinasi & Akomodasi', 'Toba Eco-Glamping Park', 'Area berkemah mewah di perbukitan Samosir yang menawarkan pemandangan bintang malam hari dan akses langsung ke jalur trekking hutan pinus. Tenda-tenda dilengkapi fasilitas hotel bintang lima dengan konsep off-grid yang ramah lingkungan.', 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800');

-- Insert Portfolios: Pengalaman Budaya & Edukasi
INSERT INTO portfolios (category, title, description, image_url) VALUES
('Pengalaman Budaya & Edukasi', 'Heritage Trail Samosir', 'Paket tur sejarah yang mengunjungi desa-desa adat kuno, situs megalitikum, dan pusat kerajinan tenun Ulos yang didampingi oleh pemandu ahli sejarah. Pengalaman autentik untuk memahami kearifan lokal suku Batak.', 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800'),
('Pengalaman Budaya & Edukasi', 'Museum Digital Geo-Toba', 'Pusat edukasi interaktif yang menceritakan sejarah letusan dahsyat Gunung Toba menggunakan teknologi augmented reality. Pengunjung dapat "melihat" letusan supervulkanik yang membentuk danau ini 74.000 tahun lalu.', 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800');

-- Insert Portfolios: Wisata Air & Rekreasi
INSERT INTO portfolios (category, title, description, image_url) VALUES
('Wisata Air & Rekreasi', 'Solar-Powered Cruise', 'Kapal pesiar ramah lingkungan bertenaga surya pertama di Danau Toba untuk layanan makan malam mewah (sunset dinner) di tengah danau. Nikmati kuliner khas Batak sambil menyaksikan matahari terbenam di atas air danau yang tenang.', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'),
('Wisata Air & Rekreasi', 'Toba Watersport Hub', 'Pusat kegiatan air yang menawarkan kayak, paddleboarding, dan olahraga air non-motor untuk menjaga ketenangan dan kebersihan air danau. Peralatan berstandar internasional dengan instruktur bersertifikat.', 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800');

-- Insert Contact Settings
INSERT INTO contact_settings (key, value, description) VALUES
('whatsapp', '6285157786978', 'Nomor WhatsApp untuk reservasi dan informasi'),
('email', 'info@tobamas.id', 'Alamat email resmi Toba Mas'),
('address', 'Parapat, Danau Toba, Sumatera Utara, Indonesia', 'Lokasi kantor pusat Toba Mas'),
('instagram', '@tobamas.official', 'Akun Instagram resmi');
