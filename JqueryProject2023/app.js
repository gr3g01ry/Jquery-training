$(function(){
    console.log('jquery ready');
    let $mainMenuItems=$('#main-menu ul').children('li');
    // console.log($mainMenuItems);
    let totalMainMenuItems=$mainMenuItems.length;
    let openedIndex=0;
    // console.log($mainMenuItems.children('.images'));
    let init=function(){
        // // console.log($mainMenuItems.children('.images'));
        // $mainMenuItems.children('.images').on('click',(e)=>{
        // // $mainMenuItems.children('.images').click((e)=>{
        //     // console.log(e);
        //     let $newIndex=$(e.currentTarget
        //         ).parent().index();
        //     console.log($newIndex);
        //     let $item=$mainMenuItems.eq($newIndex);
        //     if(openedIndex==$newIndex){
        //         animateItem($item,false,250);
        //         openedIndex=-1
        //     }
        //     else{
        //         if(validIndex($newIndex)){
        //             animateItem($mainMenuItems.eq(openedIndex),false,250);
        //             openedIndex=$newIndex
        //             animateItem($mainMenuItems.eq(openedIndex),true,1500);
        //         }
        //     }
        //     // let $colorImg=$item.find('.color');
        //     // $colorImg.animate({left:"0px",},250);
        //     // $item.animate({'width':'420px'},200);
        //     openedIndex=$newIndex;
        // })
        bindEvents();
        if(validIndex(openedIndex)){
            animateItem($mainMenuItems.eq(openedIndex),true,3000);
        }
    };

    let bindEvents=()=>{
        // console.log($mainMenuItems.children('.images'));
        $mainMenuItems.children('.images').on('click',(e)=>{
        // $mainMenuItems.children('.images').click((e)=>{
            // console.log(e);
            let $newIndex=$(e.currentTarget
                ).parent().index();
            console.log($newIndex);
            let $item=$mainMenuItems.eq($newIndex);
            if(openedIndex==$newIndex){
                animateItem($item,false,250);
                openedIndex=-1
            }
            else{
                if(validIndex($newIndex)){
                    animateItem($mainMenuItems.eq(openedIndex),false,250);
                    openedIndex=$newIndex
                    animateItem($mainMenuItems.eq(openedIndex),true,1500);
                }
            }
            // let $colorImg=$item.find('.color');
            // $colorImg.animate({left:"0px",},250);
            // $item.animate({'width':'420px'},200);
            openedIndex=$newIndex;
        });
        
        $('.button').on('mouseenter',(e)=>{
            // console.log(e);
            $(e.currentTarget).toggleClass('hovered')
        }).on('mouseleave',(e)=>{
            // console.log(e);
            $(e.currentTarget).toggleClass('hovered')
        });

        $('.button').on('click',(e)=>{
            console.log(e);
            let $BtnItems=$(e.currentTarget).index()
            console.log($BtnItems);
            // let test=$(e.currentTarget
            //     ).parent();
            //     console.log(test);
            // let $newIndex=$(e.currentTarget
            //     ).parent().index();
            let $item=$mainMenuItems.children('.images').eq($BtnItems);
            if(openedIndex==$item){
                animateItem($item,false,250);
                openedIndex=-1
            }
            else{
                if(validIndex($BtnItems)){
                    animateItem($mainMenuItems.eq(openedIndex),false,250);
                    openedIndex=$BtnItems
                    animateItem($mainMenuItems.eq(openedIndex),true,1500);
                }
            }
            // let $colorImg=$item.find('.color');
            // $colorImg.animate({left:"0px",},250);
            // $item.animate({'width':'420px'},200);
            openedIndex=$newIndex;
        })
    };


    let validIndex=(indexToCheck)=>{
        return(indexToCheck>=0 &&indexToCheck <totalMainMenuItems) 
    }

    let animateItem=($item,toOpen,speed)=>{
        let $colorImg=$item.find('.color');
        let itemParam= toOpen? {width:'420px'}:{width:'140px'};
        let colorImageParam=toOpen? {left:'0px'}:{left:'140px'}
        $colorImg.animate(colorImageParam,speed);
        $item.animate( itemParam,speed);
        // openedIndex=newIndex;
    }

    init();
});
