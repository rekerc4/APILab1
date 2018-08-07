"use strict"; 

$(document).ready ( function(){
    
    let data = null;

    $.get(`https://www.reddit.com/r/aww/.json`).then((data) => {
        console.log(data);
        for (let i = 0; i < 10; i++){
            console.log(data.data.children[i]);
                $(".posts").append(`<section class="post"><p class="title">${data.data.children[i].data.title}</p><a href="https://www.reddit.com/${data.data.children[i].data.permalink}"><img src="${data.data.children[i].data.thumbnail}" height="100%" width="100%"></a></section>`);
        }
        });

    }); 
