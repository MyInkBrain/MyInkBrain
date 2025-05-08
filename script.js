document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const loader = document.getElementById("loader");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      loader.style.display = "block";
  
      const pack = document.getElementById("pack").value;
  
      if (pack === "1") {
        window.location.href = "https://buy.stripe.com/test_eVadRF1Zv4SI7EA5kk";
    } else if (pack === "3") {
      window.location.href = "https://buy.stripe.com/test_00g9Bp8nT2KAcYU6op";
    } else if (pack === "10") {
      window.location.href = "https://buy.stripe.com/test_cN28xlfQl0Cse2Y3cf";
    }
  });
});