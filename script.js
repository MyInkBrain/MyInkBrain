document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const loader = document.getElementById("loader");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      loader.style.display = "block";
  
      const pack = document.getElementById("pack").value;
  
      if (pack === "1") {
        window.location.href = "https://buy.stripe.com/7sIcPbdAPfwA8RabII";
    } else if (pack === "3") {
      window.location.href = "https://buy.stripe.com/aEU9CZbsHdos6J2cMN";
    } else if (pack === "10") {
      window.location.href = "https://buy.stripe.com/aEU6qNbsH4RW2sMfZ0";
    }
  });
});
