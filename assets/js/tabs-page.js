//tabs
const buttonTabs = document.querySelectorAll('.tabs-btn');
const contentTabs = document.querySelectorAll('.tabs-content-items');
const titleTabs = document.querySelector('.content-wrapper-tabs .title-block');
const mainTitlePageTab = document.querySelector('.banner-section h1.title');

for(let i = 0; i < buttonTabs.length; i++){
    buttonTabs[i].addEventListener('click', function (){

        //remove active tab btn
        removeActiveBtn(buttonTabs);
        this.classList.add('active');

        //changed title
        titleTabs.innerHTML = this.innerHTML;
        mainTitlePageTab.innerHTML = this.innerHTML;

        //Show block
        showContent( this.getAttribute('data-tab'));
    });
}

function removeActiveBtn(elementsRemove){
    for(let i = 0; i < elementsRemove.length; i++){
        elementsRemove[i].className = elementsRemove[i].className.replace("active", "");
    }
}

function showContent( numberAttribute){
    console.log(1)
    for(let k = 0; k < contentTabs.length; k++){
        if( contentTabs[k].getAttribute('data-tab') === numberAttribute){
            contentTabs[k].classList.add('active');
        }else{
            contentTabs[k].className = contentTabs[k].className.replace('active', '');
        }
    }
}
//tabs:end

//transfer tabs btn - banner
const topSection = document.querySelector('.banner-section');
const groupTabs = document.querySelector('.tabs-wrapper');

if(window.innerWidth < 768){
    topSection.append(groupTabs);
}
//transfer tabs btn - banner:END