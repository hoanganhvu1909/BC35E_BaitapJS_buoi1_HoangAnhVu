/* Tính trung bình c
Mô hình ba khối:
+đầu vào:
+ Số thực 1
+ Số thực 2
+ Số thực 3
+ Số thực 4
+ Số thực 5
-xử lý:
+tổng trung bình = (số thực 1 + số thực 2 + số thực 3 + số thực 4 + số thực 5) / 5
- Đầu ra
+tổng trung bình 
*/


//QUy đổi tiền
var btnQuydoitien = document.getElementById("btnQuydoitien");
btnQuydoitien.onclick = function () {
    const tienViet = 23500;
    var USD = document.getElementById("USD").value * 1;
    var quyDoi = tienViet * USD;
    // format VND
    var currentFormat = new Intl.NumberFormat("NV-vn");
    var kqQuydoi = "<p> Tiền sau quy đổi: " + currentFormat.format(quyDoi) + " VND</p>";
    document.getElementById("showInfoquydoitien").innerHTML = kqQuydoi;

};
