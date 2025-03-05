<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/style.css">
    <link rel="icon" href="data:,">
    <title>Vektor</title>
  </head>
  <body class="flex justify-center items-center min-h-screen bg-[#d9d9d9]">
    <div class="w-[60%] max-w-md p-6 bg-[#00ACBA] rounded-lg shadow-lg">
      <form action="/login" method="POST" class="form bg-white p-6 rounded-2xl shadow-md flex flex-col gap-2">
        <div class="flex justify-center pb-6">
          <img src="/static/images/logo.png" alt="logo" class="w-[100px]">
        </div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" class="w-full py-2 px-4 border rounded-xl focus:outline-[#8FBD40]" required>
        <label for="password">Password</label>
        <div class="relative">
          <input type="password" name="password" id="password" placeholder="Password" class="w-full py-2 px-4 border rounded-xl focus:outline-[#8FBD40]" required>
          <button id="toggle-password-btn" type="button" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600">
            <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path class="password-toggle:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
              <path class="password-toggle:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
              <path class="password-toggle:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
              <line class="password-toggle:hidden" x1="22" x2="2" y1="22" y2="2"></line>
              <path class="hidden password-toggle:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle class="hidden password-toggle:block" cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
        <button type="submit" class="w-full bg-[#00ACBA] text-white p-3 mt-4 rounded-lg hover:bg-[#008a99]">
          Login
        </button>
      </form>

      <input type="hidden" id="hasError" value="{{if .ErrorMessage}}true{{else}}false{{end}}">
      <!-- Error Message Modal -->
      <div id="errorModal" class="hidden fixed z-10 inset-0 w-full h-full bg-[#000000]/50">
        <div class="relative bg-white mt-[20%] mx-auto p-6 border border-gray-400 w-[40%] rounded-lg text-center">
          <span id="close-button" class="absolute right-2 top-0 flex items-start text-2xl font-bold text-[#aaaaaa] hover:text-[#000000] cursor-pointer">
            &times;
          </span>
          <div class="text-lg text-[#ff0000]">
            {{.ErrorMessage}}
          </div>
        </div>
      </div>
    </div>
    
    <script>
      // Error Message Modal
      var modal = document.getElementById("errorModal");
      var closeBtn = document.getElementById("close-button");
      var hasError = document.getElementById("hasError").value;

      if (hasError === "true") {
        modal.style.display = "block";
      }

      closeBtn.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      // End of Error Message Modal


      // Password Toggle Function
      const passwordInput = document.getElementById('password');
      const togglePasswordBtn = document.getElementById('toggle-password-btn');
      const svgPathsPassword = togglePasswordBtn.querySelectorAll('path, circle, line');
      togglePasswordBtn.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          svgPathsPassword.forEach(el => el.classList.toggle('hidden', el.classList.contains('password-toggle:hidden')));
          svgPathsPassword.forEach(el => el.classList.toggle('block', el.classList.contains('password-toggle:block')));
        } else {
          passwordInput.type = 'password';
          svgPathsPassword.forEach(el => el.classList.toggle('hidden', el.classList.contains('password-toggle:block')));
          svgPathsPassword.forEach(el => el.classList.toggle('block', el.classList.contains('password-toggle:hidden')));
        }
      });
      // End of Password Toggle Function

    </script>
  </body>  
</html>

