window.addEventListener('load',()=>{
  document.querySelector('#principal').style.transform = 'translateX(0)'
  document.querySelectorAll('.images').forEach(containerImg=>{
    let containerNode = containerImg.parentNode;

    let containerImage = containerNode.querySelector('.images');
    let widthCImage = containerImage.clientWidth;
    let images = containerImage.querySelectorAll('img');
    for(let i = 0 ; i < images.length; i++){
      images[i].style.minWidth = widthCImage +'px';
      images[i].style.left = widthCImage * i + 'px' ;
      images[i].setAttribute('transform', widthCImage * i + 'px');
    }
  })
})

 let idx=0;
 let idcarousel = []


 const handleButton = (value, e) => {
  let containerpai = e.parentNode.parentNode;
  console.log(containerpai, e)
  let containerImage = containerpai.querySelector('.images');
  let widthCImage = containerImage.clientWidth;
  let images = containerImage.querySelectorAll('img');

  let objetoIndex =  idcarousel.findIndex(obj => obj.id === containerpai.id);

  if(objetoIndex !== -1){

  }else{
    idcarousel.push({id: containerpai.id, valor: 0})
    objetoIndex =  idcarousel.findIndex(obj => obj.id === containerpai.id);
  }


  
  if(value === 'next'){
    idcarousel[objetoIndex].valor = idcarousel[objetoIndex].valor + 1
    if(idcarousel[objetoIndex].valor > images.length -1){
      idcarousel[objetoIndex].valor = 0
      containerImage.style.transform = `translateX(0px)`
      console.log('if next', idcarousel[objetoIndex].valor)
    }else{
    containerImage.style.transform = `translateX(${-idcarousel[objetoIndex].valor * widthCImage}px)`
  }
  }
  else if(value ==='prev'){
    idcarousel[objetoIndex].valor = idcarousel[objetoIndex].valor -1; 
     if(idcarousel[objetoIndex].valor === -1 ){
      idcarousel[objetoIndex].valor=images.length - 1;
      containerImage.style.transform = `translateX(${-(images.length-1) * widthCImage}px)`
      console.log('if prev',idcarousel[objetoIndex].valor )
    }else{
    containerImage.style.transform = 
    `translateX(${-idcarousel[objetoIndex].valor * widthCImage}px)`
  }
  
}
};