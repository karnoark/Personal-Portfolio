
"use strict";

// functionality to change the mode
const $themeBtn = document.querySelector("[data-theme-btn]")
const $HTML = document.documentElement;

// to get the user prefered theme on the browser
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

// following code sets the theme to be the user preferred one
if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark? "dark": "light";
}

// function to change the theme on click
const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);



// Tab functionality


const $tabBtn = document.querySelectorAll("[data-tab-btn]")
const $tabContent = document.querySelectorAll("[data-tab-content]")
let [lastActiveTab] = $tabContent
let [lastActiveTabBtn] = $tabBtn

// Remove active class from all tab buttons
$tabBtn.forEach(btn => {
    btn.classList.remove("active");
});

// Remove active class from all tab contents
$tabContent.forEach(content => {
    content.classList.remove("active");
});

// adding 'active' class to the 'project' tab button and tab content for it show up by default

const $projectBtn = document.querySelector('[data-tab-btn=project]')
const $projectContent = document.querySelector(`[data-tab-content = ${$projectBtn.dataset.tabBtn}]`)
$projectBtn.classList.add("active")
$projectContent.classList.add("active")


$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const tabContentValue = item.dataset.tabBtn;
        const $tabContent = document.querySelector(`[data-tab-content="${tabContentValue}"]`);

        if ($tabContent) {
            $tabContent.classList.add("active");
            this.classList.add("active");

            lastActiveTab = $tabContent;
            lastActiveTabBtn = this;
        }
    });
});

