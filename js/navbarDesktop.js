const featuresContainer=document.getElementById('features-desktop');
const featuresA=document.getElementById('aFeatures-desktop');
const companyContainer=document.getElementById('company-desktop');
const companyA=document.getElementById('aCompany-desktop');


let companyContainerSwitch=false;
let featuresContainerSwitch=false;

featuresContainer.addEventListener('mouseover',()=>{
    alert('ajajaj');
});

companyA.addEventListener('click',()=>{
    if(companyContainerSwitch===true){
        companyContainer.style.display="none";
        companyContainerSwitch=!companyContainerSwitch;
    }else{
        companyContainer.style.display="block";
        companyContainerSwitch=!companyContainerSwitch;
    }
});

featuresA.addEventListener('click',()=>{
    if(featuresContainerSwitch===true){
        featuresContainer.style.display="none";
        featuresContainerSwitch=!featuresContainerSwitch;
    }else{
        featuresContainer.style.display="block";
        featuresContainerSwitch=!featuresContainerSwitch;
    }
});