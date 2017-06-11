document.addEventListener('DOMContentLoaded', function(){
   console.log('DOM');
    
    //Znikanie opisow obrazków:-----------------------------------------
    
    var products_flower = document.querySelector('.products_flower');
    var products_descrip_flower = document.querySelector('.products_flower div');
        
    products_flower.addEventListener('mouseover', function(){
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
        
    products_child.addEventListener('mouseover', function(){
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
    
    oFirmie.addEventListener('mouseover', function(){
        oFirmie_submenu.style.display='block';  
    });
    oFirmie.addEventListener('mouseout', function(){
        oFirmie_submenu.style.display='none';    
    });
    
    //SLIDER:------------------------------------------------
    var prev = document.querySelector('.jumbotron_prev');
    var next = document.querySelector('.jumbotron_next');
    var sliderImgs = document.querySelectorAll('.jumbotron_img li');
    
    //funkcja, ktora wrzuca wszystko do nowej tablicy
    function putImgArray (element) {
        var newArr = [];
        for(var i=0; i<element.length; i++){
            newArr.push(element[i]);
        }
        return newArr;
    }
    
    //tablica ze zdjeciami do slidera
    var sliderImgsArray = putImgArray(sliderImgs);
    
    //licznik do slidera
    var index = 0;
    
    //wszystkim el. tablicy dodaję klasę 'visible'
    sliderImgsArray[index].classList.add('visible');
    
    //event next
    next.addEventListener('click',function(){
        console.log('next');
        sliderImgsArray[index].classList.remove('visible');
        index++;
        
        //zapętlenie jak dojdziemy do ostatniego
        if(index>sliderImgsArray.length-1){
            index = 0;
        }
        
        sliderImgsArray[index].classList.add('visible');
    });
    
    //event prev
    prev.addEventListener('click',function(){
        console.log('prev');
        sliderImgsArray[index].classList.remove('visible');
        index--;
        
        //zapętlenie jak cofamy poniżej 0
        if(index<0){
            index=sliderImgsArray.length-1;
        }
        
        sliderImgsArray[index].classList.add('visible');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});