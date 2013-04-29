Ext.define('ThemingApp.store.Navigations', {
    alias: 'store.Navigation',
    extend: 'Ext.data.Store',
    requires: ['ThemingApp.model.Flow'],

    config: {
        model: 'ThemingApp.model.Flow',
        autoLoad: true,
        defaultRootProperty: 'items',
        grouper: {
            groupFn: function (item) {
                return item.get('group');
            } // groupFn
        },
        data: [
            {
                text: 'My Church',
                group: 'ABOUT CHURCH',
                icon: 'nm_my_church_bg'
            },
            {
                text: 'Church Info',
                group: 'ABOUT CHURCH',
                icon: 'nm_church_info_icon'
            },
            {
                text: 'Sermons',
                group: 'ABOUT CHURCH',
                icon: 'nm_sermons_icon'
            },
            {
                text: 'News',
                group: 'ABOUT CHURCH',
                icon: 'nm_news_icon'
            },
            {
                text: 'Announcements',
                group: 'ABOUT CHURCH',
                icon: 'nm_announcements_icon'
            }
        ]
    }

});

