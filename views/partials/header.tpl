<div id="header" class="px-[100px] pt-[35px]" style="padding-bottom: 0;">
  <div class="flex flex-row gap-4 justify-between">
    <img src="/static/images/logo.png" alt="logo" class="w-[100px] pb-6">
    <div class="header-menu-item">
      <a href="/"><h2>LDT</h2></a>
      <div class="{{if eq .URL "/"}}active{{end}}"></div>
    </div>
    <div class="header-menu-item">
      <a href="/assignment-form"><h2>Form Tugas</h2></a>
      <div class="{{if eq .URL "/assignment-form"}}active{{end}}"></div>
    </div>
    <div class="header-menu-item">
      <a href="/battery-form"><h2>Form Batt</h2></a>
      <div class="{{if eq .URL "/battery-form"}}active{{end}}"></div>    
    </div>
    <div class="header-menu-item">
      <a href="/installation-survey-form"><h2>Form Survey</h2></a>
      <div class="{{if eq .URL "/installation-survey-form"}}active{{end}}"></div>  
    </div>
    <div class="header-menu-item">
      <a href="/single-phase-form"><h2>Form Test</h2></a>
      <div class="{{if eq .URL "/single-phase-form"}}active{{end}}"></div>    
    </div>
    <div class="header-menu-item">
      <a href="/project-testing-form"><h2>Checklist Form</h2></a>
      <div class="{{if eq .URL "/project-testing-form"}}active{{end}}"></div>
    </div>
    <div class="header-menu-item">
      <a href="#"><h2>Berita Acara</h2></a>
    </div>
  </div>
</div>  

<!-- tablet view -->
<div id="header-tablet-view" class="px-[30px] pt-[35px]" style="padding-bottom: 0; display: none;">
  <div class="flex flex-row gap-4 justify-between">
    <img src="/static/images/logo.png" alt="logo" class="w-[100px] pb-6">
    <img src="/static/images/hamburger_menu_icon.png" id="hamburger-menu-icon" alt="logo" class="size-[30px]  flex self-center">
  </div>

  <div id="hamburger-menu-overlay" class="justify-items-end" style="background-color: rgba(0, 0, 0, 0.3); width: 100%; height: 100%; position: fixed; top: 0; right: 0; z-index: 2; box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19); display: none;">
    <div id="hamburger-menu" style="background-color: rgb(255, 255, 255); width: 25%; padding: 10px;">
      <div class="flex flex-col gap-4 justify-between">
        <div class="header-menu-item">
          <a href="/"><h2>LDT</h2></a>
          <div class="{{if eq .URL "/"}}active{{end}}"></div>
        </div>
        <div class="header-menu-item">
          <a href="/assignment-form"><h2>Form Tugas</h2></a>
          <div class="{{if eq .URL "/assignment-form"}}active{{end}}"></div>
        </div>
        <div class="header-menu-item">
          <a href="/battery-form"><h2>Form Batt</h2></a>
          <div class="{{if eq .URL "/battery-form"}}active{{end}}"></div> 
        </div>
        <div class="header-menu-item">
          <a href="/installation-survey-form"><h2>Form Survey</h2></a>
          <div class="{{if eq .URL "/installation-survey-form"}}active{{end}}"></div>  
        </div>
        <div class="header-menu-item">
          <a href="/single-phase-form"><h2>Form Test</h2></a>
          <div class="{{if eq .URL "/single-phase-form"}}active{{end}}"></div>   
        </div>
        <div class="header-menu-item">
          <a href="/project-testing-form"><h2>Checklist Form</h2></a>
          <div class="{{if eq .URL "/project-testing-form"}}active{{end}}"></div>
        </div>
        <div class="header-menu-item">
          <a href="#"><h2>Berita Acara</h2></a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  let header = document.getElementById("header");
  let headerTabletView = document.getElementById("header-tablet-view");

  var windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    header.style.display = 'block';
    headerTabletView.style.display = 'none';
  } else {
    header.style.display = 'none';
    headerTabletView.style.display = 'block';   
  }

  document.getElementById('hamburger-menu-icon').addEventListener('click', function() {
    document.getElementById('hamburger-menu-overlay').style.display = "block";
  })
  
  document.getElementById('hamburger-menu-overlay').addEventListener('click', function() {
    document.getElementById('hamburger-menu-overlay').style.display = "none";
  })
</script>