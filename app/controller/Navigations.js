Ext.define('ThemingApp.controller.Navigations', {
    extend: 'Ext.app.Controller',

    config: {

        views: ['ThemingApp.view.Main'],

        refs: {
            sideNav     : 'mainview',
            main        : 'container[type="mainContainer"]',
            showRightBtn: 'button[type="showRightBtn"]',
            right       : 'mainview nestedlist[type="mainNestedList"]'
        },

        control: {
            sideNav: {
                activate: 'addMainListeners'
            },
            showRightBtn: {
                release : 'toggleRight'
            },
            right: {
                itemtap: 'toggleRight'
            }
        },

        handleSelector  : 'nmTitleBar'

    },


    addMainListeners: function() {
        this._rightShown = false;

        this.getMain().getDraggable().setConstraint({
            min: { x: -250, y: 0 },
            max: { x: 0 , y: 0 }
        });

        this.getMain().getDraggable().on({
            dragstart: {
                fn: this.onDragStart,
                order: 'before',
                scope: this
            },
            dragend: {
                fn: this.onDragEnd,
                scope: this
            }
        });

    },

    checkMainShown: function() {
        if(this._rightShown) {
            this.moveMain(0);
        }
    },

    // a drag has just finished: so move main to the nearest logical place
    mainSnapTo: function(draggable, e) {

        var velocity = Math.abs(e.deltaX / e.deltaTime),
            direction =  "right",
            offsetObj = Ext.clone(draggable.offset), offset = offsetObj.x,
            thresholdView = this.getRight();
        var startOffsetObj = Ext.clone(draggable.dragStartOffset), startOffset = startOffsetObj.x,
            distance = offset - startOffset,

            threshold = parseInt(thresholdView.element.getWidth() * .70),
            twoThreshold = parseInt(thresholdView.element.getWidth() * .70) +
                parseInt(thresholdView.element.getWidth()),
            newOffset = startOffset,
            mustMove = velocity > 0.75 ? true : false;

        if((startOffset == 0 && (mustMove || distance > threshold)) ||
            (startOffset != 0 && distance > twoThreshold)) {
            if(direction == 'left') {
                newOffset = 0;

            } else {
                newOffset = -300;

            }
        } else if(distance > threshold || mustMove) {
            newOffset = 0;
        }

        if(distance != 0){
            this.moveMain(newOffset);
        }
    },

    // prevent the drag if it's not from the top toolbar
    onDragStart: function(draggable, e) {

        if(!Ext.isDefined(this._dragI)) this._dragI = 0;

        var dragI = this._dragI,
            xpos = Ext.clone(draggable.offset).x,

        // this is the method that makes sure the correct side is shown given draggable offset
            checkZIndices = function(draggable, dragI, lastxpos) {
                if(this._dragI != dragI) return;
                var xpos = Ext.clone(draggable.offset).x;

                if((xpos < 0 && lastxpos >= 0) || (xpos > 0 && lastxpos <= 0) || (xpos == 0)) {
                    if(xpos < 0) {
                        this.getRight().setZIndex(1);
                    } else if (xpos == 0) {
                        this.getRight().setZIndex(0);
                    }
                }
                Ext.defer(checkZIndices, 50, this, [ draggable, dragI, xpos ], false);
            };

        node = e.target;
        while (node = node.parentNode) {
            if (node.className && node.className.indexOf(this.getHandleSelector()) > -1 ) {
                Ext.defer(checkZIndices, 50, this, [ draggable, dragI, xpos ], false);
                return true;
            }
        }
        return false;
    },

    onDragEnd: function(draggable, e) {
        this._dragI++;
        this.mainSnapTo(draggable, e);
    },

    // show or hide the right
    toggleRight: function() {

        if(this._rightShown) {
            this.moveMain(0);
        } else {
            this.moveMain(0 - this.getRight().element.getWidth());
        }

    },

    // move the main container
    moveMain: function(offset, callback) {
        offset = offset && Ext.isNumber(offset) ? offset : 0;

        this._rightShown = offset < 0 ? true : false;

        var draggable = this.getMain().draggableBehavior.draggable;

        if(Ext.isFunction(callback)) {
            var translatable = draggable.getTranslatable();
            var hereCallback = Ext.bind(function() {
                translatable.un('animationend', hereCallback);
                callback();
            }, this);
            translatable.on('animationend', hereCallback);
        }

        draggable.setOffset(offset, 0, {
            duration: 200
        });

        if(offset == 0) {
            // make sure content container is not masked
            this.getMain().setMasked(false);
        } else {
            this.getMain().setMasked({
                transparent: true,
                listeners: {
                    tap: {
                        fn: this.moveMain,
                        scope: this
                    }
                }
            });
        }
    }

});