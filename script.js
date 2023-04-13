console.log('hi');
const animal=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
const tigr=zebra(animal,8)
console.log(tigr);

for (let i = 0; i < tigr.length; i++) {
    const element = tigr[i];
    console.log(element);
    const photo=document.createElement('img')
    photo.src=element
    console.log(photo)

    const lion=document.querySelector('.lion');
lion.appendChild(photo)
    
}

function zebra(img, id) {
    // console.log(img);
    const cat = [...img].sort(()=> 0.6 - Math.random())
    console.log(cat);
    return cat.slice(0, id)
    
}


$('.lion').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
