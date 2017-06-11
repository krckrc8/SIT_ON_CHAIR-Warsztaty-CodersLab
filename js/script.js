document.addEventListener('DOMContentLoaded', function(){
   console.log('DOM');
    
    //Znikanie opisow obrazków:-----------------------------------------
    
    var products_flower = document.querySelector('.products_flower');
    var products_descrip_flower = document.querySelector('.products_flower div');
    
    console.log(products_flower);
    console.log(products_descrip_flower);
        
    products_flower.addEventListener('mouseover', function(){
        //products_descrip_flower.style.visibility = 'hidden';
        products_descrip_flower.style.transform = 'scale(0)';
        products_descrip_flower.style.transition = '300ms ease-in';
        products_flower.style.transform = 'scale(1.04)';
        products_flower.style.transition = '0.5s';
    });
    products_flower.addEventListener('mouseout', function(){
        products_descrip_flower.style.visibility = 'visible';
        products_descrip_flower.style.transform = 'scale(1)';
        products_descrip_flower.style.transition = '300ms ease-in';
        products_flower.style.transform = 'scale(1.0)';
        products_flower.style.transition = '0.5s';
    });
    
    
    var products_child = document.querySelector('.products_child');
    var products_descrip_child = document.querySelector('.products_child div');
    
     
    console.log(products_child);
    console.log(products_descrip_child);
        
    products_child.addEventListener('mouseover', function(){
        //products_descrip_flower.style.visibility = 'hidden';
        products_descrip_child.style.transform = 'scale(0)';
        products_descrip_child.style.transition = '300ms ease-in';
        products_child.style.transform = 'scale(1.04)';
        products_child.style.transition = '0.5s';
    });
    products_child.addEventListener('mouseout', function(){
        products_descrip_child.style.visibility = 'visible';
        products_descrip_child.style.transform = 'scale(1)';
        products_descrip_child.style.transition = '300ms ease-in';
        products_child.style.transform = 'scale(1.0)';
        products_child.style.transition = '0.5s';
    });
    
    //Wychodzace sub-menu O FIRMIE:----------------------------------------- 
    var oFirmie = document.querySelector('.menu li:first-child');
    var oFirmie_submenu = document.querySelector('.menu li > ul');
    console.log(oFirmie);
    console.log(oFirmie_submenu);
    
    oFirmie.addEventListener('mouseover', function(){
        oFirmie_submenu.style.display='block';  
        oFirmie_submenu.style.transition='2s';  
    });
    oFirmie.addEventListener('mouseout', function(){
        oFirmie_submenu.style.display='none';    
        oFirmie_submenu.style.transition='2s';    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});