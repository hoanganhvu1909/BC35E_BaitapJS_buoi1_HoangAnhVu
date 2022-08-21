/*Quy đổi tiền
-đầu vào :
+ tiền đô = 2
+ tiền Việt = 23 500
- Xử lý:
+ Quy đổi: tiền đô * tiền Việt
- Kết quả:
+ tiền sau quy đổi
*/

//tính HCN
document.getElementById("btntinh").onclick = function () {
    var cd = document.getElementById("cd").value * 1;
    var cr = document.getElementById("cr").value * 1;
    var tinhcv = (cd + cr) * 2;
    var tinhdt = cd * cr;
    var kqhcn = "<p> Diện tích: " + tinhdt +"</p>";
    kqhcn += "<p> chu vi: " + tinhcv + "</p>";
    document.getElementById(showInfoHCN).innerHTML = kqhcn;

};