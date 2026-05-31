
$(document).ready(function() {


// Mobile hyperlinks
(function() {
    'use strict';
    $('.menuBars, .gotomyDescription, .gotoheadFfx, .gotoheadMetlife, .gotoheadQbe, .gotoheadMlc, .gotoheadCortex, .gotoheadOptus, .gotoheadRga, .gotoheadDaikin, .gotoheadNewman, .gotoheadMatch, .gotoheadAlveo').click(function (e) {
        e.preventDefault();
        if ($('.menuBars').hasClass('active')){
            $('.menuBars').removeClass('active');
            $('.menuOverlay').fadeToggle( 200, 'swing' );
            $('nav .mobPortfoliolist').fadeToggle( 200, 'swing' );
            $('.menuWrapper').toggleClass('bounce-effect');
            $('.portfolioLink').css({'color':'var(--myWhite)'});
        } else {
            $('.menuBars').addClass('active');
            $('.menuOverlay').fadeToggle( 200, 'swing' );
            $('nav .mobPortfoliolist').fadeToggle( 200, 'swing' );
            $('.menuWrapper').toggleClass('bounceEffect');
            $('.portfolioLink').css({'color':'var(--myWhite)'});
        }
    })
})();

// Hacky n' ugly  hyperlinks for smaller screens 

    $(".gotomyDescription").click(function(e) {
        e.preventDefault();
        window.location.href = '#'
    });
    $(".gotoheadFfx").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookFfx'
    });
    $(".gotoheadMetlife").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookMetlife'
    });
    $(".gotoheadQbe").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookQbe'
    });
    $(".gotoheadMlc").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookMlc'
    });
    $(".gotoheadCortex").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookCortex'
    });
    $(".gotoheadOptus").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookOptus'
    });
    $(".gotoheadRga").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookRga'
    });
    $(".gotoheadDaikin").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookDaikin'
    });
    $(".gotoheadNewman").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookNewman'
    });
    $(".gotoheadMatch").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookMatch'
    });
    $(".gotoheadAlveo").click(function(e) {
        e.preventDefault();
        window.location.href = '#hookAlveo'
    });


    $(window).scroll(function() {

        var 
            block1 = $('#headFfx').offset().top,
            block2 = $('#headOptus').offset().top,
            block3 = $('#headCortex').offset().top,    
            block4 = $('#headMetlife').offset().top,
            block5 = $('#headMlc').offset().top,
            block6 = $('#headQbe').offset().top,
            block7 = $('#headRga').offset().top,
            block8 = $('#headDaikin').offset().top,
            block9 = $('#headNewman').offset().top,
            block10 = $('#headMatch').offset().top,
            block11 = $('#headAlveo').offset().top,
            sC = $(this).scrollTop(), /* scroll amount */
            wH = $(window).height(); /* height of viewport */

        //console.log(block1);

        if ('top of div' < wH){
            $('div').css({'margin top':'0px'});
        }

        if (sC < block1){
            $('#spectrumUi').css({'width':'0px'});
            $('#spectrumId').css({'width':'0px'});
            $('#spectrumUx').css({'width':'0px'});
            $('#spectrumVd').css({'width':'0px'});   
            $('#spectrumMo').css({'width':'0px'});
            $('#spectrumCd').css({'width':'0px'});

           /* $('.colUi').css({'color':'var(--bgLightGrey)'});
            $('.colId').css({'color':'var(--bgLightGrey)'});
            $('.colUx').css({'color':'var(--bgLightGrey)'});
            $('.colVd').css({'color':'var(--bgLightGrey)'});
            $('.colMo').css({'color':'var(--bgLightGrey)'});
            $('.colCd').css({'color':'var(--bgLightGrey)'});*/

            $('.portfolioLink').css({'color':'var(--myWhite)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtDescription').css({'color':'var(--myBlack)'});
            
        }

        if (sC >= block1) {
            $('.colUi').css({'color':'var(--myUi)'});
            $('.colId').css({'color':'var(--myId2)'});
            $('.colUx').css({'color':'var(--myUx)'});
            $('.colVd').css({'color':'var(--myVd)'});
            $('.colMo').css({'color':'var(--myMo)'});
            $('.colCd').css({'color':'var(--myCd)'});
        }

        // Fairfax
        if (sC >= block1 && sC < block2){ 
            $('#spectrumUi').css({'width':'75%'}); 
            $('#spectrumId').css({'width':'100%'}); 
            $('#spectrumUx').css({'width':'25%'}); 
            $('#spectrumVd').css({'width':'41%'}); 
            $('#spectrumMo').css({'width':'25%'}); 
            $('#spectrumCd').css({'width':'8%'}); 

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtFfx').css({'color':'var(--myUi)'});
            
        }

        //Optus
        if (sC >= block2 && sC < block3){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'30%'});
            $('#spectrumUx').css({'width':'10%'});
            $('#spectrumVd').css({'width':'60%'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--myBlack)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtOptus').css({'color':'var(--myUi)'});
        }

        //Cortex
        if (sC >= block3 && sC < block4){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'58%'}); 
            $('#spectrumUx').css({'width':'25%'});
            $('#spectrumVd').css({'width':'84%'}); 
            $('#spectrumMo').css({'width':'42%'}); 
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtCortex').css({'color':'var(--myUi)'});
        }


        // Metlife
        if (sC >= block4 && sC < block5){ 
            $('#spectrumUi').css({'width':'30%'}); 
            $('#spectrumId').css({'width':'10%'}); 
            $('#spectrumUx').css({'width':'100%'}); 
            $('#spectrumVd').css({'width':'0%'}); 
            $('#spectrumMo').css({'width':'0%'}); 
            $('#spectrumCd').css({'width':'15%'}); 

            $('.portfolioLink').css({'color':'var(--myBlack)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtMetlife').css({'color':'var(--myUi)'});
            
        }

        //MLC
        if (sC >= block5 && sC < block6){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'34%'}); 
            $('#spectrumUx').css({'width':'67%'}); 
            $('#spectrumVd').css({'width':'0'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'17%'});

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtMlc').css({'color':'var(--myUi)'});
        }

        

        //QBE
        if (sC >= block6 && sC < block7 ){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'50%'}); 
            $('#spectrumUx').css({'width':'75%'}); 
            $('#spectrumVd').css({'width':'0'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'8%'});

            $('.portfolioLink').css({'color':'var(--myBlack)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtQbe').css({'color':'var(--myUi)'});
        }

        

        //RGA
        if (sC >= block7 && sC < block8){
            $('#spectrumUi').css({'width':'0'});
            $('#spectrumId').css({'width':'34%'});
            $('#spectrumUx').css({'width':'80%'});
            $('#spectrumVd').css({'width':'58%'});
            $('#spectrumMo').css({'width':'34%'});
            $('#spectrumCd').css({'width':'8%'});

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtRga').css({'color':'var(--myUi)'});
        }

        //Daikin
        if (sC >= block8 && sC < block9){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'0'});
            $('#spectrumUx').css({'width':'0'});
            $('#spectrumVd').css({'width':'0'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtDaikin').css({'color':'var(--myUi)'});
        }

        //Newman
        if (sC >= block9 && sC < block10){
            $('#spectrumUi').css({'width':'75%'});
            $('#spectrumId').css({'width':'0'});
            $('#spectrumUx').css({'width':'90%'});
            $('#spectrumVd').css({'width':'0'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--myBlack)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtNewman').css({'color':'var(--myUi)'});
        }

        //Match
        if (sC >= block10 && sC < block11){
            $('#spectrumUi').css({'width':'70%'});
            $('#spectrumId').css({'width':'50%'});
            $('#spectrumUx').css({'width':'50'});
            $('#spectrumVd').css({'width':'100%'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--bgLightGrey)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtMatch').css({'color':'var(--myUi)'});
        }

        //Alveo
        if (sC == block11){
            $('#spectrumUi').css({'width':'100%'});
            $('#spectrumId').css({'width':'25%'});
            $('#spectrumUx').css({'width':'10%'});
            $('#spectrumVd').css({'width':'60%'});
            $('#spectrumMo').css({'width':'0'});
            $('#spectrumCd').css({'width':'0'});

            $('.portfolioLink').css({'color':'var(--myBlack)'});
            $('.mobPortfoliolist a').css({'color':'var(--myWhite)'});
            $('.txtAlveo').css({'color':'var(--myUi)'});
        }

    });

});

