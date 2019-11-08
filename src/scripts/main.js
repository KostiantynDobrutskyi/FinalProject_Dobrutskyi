$(document).ready(function () {
//-----------------------sidebar HIDDEN----------------------------------------------
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });


//--------------------------Active menu item--------------------------------

    $(function () {
        var location = window.location.href;
        var cur_url = location.split('/').pop();

        $('.menu li').each(function () {
            var link = $(this).find('a').attr('href');

            if (cur_url === link || link === "") {
                $(this).addClass('active');
            }


        });


    });


//---------------------------------VM-------------------------------------
    var vm = {
        message: ko.observable("ssdgsd"),
        dataJson: ko.observableArray([]),
        isActive: ko.observable(null),

        portfolioLoad: function () {
            $.getJSON("main.json", function (e) {
                for (var key in e) {
                    vm.dataJson.push(
                        e[key]
                    );

                }


            })
        },

        filteredDesign: function () {
            vm.notFilter();
            setTimeout(function () {
                $(".design").show(1000);
            }, 1000);

            vm.toastr("Web design", "Filtered")

        },

        filteredIllustrations: function () {
            vm.notFilter();
            setTimeout(function () {
                $(".illustrations").show(1000);
            }, 1000);

            vm.toastr("Illustrations", "Filtered")

        },

        filteredPhotography: function () {
            vm.notFilter();
            setTimeout(function () {
                $(".photography").show(1000);
            }, 1000);

            vm.toastr("Photography", "Filtered")
        },

        filteredWallpers: function () {
            vm.notFilter();
            setTimeout(function () {
                $(".wallpers").show(1000);
            }, 1000);

            vm.toastr("Wallpers", "Filtered")

        },

        notFilter: function () {
            $(".design").hide(1000);
            $(".illustrations").hide(1000);
            $(".photography").hide(1000);
            $(".wallpers").hide(1000);
        },

        showFilter: function () {
            vm.notFilter();
            setTimeout(function () {
                $(".design").show(1000);
                $(".illustrations").show(1000);
                $(".photography").show(1000);
                $(".wallpers").show(1000);
            }, 1000)
        },

        toastr: function (message1, message2) {
            toastr["success"](message1, message2);

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
        }


    };
    vm.portfolioLoad();
    ko.applyBindings(vm);

//---------------------------------------info--------------------------
    $(".content-desc").click(function () {
        $(".content-container-info").show(1000);

    });


//-----------------------Carousel slick----------------------------------------------
    $('.slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });

    //------------------------------------gallery-----------------------------------

    if (window.location.href.split("/").pop() === "work.html") {
        var $gallery = $('.gallery a').simpleLightbox();

        $gallery.on('show.simplelightbox', function () {
            console.log('Requested for showing');
        })
            .on('shown.simplelightbox', function () {
                console.log('Shown');
            })
            .on('close.simplelightbox', function () {
                console.log('Requested for closing');
            })
            .on('closed.simplelightbox', function () {
                console.log('Closed');
            })
            .on('change.simplelightbox', function () {
                console.log('Requested for change');
            })
            .on('next.simplelightbox', function () {
                console.log('Requested for next');
            })
            .on('prev.simplelightbox', function () {
                console.log('Requested for prev');
            })
            .on('nextImageLoaded.simplelightbox', function () {
                console.log('Next image loaded');
            })
            .on('prevImageLoaded.simplelightbox', function () {
                console.log('Prev image loaded');
            })
            .on('changed.simplelightbox', function () {
                console.log('Image changed');
            })
            .on('nextDone.simplelightbox', function () {
                console.log('Image changed to next');
            })
            .on('prevDone.simplelightbox', function () {
                console.log('Image changed to prev');
            })
            .on('error.simplelightbox', function (e) {
                console.log('No image found, go to the next/prev');
                console.log(e);
            });
    }

//-----------------------------------Form Validator----------------------------

    $("#form-contact").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            site: {
                required: true,
                url: true
            }
        },
        messages: {
            name: {
                required: "Please enter your Name",
                minlength: "Minimum two characters"
            }
        },

        submitHandler: function () {
            vm.toastr("Successfully submitted! The form is valid.");
        }


    });

});
