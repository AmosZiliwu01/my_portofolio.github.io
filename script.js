
    document.addEventListener("DOMContentLoaded", function () {
      const sidebar = document.querySelector(".sidebar");
      const checkIcon = document.querySelector("#check-icon");
      const contentSections = document.querySelectorAll(".content");

      checkIcon.addEventListener("change", function () {
        sidebar.classList.toggle("active");
      });

      const menuItems = document.querySelectorAll(".sidebar ul li");
      menuItems.forEach((item) => {
        item.addEventListener("click", function () {
          const target = this.getAttribute("data-target");
          contentSections.forEach((section) => {
            if (section.id === target) {
              section.classList.add("active");
            } else {
              section.classList.remove("active");
            }
          });
        });
      });
    });
    
    $(document).ready(function(){
      $(".custom-carousel").owlCarousel({
          autoWidth: true,
          loop: true
        });
        $(document).ready(function () {
          $(".custom-carousel .item").click(function () {
            $(".custom-carousel .item").not($(this)).removeClass("active");
            $(this).toggleClass("active");
          });
        });


      // Sidebar toggle functionality
      $('#check-icon').on('change', function() {
        $('.sidebar').toggleClass('show');
      });

      // Content switching functionality
      $('.sidebar ul li').on('click', function() {
        const target = $(this).data('target');
        $('.content').removeClass('active');
        $('#' + target).addClass('active');
        $('.sidebar').removeClass('show');
        $('#check-icon').prop('checked', false);
      });
    });


    // Contact WA
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function sendMessage() {
      // Ambil nilai dari form
      const name = document.getElementById('name').value;
      const whatsapp = document.getElementById('whatsapp').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
    
      // Validasi form
      if (!name || !whatsapp || !email || !subject || !message) {
        alert('Please fill out all fields.');
        return;
      }
    
      // Validasi email
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    
      // Format pesan yang akan dikirim
      const text = `Name: ${name}%0AWhatsApp Number: ${whatsapp}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    
      // Nomor WhatsApp tujuan
      const whatsappNumber = '6282275625828'; // nomor harus dalam format internasional tanpa tanda +
    
      // Buat URL WhatsApp
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    
      // Arahkan pengguna ke WhatsApp
      window.open(whatsappURL, '_blank');
    }