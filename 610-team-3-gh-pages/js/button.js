var view = {

    showNumber: function(n){
        var el = document.getElementById("showResult")
        el.innerHTML = n;
    }
};

var model = {
    number: 0,

    calculate: function (x) {

        this.number = x * 100;
        var result = this.number;

        view.showNumber(result);
    }
};

var controller = {
    handelClick: function(){
        model.calculate(Math.random(1));
    }
};

(function() {
    var app = {
        init: function() {
            this.main();
            this.event();
        },

        main: function() {

        },

        event: function() {
            var el = document.getElementById("calcUser");
            el.onclick = controller.handelClick;
        }
    };
    
    app.init();
}());