const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-bar li a'); // ვიღებთ ყველა ლინკს მენიუში

// ბურგერზე დაჭერისას მენიუს გახსნა/დაკეტვა
burger.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// თითოეულ ლინკზე დაჭერისას მენიუს ავტომატური დაკეტვა
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});