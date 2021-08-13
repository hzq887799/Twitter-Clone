// DOM EMELMENT
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const feedsPage = document.querySelector('.feeds-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const loginModal = document.querySelector('.login-modal');
const cancelBtn = document.querySelector('.cancel');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-icons span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const sidebarHeaderX = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const logOut =document.querySelector('.log-out');
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts= document.querySelectorAll('.light-text')
const borders =document.querySelectorAll('.border')
/************************************/
/************************************/

//main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};
const goToFeedsPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'none';
    feedsPage.style.display = 'grid';
};
const goToMainPage = () => {
    mainPage.style.display = 'grid';
    feedsPage.style.display = 'none';
}

middleContent.addEventListener('click', (e)=>{
    if(e.target.classList[0] === 'Log-in'){
        goToLoginPage();
    }
});
btnTop.addEventListener('click', ()=>{
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    if (inputUserInfo.value.length > 0 && inputPassword.value.length > 0){
        goToFeedsPage();
        
    } else {
        goToLoginPage();
    }
});
loginFormBtn.addEventListener('click', ()=>{
    const inputUserInfo = document.querySelector('.login-user-info');
    const inputPassword = document.querySelector('.login-password');
    if (inputUserInfo.value.length > 0 && inputPassword.value.length > 0){
        goToFeedsPage();
    } else {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
});
logOut.addEventListener('click', ()=>{
    goToMainPage();
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})
// Login page
cancelBtn.addEventListener('click', ()=>{
    loginModal.style.display = 'none'
    });
// News feed page
// post modal
postBtn.addEventListener('click', ()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');
})
const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};
postModalX.addEventListener('click', ()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');
    if (modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
})
modalInput.addEventListener('keypress', (e)=>{
    if(e.target.value.length !== ""){
        changeOpacity(1);
    }
})
modalInput.addEventListener('blur', (e)=>{
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
})
// sidebar

user.addEventListener('click', () => {
    sidebarWrapper.classList.add('sidebar-wrapper-display');
    sidebar.classList.add('sidebar-display')
});
sidebarHeaderX.addEventListener('click', ()=>{
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
    sidebar.classList.remove('sidebar-display')
})
// dark mode
toggle.addEventListener('click', ()=> {
    circle.classList.toggle('move')
    Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
    Array.from(lightTexts).map(lightText=> lightText.classList.toggle('light'));
    Array.from(borders).map(border=> border.classList.toggle('border-color'));
});
