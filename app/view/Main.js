Ext.define('ThemingApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar'
    ],

    config: {
        cls: 'sidenav',
        churchId: '',
        layout: {
            type: 'card'
        },
        items: [
            {
                type: 'mainNestedList',
                xtype: 'nestedlist',
                docked: 'top',
                right: 0,
                height: '100%',
                width:250,
                cls: 'right',
                zIndex: 1,
                mask: true,
                store: 'Navigations',
                listConfig:{
                    itemTpl: '<div class="x-button x-iconalign-left x-button-plain x-button-menu"><span style="display: none; " class="x-list"></span><span class="x-button-icon  x-icon-mask"></span><span style="margin-left: 5px;">{icon} {text}</span></div>'
                },
                toolbar:{
                    margin: 'auto',
                    items: [
                        {
                            xtype: 'button',
                            docked: 'left',
                            margin: '.3em 0 .3em .3em',
                            ui: 'action',
                            text: 'Giving'
                        },
                        {
                            xtype: 'button',
                            docked: 'right',
                            margin: '.3em 0 .3em .3em',
                            ui: 'action',
                            text: 'Check in'
                        }]
                }
            },
            {
                xtype: 'container',
                zIndex: 2,
                itemId: 'main',
                type: 'mainContainer',
                cls: 'main',

                scrollable: null,
                draggable: 'horizontal',
                items: [
                    {

                        docked: 'top',
                        xtype: 'titlebar',
                        cls: 'nmTitleBar',
                        height: 45,
                        itemId: 'topToolbar',
                        type: 'toptitle',
                        title: 'Theming App',
                        items: [{
                            xtype: 'button',
                            cls: 'nmNavBtn',
                            type: 'showRightBtn',
                            iconCls: 'site_nav_bg',
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
                        cls: 'nmMainBtn',
                        text: 'Demo Button',
                        width: '70%',
                        height: 45,
                        margin: '20px auto'
                    },{
                        xtype: 'panel',
                        height: 40,
                        width: '70%',
                        margin: 'auto',
                        html: "<h2>Heading text</h2>"
                    },{
                        xtype: 'panel',
                        height: 40,
                        width: '70%',
                        margin: 'auto',
                        html: "<h4>Sub heading text</h4>"
                    },
                    {
                        xtype: 'panel',
                        height: 40,
                        width: '70%',
                        margin: 'auto',
                        html: "<p style='font-size: 14px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut purus sed dolor rhoncus congue eget id enim. Fusce interdum orci eu tellus dignissim tempor. Fusce aliquet, dui euismod varius congue, urna magna interdum dolor, et rutrum risus diam eget augue. Vestibulum et quam justo. Sed sed nibh aliquet est euismod posuere sit amet sed purus. Nullam dolor velit, gravida a iaculis ut, vehicula nec purus. Donec ornare risus at tortor dapibus molestie. Proin pulvinar justo et magna condimentum ac euismod quam cursus. Ut erat tellus, sodales ut molestie eget, dignissim ut orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus imperdiet, sapien nec eleifend porttitor, neque quam auctor elit, eu pellentesque purus sem a nulla. Nam est erat, elementum et scelerisque quis, tempor in tortor. Donec adipiscing mattis mattis. Suspendisse ullamcorper, ipsum vitae semper rutrum, dui elit malesuada velit, quis vehicula justo risus nec mi. Donec ullamcorper bibendum lectus id consectetur<p>"
                    }]
            }
        ]

    }
});
