/*Tính chu vi và diện tích hình chữ nhật
-Đầu vào:
+ chiều dài = 19
+ chiều rộng = 9
- Xử lý:
+ chu vi: (chiều dài + chiều rộng)*2
+ diện tích: chiều dài * chiều rộng
- Đầu ra:
+kết quả chu vi 
+ kết quả diện tích
*/
 // đầu vào
 var chieuDai = 19;
 var chieuRong = 9;
 var chuVi = 0;
 var dienTich = 0;
 //Xử lý
 chuVi = (chieuDai + chieuRong) * 2;
 dienTich = chieuDai * chieuRong;
 //đầu ra
 console.log("kết quả chu vi là: " +chuVi);
 console.log("kết quả diện tích là: " +dienTich);
 