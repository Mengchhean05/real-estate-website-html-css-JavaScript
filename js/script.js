// let menu = document.querySelector('.header .menu');

// document.querySelector('#menu-btn').onclick = () =>{
//    menu.classList.toggle('active');
// }

// window.onscroll = () =>{
//    menu.classList.remove('active');
// }

// document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
//    inputNumber.oninput = () =>{
//       if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
//    };
// });

// document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
//    images.onclick = () =>{
//       src = images.getAttribute('src');
//       document.querySelector('.view-property .details .thumb .big-image img').src = src;
//    }
// });

// document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
//    headings.onclick = () =>{
//       headings.parentElement.classList.toggle('active');
//    }
// });


let menu = document.querySelector('.header .menu');

if(document.querySelector('#menu-btn')){
   document.querySelector('#menu-btn').onclick = () =>{
      menu.classList.toggle('active');
   }
}

window.onscroll = () =>{
   if(menu){
      menu.classList.remove('active');
   }
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

// --- ផ្នែក View Property (កែប្រែឱ្យមានសុវត្ថិភាព មិនឱ្យគាំងលើទំព័រផ្សេង) ---
document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      let src = images.getAttribute('src');
      let bigImage = document.querySelector('.view-property .details .thumb .big-image img');
      // លក្ខខណ្ឌ៖ លុះត្រាតែរកឃើញរូបភាពធំ (នៅលើទំព័រ view-property) ទើបឱ្យវាដូរ src
      if(bigImage){
         bigImage.src = src;
      }
   }
});

// --- ផ្នែក FAQ (ដើរគ្រប់ប្រអប់ទាំងអស់ និងមិនគាំង) ---
document.querySelectorAll('.faq .box-container .box').forEach(box => {
   let heading = box.querySelector('h3');
   if(heading){
      heading.onclick = () => {
         box.classList.toggle('active');
      }
   }
});