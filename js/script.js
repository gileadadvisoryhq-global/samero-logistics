document.addEventListener("DOMContentLoaded", function () {
  // Navigation Menu Toggle
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });
  }

  // Auto Update Footer Year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Pre-select Vehicle in Request Form from URL Parameter
  var urlParams = new URLSearchParams(window.location.search);
  var vehicleParam = urlParams.get('vehicle');
  var vehicleSelect = document.getElementById('preferredVehicle');
  
  if (vehicleParam && vehicleSelect) {
    vehicleSelect.value = vehicleParam;
  }

  // Form Submission Logic
  var bookingForm = document.getElementById("bookingForm");
  var formResponse = document.getElementById("formResponse");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Basic Client Validation
      var name = document.getElementById("fullName").value.trim();
      var phone = document.getElementById("phone").value.trim();

      if (!name || !phone) {
        alert("Please fill in all required fields.");
        return;
      }

      // Display PRD Compliant Success State
      bookingForm.style.display = "none";
      if (formResponse) {
        formResponse.style.display = "block";
      }
    });
  }
});