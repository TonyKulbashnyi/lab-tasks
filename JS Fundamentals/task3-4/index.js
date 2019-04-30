
// up arrow event scroll our page to top block item0
 document.getElementById("top").addEventListener('click', function scroll() {
     document.getElementById('item0').scrollIntoView({block: "start", behavior: "smooth"});
 });


 const item = document.querySelectorAll('.item');

 let height = [];
 let arr = [];
 let current = [];

/*
    we have the same name for the menu items, only different index
    and can working with the loop and change only index of our items
*/

for (let i = 0; i < item.length; i++) {
    //event on click item menu
    item[i].addEventListener('click', go);

    //function scroll to start block with the same id like our navigation item class
     function go() {
         document.getElementById('item'+ i ).scrollIntoView({block: "start", behavior: "smooth"});
     }
     //calculation height of our content block and write this into array
     height[i] = document.getElementById('item'+i).offsetHeight;
     arr[i] = height[i];
}

// function working when we use scroll
 window.onscroll = function () {
    for( let j = 0 ; j < item.length; j++) {

        /*
        we want caclulate distance of our block from the start of the window
        for example for 1st block: height current block;
                    for 2nd block: 1st + height current block;
                    for 3rd block: 2nd + height current block;
         */
        if (j === 0) {
            current[0] = arr[0];

        } else {
            current[j] = arr[j] + current[j - 1];
        }
        /*
            mark current block to red color and other blocks to white
        */
        if (window.pageYOffset - current[j] > 0) {
            item[j+1].style.color = 'red';
            item[j].style.color = 'white';
        } else {
            item[j+1].style.color = 'white';
        }

        if(window.pageYOffset <= current[0]+70) {
            item[0].style.color = 'red';
        }
    }

};



