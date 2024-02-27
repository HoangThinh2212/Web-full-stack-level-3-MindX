import http from "http";
import url from "url";
// createServer là phương thức giúp chúng ta khởi tạo 1 Server với giao thức http
// và sẽ giúp xử lý các request và respone cho client
const app = http.createServer((request, respone) => {
  // Phản hồi lại bằng response.end
  //   respone.end("Hello Boss");

  // Phản hồi dựa theo đường dẫn URL có được
  if (request.url === "/cong") {
    respone.end(1 + 1 + "");
  }
  if (request.url.startsWith("/tru")) {
    // Phản hồi bình thường, chỉ cần dùng response.end
    // respone.end(1 - 1 + "");

    // Phản hồi dùng Header
    const so1 = request.headers.so1;
    const so2 = request.headers.so2;
    const resultWithHeader = Number.parseInt(so1) - Number.parseInt(so2);

    // Phản hồi dùng Params
    const queryParams = url.parse(request.url,true);
    const a = queryParams.a;
    const b = queryParams.b;
    const resultWithParams = Number.parseInt(a) - Number.parseInt(b);
    // define route --- Trả kết quả
    respone.end(resultWithHeader + " ");
    // respone.end(resultWithParams + " ");

  }
  if (request.url === "/") {
    respone.end("Hello Boss");
  }
});
// để lăng nghe được, ta cần sử dụng phương thức listen
// và có 2 tham số truyền vào
// app.listen(Cổng khởi tạo, callback Function)
// callback Function sẽ được thực thi sau khi server được khởi tạo thành công
app.listen(8080, () => {
  console.log("Server is running!");
});
