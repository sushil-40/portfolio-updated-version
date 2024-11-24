document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navigation li");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links
      links.forEach((l) => l.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});

var typed = new Typed(".auto-type", {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
});

// progress bar number counter
//Progress Bar implementation

const skillData = [
  { id: "number-h", target: 85 },
  { id: "number-c", target: 65 },
  { id: "number-j", target: 70 },
  { id: "number-g", target: 75 },
  { id: "number-r", target: 70 },
];

skillData.forEach((skills) => {
  let element = document.getElementById(skills.id);
  // let counter = 0;
  let target = skills.target;

  if (element) {
    const runCounter = () => {
      let counter = 0;

      element.innerHTML = "0%"; // Reset the display
      let interval = setInterval(() => {
        if (counter >= target) {
          clearInterval(interval);
        } else {
          counter += 1;
          element.innerHTML = `${counter}%`;
        }
      }, 60);
    };
    // Run the conter initially
    runCounter();

    //Repeat the counter every 5 seconds

    setInterval(() => {
      runCounter();
    }, 40000);
  }
});

// lazy loading and tests
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("lazy-loaded");
        };
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});

// Reveal Section effect
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const revealPoint = window.innerHeight - 150;

      if (sectionTop < revealPoint) {
        section.classList.add("visible");
      }
    });
  };

  revealSection(); // Initial call to reveal sections on page load
  window.addEventListener("scroll", revealSection);
});

// reveal on scroll

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check
});

// skill items   reveal on scroll

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const skillItems = document.querySelectorAll(".skill-item");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    skillItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("visible");
        item.style.transitionDelay = `${index * 0.01}s`; // Delay for a staggered effect
      } else {
        item.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check
});

const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("change", () => {
  if (hamburgerMenu.checked) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

// close the menu when a link is clicked
// const menuLinks = doucment.querySelectorAll(".menu a");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburgerMenu.checked = false;
//     menu.style.display = "none";
//  });
//});
