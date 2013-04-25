Ext.define('ThemingApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {

                docked: 'top',
                xtype: 'titlebar',
                title: 'Theming App',
                items: [{
                    xtype: 'button',
                    iconCls: 'list',
                    iconMask: 'true',
                    align: 'right'
                }]
            },
            {
                xtype: 'panel',
                height: 18,
                style: 'background: #333',
                html: "<p style='font-size: 12px; color: #ffffff; line-height: 18px;'>SECTION HEADING TEXT<p>"
            },
            {
                xtype: 'button',
                ui: 'action',
                text: 'Demo Button',
                width: '70%',
                height: 45,
                margin: '20px auto'
            },{
                xtype: 'panel',
                height: 40,
                width: '70%',
                margin: 'auto',
                html: "<h2 style='font-size: 24px;'>Heading text</h2>"
            },{
                xtype: 'panel',
                height: 40,
                width: '70%',
                margin: 'auto',
                html: "<h5 style='font-size: 18px; font-weight: 700'>Sub heading text</h5>"
            },
            {
                xtype: 'panel',
                height: 40,
                width: '70%',
                margin: 'auto',
                html: "<p style='font-size: 14px;'>Normal text<p>"
            }
            ]
    }
});
