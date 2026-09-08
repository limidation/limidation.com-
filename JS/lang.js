// 简单双语切换：不依赖任何框架，后续要加新语言，
// 只需要在 HTML 里给对应文字加 data-xx 属性，并在这里的 langs 数组里加一项。
(function () {
  var langs = ["en", "zh"]; // 以后要加语言（比如 "vi"、"es"、"fr"），把代码加进这个数组，
                             // 并在 CSS 里加一行 html[data-lang="xx"] [data-yy]{display:none}

  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem("site-lang", lang);
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "en" ? "中文" : "English";
    }
  }

  function nextLang(current) {
    var idx = langs.indexOf(current);
    return langs[(idx + 1) % langs.length];
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = localStorage.getItem("site-lang") || "en";
    applyLang(saved);

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-lang") || "en";
        applyLang(nextLang(current));
      });
    }
  });
})();
