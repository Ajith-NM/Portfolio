
// ***********************************************
// open/close menu bar
// ***********************************************
let menu_value = false;

function menu_open() {
    menu_value = !menu_value
    var ul = document.getElementById('nav_links')
    var icon = document.querySelector('.icon')
    if (menu_value) {
        ul.classList.add('menu-active')
        icon.classList.add('icon-active')
    } else {
        ul.classList.remove('menu-active')
        icon.classList.remove('icon-active')
    }
}

// ***********************************************
// nav highlighter
// ***********************************************

const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '70px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            if (id === "about") {
                console.log(id);
            } else {
                console.log("not home");
            }
            navLink.classList.add('nav-active');
        } else {
            navLink.classList.remove('nav-active');

        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ***********************************************
// nav highlighter for resize nav
// ***********************************************

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 768) {
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            root: null,
            rootMargin: '70px',
            threshold: 0.25
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`nav a[href="#${id}"]`);
        
                if (entry.isIntersecting) {
                    if (id === "about") {
                        navLink.classList.add('nav-active');
                    }
                } else {
                    navLink.classList.remove('nav-active');
        
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });

    }
})




// ***********************************************
// cursor animation while mousemove
// ***********************************************
window.addEventListener("mousemove", (event) => {

    let cursor = document.getElementById("cursor")
    let hovers = document.querySelectorAll(".mouse-hover")
    cursor.style.opacity = "1"
    cursor.style.display = "";
    let y = event.pageY;
    let x = event.pageX;
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`

    hovers.forEach((ele) => {
        ele.addEventListener('mouseover', () => {
            cursor.classList.add("hover")
        })
        ele.addEventListener('mouseleave', () => {
            cursor.classList.remove("hover")
        })
    })

})

// ***********************************************
// check elements to verify it presents in viewport
// ***********************************************
function check_viewport(item) {
    var rect = item.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// ***********************************************
// for default view port checking
// ***********************************************

function handleScroll() {
    var icons = document.getElementById("icons")
    var texts = document.querySelectorAll(".text")
    var formdata = document.querySelectorAll(".formdata")


    if (check_viewport(icons)) {
        icons.classList.add('icon-anim')
    } else {
        icons.classList.remove('icon-anim')
    }


    texts.forEach((text) => {
        if (check_viewport(text)) {
            text.classList.add('text-anim')
        } else {
            text.classList.remove('text-anim')
        }
    })


    formdata.forEach((data) => {
        if (check_viewport(data)) {
            data.classList.add('form-anim')
        } else {
            data.classList.remove('form-anim')
        }
    })


}

handleScroll();

// ***********************************************
// animatiom on scroll
// ***********************************************
window.addEventListener('scroll', () => {

    document.getElementById("cursor").style.display = "none"


    handleScroll();

})


