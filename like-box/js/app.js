var App = Backbone.Router.extend({

    users: null,

    initialize: function() {
        this.users = new Users();
        this.users.fetch();
    },

    routes: {
        '': 'home',
    },

    home: function() {
        console.log(this.users);
        var modelDialog = new ModelDialogView();
        $("#container").append(modelDialog.render().el)
    }
});

var ModelDialogView = Backbone.View.extend({

    template: _.template($('#model-dialog-view').html()),

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    events: {
        'click .like-btn': 'showDialog',
        'click .close': 'closeDialog'
    },

    showDialog: function(e) {
        console.log('trigger show dialog');

        var $model = $('.modal');
        $model.addClass('in')
            .css('display', 'block');

    },

    closeDialog: function() {
        console.log('close dialog');

        var $model = $('.modal');
        $model.removeClass('in')
            .css('display', 'none');
    }

});

var User = Backbone.Model.extend({
    defaults: {
        id: null,
        img: '',
        name: '',
        url: '',
    },

    // validate: function(attrs) {
    //     if (attrs.attr1 === '') {
    //         return "'attr1' can't be empty!"
    //     }
    //     if (attrs.attr2 === '') {
    //         return "'attr2' can't be empty!"
    //     }
    // }
    localStorage: new Backbone.LocalStorage("demo")
});

var Users = Backbone.Collection.extend({
    model: User,
    localStorage: new Backbone.LocalStorage("demo")
})

//how? local storage!!!
//http://ithelp.ithome.com.tw/articles/10091431
var UserDatas = [
    { img: "http://placehold.it/50x60", name: "John Doe", url: "www.google.com" },
    { img: "http://placehold.it/70x50", name: "John Doe", url: "www.google.com" },
    { img: "http://placehold.it/100x100", name: "John Doe", url: "www.google.com" }
];




$(function() {
    new App();
    Backbone.history.start();
});
