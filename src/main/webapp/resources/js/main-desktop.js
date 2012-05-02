/**
 * Shortcut alias definitions - will come in handy when declaring dependencies
 * Also, they allow you to keep the code free of any knowledge about library 
 * locations and versions
 */
require.config({
    paths: {
        jquery:'libs/jquery-1.7.1',
        underscore:'libs/underscore',
        text:'libs/text',
        order:'libs/order',
        bootstrap: '../bootstrap/js/bootstrap',
        utilities: 'app/utilities',
        router:'app/router/desktop/router'
    }
});

define("backbone", ['order!jquery', 'order!underscore','order!libs/backbone'], function($){
    return Backbone;
});

// Now we declare all the dependencies
require(['order!jquery','order!underscore','order!backbone', 'text', 'order!bootstrap', 'text!../templates/templates.html', 'order!router'],
       function($, _, backbone, text, bootstrap, templates){
    $('head').append(templates)
    console.log('all loaded')
});