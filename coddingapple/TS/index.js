var title = document.querySelector("#title");
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = "반가워요";
}
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "http://kakao.com";
    console.log(3);
}
var button = document.getElementById("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(2);
});
