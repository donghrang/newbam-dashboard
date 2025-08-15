# 🚀 HƯỚNG DẪN SỬ DỤNG HỆ THỐNG QUẢN LÝ THANH LÝ NEWBAM

## 📋 TỔNG QUAN HỆ THỐNG

Hệ thống dashboard được thiết kế để quản lý toàn bộ quá trình thanh lý công ty Newbam, bao gồm:
- 📊 Theo dõi tài chính và dòng tiền
- 📦 Quản lý tồn kho Amazon FBA
- ✅ Phân công và theo dõi công việc
- 📈 Báo cáo định kỳ cho lãnh đạo
- 📱 Giao diện thân thiện, dễ sử dụng

---

## 🎯 CÁC TÍNH NĂNG CHÍNH

### 1. **Tab Tổng Quan** 📈
- **Thẻ tài chính**: Hiển thị số dư ngân hàng, tiền Amazon
- **Bảng tồn kho**: Chi tiết từng SKU với số lượng và giá trị
- **Chỉ số kinh doanh**: TACOS, ACOS, doanh thu 90 ngày
- **Timeline dự kiến**: Tiến độ thanh lý và thời gian hoàn thành
- **Phân công công việc**: Trạng thái công việc từng người

### 2. **Tab Cập Nhật** ✏️
- **Form cập nhật tài chính**: Nhập số dư mới từ bank/Amazon
- **Bảng chỉnh sửa tồn kho**: Cập nhật số lượng, giá bán
- **Quản lý công việc**: Đánh dấu trạng thái hoàn thành
- **Import/Export dữ liệu**: Sao lưu và khôi phục dữ liệu

### 3. **Tab Lịch Sử** 📊
- **Biểu đồ dòng tiền**: Theo dõi xu hướng tài chính
- **Biểu đồ tồn kho**: Tiến độ giảm hàng tồn kho
- **Lịch sử cập nhật**: Log các thay đổi quan trọng

### 4. **Tab Báo Cáo** 📄
- **Tạo báo cáo định kỳ**: Format chuẩn gửi sếp
- **Xuất PDF/Word**: In báo cáo chuyên nghiệp
- **Copy văn bản**: Sao chép nội dung gửi chat/email

---

## 🔄 QUY TRÌNH SỬ DỤNG HÀNG NGÀY

### **Mỗi 15 ngày (Báo cáo định kỳ)**

1. **📥 Thu thập dữ liệu mới**
   - Số dư ngân hàng từ internet banking
   - Báo cáo Amazon: số tiền chuyển về, tồn kho hiện tại
   - Tiến độ công việc từ các thành viên

2. **✏️ Cập nhật vào hệ thống**
   - Vào tab **"Cập nhật"**
   - Nhập dữ liệu tài chính mới
   - Cập nhật số lượng tồn kho đã bán
   - Đánh dấu trạng thái công việc hoàn thành

3. **📊 Xem lại tổng quan**
   - Kiểm tra tab **"Tổng quan"** 
   - Xác nhận các con số tự động tính toán
   - Xem biểu đồ tiến độ trong tab **"Lịch sử"**

4. **📝 Tạo báo cáo**
   - Vào tab **"Báo cáo"**
   - Chọn kỳ báo cáo (15 ngày)
   - Click **"Tạo báo cáo"** 
   - In PDF hoặc copy text gửi sếp

5. **💾 Sao lưu dữ liệu**
   - Click **"Xuất dữ liệu"** để tải file JSON
   - Lưu file backup với tên: `newbam_backup_YYYYMMDD.json`

---

## ⚙️ HƯỚNG DẪN BACKUP & RESTORE

### **Sao lưu dữ liệu (Export)**
```
1. Vào tab "Cập nhật"
2. Cuộn xuống section "Import/Export"
3. Click "Xuất dữ liệu"
4. Lưu file với tên: newbam_backup_[ngày].json
```

### **Khôi phục dữ liệu (Import)**
```
1. Vào tab "Cập nhật"  
2. Click "Chọn file" trong section Import
3. Chọn file JSON đã backup
4. Click "Nhập dữ liệu"
5. Xác nhận khôi phục
```

### **Tạo lại dashboard hoàn toàn mới**
```
1. Backup dữ liệu hiện tại
2. Mở dashboard mới (link sạch)
3. Import file backup vào dashboard mới
4. Kiểm tra và xác nhận dữ liệu
```

---

## 📋 CHECKLIST CÔNG VIỆC ĐỊNH KỲ

### **Hàng tuần**
- [ ] Kiểm tra số dư ngân hàng
- [ ] Cập nhật tiến độ bán hàng Amazon
- [ ] Theo dõi trạng thái công việc team
- [ ] Backup dữ liệu

### **Mỗi 15 ngày**
- [ ] Thu thập đầy đủ dữ liệu tài chính
- [ ] Cập nhật hệ thống dashboard
- [ ] Tạo báo cáo gửi sếp (anh Tân Bùi)
- [ ] Lưu trữ báo cáo và backup data
- [ ] Cập nhật timeline công việc

### **Cuối tháng**
- [ ] Tổng kết tiến độ thanh lý
- [ ] Đánh giá hiệu suất bán hàng
- [ ] Điều chỉnh kế hoạch nếu cần
- [ ] Báo cáo tổng thể cho ban lãnh đạo

---

## 🚨 XỬ LÝ SỰ CỐ & KHẮC PHỤC

### **Dashboard không hiển thị đúng**
1. Refresh trang (F5)
2. Xóa cache trình duyệt
3. Thử trình duyệt khác
4. Import lại dữ liệu từ backup

### **Mất dữ liệu**
1. Kiểm tra file backup gần nhất
2. Import dữ liệu từ backup
3. Nhập lại dữ liệu bị thiếu
4. Tăng cường backup thường xuyên

### **Sai số liệu**
1. Kiểm tra lại nguồn dữ liệu gốc
2. So sánh với báo cáo Amazon/bank
3. Sửa trong tab "Cập nhật"
4. Ghi chú thay đổi trong lịch sử

---

## 📞 LIÊN HỆ HỖ TRỢ

- **Quản lý dự án**: Đông Huỳnh
- **Kế toán**: Chị Thư  
- **Quản lý kho**: Anh Thuận
- **Báo cáo sếp**: Anh Tân Bùi

---

## 📁 TÀI LIỆU ĐÍNH KÈM

1. **newbam_data_template.json** - File mẫu dữ liệu import
2. **newbam_dashboard_template.xlsx** - Bảng tính Excel quản lý
3. **Dashboard URL** - Link truy cập hệ thống

---

*📅 Cập nhật lần cuối: 15/08/2025*  
*🔄 Phiên bản: 1.0*