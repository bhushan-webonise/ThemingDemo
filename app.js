/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'ThemingApp': 'app'
});
//</debug>

Ext.application({
    name: 'ThemingApp',

    requires: [
        'Ext.MessageBox'
    ],
    models:[
        'Flow'
    ],
    controllers: [
        'Navigations'
    ],
    stores: [
        'Navigations'
    ],
    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('ThemingApp.view.Main'));

        Ext.select(".nmComp .x-innerhtml").addCls('nmCompTxt');
        Ext.select(".nmTitleBar .x-button-icon").addCls('nmCompIcon');

//        Ext.util.CSS.createStyleSheet(".nmComp{background: #00ff00;}")
//        Ext.DomQuery.selectNode('.nmComp')
//        Ext.DomHelper.applyStyles(Ext.DomQuery.selectNode('.nmComp'), 'background-color: #BBCCCC;');
        var sheet = document.createElement('style')
        sheet.id = 'styleSheet';
        sheet.innerHTML = ".nmComp{background-color:#abcabc !important;} .nmCompTxt{color:#000000 !important;} .nmCompIcon{background-color:#000000 !important; background-image: none !important;}";
        document.getElementsByTagName('head')[0].appendChild(sheet);
//        Ext.DomHelper.insertBefore('head', "<style>.nmComp{background-color:#abcabc !important; }</style>");
//        Window.document.write("<style>body { background-color:#000 }</style>");
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
