# 📋 BÁO CÁO TIẾN ĐỘ & TÀI LIỆU QUẢN LÝ DỰ ÁN: UNIQLO CLONE

---

## 1. THÔNG TIN TỔNG QUAN
- **Tên dự án**: Giao diện Website UNIQLO Clone (Bản sao giao diện UNIQLO)
- **Mục tiêu**: Xây dựng lại giao diện trang web thương mại điện tử UNIQLO với độ chính xác cao nhất (pixel-perfect) về mặt UI/UX, đồng thời tối ưu hóa cấu trúc mã nguồn để đạt hiệu năng tốt.
- **Trạng thái**: Đang phát triển (Giai đoạn khởi tạo & thiết lập cấu trúc).

## 2. RÀNG BUỘC KỸ THUẬT & CÔNG NGHỆ (TECH STACK)
Dự án này **BẮT BUỘC** tuân thủ các quy tắc công nghệ vô cùng khắt khe nhằm rèn luyện và chứng minh kỹ năng sử dụng các công nghệ cốt lõi:

### 2.1. Giao diện (HTML / CSS)
- **HTML5**: Khai báo cấu trúc ngữ nghĩa (Semantic tags) rành mạch như `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`.
- **CSS3 Thuần (Vanilla CSS)**: 
  - **CHỈ SỬ DỤNG** CSS thuần. 
  - **NGHIÊM CẤM** việc sử dụng các thư viện, framework hay pre-processors từ bên ngoài (Ví dụ: Bootstrap, TailwindCSS, Foundation, SASS/SCSS, LESS đều không được phép).
  - Khuyến khích sử dụng CSS Variables (Custom Properties) để quản lý màu sắc, font chữ và kích thước (ví dụ: `:root { --primary-color: #ff0000; }`).
  - Tích cực sử dụng Flexbox và CSS Grid để dàn trang (Layout) đáp ứng hiện đại.

### 2.2. Tương tác & Logic (JavaScript)
- **JavaScript (Vanilla JS)**: Áp dụng các phương pháp code hiện đại của ES6+.
- **Thư viện jQuery**: **ĐƯỢC PHÉP** sử dụng jQuery (Phiên bản hiện tại `v3.7.1`) để hỗ trợ:
  - Thao tác nhanh với DOM (DOM manipulation).
  - Gắn sự kiện (Event Handling).
  - Tạo hiệu ứng cơ bản (Animations).
  - Xử lý AJAX để nạp (load) các file component HTML rải rác vào trang chính.
  - *Lưu ý: Không dùng thêm plugin hỗ trợ nào của jQuery (như Slick Slider, Owl Carousel...)*.

---

## 3. KIẾN TRÚC HỆ THỐNG & CẤU TRÚC THƯ MỤC
Dự án được tổ chức theo mô hình **Component-based**. Thay vì viết toàn bộ code vào một file HTML khổng lồ, giao diện được cắt nhỏ thành các mảnh (component) độc lập. Trình duyệt sẽ dùng jQuery nạp ráp lại vào `index.html`.

```text
📦 UNIQLO_CLONE
 ┣ 📜 index.html            # Entry point - Chứa các container rỗng
 ┣ 📜 PROGRESS.md           # Tài liệu theo dõi tiến độ (File này)
 ┣ 📂 shared/               # Tài nguyên dùng chung
 ┃ ┣ 📜 global.css          # Reset CSS, CSS Variables, Typography
 ┃ ┣ 📜 global.js           # Các hàm tiện ích dùng chung
 ┃ ┗ 📜 backdrop.html       # Lớp phủ đen làm mờ nền khi mở menu/search
 ┣ 📂 promobar/             # Component: Thanh thông báo trên cùng
 ┃ ┣ 📜 promobar.html
 ┃ ┣ 📜 promobar.css
 ┃ ┗ 📜 promobar.js
 ┣ 📂 header/               # Component: Thanh điều hướng (Logo, Search, Cart...)
 ┃ ┣ 📜 header.html
 ┃ ┣ 📜 header.css
 ┃ ┗ 📜 header.js
 ┣ 📂 menu/                 # Component: Menu xổ xuống đa cấp (Mega Menu)
 ┃ ┣ 📜 menu.html
 ┃ ┣ 📜 menu.css
 ┃ ┗ 📜 menu.js
 ┣ 📂 search/               # Component: Khung tìm kiếm mở rộng
 ┃ ┣ 📜 search.html
 ┃ ┣ 📜 search.css
 ┃ ┗ 📜 search.js
 ┗ 📂 slider/               # Component: Banner trình chiếu hình ảnh
   ┣ 📜 slider.html
   ┣ 📜 slider.css
   ┗ 📜 slider.js
```

---

## 4. QUY CHUẨN VIẾT CODE (CODING STANDARDS)

### 4.1. Quy chuẩn CSS (BEM Methodology)
Khuyến khích sử dụng phương pháp đặt tên lớp theo chuẩn **BEM** (Block, Element, Modifier) để tránh xung đột class và tăng tính dễ đọc:
- **Block**: Thành phần độc lập (VD: `.header`, `.slider`, `.search-box`)
- **Element**: Thành phần con phụ thuộc vào Block (VD: `.header__logo`, `.slider__image`)
- **Modifier**: Trạng thái hoặc biến thể (VD: `.header--dark`, `.slider__image--active`)

### 4.2. Quy chuẩn JavaScript
- Bọc code của từng component trong function độc lập hoặc `$(document).ready()` để không gây ô nhiễm biến toàn cục.
- Đặt tên biến và hàm theo `camelCase`.
- Tách bạch logic xử lý dữ liệu và logic thao tác UI.

---

## 5. LỘ TRÌNH & TIẾN ĐỘ THỰC HIỆN DỰ ÁN

Tiến độ được đánh dấu theo trạng thái:
- `[x]` Đã hoàn thành (Done)
- `[/]` Đang thực hiện (In Progress)
- `[ ]` Chưa bắt đầu (To do)

### Giai đoạn 1: Khởi tạo và thiết lập lõi (Core Setup)
- [x] Thiết lập cấu trúc thư mục Component-based.
- [x] Tích hợp file jQuery v3.7.1.
- [x] Viết hàm đếm và nạp HTML tự động (`$.load()`) vào `index.html`. Đảm bảo các component load đúng thứ tự.
- [x] Khởi tạo các file cấu hình dùng chung `global.css` và `global.js`.
- [x] Xây dựng hệ thống biến CSS (CSS Variables) chứa bảng màu và typography tiêu chuẩn của UNIQLO (Đỏ `#ff0000`, hệ xám, font chữ).

### Giai đoạn 2: Xây dựng Giao diện (HTML/CSS) theo Component
- **Promo Bar (Thanh thông báo)**
  - [ ] Layout HTML hiển thị các dòng thông báo.
  - [ ] CSS định dạng chữ, màu nền, nút close (nếu có).
- **Header (Thanh điều hướng chính)**
  - [ ] Phân bổ Layout cho Logo, Nhóm Danh Mục, và Nhóm Icons.
  - [ ] Thiết kế UI cho các icon (Search, Tài khoản, Yêu thích, Giỏ hàng).
  - [ ] Viết Media Queries hỗ trợ màn hình Mobile (hiển thị Hamburger menu).
- **Mega Menu (Danh mục thả xuống toàn màn hình)**
  - [ ] Lên khung HTML danh sách nhiều cột (Category -> Sub-category).
  - [ ] CSS hiển thị cột thả xuống liền mạch dưới Header.
- **Search Component (Khung tìm kiếm nâng cao)**
  - [ ] Giao diện input nhập liệu lớn nổi bật.
  - [ ] Layout hiển thị các Gợi ý / Lịch sử tìm kiếm / Top từ khóa.
- **Banner Slider (Trình chiếu ảnh quảng cáo lớn)**
  - [ ] Xếp các ảnh banner kế tiếp nhau trên 1 hàng ngang (dùng Flexbox hoặc `white-space: nowrap`).
  - [ ] Giao diện các nút điều hướng Trái/Phải (Next/Prev).
  - [ ] Giao diện Dấu chấm (Pagination Dots) bên dưới.

### Giai đoạn 3: Lập trình Tương tác (JavaScript / jQuery)
- [ ] **Global/Header Logic**: 
  - [ ] Hiệu ứng thu nhỏ kích thước Header khi cuộn trang xuống.
  - [ ] Bật lớp `backdrop` (nền đen mờ) khi người dùng mở Menu hoặc Khung tìm kiếm.
- [ ] **Mega Menu Logic**: 
  - [ ] Xử lý hover/click mở đúng nội dung Mega Menu cho từng nhóm đối tượng (Nữ, Nam, Trẻ em, Sơ sinh).
- [ ] **Search Box Logic**: 
  - [ ] Click icon Search trên Header -> Mở panel tìm kiếm, tự động `focus` vào ô nhập.
  - [ ] Nhấn nút đóng (X) hoặc nhấn ra ngoài nền đen -> Đóng panel.
- [ ] **Banner Slider Logic** *(Thách thức nhất do code tay 100%)*:
  - [ ] Sử dụng jQuery tính toán độ rộng màn hình và thao tác thuộc tính `transform: translateX()` để cuộn ảnh.
  - [ ] Bắt sự kiện click Next / Previous.
  - [ ] Bắt sự kiện click vào các Pagination Dots để nhảy đến đúng ảnh.
  - [ ] Tính năng Auto-play (Tự động chuyển slide) kết hợp với SetInterval.
  - [ ] Tạm dừng Auto-play khi người dùng đưa chuột (hover) vào vùng ảnh của Slider.

### Giai đoạn 4: Danh mục Sản phẩm (Category Page)
- [x] Tạo layout gốc và Component `category` với các nút bộ lọc ngang.
- [x] Chuyển đổi kiến trúc sang Dynamic Rendering bằng jQuery để tái sử dụng giao diện cho **tất cả 14 danh mục Nữ**.
- [x] Tích hợp hình ảnh thực tế từ repo Github của dự án.
- [x] Gắn liên kết từ Menu (Mục Nữ) với tham số URL để tự động hiển thị nội dung.
- [x] Nâng cấp **Thẻ sản phẩm (Product Card)** lên mức độ Pixel-Perfect (3 cột): Có hiệu ứng đổi màu khi hover, nút Yêu thích (Trái tim), và thuật toán tự sinh giá khuyến mãi (Giá đỏ/Giá cũ gạch ngang).

### Giai đoạn 5: Tối ưu hoá & Đảm bảo đa nền tảng (Responsive & QA)
- [ ] Rà soát, chuẩn hoá và tối ưu Code CSS (loại bỏ code thừa).
- [ ] Fix lỗi hiển thị trên thiết bị di động (Responsive 100%).
- [ ] Đảm bảo web mượt mà, không bị chớp hay lỗi UI khi tải các component.

---

## 6. NHẬT KÝ CẬP NHẬT (CHANGELOG)
*Theo dõi các mốc thời gian cập nhật của dự án*

- **Cập nhật (23/4/2026)**:
  - Khởi tạo thành công hệ thống biến CSS (CSS Variables) toàn cục trong `global.css` (bảng màu UNIQLO Red, hệ xám, kích thước và font chữ Inter).

- **Bản phát hành đầu tiên (22/4/2026)**: 
  - Hoàn thiện cấu trúc source code cơ bản.
  - Lập tài liệu báo cáo chi tiết các đầu việc và quy tắc công nghệ.
  - Component loader bằng jQuery hoạt động ổn định.

---
*Ghi chú: File tài liệu này cần được cập nhật liên tục (Tick vào các checkbox `[x]`) sau mỗi lần hoàn thiện một module/component.*
