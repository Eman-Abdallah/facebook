function myFunction(){document.getElementById("dropdown").classList.toggle("show"),document.getElementById("clicked").classList.toggle("clicked")}function Function2(){document.getElementById("dropdown2").classList.toggle("show"),document.getElementById("clicked2").classList.toggle("clicked"),document.getElementById("badg").style.display="none"}window.onclick=function(e){if(!e.target.matches(".dropbtn")){var n=document.getElementsByClassName("dropdown-content");let c=document.getElementById("clicked");for(let t=0;t<n.length;t++){let e=n[t];e.classList.contains("show")&c.classList.contains("clicked")&&(e.classList.remove("show"),c.classList.remove("clicked"))}}},window.onclick=function(e){if(!e.target.matches(".dropbtn2")){var n=document.getElementsByClassName("dropdown-content2");let c=document.getElementById("clicked");for(let t=0;t<n.length;t++){let e=n[t];e.classList.contains("show")&c.classList.contains("clicked")&&(e.classList.remove("show"),c.classList.remove("clicked"))}}};