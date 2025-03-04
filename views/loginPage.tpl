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
        <input type="text" name="username" placeholder="Username" class="w-full p-3 border rounded-lg focus:outline-[#8FBD40]" required>
        <input type="password" name="password" placeholder="Password" class="w-full p-3 border rounded-lg focus:outline-[#8FBD40]" required>
        <span class="flex justify-end text-sm text-blue-500 cursor-pointer">Forgot Password?</span>
        <button type="submit" class="w-full bg-[#00ACBA] text-white p-3 rounded-lg hover:bg-[#008a99]">
          Login
        </button>
        <span class="text-center text-sm">Don't have an account? <a href="#" class="text-blue-500">Sign up</a></span>
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
    </script>
  </body>  
</html>

