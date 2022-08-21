// bài 1

/* tính tiền lương nhân viên
Mô hình 3 khối:
- Đầu vào:
+ Lương một ngày: 100000
+ Số ngày làm: 20
-Xử  lý
+ Lương = lương một ngày * số ngày làm
- Đầu ra
+ Hiển thị lương
*/

//bài tâp tính tiền lương nhân viên

var tienLuong = document.getElementById("tienLuong");
tienLuong.onclick = function () {
    //Đầu vào: Lấy thông tin User
    const LUONG_NGAY = 100000;

    // format VND
    var currentFormat = new Intl.NumberFormat("NV-vn");
    var soNgaylam = document.getElementById("soNgaylam").value * 1;

    //Xử lý
    var tongLuong = soNgaylam * LUONG_NGAY;
    var kqTienluong = "<p> Tổng lương là: " + currentFormat.format(tongLuong) + "VND</p>";
    //Đầu ra
    document.getElementById("tienLuong").innerHTML = kqTienluong;
}
