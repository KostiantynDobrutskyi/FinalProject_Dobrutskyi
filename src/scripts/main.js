$(document).ready(function () {
//-----------------------sidebar HIDDEN----------------------------------------------
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        // $(".portfolio").toggleClass("col-xs-6 col-xs-12")
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


    //-----------------------Script maps----------------------------------------------




});
