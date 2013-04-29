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
                icon: 'nm_my_church_bg'
            },
            {
                text: 'Church Info',
                icon: 'nm_church_info_icon'
            },
            {
                text: 'Sermons',
                icon: 'nm_sermons_icon'
            },
            {
                text: 'News',
                icon: 'nm_news_icon'
            },
            {
                text: 'Announcements',
                icon: 'nm_announcements_icon'
            }
        ]
    }

});

