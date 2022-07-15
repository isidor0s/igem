
/* Navigation Menu Dropdowns */

$('#project').click(function() {
    project = document.getElementById('project-content');
    closeMenuDropdownsExceptSelf(project);
    project.classList.toggle('--show');
})

$('#labs').click(function() {
    labs = document.getElementById('labs-content');
    closeMenuDropdownsExceptSelf(labs);
    labs.classList.toggle('--show');
})

$('#hp').click(function() {
    hp = document.getElementById('hp-content');
    closeMenuDropdownsExceptSelf(hp);
    hp.classList.toggle('--show');
})

$('#team').click(function() {
    team = document.getElementById('team-content');
    closeMenuDropdownsExceptSelf(team);
    team.classList.toggle('--show');
})

function closeMenuDropdowns() {
    var dropdownLists = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdownLists.length; i++) {
      if (dropdownLists[i].classList.contains('--show')) {
        dropdownLists[i].classList.remove('--show');
      }
    }
}

function closeMenuDropdownsExceptSelf(self) {
    var dropdownLists = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdownLists.length; i++) {
      if (dropdownLists[i] != self) {
        dropdownLists[i].classList.remove('--show');
      }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.navigation-menu .dropdown-button')) {
        closeMenuDropdowns();
    }
}

/* Navigation Menu Hamburger Button */

const menuHamBtn = document.querySelector('.menu-toggle-button')

menuHamBtn.addEventListener('click', handleClick);

const handleClick = (e) => {
    const toggleMenu = () => menuHamBtn.classList.toggle('open');
    if(!menuHamBtn.classList.contains('open')){
        toggleMenu();
        addOffClick(e, toggleMenu);
    }
}

const addOffClick = (e, cb) => {
    const offClick = (evt) => {
        if(e !== evt) {
            cb()
            document.removeEventListener('click', offClick);
        }
    }
    document.addEventListener('click', offClick);
}
