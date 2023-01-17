const menu=document.getElementById('menu-mobile');
const button=document.getElementById('btn-hamburger');
const close=document.getElementById('btn-close');

const features=document.getElementById('features-list');
const company=document.getElementById('company-list');
const pFeatures=document.getElementById('p-features');
const pCompany=document.getElementById('p-company');



/*ARROWS*/ 
const arrowUpF=document.getElementById('arrowUpF');
const arrowDownF=document.getElementById('arrowDownF');
const arrowUpC=document.getElementById('arrowUpC');
const arrowDownC=document.getElementById('arrowDownC');

let featuresSwitch=false;
let companySwitch=false;

button.addEventListener('click',()=>{
    menu.style.display="block";
    menu.style.animationName="moveIn";
    menu.style.animationDelay="0";
    menu.style.animationDuration='.5s';
});

close.addEventListener('click',()=>{
    menu.style.display="none";
    menu.style.animationName="moveOut";
})

pFeatures.addEventListener('click',()=>{

    if(featuresSwitch===true){
        features.style.display="none";
        featuresSwitch=!featuresSwitch;
        arrowDownF.style.display="inline";
        arrowUpF.style.display="none";
    }else{
        features.style.display="block";
        featuresSwitch=!featuresSwitch;
        arrowDownF.style.display="none";
        arrowUpF.style.display="inline";
    }
});

pCompany.addEventListener('click',()=>{
    if(companySwitch===true){
        company.style.display="none"
        companySwitch=!companySwitch;
        arrowDownC.style.display="inline";
        arrowUpC.style.display="none";
    }else{
        company.style.display="block";
        companySwitch=!companySwitch;
        arrowDownC.style.display="none";
        arrowUpC.style.display="inline";
    }
});


