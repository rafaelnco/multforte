/*
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var budget = 0,
    $budget = $('.budget'),
    $budgetText = $('.budget-text'),
    $form = $('#contactForm'),
    $alerts = $('#alerts'),
    $loginopts = $('.login-panel .nav li'),
    $nav = $('.navbar'),
    navOuterHeight =  $nav.outerHeight();

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - navOuterHeight
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.unique',
    offset: 200
})

var height = document  
            .getElementsByClassName("myheader")[0]
            .offsetHeight
/*
            +

            document  
            .getElementsByClassName("mylogin")[0]
            .offsetHeight*/;

document
.getElementsByClassName("navbar-default")[0]
.setAttribute("data-offset-top", height);

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li:not(.dropdown) a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.login-panel .nav li').click(function(a) {
    for(var i =0; i < $loginopts.length; i++) {
        $loginopts[i].classList.remove("active");
    }
    console.log(a);
    a.currentTarget.classList.add("active");
});

function updateBudget(checked, price) {
    budget += checked ? price : -price;
    $budgetText.text('R$ '+budget);
    if(budget != 0) {
        $budget.removeClass('hidden');
    } else {
        $budget.addClass('hidden');
    }
}

function send(message) {
    $alerts.append('<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>'+message+'</span></div>');
}


jQuery(function($) {
    var rssConfig = {//{teaserImage}<br>
            limit: 2,
            layoutTemplate: "<ul class='list-group'>{entries}</ul>",
            entryTemplate: "<li class='list-group-item'><a href='{url}'><strong>{title}</strong><br>{bodyPlain}</a></li>",
        };
    /*$("#rss-feeds").rss( 
        "http://g1.globo.com/dynamo/politica/mensalao/rss2.xml",
        rssConfig);
    $("#rss-feeds-2").rss(
        "http://g1.globo.com/dynamo/economia/rss2.xml",
        rssConfig);
    $("#rss-feeds-3").rss(
        "http://g1.globo.com/dynamo/brasil/rss2.xml",
        rssConfig);*/
});

$(function() {
    $('#carouselportolio').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
