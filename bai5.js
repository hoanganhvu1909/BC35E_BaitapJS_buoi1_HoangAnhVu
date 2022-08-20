/* Tính tổng hai kí số
 * đầu vào
 n = 98
 - Xử lý
 + số hàng đơn vi: n % 10
 + số hàng chục: n / 10
sum = số hàng đơn vị + số hàng chục
- đầu ra
kết quả = sum
 */

//đầu vào
var n = 98;
//xử lý
var so_Dv = n % 10;
var hangChuc = Math.floor(n/10);
var tongKyso = so_Dv + hangChuc;
// đầu ra
console.log("kết quả tổng hai ký số là: " +tongKyso);


