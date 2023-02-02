let title = document.querySelector("#title") as Element;
if (title?.innerHTML != undefined) {
  title.innerHTML = "반가워요";
}

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "http://kakao.com";
  console.log(3);
}

let button = document.getElementById("button");
button?.addEventListener("click", function () {
  console.log(2);
});
