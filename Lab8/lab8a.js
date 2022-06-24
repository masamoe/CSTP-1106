function calculate(op) {
    console.log("calculate() got called");
    const x = parseInt(jQuery("#x").val());
    const y = parseInt(jQuery("#y").val());
    const hideButton = "<button class='hide'>Hide</button>"
    if (Number.isInteger(x) && Number.isInteger(y)) {
        switch (op) {
            case "+":
                console.log("add");
                result = `${x} + ${y} = ${x+y}`;
                $("#result").html(result);
                $("#history").append("<span id='addStyle'>"+`${result}`+hideButton+"</span>"+"<br>");
            break;
            case "-":
                console.log("sub");
                result = `${x} - ${y} = ${x-y}`;
                $("#result").html(result);
                $("#history").append("<span id='subStyle'>"+`${result}`+hideButton+"</span>"+"<br>");
            break;
            case "*":
                console.log("divi");
                result = `${x} / ${y} = ${x/y}`;
                $("#result").html(result);
                $("#history").append("<span id='diviStyle'>"+`${result}`+hideButton+"</span>"+"<br>");
            break;
            case "/":
                console.log("mult");
                result = `${x} * ${y} = ${x*y}`;
                $("#result").html(result);
                $("#history").append("<span id='multStyle'>"+`${result}`+hideButton+"</span>"+"<br>");
            break;
        };
    };
};

function hide() {
    $(this).parent().remove();
};

function setup(){
    console.log("setup() got called");
        jQuery("#add").click(function (){
            calculate("+");
        });
        jQuery("#sub").click(function (){
            calculate("-");
        });
        jQuery("#mult").click(function (){
            calculate("*");
        });
        jQuery("#divi").click(function (){
            calculate("/");
        });
    jQuery("span").on("click", ".hide", hide)
};

jQuery(document).ready(setup);