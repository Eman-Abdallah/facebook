// function of profile dropdown
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
    document.getElementById("clicked").classList.toggle("clicked");
}

window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let iTag = document.getElementById('clicked')
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show') & (iTag.classList.contains('clicked'))) {
                    openDropdown.classList.remove('show');
                    iTag.classList.remove('clicked');
                }
            }
        }
    }
    // function of notification dropdown
function Function2() {
    document.getElementById("dropdown2").classList.toggle("show");
    document.getElementById("clicked2").classList.toggle("clicked");
    document.getElementById("badg").style.display = 'none';
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
        let drop = document.getElementsByClassName("dropdown-content2");
        let iTag2 = document.getElementById('clicked')
        for (let i = 0; i < drop.length; i++) {
            let openDrop = drop[i];
            if (openDrop.classList.contains('show') & (iTag2.classList.contains('clicked'))) {
                openDrop.classList.remove('show');
                iTag2.classList.remove('clicked');
            }
        }
    }
}