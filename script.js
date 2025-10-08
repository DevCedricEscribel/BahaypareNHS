(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      // Check if the site is accessible by trying to fetch a known resource
      fetch(window.location.href, { method: "HEAD" })
        .then(function (response) {
          if (response.ok) {
            console.log("Site is available.");
          } else {
            console.log("Site is not available.");
          }
        })
        .catch(function () {
          console.log("Site is not available.");
        });
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
