$(document).ready(function () {
//-----------------------sidebar HIDDEN----------------------------------------------
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

//-----------------------filtered works----------------------------------------------

//     $(".filter-button").click(function(){
//         var value = $(this).attr('data-filter');
//
//         if(value == "all")
//         {
//             // $('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
//
//         }
//     });
//
//     if ($(".filter-button").removeClass("active")) {
//         $(this).removeClass("active");
//     }
//     $(this).addClass("active");


    // $(window).resize(function(){
    //     var $WW_width = document.documentElement.clientWidth; //Ширина экрана
    //     var $WW_height = document.documentElement.clientHeight; //Высота экрана
    //
    //     if($WW_width>1499){
    //         $(".portfolio").removeClass("col-lg-3");
    //         $(".portfolio").addClass("col-lg-2");
    //         console.log("change")
    //     }
    //     if($WW_width<=1499){
    //         $(".portfolio").removeClass("col-lg-2");
    //         $(".portfolio").addClass("col-lg-3");
    //
    //     }
    //
    //     console.log($WW_width)
    //
    // })


    //-----------------------jCarousel----------------------------------------------
    $('.slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });


    //------------------------------------gallery-----------------------------------


        var $gallery = $('.gallery a').simpleLightbox();

        $gallery.on('show.simplelightbox', function(){
            console.log('Requested for showing');
        })
            .on('shown.simplelightbox', function(){
                console.log('Shown');
            })
            .on('close.simplelightbox', function(){
                console.log('Requested for closing');
            })
            .on('closed.simplelightbox', function(){
                console.log('Closed');
            })
            .on('change.simplelightbox', function(){
                console.log('Requested for change');
            })
            .on('next.simplelightbox', function(){
                console.log('Requested for next');
            })
            .on('prev.simplelightbox', function(){
                console.log('Requested for prev');
            })
            .on('nextImageLoaded.simplelightbox', function(){
                console.log('Next image loaded');
            })
            .on('prevImageLoaded.simplelightbox', function(){
                console.log('Prev image loaded');
            })
            .on('changed.simplelightbox', function(){
                console.log('Image changed');
            })
            .on('nextDone.simplelightbox', function(){
                console.log('Image changed to next');
            })
            .on('prevDone.simplelightbox', function(){
                console.log('Image changed to prev');
            })
            .on('error.simplelightbox', function(e){
                console.log('No image found, go to the next/prev');
                console.log(e);
            });



});
