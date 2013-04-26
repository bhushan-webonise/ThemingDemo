Ext.define('ThemingApp.store.Navigations', {
    alias: 'store.Navigation',
    extend: 'Ext.data.TreeStore',
    requires: ['ThemingApp.model.Flow'],

    config: {
        model: 'ThemingApp.model.Flow',
        autoLoad: true,
        defaultRootProperty: 'items',
        data: [
            {
                text: 'My Church',
                icon: 'church'
            },
            {
                text: 'Church Info',
                icon: 'info'
            },
            {
                text: 'Sermons',
                icon: 'Sermons'
            },
            {
                text: 'News',
                icon: 'news'
            },
            {
                text: 'Announcements',
                icon: 'announcement'
            }
        ]
    }

});

