function calculate(op) {
    console.log("calculate() got called");
    const x = parseInt(jQuery("#x").val());
    const y = parseInt(jQuery("#y").val());
    const hideButton = "<button id='hide' onclick='hide(this)'>Hide</button>"
    const historyAppend = (operation, result) => $("#history").append(`<article><span id='${operation}'>${result} ${hideButton}</span><br></article>`);

    if (Number.isInteger(x) && Number.isInteger(y)) {
        switch (op) {
            case "+":
                console.log("add");
                result = `${x} + ${y} = ${x+y}`;
                $("#result").html(result);
                historyAppend("addStyle", result);
            break;
            case "-":
                console.log("sub");
                result = `${x} - ${y} = ${x-y}`;
                $("#result").html(result);
                historyAppend("subStyle", result);
            break;
            case "*":
                console.log("divi");
                result = `${x} / ${y} = ${x/y}`;
                $("#result").html(result);
                historyAppend("diviStyle", result);
            break;
            case "/":
                console.log("mult");
                result = `${x} * ${y} = ${x*y}`;
                $("#result").html(result);
                historyAppend("multStyle", result);
            break;
        };
    };
};

function hide(input) {
    $(input).parent().parent().remove();
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