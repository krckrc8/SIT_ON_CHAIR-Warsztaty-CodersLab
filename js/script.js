document.addEventListener('DOMContentLoaded', function(){
   console.log('DOM');
    
    //Znikanie opisow obrazków:
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});