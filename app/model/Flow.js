Ext.define('ThemingApp.model.Flow', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id',          type: 'int'},
            {name: 'text',        type: 'string'},
            {name: 'source',      type: 'string'},
            {name: 'animation',   type: 'auto'},
            {name: 'limit',       type: 'auto'},
            {name: 'preventHide', type: 'boolean'},
            {name: 'view',        type: 'string'},
            {name: 'icon',        type: 'string'},
            {name: 'group',        type: 'string'}
        ]
    }
});
