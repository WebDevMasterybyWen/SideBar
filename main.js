// Link Active Color 

const linkColor = document.querySelectorAll('.sidebar__link');
function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}
linkColor.forEach(l => l.addEventListener('click', colorLink));

// Show Hide Sidebar

const showMenu = (toggleID, navbarID, bodyID) => {
    const toggle = document.getElementById(toggleID),
    navbar = document.getElementById(navbarID),
    bodypadding = document.getElementById(bodyID)

    if(toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show')
            toggle.classList.toggle('rotate')
            bodypadding.classList.toggle('expander')
        })
    }
}

showMenu('sidebar-toggle','sidebar','body');