
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(
    function () {

        $(".btn1").click(function(){
            $("#collapseExample").toggle();
            $("#collapse1Example").hide();
            $("#collapse2Example").hide();
            $("#collapse3Example").hide();

        })

        $(".btn2").click(function(){
            $("#collapse1Example").toggle();
            $("#collapseExample").hide();
            $("#collapse2Example").hide();
            $("#collapse3Example").hide();

        })
        $(".btn3").click(function(){
            $("#collapse2Example").toggle();
            $("#collapseExample").hide();
            $("#collapse1Example").hide();
            $("#collapse3Example").hide();

        })
        $(".btn4").click(function(){
            $("#collapse3Example").toggle();
            $("#collapseExample").hide();
            $("#collapse1Example").hide();
            $("#collapse2Example").hide();


        })
    }
)
$(document).ready(function(){
    $(document).ready(function () {
        $('.part-1').waypoint(function(direction){
            $('.part-1').addClass("animate__animated animate__zoomIn")
           
        },{
            offset:'40%'
        }
        )
    });
})