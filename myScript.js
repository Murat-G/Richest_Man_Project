const names = ["Daisy","Moore","Jimmy","Stone","Eileen","Garcia","Bently","Fortin","Frank","Ammar","Javier","Santiago","Lee","Thomas","Cole","Donna",
"King","Morgan","Simon","Jostein","Gjernes"];
const mainContent = document.querySelector("#main");
const addUser = document.querySelector("#add-user");
addUser.addEventListener("click", addUserFunc);
const doubleValue = document.querySelector("#double");
doubleValue.addEventListener("click",doubleFunc);
const sorted = document.querySelector("#sort");
sorted.addEventListener("click",sortedFunc);
const calculeted = document.querySelector("#calculate-wealth");
calculeted.addEventListener("click",calculeteFunc);
let bigData = [];
const display = document.querySelector(".calculatory");

const milyoner = document.querySelector("#show-millionaires");
milyoner.addEventListener("click", milyonerFunc);

function addUserFunc() {
    
    const randomNames = names[Math.floor(Math.random()*names.length)];
    const randomSurname = names[Math.floor(Math.random()*names.length)];
    const randomFullname = randomNames + " " + randomSurname;
    const addWealth = Math.floor(Math.random() * 1000000) + 500000;
    const newUser = {
        name: `${randomFullname}`,
        money: `${addWealth}`
    };
    bigData.push(newUser);
    writeScreen();
    calculeteFunc();
    display.style.display = 'none';
   
   
};
function writeScreen() {
    mainContent.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
    bigData.forEach(item => {
        const element = document.createElement('p');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> $ ${item.money}`;
        mainContent.appendChild(element);
    });
};


function doubleFunc() {
 
    bigData.map(ite => {
        return ite.money = parseFloat(ite.money)*2;
    });
    writeScreen();
    calculeteFunc();
    display.style.display = 'none';
    
};

function milyonerFunc() {
    bigData = bigData.filter(ites => {
        return parseFloat(ites.money) >= 1000000; 

    });
    writeScreen();
    calculeteFunc();
    display.style.display = 'none';
};
function sortedFunc() {
     bigData.sort((a,b) => b.money - a.money);
     writeScreen();
};



function calculeteFunc() {
   
        var total = 0;
        bigData.map(point => {
            return total += parseFloat(point.money);
            
        });

        display.innerHTML = `<strong>Total : $ ${total}</strong>`;
        display.style.display = 'flex';
};