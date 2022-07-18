// on scroll animation //
AOS.init();

// on click sound //
let audio = new Audio("/images/audio/torch-click-1-48731.mp3");
document.onclick = function(){
    audio.play();
}

// appending project work images //

let projectContainer = document.getElementById("works");
let ProjectImages = [
    {
        projectTitle: "Rock paper Scissor",
        href: "https://rock-paper-scissor-io-39565.web.app/",
        gitLink: "https://github.com/sugi13/rock-paper-scissor-game",
    },
    {
        projectTitle: "URL Shortener",
        href: "https://url-shortener-io-46fe4.web.app/",
        gitLink: "https://github.com/sugi13/Url-shortener-"
    },
    {
        projectTitle: "To do List",
        href: "https://todo-io-5c33a.web.app/",
        gitLink: "https://github.com/sugi13/todo-list-maker"
    },
    {
        projectTitle: "Pomodoro app",
        href: "https://pomodoro-app-a34bb.web.app/",
        gitLink: "https://github.com/sugi13/pomodoro-app"
    },

    {
        projectTitle: "BMI Calculator",
        href: "https://verdant-gnome-ecf90f.netlify.app/",
        gitLink: "https://github.com/sugi13/BMI-calculator"
    },
    {
        projectTitle: "Smart Watch Landing Page",
        href: "https://quiet-rugelach-5c2d41.netlify.app/",
        github: "https://github.com/sugi13/Smart-Watch-landing-page"
    },
    {
        projectTitle: "Bi-cycle landing page",
        href: "https://lambent-kringle-68d200.netlify.app/",
        gitLink: "https://github.com/sugi13/Bi-cycle-shop-landing-page"
    }
];

function appendAll(){ 
  ProjectImages.forEach((item) => {
  let holder = document.createElement("div");
  let title = document.createElement("a");
  let imgLink = document.createElement("a");
  let img = document.createElement("img");
  title.innerHTML = item.projectTitle;

  title.href = item.href;
  title.target = "blank";

  imgLink.href = item.gitLink;
  img.src = "/images/Octocat.png";

  imgLink.appendChild(img);

  holder.appendChild(title);
  holder.appendChild(imgLink);
  projectContainer.appendChild(holder);     
  })

}
appendAll();
// appending skills //
let skillContainer = document.getElementById("skills");

let skillArray = [
    {
        img:"/images/skills and tools/icons8-html-5-240.png",
    },
    {
        img:"/images/skills and tools/icons8-css3-240.png",
    },
    {
        img:"/images/skills and tools/icons8-javascript-250.png",
    },
    {
        img:"/images/skills and tools/icons8-sass-250.png",
    },
];

function AppendSkills(){
    skillArray.forEach((item)=>{
        let divElement = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.img;

        divElement.appendChild(img);
        skillContainer.appendChild(divElement);
    })
}
AppendSkills();

