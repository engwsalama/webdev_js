// Bubbling 

/* although we click on the card-tile , all parents detect this clcik and interact with event listener in the child
the effect from child to parent (form buttom to top)
*/

// document.querySelector('.card-title').addEventListener('click',function(e){
//   console.log('card-title')
// });


// document.querySelector('.card-content').addEventListener('click',function(e){
//   console.log('card-content')
// });

// document.querySelector('.card').addEventListener('click',function(e){
//   console.log('card')
// });

// document.querySelector('.col').addEventListener('click',function(e){
//   console.log('col')
// });

// ==============> End of Bubbling Example =====================>

// ============ Event Delegation ============================>
 /*  
  when you are applying the following code , when click the first <li>, the console will show 'delete-item', but the others will not show any message , so 
  here we need to use delegation 
  also , you will need event delegation when make your page is dynamic
 */
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

// function deleteItem(){
//   console.log('delete-item');
// }

// to solve the above error , we will target a parent element to work with 

// document.body.addEventListener('click',deleteItem)
// function deleteItem(e){
//     console.log('delete-item'); // here any click ,will appear a console message
//     console.log(e.target) // here will appear the target
//     if (e.target.className=== 'delete-item'){  // by this i can target any element with this class 
//       console.log('delete-item')
//     }
//   }

  // to dealing wiht parent 
  document.body.addEventListener('click',deleteItem)
function deleteItem(e){    
    if (e.target.parentElement.classList.contains('delete-item')){
      // by this i can target any element with this class 
      console.log('delete-item');
      e.target.parentElement.parentElement.remove();
    }
  }