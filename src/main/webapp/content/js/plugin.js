/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.8
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/

// Make sure jQuery has been loaded
if (typeof jQuery === 'undefined') {
    throw new Error('AdminLTE requires jQuery')
  }
  
  /* BoxWidget()
   * ======
   * Adds box widget functions to boxes.
   *
   * @Usage: $('.my-box').boxWidget(options)
   *         This plugin auto activates on any element using the `.box` class
   *         Pass any option as data-option="value"
   */
  +function ($) {
    'use strict';
  
    var DataKey = 'lte.boxwidget';
  
    var Default = {
      animationSpeed : 500,
      collapseTrigger: '[data-widget="collapse"]',
      removeTrigger  : '[data-widget="remove"]',
      collapseIcon   : 'fa-minus',
      expandIcon     : 'fa-plus',
      removeIcon     : 'fa-times'
    };
  
    var Selector = {
      data     : '.box',
      collapsed: '.collapsed-box',
      header   : '.box-header',
      body     : '.box-body',
      footer   : '.box-footer',
      tools    : '.box-tools'
    };
  
    var ClassName = {
      collapsed: 'collapsed-box'
    };
  
    var Event = {
          collapsing: 'collapsing.boxwidget',
          collapsed: 'collapsed.boxwidget',
          expanding: 'expanding.boxwidget',
          expanded: 'expanded.boxwidget',
          removing: 'removing.boxwidget',
          removed: 'removed.boxwidget'        
      };
  
    // BoxWidget Class Definition
    // =====================
    var BoxWidget = function (element, options) {
      this.element = element;
      this.options = options;
  
      this._setUpListeners();
    };
  
    BoxWidget.prototype.toggle = function () {
      var isOpen = !$(this.element).is(Selector.collapsed);
  
      if (isOpen) {
        this.collapse();
      } else {
        this.expand();
      }
    };
  
    BoxWidget.prototype.expand = function () {
      var expandedEvent = $.Event(Event.expanded);
      var expandingEvent = $.Event(Event.expanding);
      var collapseIcon  = this.options.collapseIcon;
      var expandIcon    = this.options.expandIcon;
  
      $(this.element).removeClass(ClassName.collapsed);
  
      $(this.element)
        .children(Selector.header + ', ' + Selector.body + ', ' + Selector.footer)
        .children(Selector.tools)
        .find('.' + expandIcon)
        .removeClass(expandIcon)
        .addClass(collapseIcon);
  
      $(this.element).children(Selector.body + ', ' + Selector.footer)
        .slideDown(this.options.animationSpeed, function () {
          $(this.element).trigger(expandedEvent);
        }.bind(this))
        .trigger(expandingEvent);
    };
  
    BoxWidget.prototype.collapse = function () {
      var collapsedEvent = $.Event(Event.collapsed);
      var collapsingEvent = $.Event(Event.collapsing);
      var collapseIcon   = this.options.collapseIcon;
      var expandIcon     = this.options.expandIcon;
      $(this.element)
        .children(Selector.header + ', ' + Selector.body + ', ' + Selector.footer)
        .children(Selector.tools)
        .find('.' + collapseIcon)
        .removeClass(collapseIcon)
        .addClass(expandIcon);
      $(this.element).children(Selector.body + ', ' + Selector.footer)
        .slideUp(this.options.animationSpeed, function () {
          $(this.element).addClass(ClassName.collapsed);
          $(this.element).trigger(collapsedEvent);
        }.bind(this))
        .trigger(expandingEvent);
    };
  
    BoxWidget.prototype.remove = function () {
      var removedEvent = $.Event(Event.removed);
      var removingEvent = $.Event(Event.removing);
  
      $(this.element).slideUp(this.options.animationSpeed, function () {
        $(this.element).trigger(removedEvent);
        $(this.element).remove();
      }.bind(this))
      .trigger(removingEvent);
    };
  
    // Private
  
    BoxWidget.prototype._setUpListeners = function () {
      var that = this;
  
      $(this.element).on('click', this.options.collapseTrigger, function (event) {
        if (event) event.preventDefault();
        that.toggle($(this));
        return false;
      });
  
      $(this.element).on('click', this.options.removeTrigger, function (event) {
        if (event) event.preventDefault();
        that.remove($(this));
        return false;
      });
    };
  
    // Plugin Definition
    // =================
    function Plugin(option) {
      return this.each(function () {
        var $this = $(this);
        var data  = $this.data(DataKey);
  
        if (!data) {
          var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
          $this.data(DataKey, (data = new BoxWidget($this, options)));
        }
  
        if (typeof option == 'string') {
          if (typeof data[option] == 'undefined') {
            throw new Error('No method named ' + option);
          }
          data[option]();
        }
      });
    }
  
    var old = $.fn.boxWidget;
  
    $.fn.boxWidget             = Plugin;
    $.fn.boxWidget.Constructor = BoxWidget;
  
    // No Conflict Mode
    // ================
    $.fn.boxWidget.noConflict = function () {
      $.fn.boxWidget = old;
      return this;
    };
  
    // BoxWidget Data API
    // ==================
    $(Selector.data).each(function () {
        console.log($(this));
      Plugin.call($(this));
    });
  }(jQuery);
  
  /* Tree()
   * ======
   * Converts a nested list into a multilevel
   * tree view menu.
   *
   * @Usage: $('.my-menu').tree(options)
   *         or add [data-widget="tree"] to the ul element
   *         Pass any option as data-option="value"
   */
  +function ($) {
    'use strict';
  
    var DataKey = 'lte.tree';
  
    var Default = {
      animationSpeed: 500,
      accordion: true,
      followLink: false,
      trigger: '.treeview a'
    };
  
    var Selector = {
      tree: '.tree',
      treeview: '.treeview',
      treeviewMenu: '.treeview-menu',
      open: '.menu-open, .active',
      li: 'li',
      data: '[data-widget="tree"]',
      active: '.active'
    };
  
    var ClassName = {
      open: 'menu-open',
      tree: 'tree'
    };
  
    var Event = {
      collapsed: 'collapsed.tree',
      expanded: 'expanded.tree'
    };
  
    // Tree Class Definition
    // =====================
    var Tree = function (element, options) {
      this.element = element;
      this.options = options;
  
      $(this.element).addClass(ClassName.tree);
  
      $(Selector.treeview + Selector.active, this.element).addClass(ClassName.open);
  
      this._setUpListeners();
    };
  
    Tree.prototype.toggle = function (link, event) {
      var treeviewMenu = link.next(Selector.treeviewMenu);
      var parentLi = link.parent();
      var isOpen = parentLi.hasClass(ClassName.open);
  
      if (!parentLi.is(Selector.treeview)) {
        return;
      }
  
      if (!this.options.followLink || link.attr('href') === '#') {
        event.preventDefault();
      }
  
      if (isOpen) {
        this.collapse(treeviewMenu, parentLi);
      } else {
        this.expand(treeviewMenu, parentLi);
      }
    };
  
    Tree.prototype.expand = function (tree, parent) {
      var expandedEvent = $.Event(Event.expanded);
  
      if (this.options.accordion) {
        var openMenuLi = parent.siblings(Selector.open);
        var openTree = openMenuLi.children(Selector.treeviewMenu);
        this.collapse(openTree, openMenuLi);
      }
  
      parent.addClass(ClassName.open);
      tree.slideDown(this.options.animationSpeed, function () {
        $(this.element).trigger(expandedEvent);
      }.bind(this));
    };
  
    Tree.prototype.collapse = function (tree, parentLi) {
      var collapsedEvent = $.Event(Event.collapsed);
  
      //tree.find(Selector.open).removeClass(ClassName.open);
      parentLi.removeClass(ClassName.open);
      tree.slideUp(this.options.animationSpeed, function () {
        //tree.find(Selector.open + ' > ' + Selector.treeview).slideUp();
        $(this.element).trigger(collapsedEvent);
      }.bind(this));
    };
  
    // Private
  
    Tree.prototype._setUpListeners = function () {
      var that = this;
  
      $(this.element).on('click', this.options.trigger, function (event) {
        that.toggle($(this), event);
      });
    };
  
    // Plugin Definition
    // =================
    function Plugin(option) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DataKey);
  
        if (!data) {
          var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
          $this.data(DataKey, new Tree($this, options));
        }
      });
    }
  
    var old = $.fn.tree;
  
    $.fn.tree = Plugin;
    $.fn.tree.Constructor = Tree;
  
    // No Conflict Mode
    // ================
    $.fn.tree.noConflict = function () {
      $.fn.tree = old;
      return this;
    };
  
    // Tree Data API
    // =============
    $(Selector.data).each(function () {
      Plugin.call($(this));
    });
  
  }(jQuery);
  