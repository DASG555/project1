//Active Nav li
document.addEventListener('DOMContentLoaded', (event) => {
        const currentLocation = location.href;
        const menuItem = document.querySelectorAll('nav ul li a');
        const menuLength = menuItem.length;
        for (let i = 0; i < menuLength; i++) {
            if (menuItem[i].href === currentLocation) {
                menuItem[i].parentNode.classList.add('active');
            }
        }
    });

//Button gradient follow mouse
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onmousemove = function (e) {
      let rect = button.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      button.style.setProperty("--x", x + "px");
      button.style.setProperty("--y", y + "px");
      button.style.setProperty("--gradient-opacity", 1);
    };
  
    button.onmouseleave = function () {
      button.style.setProperty("--gradient-opacity", 0);
    };
  });