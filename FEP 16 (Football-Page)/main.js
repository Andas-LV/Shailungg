const tabsBtnBlock = document.querySelectorAll(".header-block");
const tabsItemsBlock = document.querySelectorAll(".block");

tabsBtnBlock.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        let main = document.querySelector(".main");

        if(currentBtn.classList.contains("active")){
            tabsBtnBlock.forEach(function(item){
                item.classList.remove("active");
            });
    
            tabsItemsBlock.forEach(function(item){
                item.classList.remove("active");
            });
            main.style.backgroundImage = 'url(./css/background/football-background.jpg)';
        }else{
            tabsBtnBlock.forEach(function(item){
                item.classList.remove("active");
            });
    
            tabsItemsBlock.forEach(function(item){
                item.classList.remove("active");
            })
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
            main.style.backgroundImage = 'url(./css/background/football-background-2.jpg)'
        }
    });
});

const tabsBtnPlayer = document.querySelectorAll(".players-block");
const tabsItemsPlayer = document.querySelectorAll(".player");

tabsBtnPlayer.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtnPlayer.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItemsPlayer.forEach(function(item){
            item.classList.remove("active");
        })

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

const tabsBtnTeam = document.querySelectorAll(".teams-block");
const tabsItemsTeam = document.querySelectorAll(".team");

tabsBtnTeam.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtnTeam.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItemsTeam.forEach(function(item){
            item.classList.remove("active");
        })

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

const tabsBtnManager = document.querySelectorAll(".managers-block");
const tabsItemsManager = document.querySelectorAll(".manager");

tabsBtnManager.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtnManager.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItemsManager.forEach(function(item){
            item.classList.remove("active");
        })

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

const tabsBtnNTeam = document.querySelectorAll(".n-teams-block");
const tabsItemsNTeam = document.querySelectorAll(".n-team");

tabsBtnNTeam.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtnNTeam.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItemsNTeam.forEach(function(item){
            item.classList.remove("active");
        })

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

const tabsBtnCompetition = document.querySelectorAll(".competitions-block");
const tabsItemsCompetition = document.querySelectorAll(".competition");

tabsBtnCompetition.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtnCompetition.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItemsCompetition.forEach(function(item){
            item.classList.remove("active");
        })

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});