(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@/components/darkmode/base/BaseAvatar'), require('@/components/darkmode/base/BaseIcon'), require('@/helpers/helpers'), require('@/components/darkmode/form/FieldDescription'), require('@/components/darkmode/form/FieldLabel')) :
  typeof define === 'function' && define.amd ? define(['exports', '@/components/darkmode/base/BaseAvatar', '@/components/darkmode/base/BaseIcon', '@/helpers/helpers', '@/components/darkmode/form/FieldDescription', '@/components/darkmode/form/FieldLabel'], factory) :
  (factory((global.vuedarkmode = {}),global.BaseAvatar,global.BaseIcon,global.helpers,global.FieldDescription,global.FieldLabel));
}(this, (function (exports,BaseAvatar,BaseIcon,helpers,FieldDescription,FieldLabel) { 'use strict';

  BaseAvatar = BaseAvatar && BaseAvatar.hasOwnProperty('default') ? BaseAvatar['default'] : BaseAvatar;
  BaseIcon = BaseIcon && BaseIcon.hasOwnProperty('default') ? BaseIcon['default'] : BaseIcon;
  FieldDescription = FieldDescription && FieldDescription.hasOwnProperty('default') ? FieldDescription['default'] : FieldDescription;
  FieldLabel = FieldLabel && FieldLabel.hasOwnProperty('default') ? FieldLabel['default'] : FieldLabel;

  //

  var script = {
    name: "BaseAvatar",

    components: {
      BaseAvatar: BaseAvatar
    },

    props: {
      bordered: {
        type: Boolean,
        default: false
      },
      circular: {
        type: Boolean,
        default: true
      },
      complementaries: {
        type: Array,
        default: null
      },
      cursor: {
        type: String,
        default: "default"
      },
      description: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large", "huge"].indexOf(x) !==
            -1
          );
        }
      },
      src: {
        type: String,
        required: true
      }
    },

    methods: {
      // --> EVENT LISTENERS <--

      onClick: function onClick() {
        this.$emit("click");
      }
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-base-avatar",
          "dm-base-avatar--" + _vm.size,
          {
            "dm-base-avatar--bordered": _vm.bordered,
            "dm-base-avatar--circular": _vm.circular,
            "dm-base-avatar--complementaries": _vm.complementaries
          }
        ],
        on: { click: _vm.onClick }
      },
      [
        _c(
          "span",
          {
            staticClass: "dm-base-avatar__image",
            style: {
              backgroundImage: "url(" + _vm.src + ")",
              cursor: _vm.cursor
            }
          },
          [
            _vm.complementaries
              ? _c(
                  "span",
                  { staticClass: "dm-base-avatar__complementaries" },
                  _vm._l(_vm.complementaries, function(complementary) {
                    return _c("base-avatar", {
                      key: complementary.src,
                      staticClass: "dm-base-avatar__complementary",
                      attrs: {
                        bordered: true,
                        circular: false,
                        src: complementary.src,
                        size: "mini"
                      }
                    })
                  })
                )
              : _vm._e()
          ]
        ),
        _vm.description
          ? _c("span", { staticClass: "dm-base-avatar__description" }, [
              _vm._v(_vm._s(_vm.description))
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-27211804_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-avatar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-base-avatar .dm-base-avatar__image {\n    display: inline-block;\n    box-sizing: border-box;\n    background-size: cover;\n    box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n    user-select: none;\n}\n.dm-base-avatar .dm-base-avatar__complementaries {\n    display: flex;\n    justify-content: flex-end;\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary {\n      margin-right: 4px;\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary:last-of-type {\n        margin-right: 0;\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary .dm-base-avatar__image {\n        width: 30px;\n        height: 30px;\n        border-radius: 4px;\n}\n.dm-base-avatar--mini .dm-base-avatar__image {\n    border-radius: 2px;\n    width: 30px;\n    height: 30px;\n}\n.dm-base-avatar--mini .dm-base-avatar__description {\n    padding-top: 4px;\n    text-transform: uppercase;\n    font-size: 8px;\n}\n.dm-base-avatar--small .dm-base-avatar__image {\n    border-radius: 4px;\n    width: 40px;\n    height: 40px;\n}\n.dm-base-avatar--small .dm-base-avatar__description {\n    padding-top: 5px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n.dm-base-avatar--default .dm-base-avatar__image {\n    border-radius: 6px;\n    width: 60px;\n    height: 60px;\n}\n.dm-base-avatar--default .dm-base-avatar__description {\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-size: 12px;\n}\n.dm-base-avatar--medium .dm-base-avatar__image {\n    border-radius: 8px;\n    width: 80px;\n    height: 80px;\n}\n.dm-base-avatar--medium .dm-base-avatar__description {\n    padding-top: 7px;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n.dm-base-avatar--large .dm-base-avatar__image {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px;\n}\n.dm-base-avatar--large .dm-base-avatar__description {\n    padding-top: 8px;\n    text-transform: uppercase;\n    font-size: 16px;\n}\n.dm-base-avatar--huge .dm-base-avatar__image {\n    border-radius: 12px;\n    width: 120px;\n    height: 120px;\n}\n.dm-base-avatar--huge .dm-base-avatar__description {\n    padding-top: 9px;\n    text-transform: uppercase;\n    font-size: 18px;\n}\n.dm-base-avatar--bordered .dm-base-avatar__image {\n    border: 1px solid #ffffff;\n}\n.dm-base-avatar--circular .dm-base-avatar__image {\n    border-radius: 100%;\n}\n.dm-base-avatar--complementaries > .dm-base-avatar__image {\n    position: relative;\n}\n.dm-base-avatar--complementaries > .dm-base-avatar__image .dm-base-avatar__complementaries {\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n}\n\n/*# sourceMappingURL=BaseAvatar.vue.map */", map: {"version":3,"sources":["BaseAvatar.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAvatar.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACiHhF;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,sFACA;CAgFA;AArFA;IAQA,sBAAA;IACA,uBAAA;IACA,uBAAA;IACA,8CAAA;IACA,kBAAA;CACA;AAbA;IAgBA,cAAA;IACA,0BAAA;CAeA;AAhCA;MAoBA,kBAAA;CAWA;AA/BA;QAuBA,gBAAA;CACA;AAxBA;QA2BA,YAAA;QACA,aAAA;QACA,mBAAA;CACA;AASA;IAEA,mBAAA;IAGA,YAAA;IACA,aAAA;CAKA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,eAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,oBAAA;IAMA,aAAA;IACA,cAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,oBAAA;IAMA,aAAA;IACA,cAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAMA;IAEA,0BAAA;CACA;AAGA;IAEA,oBAAA;CACA;AAGA;IAEA,mBAAA;CAOA;AATA;MAKA,mBAAA;MACA,WAAA;MACA,YAAA;CACA;;ADjHA,0CAA0C","file":"BaseAvatar.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-avatar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-base-avatar .dm-base-avatar__image {\n    display: inline-block;\n    box-sizing: border-box;\n    background-size: cover;\n    box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n    user-select: none; }\n  .dm-base-avatar .dm-base-avatar__complementaries {\n    display: flex;\n    justify-content: flex-end; }\n    .dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary {\n      margin-right: 4px; }\n      .dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary:last-of-type {\n        margin-right: 0; }\n      .dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary .dm-base-avatar__image {\n        width: 30px;\n        height: 30px;\n        border-radius: 4px; }\n  .dm-base-avatar--mini .dm-base-avatar__image {\n    border-radius: 2px;\n    width: 30px;\n    height: 30px; }\n  .dm-base-avatar--mini .dm-base-avatar__description {\n    padding-top: 4px;\n    text-transform: uppercase;\n    font-size: 8px; }\n  .dm-base-avatar--small .dm-base-avatar__image {\n    border-radius: 4px;\n    width: 40px;\n    height: 40px; }\n  .dm-base-avatar--small .dm-base-avatar__description {\n    padding-top: 5px;\n    text-transform: uppercase;\n    font-size: 10px; }\n  .dm-base-avatar--default .dm-base-avatar__image {\n    border-radius: 6px;\n    width: 60px;\n    height: 60px; }\n  .dm-base-avatar--default .dm-base-avatar__description {\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-size: 12px; }\n  .dm-base-avatar--medium .dm-base-avatar__image {\n    border-radius: 8px;\n    width: 80px;\n    height: 80px; }\n  .dm-base-avatar--medium .dm-base-avatar__description {\n    padding-top: 7px;\n    text-transform: uppercase;\n    font-size: 14px; }\n  .dm-base-avatar--large .dm-base-avatar__image {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px; }\n  .dm-base-avatar--large .dm-base-avatar__description {\n    padding-top: 8px;\n    text-transform: uppercase;\n    font-size: 16px; }\n  .dm-base-avatar--huge .dm-base-avatar__image {\n    border-radius: 12px;\n    width: 120px;\n    height: 120px; }\n  .dm-base-avatar--huge .dm-base-avatar__description {\n    padding-top: 9px;\n    text-transform: uppercase;\n    font-size: 18px; }\n  .dm-base-avatar--bordered .dm-base-avatar__image {\n    border: 1px solid #ffffff; }\n  .dm-base-avatar--circular .dm-base-avatar__image {\n    border-radius: 100%; }\n  .dm-base-avatar--complementaries > .dm-base-avatar__image {\n    position: relative; }\n    .dm-base-avatar--complementaries > .dm-base-avatar__image .dm-base-avatar__complementaries {\n      position: absolute;\n      right: 5px;\n      bottom: 5px; }\n\n/*# sourceMappingURL=BaseAvatar.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAvatar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseAvatar$1 = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
    props: {
      color: {
        type: String,
        default: "blue",
        validator: function validator(x) {
          return (
            [
              "black",
              "blue",
              "green",
              "orange",
              "purple",
              "red",
              "turquoise",
              "white"
            ].indexOf(x) !== -1
          );
        }
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      }
    }
  };

  /* script */
              var __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      {
        class: [
          "dm-base-badge",
          "dm-base-badge--" + _vm.color,
          "dm-base-badge--" + _vm.size
        ]
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-40e903b5_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-badge {\n  display: inline-block;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 100px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none;\n}\n.dm-base-badge--black {\n    border-color: #313d4f;\n}\n.dm-base-badge--blue {\n    border-color: #0093ee;\n}\n.dm-base-badge--green {\n    border-color: #1bb934;\n}\n.dm-base-badge--orange {\n    border-color: #faca00;\n}\n.dm-base-badge--purple {\n    border-color: #ab7df6;\n}\n.dm-base-badge--red {\n    border-color: #e0102b;\n}\n.dm-base-badge--turquoise {\n    border-color: #26c1c9;\n}\n.dm-base-badge--white {\n    border-color: #ffffff;\n}\n.dm-base-badge--mini {\n    padding: 0 10px;\n    font-size: 12px;\n    line-height: 20px;\n}\n.dm-base-badge--small {\n    padding: 0 11px;\n    font-size: 13px;\n    line-height: 22px;\n}\n.dm-base-badge--default {\n    padding: 0 12px;\n    font-size: 14px;\n    line-height: 24px;\n}\n.dm-base-badge--medium {\n    padding: 0 13px;\n    font-size: 15px;\n    line-height: 26px;\n}\n.dm-base-badge--large {\n    padding: 0 14px;\n    font-size: 16px;\n    line-height: 28px;\n}\n\n/*# sourceMappingURL=BaseBadge.vue.map */", map: {"version":3,"sources":["BaseBadge.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseBadge.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4DhF;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,0BAAA;EACA,sFACA;EACA,kBAAA;CAqBA;AAhBA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAFA;IACA,sBAAA;CACA;AAQA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;;ADzCA,yCAAyC","file":"BaseBadge.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-badge {\n  display: inline-block;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 100px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none; }\n  .dm-base-badge--black {\n    border-color: #313d4f; }\n  .dm-base-badge--blue {\n    border-color: #0093ee; }\n  .dm-base-badge--green {\n    border-color: #1bb934; }\n  .dm-base-badge--orange {\n    border-color: #faca00; }\n  .dm-base-badge--purple {\n    border-color: #ab7df6; }\n  .dm-base-badge--red {\n    border-color: #e0102b; }\n  .dm-base-badge--turquoise {\n    border-color: #26c1c9; }\n  .dm-base-badge--white {\n    border-color: #ffffff; }\n  .dm-base-badge--mini {\n    padding: 0 10px;\n    font-size: 12px;\n    line-height: 20px; }\n  .dm-base-badge--small {\n    padding: 0 11px;\n    font-size: 13px;\n    line-height: 22px; }\n  .dm-base-badge--default {\n    padding: 0 12px;\n    font-size: 14px;\n    line-height: 24px; }\n  .dm-base-badge--medium {\n    padding: 0 13px;\n    font-size: 15px;\n    line-height: 26px; }\n  .dm-base-badge--large {\n    padding: 0 14px;\n    font-size: 16px;\n    line-height: 28px; }\n\n/*# sourceMappingURL=BaseBadge.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseBadge.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$1() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseBadge = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      __vue_create_injector__$1,
      undefined
    );

  //

  var script$2 = {
    components: {
      BaseIcon: BaseIcon
    },

    props: {
      capitalize: {
        type: Boolean,
        default: true
      },
      circular: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: "blue",
        validator: function validator(x) {
          return (
            ["black", "blue", "green", "red", "orange", "white"].indexOf(x) !== -1
          );
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        default: null
      },
      leftIcon: {
        type: String,
        default: null
      },
      reverse: {
        type: Boolean,
        default: false
      },
      rightIcon: {
        type: String,
        default: null
      },
      rounded: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      type: {
        type: String,
        default: "button",
        validator: function validator(x) {
          return ["button", "reset", "submit"].indexOf(x) !== -1;
        }
      }
    },

    computed: {
      iconSize: function iconSize() {
        switch (this.size) {
          case "mini":
            return "12px";
          case "small":
            return "14px";
          case "default":
            return "16px";
          case "medium":
            return "18px";
          case "large":
            return "20px";
        }
      }
    },

    methods: {
      // --> EVENT LISTENERS <--

      onBlur: function onBlur() {
        this.$emit("blur", this.id);
      },

      onClick: function onClick() {
        this.$emit("click", this.id);
      },

      onFocus: function onFocus() {
        this.$emit("focus", this.id);
      }
    }
  };

  /* script */
              var __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        class: [
          "dm-base-button",
          "dm-base-button--" + _vm.color,
          "dm-base-button--" + _vm.size,
          {
            "dm-base-button--capitalize": _vm.capitalize,
            "dm-base-button--circular": _vm.circular,
            "dm-base-button--disabled": _vm.disabled,
            "dm-base-button--full-width": _vm.fullWidth,
            "dm-base-button--reverse": _vm.reverse,
            "dm-base-button--rounded": _vm.rounded
          }
        ],
        attrs: { disabled: _vm.disabled, id: _vm.id, type: _vm.type },
        on: { blur: _vm.onBlur, click: _vm.onClick, focus: _vm.onFocus }
      },
      [
        _c(
          "span",
          { staticClass: "dm-base-button__inner" },
          [
            _vm.leftIcon
              ? _c("base-icon", {
                  staticClass: "dm-base-button__left-icon",
                  attrs: { name: _vm.leftIcon, size: _vm.iconSize }
                })
              : _vm._e(),
            _vm.$slots.default && _vm.$slots.default[0].text.trim()
              ? _c(
                  "span",
                  { staticClass: "dm-base-button__label" },
                  [_vm._t("default")],
                  2
                )
              : _vm._e(),
            _vm.rightIcon
              ? _c("base-icon", {
                  staticClass: "dm-base-button__right-icon",
                  attrs: { name: _vm.rightIcon, size: _vm.iconSize }
                })
              : _vm._e()
          ],
          1
        )
      ]
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    var __vue_inject_styles__$2 = function (inject) {
      if (!inject) { return }
      inject("data-v-2da432c4_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-button {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: transparent;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all ease-in-out 200ms;\n  user-select: none;\n  cursor: pointer;\n}\n.dm-base-button:hover {\n    transform: scale(1.02);\n}\n.dm-base-button:active {\n    transform: scale(0.98);\n}\n.dm-base-button .dm-base-button__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.dm-base-button--black {\n    border: 1px solid #313d4f;\n    background-color: #222c3c;\n}\n.dm-base-button--blue {\n    background-image: linear-gradient(0deg, #0093ee 0%, #2da1f8 100%);\n}\n.dm-base-button--green {\n    background-image: linear-gradient(0deg, #1bb934 0%, #4ece3d 100%);\n}\n.dm-base-button--orange {\n    background-image: linear-gradient(0deg, #faca00 0%, #ffc82e 100%);\n}\n.dm-base-button--red {\n    background-image: linear-gradient(0deg, #e0102b 0%, #e44023 100%);\n}\n.dm-base-button--white {\n    background-image: linear-gradient(0deg, #fafbfc 0%, #ffffff 100%);\n    color: #313d4f;\n}\n.dm-base-button--mini {\n    padding: 10px 12px;\n    border-radius: 4px;\n    font-size: 12px;\n    line-height: 12px;\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 3px;\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 3px;\n}\n.dm-base-button--small {\n    padding: 12px 14px;\n    border-radius: 5px;\n    font-size: 13px;\n    line-height: 14px;\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 4px;\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 4px;\n}\n.dm-base-button--default {\n    padding: 14px 16px;\n    border-radius: 6px;\n    font-size: 14px;\n    line-height: 16px;\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 5px;\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 5px;\n}\n.dm-base-button--medium {\n    padding: 16px 18px;\n    border-radius: 7px;\n    font-size: 15px;\n    line-height: 18px;\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 6px;\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 6px;\n}\n.dm-base-button--large {\n    padding: 18px 20px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 20px;\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 7px;\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 7px;\n}\n.dm-base-button--capitalize {\n    text-transform: capitalize;\n}\n.dm-base-button--circular {\n    border-radius: 100%;\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__label {\n      display: none;\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 0;\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 0;\n}\n.dm-base-button--circular.dm-base-button--mini {\n      padding: 8px;\n}\n.dm-base-button--circular.dm-base-button--small {\n      padding: 9px;\n}\n.dm-base-button--circular.dm-base-button--default {\n      padding: 10px;\n}\n.dm-base-button--circular.dm-base-button--medium {\n      padding: 11px;\n}\n.dm-base-button--circular.dm-base-button--large {\n      padding: 12px;\n}\n.dm-base-button--disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n}\n.dm-base-button--disabled .dm-base-button__inner {\n      pointer-events: none;\n}\n.dm-base-button--full-width {\n    width: 100%;\n}\n.dm-base-button--reverse {\n    background: transparent;\n    color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--black {\n      border-color: #313d4f;\n}\n.dm-base-button--reverse.dm-base-button--black:active {\n        color: #313d4f;\n}\n.dm-base-button--reverse.dm-base-button--blue {\n      border-color: #0093ee;\n}\n.dm-base-button--reverse.dm-base-button--blue:active {\n        color: #0093ee;\n}\n.dm-base-button--reverse.dm-base-button--green {\n      border-color: #1bb934;\n}\n.dm-base-button--reverse.dm-base-button--green:active {\n        color: #1bb934;\n}\n.dm-base-button--reverse.dm-base-button--red {\n      border-color: #e0102b;\n}\n.dm-base-button--reverse.dm-base-button--red:active {\n        color: #e0102b;\n}\n.dm-base-button--reverse.dm-base-button--orange {\n      border-color: #faca00;\n}\n.dm-base-button--reverse.dm-base-button--orange:active {\n        color: #faca00;\n}\n.dm-base-button--reverse.dm-base-button--white {\n      border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--white:active {\n        color: #ffffff;\n}\n.dm-base-button--reverse:hover {\n      border-color: #ffffff;\n      transform: initial;\n}\n.dm-base-button--reverse:active {\n      background: #ffffff;\n      transform: initial;\n}\n.dm-base-button--rounded {\n    border-radius: 60px;\n    color: #ffffff;\n}\n\n/*# sourceMappingURL=BaseButton.vue.map */", map: {"version":3,"sources":["BaseButton.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseButton.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACsKhF;EACA,sBAAA;EACA,WAAA;EACA,qCAAA;EACA,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,sFACA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;CAiJA;AA5JA;IAcA,uBAAA;CACA;AAfA;IAkBA,uBAAA;CACA;AAnBA;IAsBA,cAAA;IACA,oBAAA;IACA,wBAAA;CACA;AAIA;IACA,0BAAA;IACA,0BAAA;CACA;AAEA;IACA,kEAIA;CACA;AAEA;IACA,kEAAA;CACA;AAEA;IACA,kEAAA;CACA;AAEA;IACA,kEAAA;CACA;AAEA;IACA,kEAAA;IACA,eAAA;CACA;AAOA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAWA;AAfA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAWA;AAfA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAWA;AAfA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAWA;AAfA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAWA;AAfA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAOA;IACA,2BAAA;CACA;AAEA;IACA,oBAAA;CAuBA;AAxBA;MAKA,cAAA;CACA;AANA;MASA,gBAAA;CACA;AAVA;MAaA,eAAA;CACA;AAdA;MAqBA,aAAA;CACA;AAtBA;MAqBA,aAAA;CACA;AAtBA;MAqBA,cAAA;CACA;AAtBA;MAqBA,cAAA;CACA;AAtBA;MAqBA,cAAA;CACA;AAIA;IACA,aAAA;IACA,oBAAA;CAKA;AAPA;MAKA,qBAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IACA,wBAAA;IACA,eAAA;CAqBA;AAvBA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAMA,sBAAA;CAKA;AAXA;QASA,eAAA;CACA;AAVA;MAeA,sBAAA;MACA,mBAAA;CACA;AAjBA;MAoBA,oBAAA;MACA,mBAAA;CACA;AAGA;IACA,oBAAA;IACA,eAAA;CACA;;ADlLA,0CAA0C","file":"BaseButton.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-button {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: transparent;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all ease-in-out 200ms;\n  user-select: none;\n  cursor: pointer; }\n  .dm-base-button:hover {\n    transform: scale(1.02); }\n  .dm-base-button:active {\n    transform: scale(0.98); }\n  .dm-base-button .dm-base-button__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .dm-base-button--black {\n    border: 1px solid #313d4f;\n    background-color: #222c3c; }\n  .dm-base-button--blue {\n    background-image: linear-gradient(0deg, #0093ee 0%, #2da1f8 100%); }\n  .dm-base-button--green {\n    background-image: linear-gradient(0deg, #1bb934 0%, #4ece3d 100%); }\n  .dm-base-button--orange {\n    background-image: linear-gradient(0deg, #faca00 0%, #ffc82e 100%); }\n  .dm-base-button--red {\n    background-image: linear-gradient(0deg, #e0102b 0%, #e44023 100%); }\n  .dm-base-button--white {\n    background-image: linear-gradient(0deg, #fafbfc 0%, #ffffff 100%);\n    color: #313d4f; }\n  .dm-base-button--mini {\n    padding: 10px 12px;\n    border-radius: 4px;\n    font-size: 12px;\n    line-height: 12px; }\n    .dm-base-button--mini .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 3px; }\n    .dm-base-button--mini .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 3px; }\n  .dm-base-button--small {\n    padding: 12px 14px;\n    border-radius: 5px;\n    font-size: 13px;\n    line-height: 14px; }\n    .dm-base-button--small .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 4px; }\n    .dm-base-button--small .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 4px; }\n  .dm-base-button--default {\n    padding: 14px 16px;\n    border-radius: 6px;\n    font-size: 14px;\n    line-height: 16px; }\n    .dm-base-button--default .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 5px; }\n    .dm-base-button--default .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 5px; }\n  .dm-base-button--medium {\n    padding: 16px 18px;\n    border-radius: 7px;\n    font-size: 15px;\n    line-height: 18px; }\n    .dm-base-button--medium .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 6px; }\n    .dm-base-button--medium .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 6px; }\n  .dm-base-button--large {\n    padding: 18px 20px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 20px; }\n    .dm-base-button--large .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 7px; }\n    .dm-base-button--large .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 7px; }\n  .dm-base-button--capitalize {\n    text-transform: capitalize; }\n  .dm-base-button--circular {\n    border-radius: 100%; }\n    .dm-base-button--circular .dm-base-button__inner .dm-base-button__label {\n      display: none; }\n    .dm-base-button--circular .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 0; }\n    .dm-base-button--circular .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 0; }\n    .dm-base-button--circular.dm-base-button--mini {\n      padding: 8px; }\n    .dm-base-button--circular.dm-base-button--small {\n      padding: 9px; }\n    .dm-base-button--circular.dm-base-button--default {\n      padding: 10px; }\n    .dm-base-button--circular.dm-base-button--medium {\n      padding: 11px; }\n    .dm-base-button--circular.dm-base-button--large {\n      padding: 12px; }\n  .dm-base-button--disabled {\n    opacity: 0.7;\n    cursor: not-allowed; }\n    .dm-base-button--disabled .dm-base-button__inner {\n      pointer-events: none; }\n  .dm-base-button--full-width {\n    width: 100%; }\n  .dm-base-button--reverse {\n    background: transparent;\n    color: #ffffff; }\n    .dm-base-button--reverse.dm-base-button--black {\n      border-color: #313d4f; }\n      .dm-base-button--reverse.dm-base-button--black:active {\n        color: #313d4f; }\n    .dm-base-button--reverse.dm-base-button--blue {\n      border-color: #0093ee; }\n      .dm-base-button--reverse.dm-base-button--blue:active {\n        color: #0093ee; }\n    .dm-base-button--reverse.dm-base-button--green {\n      border-color: #1bb934; }\n      .dm-base-button--reverse.dm-base-button--green:active {\n        color: #1bb934; }\n    .dm-base-button--reverse.dm-base-button--red {\n      border-color: #e0102b; }\n      .dm-base-button--reverse.dm-base-button--red:active {\n        color: #e0102b; }\n    .dm-base-button--reverse.dm-base-button--orange {\n      border-color: #faca00; }\n      .dm-base-button--reverse.dm-base-button--orange:active {\n        color: #faca00; }\n    .dm-base-button--reverse.dm-base-button--white {\n      border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--white:active {\n        color: #ffffff; }\n    .dm-base-button--reverse:hover {\n      border-color: #ffffff;\n      transform: initial; }\n    .dm-base-button--reverse:active {\n      background: #ffffff;\n      transform: initial; }\n  .dm-base-button--rounded {\n    border-radius: 60px;\n    color: #ffffff; }\n\n/*# sourceMappingURL=BaseButton.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseButton.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$2() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseButton = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      __vue_create_injector__$2,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$3 = {
    props: {
      color: {
        type: String,
        default: "blue",
        validator: function validator(x) {
          return (
            [
              "black",
              "blue",
              "green",
              "orange",
              "purple",
              "red",
              "turquoise",
              "white"
            ].indexOf(x) !== -1
          );
        }
      },
      size: {
        type: String,
        default: "small",
        validator: function validator(x) {
          return ["small", "large"].indexOf(x) !== -1;
        }
      }
    }
  };

  /* script */
              var __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("hr", {
      class: [
        "dm-base-divider",
        "dm-base-divider--" + _vm.size,
        "dm-base-divider--" + _vm.color
      ]
    })
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    var __vue_inject_styles__$3 = function (inject) {
      if (!inject) { return }
      inject("data-v-3c24ee32_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-divider {\n  display: block;\n  border: 0;\n  border-top-style: solid;\n}\n.dm-base-divider--black {\n    border-top-color: #313d4f;\n}\n.dm-base-divider--blue {\n    border-top-color: #0093ee;\n}\n.dm-base-divider--green {\n    border-top-color: #1bb934;\n}\n.dm-base-divider--orange {\n    border-top-color: #faca00;\n}\n.dm-base-divider--purple {\n    border-top-color: #ab7df6;\n}\n.dm-base-divider--red {\n    border-top-color: #e0102b;\n}\n.dm-base-divider--turquoise {\n    border-top-color: #26c1c9;\n}\n.dm-base-divider--white {\n    border-top-color: #ffffff;\n}\n.dm-base-divider--small {\n    margin: 15px auto;\n    max-width: 60px;\n    height: 4px;\n    border-top-width: 4px;\n}\n.dm-base-divider--large {\n    margin: 50px auto;\n    max-width: 800px;\n    height: 1px;\n    border-top-width: 1px;\n}\n\n/*# sourceMappingURL=BaseDivider.vue.map */", map: {"version":3,"sources":["BaseDivider.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseDivider.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACyDhF;EACA,eAAA;EACA,UAAA;EACA,wBAAA;CAyBA;AApBA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAKA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;IACA,sBAAA;CACA;AAEA;IACA,kBAAA;IACA,iBAAA;IACA,YAAA;IACA,sBAAA;CACA;;ADpDA,2CAA2C","file":"BaseDivider.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-divider {\n  display: block;\n  border: 0;\n  border-top-style: solid; }\n  .dm-base-divider--black {\n    border-top-color: #313d4f; }\n  .dm-base-divider--blue {\n    border-top-color: #0093ee; }\n  .dm-base-divider--green {\n    border-top-color: #1bb934; }\n  .dm-base-divider--orange {\n    border-top-color: #faca00; }\n  .dm-base-divider--purple {\n    border-top-color: #ab7df6; }\n  .dm-base-divider--red {\n    border-top-color: #e0102b; }\n  .dm-base-divider--turquoise {\n    border-top-color: #26c1c9; }\n  .dm-base-divider--white {\n    border-top-color: #ffffff; }\n  .dm-base-divider--small {\n    margin: 15px auto;\n    max-width: 60px;\n    height: 4px;\n    border-top-width: 4px; }\n  .dm-base-divider--large {\n    margin: 50px auto;\n    max-width: 800px;\n    height: 1px;\n    border-top-width: 1px; }\n\n/*# sourceMappingURL=BaseDivider.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseDivider.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$3() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseDivider = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      __vue_create_injector__$3,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4 = {
    props: {
      color: {
        type: String,
        default: null,
        validator: function validator(x) {
          return ["grey", "white", "white2"].indexOf(x) !== -1;
        }
      },
      fontWeight: {
        type: String,
        default: null,
        validator: function validator(x) {
          return (
            [
              "thin",
              "light",
              "regular",
              "medium",
              "bold",
              "extrabold",
              "black"
            ].indexOf(x) !== -1
          );
        }
      },
      type: {
        type: String,
        required: true,
        validator: function validator(x) {
          return ["h1", "h2", "h3", "p"].indexOf(x) !== -1;
        }
      }
    },

    computed: {
      computedColor: function computedColor() {
        // Directly return prop when defined
        if (this.color) { return this.color; }

        switch (this.type) {
          case "h1":
            return "white";
          case "h2":
            return "white2";
          case "h3":
            return "grey";
          case "p":
            return "white";
        }
      },

      computedFontWeight: function computedFontWeight() {
        // Directly return prop when defined
        if (this.fontWeight) { return this.fontWeight; }

        switch (this.type) {
          case "h1":
            return "bold";
          case "h2":
            return "medium";
          case "h3":
            return "regular";
          case "p":
            return "regular";
        }
      }
    }
  };

  /* script */
              var __vue_script__$4 = script$4;
              
  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-base-heading",
          "dm-base-heading--" + _vm.computedColor,
          "dm-base-heading--" + _vm.computedFontWeight,
          "dm-base-heading--" + _vm.type
        ]
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    var __vue_inject_styles__$4 = function (inject) {
      if (!inject) { return }
      inject("data-v-6844bf6a_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-heading {\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-base-heading--grey {\n    color: #a8c6df;\n}\n.dm-base-heading--white {\n    color: #ffffff;\n}\n.dm-base-heading--white2 {\n    color: #fafbfc;\n}\n.dm-base-heading--thin {\n    font-weight: 100;\n}\n.dm-base-heading--light {\n    font-weight: 300;\n}\n.dm-base-heading--regular {\n    font-weight: 400;\n}\n.dm-base-heading--medium {\n    font-weight: 500;\n}\n.dm-base-heading--bold {\n    font-weight: 700;\n}\n.dm-base-heading--extrabold {\n    font-weight: 800;\n}\n.dm-base-heading--black {\n    font-weight: 900;\n}\n.dm-base-heading--h1 {\n    margin-bottom: 6px;\n    font-size: 26px;\n    line-height: 32px;\n}\n.dm-base-heading--h2 {\n    margin-bottom: 6px;\n    font-size: 22px;\n    line-height: 28px;\n}\n.dm-base-heading--h3 {\n    margin-bottom: 6px;\n    font-size: 18px;\n    line-height: 24px;\n}\n.dm-base-heading--p {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 24px;\n}\n\n/*# sourceMappingURL=BaseHeading.vue.map */", map: {"version":3,"sources":["BaseHeading.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseHeading.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACiGhF;EACA,sFACA;CAuEA;AAnEA;IACA,eAAA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,eAAA;CACA;AAIA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAIA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,oBAAA;IACA,gBAAA;IACA,kBAAA;CACA;;ADjIA,2CAA2C","file":"BaseHeading.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-heading {\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-base-heading--grey {\n    color: #a8c6df; }\n  .dm-base-heading--white {\n    color: #ffffff; }\n  .dm-base-heading--white2 {\n    color: #fafbfc; }\n  .dm-base-heading--thin {\n    font-weight: 100; }\n  .dm-base-heading--light {\n    font-weight: 300; }\n  .dm-base-heading--regular {\n    font-weight: 400; }\n  .dm-base-heading--medium {\n    font-weight: 500; }\n  .dm-base-heading--bold {\n    font-weight: 700; }\n  .dm-base-heading--extrabold {\n    font-weight: 800; }\n  .dm-base-heading--black {\n    font-weight: 900; }\n  .dm-base-heading--h1 {\n    margin-bottom: 6px;\n    font-size: 26px;\n    line-height: 32px; }\n  .dm-base-heading--h2 {\n    margin-bottom: 6px;\n    font-size: 22px;\n    line-height: 28px; }\n  .dm-base-heading--h3 {\n    margin-bottom: 6px;\n    font-size: 18px;\n    line-height: 24px; }\n  .dm-base-heading--p {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 24px; }\n\n/*# sourceMappingURL=BaseHeading.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$4 = undefined;
    /* module identifier */
    var __vue_module_identifier__$4 = undefined;
    /* functional template */
    var __vue_is_functional_template__$4 = false;
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseHeading.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$4() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseHeading = __vue_normalize__$4(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      __vue_create_injector__$4,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$5 = {
    props: {
      color: {
        type: String,
        default: null
      },
      cursor: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: "24px"
      }
    },

    methods: {
      // --> EVENT LISTENERS <--

      onClick: function onClick() {
        this.$emit("click", this.name);
      }
    }
  };

  /* script */
              var __vue_script__$5 = script$5;
              
  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "i",
      {
        staticClass: "dm-base-icon",
        style: {
          color: _vm.color,
          cursor: _vm.cursor,
          fontSize: _vm.size
        },
        attrs: { "aria-hidden": "true" },
        on: { click: _vm.onClick }
      },
      [_vm._v(_vm._s(_vm.name))]
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    var __vue_inject_styles__$5 = function (inject) {
      if (!inject) { return }
      inject("data-v-c38b1b68_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-icon {\n  display: inline-block;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n}\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\");\n}\n\n/*# sourceMappingURL=BaseIcon.vue.map */", map: {"version":3,"sources":["BaseIcon.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC0DhF;EACA,sBAAA;EACA,eAAA;EACA,qBAAA;EACA,mCAAA;EACA,oBAAA;EACA,kBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,8BAAA;EACA,8BAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EAEA,oCAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mHACA;CAAA;;AD1DA,wCAAwC","file":"BaseIcon.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-icon {\n  display: inline-block;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased; }\n\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\"); }\n\n/*# sourceMappingURL=BaseIcon.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$5 = undefined;
    /* module identifier */
    var __vue_module_identifier__$5 = undefined;
    /* functional template */
    var __vue_is_functional_template__$5 = false;
    /* component normalizer */
    function __vue_normalize__$5(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$5() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseIcon$1 = __vue_normalize__$5(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      __vue_create_injector__$5,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$6 = {
    props: {
      color: {
        type: String,
        default: "blue",
        validator: function validator(x) {
          return (
            [
              "black",
              "blue",
              "green",
              "orange",
              "purple",
              "red",
              "turquoise",
              "white"
            ].indexOf(x) !== -1
          );
        }
      },
      labelSecondary: {
        type: String,
        default: null
      },
      labelMain: {
        type: String,
        default: null
      },
      progress: {
        type: Number,
        default: 0
      }
    }
  };

  /* script */
              var __vue_script__$6 = script$6;
              
  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: ["dm-base-loader", "dm-base-loader--" + _vm.color]
      },
      [
        _vm.labelMain || _vm.labelSecondary
          ? _c("span", { staticClass: "dm-base-loader__content" }, [
              _vm.labelMain
                ? _c("span", { staticClass: "dm-base-loader__label-main" }, [
                    _vm._v(_vm._s(_vm.labelMain))
                  ])
                : _vm._e(),
              _vm.labelSecondary
                ? _c("span", { staticClass: "dm-base-loader__label-secondary" }, [
                    _vm._v(_vm._s(_vm.labelSecondary))
                  ])
                : _vm._e()
            ])
          : _vm._e(),
        _c("div", { staticClass: "dm-base-loader__bar" }),
        _c("div", {
          staticClass: "dm-base-loader__progress",
          style: {
            width: _vm.progress + "%"
          }
        })
      ]
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    var __vue_inject_styles__$6 = function (inject) {
      if (!inject) { return }
      inject("data-v-0873fcdd_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-loader {\n  text-align: left;\n  font-size: 14px;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none;\n}\n.dm-base-loader .dm-base-loader__content {\n    display: flex;\n    margin-bottom: 10px;\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-main,\n    .dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary {\n      flex: 1;\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-main {\n      text-transform: uppercase;\n      font-weight: bold;\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary {\n      text-align: right;\n}\n.dm-base-loader .dm-base-loader__bar,\n  .dm-base-loader .dm-base-loader__progress {\n    height: 6px;\n    border-radius: 10px;\n}\n.dm-base-loader .dm-base-loader__bar {\n    margin-bottom: -5px;\n    opacity: 0.2;\n}\n.dm-base-loader--black .dm-base-loader__bar,\n  .dm-base-loader--black .dm-base-loader__progress {\n    background-color: #313d4f;\n}\n.dm-base-loader--blue .dm-base-loader__bar,\n  .dm-base-loader--blue .dm-base-loader__progress {\n    background-color: #0093ee;\n}\n.dm-base-loader--green .dm-base-loader__bar,\n  .dm-base-loader--green .dm-base-loader__progress {\n    background-color: #1bb934;\n}\n.dm-base-loader--orange .dm-base-loader__bar,\n  .dm-base-loader--orange .dm-base-loader__progress {\n    background-color: #faca00;\n}\n.dm-base-loader--purple .dm-base-loader__bar,\n  .dm-base-loader--purple .dm-base-loader__progress {\n    background-color: #ab7df6;\n}\n.dm-base-loader--red .dm-base-loader__bar,\n  .dm-base-loader--red .dm-base-loader__progress {\n    background-color: #e0102b;\n}\n.dm-base-loader--turquoise .dm-base-loader__bar,\n  .dm-base-loader--turquoise .dm-base-loader__progress {\n    background-color: #26c1c9;\n}\n.dm-base-loader--white .dm-base-loader__bar,\n  .dm-base-loader--white .dm-base-loader__progress {\n    background-color: #ffffff;\n}\n\n/*# sourceMappingURL=BaseLoader.vue.map */", map: {"version":3,"sources":["BaseLoader.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseLoader.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACmFhF;EACA,iBAAA;EACA,gBAAA;EACA,sFACA;EACA,kBAAA;CA0CA;AA/CA;IAQA,cAAA;IACA,oBAAA;CAeA;AAxBA;;MAaA,QAAA;CACA;AAdA;MAiBA,0BAAA;MACA,kBAAA;CACA;AAnBA;MAsBA,kBAAA;CACA;AAvBA;;IA4BA,YAAA;IACA,oBAAA;CACA;AA9BA;IAiCA,oBAAA;IACA,aAAA;CACA;AAKA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;AAJA;;IAGA,0BAAA;CACA;;AD9EA,0CAA0C","file":"BaseLoader.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-loader {\n  text-align: left;\n  font-size: 14px;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none; }\n  .dm-base-loader .dm-base-loader__content {\n    display: flex;\n    margin-bottom: 10px; }\n    .dm-base-loader .dm-base-loader__content .dm-base-loader__label-main,\n    .dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary {\n      flex: 1; }\n    .dm-base-loader .dm-base-loader__content .dm-base-loader__label-main {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary {\n      text-align: right; }\n  .dm-base-loader .dm-base-loader__bar,\n  .dm-base-loader .dm-base-loader__progress {\n    height: 6px;\n    border-radius: 10px; }\n  .dm-base-loader .dm-base-loader__bar {\n    margin-bottom: -5px;\n    opacity: 0.2; }\n  .dm-base-loader--black .dm-base-loader__bar,\n  .dm-base-loader--black .dm-base-loader__progress {\n    background-color: #313d4f; }\n  .dm-base-loader--blue .dm-base-loader__bar,\n  .dm-base-loader--blue .dm-base-loader__progress {\n    background-color: #0093ee; }\n  .dm-base-loader--green .dm-base-loader__bar,\n  .dm-base-loader--green .dm-base-loader__progress {\n    background-color: #1bb934; }\n  .dm-base-loader--orange .dm-base-loader__bar,\n  .dm-base-loader--orange .dm-base-loader__progress {\n    background-color: #faca00; }\n  .dm-base-loader--purple .dm-base-loader__bar,\n  .dm-base-loader--purple .dm-base-loader__progress {\n    background-color: #ab7df6; }\n  .dm-base-loader--red .dm-base-loader__bar,\n  .dm-base-loader--red .dm-base-loader__progress {\n    background-color: #e0102b; }\n  .dm-base-loader--turquoise .dm-base-loader__bar,\n  .dm-base-loader--turquoise .dm-base-loader__progress {\n    background-color: #26c1c9; }\n  .dm-base-loader--white .dm-base-loader__bar,\n  .dm-base-loader--white .dm-base-loader__progress {\n    background-color: #ffffff; }\n\n/*# sourceMappingURL=BaseLoader.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$6 = undefined;
    /* module identifier */
    var __vue_module_identifier__$6 = undefined;
    /* functional template */
    var __vue_is_functional_template__$6 = false;
    /* component normalizer */
    function __vue_normalize__$6(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseLoader.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$6() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseLoader = __vue_normalize__$6(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      __vue_create_injector__$6,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$7 = {
    filters: {
      capitalize: function capitalize(value) {
        if (!value) { return ""; }
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },

    props: {
      action: {
        type: String,
        default: null
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      network: {
        type: String,
        required: true,
        validator: function validator(x) {
          return ["facebook", "google", "messenger", "twitter"].indexOf(x) !== -1;
        }
      },
      size: {
        type: String,
        default: "large",
        validator: function validator(x) {
          return ["mini", "small", "large"].indexOf(x) !== -1;
        }
      }
    },

    computed: {
      computedAction: function computedAction() {
        // Return the action when defined as prop
        if (this.action) { return this.action; }

        switch (this.network) {
          case "facebook":
            return "Sign in";
          case "google":
            return "Sign in";
          case "messenger":
            return "Subscribe";
          case "twitter":
            return "Sign in";
        }
      }
    },

    methods: {
      // --> EVENT LISTENERS <--

      onClick: function onClick() {
        this.$emit("click", this.network);
      }
    }
  };

  /* script */
              var __vue_script__$7 = script$7;
              
  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        class: [
          "dm-base-social-login",
          "dm-base-social-login--" + _vm.network,
          "dm-base-social-login--" + _vm.size,
          {
            "dm-base-social-login--full-width": _vm.fullWidth
          }
        ],
        on: { click: _vm.onClick }
      },
      [
        _c("span", { staticClass: "dm-base-social-login__inner" }, [
          _c("span", { staticClass: "dm-base-social-login__icon" }),
          ["small", "large"].includes(_vm.size)
            ? _c("span", { staticClass: "dm-base-social-login__label" }, [
                _c("span", { staticClass: "dm-base-social-login__action" }, [
                  _vm._v(_vm._s(_vm.computedAction))
                ]),
                ["large"].includes(_vm.size)
                  ? _c("span", { staticClass: "dm-base-social-login__network" }, [
                      _vm._v(" with " + _vm._s(_vm._f("capitalize")(_vm.network)))
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    var __vue_inject_styles__$7 = function (inject) {
      if (!inject) { return }
      inject("data-v-184c2184_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-social-login {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);\n  color: #ffffff;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all ease-in-out 200ms;\n  user-select: none;\n  cursor: pointer;\n}\n.dm-base-social-login:hover {\n    transform: scale(1.02);\n}\n.dm-base-social-login:active {\n    transform: scale(0.98);\n}\n.dm-base-social-login .dm-base-social-login__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__icon {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__label {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 15px;\n      line-height: 20px;\n}\n.dm-base-social-login--facebook {\n    background: #3b5998;\n}\n.dm-base-social-login--facebook .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/facebook.svg\");\n}\n.dm-base-social-login--google {\n    background: #db4437;\n}\n.dm-base-social-login--google .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/google.svg\");\n}\n.dm-base-social-login--messenger {\n    background: #0084ff;\n}\n.dm-base-social-login--messenger .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/messenger.svg\");\n}\n.dm-base-social-login--twitter {\n    background: #1da1f2;\n}\n.dm-base-social-login--twitter .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/twitter.svg\");\n      height: 16px;\n}\n.dm-base-social-login--mini {\n    padding: 10px 10px;\n}\n.dm-base-social-login--small {\n    padding: 10px 30px;\n}\n.dm-base-social-login--large {\n    padding: 10px 50px;\n}\n.dm-base-social-login--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=BaseSocialLogin.vue.map */", map: {"version":3,"sources":["BaseSocialLogin.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSocialLogin.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC2GhF;EACA,sBAAA;EACA,WAAA;EACA,sCAAA;EACA,mBAAA;EACA,sDAAA;EACA,eAAA;EACA,sFACA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;CA8DA;AAzEA;IAcA,uBAAA;CACA;AAfA;IAkBA,uBAAA;CACA;AAnBA;IAsBA,cAAA;IACA,oBAAA;IACA,wBAAA;CAcA;AAtCA;MA2BA,sBAAA;MACA,YAAA;MACA,aAAA;CACA;AA9BA;MAiCA,iBAAA;MACA,iBAAA;MACA,gBAAA;MACA,kBAAA;CACA;AAMA;IACA,oBAAA;CAWA;AAZA;MAKA,uFAAA;CAKA;AAVA;IACA,oBAAA;CAWA;AAZA;MAKA,qFAAA;CAKA;AAVA;IACA,oBAAA;CAWA;AAZA;MAKA,wFAAA;CAKA;AAVA;IACA,oBAAA;CAWA;AAZA;MAKA,sFAAA;MAGA,aAAA;CAEA;AAUA;IACA,mBAAA;CACA;AAFA;IACA,mBAAA;CACA;AAFA;IACA,mBAAA;CACA;AAKA;IACA,YAAA;CACA;;AD5HA,+CAA+C","file":"BaseSocialLogin.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-social-login {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);\n  color: #ffffff;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all ease-in-out 200ms;\n  user-select: none;\n  cursor: pointer; }\n  .dm-base-social-login:hover {\n    transform: scale(1.02); }\n  .dm-base-social-login:active {\n    transform: scale(0.98); }\n  .dm-base-social-login .dm-base-social-login__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__icon {\n      display: inline-block;\n      width: 20px;\n      height: 20px; }\n    .dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__label {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 15px;\n      line-height: 20px; }\n  .dm-base-social-login--facebook {\n    background: #3b5998; }\n    .dm-base-social-login--facebook .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/facebook.svg\"); }\n  .dm-base-social-login--google {\n    background: #db4437; }\n    .dm-base-social-login--google .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/google.svg\"); }\n  .dm-base-social-login--messenger {\n    background: #0084ff; }\n    .dm-base-social-login--messenger .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/messenger.svg\"); }\n  .dm-base-social-login--twitter {\n    background: #1da1f2; }\n    .dm-base-social-login--twitter .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(\"/images/components/darkmode/base/BaseSocialLogin/twitter.svg\");\n      height: 16px; }\n  .dm-base-social-login--mini {\n    padding: 10px 10px; }\n  .dm-base-social-login--small {\n    padding: 10px 30px; }\n  .dm-base-social-login--large {\n    padding: 10px 50px; }\n  .dm-base-social-login--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=BaseSocialLogin.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$7 = undefined;
    /* module identifier */
    var __vue_module_identifier__$7 = undefined;
    /* functional template */
    var __vue_is_functional_template__$7 = false;
    /* component normalizer */
    function __vue_normalize__$7(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSocialLogin.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$7() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var BaseSocialLogin = __vue_normalize__$7(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      __vue_create_injector__$7,
      undefined
    );

  //

  var script$8 = {
    components: {
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      checked: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        uuid: ""
      };
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> EVENT LISTENERS <--

      onFieldChange: function onFieldChange(event) {
        this.$emit("change", this.name, event.target.checked);
      }
    }
  };

  /* script */
              var __vue_script__$8 = script$8;
              
  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-checkbox",
          "dm-field-checkbox--" + _vm.size,
          "dm-field-checkbox--" + _vm.status,
          {
            "dm-field-checkbox--disabled": _vm.disabled,
            "dm-field-checkbox--full-width": _vm.fullWidth
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "dm-field-checkbox__container" },
          [
            _c("input", {
              staticClass: "dm-field-checkbox__field",
              attrs: {
                disabled: _vm.disabled,
                id: _vm.uuid,
                name: _vm.name,
                required: _vm.required,
                type: "checkbox"
              },
              domProps: { checked: _vm.checked },
              on: { change: _vm.onFieldChange }
            }),
            _vm.label
              ? _c(
                  "field-label",
                  {
                    staticClass: "dm-field-checkbox__label",
                    attrs: {
                      forField: _vm.uuid,
                      size: _vm.size,
                      uppercase: false
                    }
                  },
                  [_vm._v(_vm._s(_vm.label))]
                )
              : _vm._e()
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    var __vue_inject_styles__$8 = function (inject) {
      if (!inject) { return }
      inject("data-v-0d954f95_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-checkbox {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-checkbox .dm-field-checkbox__container {\n    display: flex;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before, .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.2s;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a8c6df;\n        border-radius: 3px;\n        background-color: #ffffff;\n        content: \"\";\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        border: 2px solid #ffffff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: \"\";\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:hover:after {\n        border-color: #313d4f;\n        border-right-width: 2px;\n        border-bottom-width: 2px;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:checked:after {\n        border-color: #ffffff;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 12px;\n    height: 12px;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 1px;\n      left: 4px;\n      width: 4px;\n      height: 8px;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 12px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 14px;\n    height: 14px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 5px;\n      width: 4px;\n      height: 8px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 14px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 16px;\n    height: 16px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 6px;\n      width: 5px;\n      height: 10px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 16px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 18px;\n    height: 18px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 7px;\n      width: 5px;\n      height: 10px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 18px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 20px;\n    height: 20px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 8px;\n      width: 6px;\n      height: 12px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 20px;\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #e0102b;\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #e0102b;\n    background: #e0102b;\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #0093ee;\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #0093ee;\n    background: #0093ee;\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #1bb934;\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934;\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #faca00;\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #faca00;\n    background: #faca00;\n}\n.dm-field-checkbox--disabled {\n    opacity: 0.7;\n}\n.dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__field,\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__label {\n      cursor: not-allowed;\n}\n.dm-field-checkbox--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldCheckbox.vue.map */", map: {"version":3,"sources":["FieldCheckbox.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldCheckbox.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CAuJA;AA3JA;IAOA,cAAA;CA2DA;AAlEA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,cAAA;MACA,aAAA;MACA,yBAAA;MACA,gBAAA;CA0CA;AA1DA;QAoBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,iCAAA;CACA;AAxBA;QA2BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,mBAAA;QACA,0BAAA;QACA,YAAA;CACA;AAnCA;QAsCA,0BAAA;QACA,cAAA;QACA,eAAA;QACA,yBAAA;QACA,YAAA;CACA;AA3CA;QA+CA,sBAAA;QACA,wBAAA;QACA,yBAAA;CACA;AAlDA;QAuDA,sBAAA;CACA;AAxDA;MA6DA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAQA,SAAA;MACA,UAAA;MACA,WAAA;MACA,YAAA;CAsBA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAaA,SAAA;MACA,UAAA;MACA,WAAA;MACA,YAAA;CAiBA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAkBA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAYA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAuBA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAOA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MA4BA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAEA;AAjCA;IAqCA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AASA;IACA,aAAA;CAQA;AATA;;MAMA,oBAAA;CACA;AAIA;IACA,YAAA;CACA;;AD1KA,6CAA6C","file":"FieldCheckbox.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-checkbox {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-checkbox .dm-field-checkbox__container {\n    display: flex; }\n    .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before, .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.2s; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a8c6df;\n        border-radius: 3px;\n        background-color: #ffffff;\n        content: \"\"; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        border: 2px solid #ffffff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: \"\"; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:hover:after {\n        border-color: #313d4f;\n        border-right-width: 2px;\n        border-bottom-width: 2px; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:checked:after {\n        border-color: #ffffff; }\n    .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 12px;\n    height: 12px; }\n    .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 1px;\n      left: 4px;\n      width: 4px;\n      height: 8px; }\n  .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 12px; }\n  .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 14px;\n    height: 14px; }\n    .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 5px;\n      width: 4px;\n      height: 8px; }\n  .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 14px; }\n  .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 16px;\n    height: 16px; }\n    .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 6px;\n      width: 5px;\n      height: 10px; }\n  .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 16px; }\n  .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 18px;\n    height: 18px; }\n    .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 7px;\n      width: 5px;\n      height: 10px; }\n  .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 18px; }\n  .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 20px;\n    height: 20px; }\n    .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 8px;\n      width: 6px;\n      height: 12px; }\n  .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 20px; }\n  .dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #e0102b; }\n  .dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #e0102b;\n    background: #e0102b; }\n  .dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #0093ee; }\n  .dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #0093ee;\n    background: #0093ee; }\n  .dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #1bb934; }\n  .dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934; }\n  .dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #faca00; }\n  .dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #faca00;\n    background: #faca00; }\n  .dm-field-checkbox--disabled {\n    opacity: 0.7; }\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__field,\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__label {\n      cursor: not-allowed; }\n  .dm-field-checkbox--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldCheckbox.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$8 = undefined;
    /* module identifier */
    var __vue_module_identifier__$8 = undefined;
    /* functional template */
    var __vue_is_functional_template__$8 = false;
    /* component normalizer */
    function __vue_normalize__$8(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldCheckbox.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$8() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldCheckbox = __vue_normalize__$8(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      __vue_create_injector__$8,
      undefined
    );

  //

  var script$9 = {
    components: {
      BaseIcon: BaseIcon,
      FieldLabel: FieldLabel
    },

    props: {
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      multiple: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        uuid: ""
      };
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> EVENT LISTENERS <--

      onFieldChange: function onFieldChange() {
        this.$emit("change", this.name);
      }
    }
  };

  /* script */
              var __vue_script__$9 = script$9;
              
  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-file",
          "dm-field-file--" + _vm.size,
          "dm-field-file--" + _vm.status,
          {
            "dm-field-file--disabled": _vm.disabled,
            "dm-field-file--full-width": _vm.fullWidth
          }
        ]
      },
      [
        _c("div", { staticClass: "dm-field-file__container" }, [
          _vm.label
            ? _c(
                "div",
                { staticClass: "dm-field-file__information" },
                [
                  _c(
                    "field-label",
                    {
                      staticClass: "dm-field-file__label",
                      attrs: { size: _vm.size }
                    },
                    [_vm._v(_vm._s(_vm.label))]
                  ),
                  _vm.description
                    ? _c("span", { staticClass: "dm-field-file__description" }, [
                        _vm._v(_vm._s(_vm.description))
                      ])
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _c(
            "label",
            { staticClass: "dm-field-file__upload", attrs: { for: _vm.uuid } },
            [
              _c("base-icon", {
                staticClass: "dm-field-file__icon",
                attrs: { name: "cloud_upload" }
              })
            ],
            1
          ),
          _c("input", {
            staticClass: "dm-field-file__field",
            attrs: {
              disabled: _vm.disabled,
              id: _vm.uuid,
              multiple: _vm.multiple,
              name: _vm.name,
              type: "file"
            },
            on: { change: _vm.onFieldChange }
          })
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    var __vue_inject_styles__$9 = function (inject) {
      if (!inject) { return }
      inject("data-v-b8537aa4_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-file {\n  display: inline-block;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-file .dm-field-file__container {\n    display: flex;\n    align-items: center;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information {\n      display: flex;\n      flex-direction: column;\n      margin-right: 20px;\n      text-align: left;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__label {\n        margin-bottom: 6px;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__description {\n        color: #8dabc4;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload {\n      position: relative;\n      box-sizing: border-box;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 100%;\n      background-color: rgba(34, 44, 60, 0.9);\n      box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n      transition: all ease-in-out 0.2s;\n      cursor: pointer;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload .dm-field-file__icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -1px;\n        transform: translate(-50%, -50%);\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #0093ee;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__field {\n      display: none;\n      width: 100%;\n      height: 100%;\n}\n.dm-field-file--mini .dm-field-file__information .dm-field-file__description {\n    font-size: 10px;\n}\n.dm-field-file--mini .dm-field-file__upload {\n    width: 40px;\n    height: 40px;\n}\n.dm-field-file--mini .dm-field-file__upload .dm-field-file__icon {\n      font-size: 18px !important;\n}\n.dm-field-file--small .dm-field-file__information .dm-field-file__description {\n    font-size: 11px;\n}\n.dm-field-file--small .dm-field-file__upload {\n    width: 45px;\n    height: 45px;\n}\n.dm-field-file--small .dm-field-file__upload .dm-field-file__icon {\n      font-size: 20px !important;\n}\n.dm-field-file--default .dm-field-file__information .dm-field-file__description {\n    font-size: 12px;\n}\n.dm-field-file--default .dm-field-file__upload {\n    width: 50px;\n    height: 50px;\n}\n.dm-field-file--default .dm-field-file__upload .dm-field-file__icon {\n      font-size: 22px !important;\n}\n.dm-field-file--medium .dm-field-file__information .dm-field-file__description {\n    font-size: 13px;\n}\n.dm-field-file--medium .dm-field-file__upload {\n    width: 55px;\n    height: 55px;\n}\n.dm-field-file--medium .dm-field-file__upload .dm-field-file__icon {\n      font-size: 24px !important;\n}\n.dm-field-file--large .dm-field-file__information .dm-field-file__description {\n    font-size: 14px;\n}\n.dm-field-file--large .dm-field-file__upload {\n    width: 60px;\n    height: 60px;\n}\n.dm-field-file--large .dm-field-file__upload .dm-field-file__icon {\n      font-size: 26px !important;\n}\n.dm-field-file--error .dm-field-file__upload {\n    border-color: #e0102b;\n}\n.dm-field-file--normal .dm-field-file__upload {\n    border-color: #ffffff;\n}\n.dm-field-file--success .dm-field-file__upload {\n    border-color: #1bb934;\n}\n.dm-field-file--warning .dm-field-file__upload {\n    border-color: #faca00;\n}\n.dm-field-file--disabled {\n    opacity: 0.7;\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload {\n      cursor: not-allowed;\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #e0102b;\n}\n.dm-field-file--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldFile.vue.map */", map: {"version":3,"sources":["FieldFile.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldFile.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4IhF;EACA,sBAAA;EACA,sFACA;CA6GA;AAhHA;IAMA,cAAA;IACA,oBAAA;CA8CA;AArDA;MAUA,cAAA;MACA,uBAAA;MACA,mBAAA;MACA,iBAAA;CASA;AAtBA;QAgBA,mBAAA;CACA;AAjBA;QAoBA,eAAA;CACA;AArBA;MAyBA,mBAAA;MACA,uBAAA;MACA,kBAAA;MACA,oBAAA;MACA,oBAAA;MACA,wCAAA;MACA,8CAAA;MACA,iCAAA;MACA,gBAAA;CAaA;AA9CA;QAoCA,mBAAA;QACA,SAAA;QACA,UAAA;QACA,iBAAA;QACA,iCAAA;CACA;AAzCA;QA4CA,sBAAA;CACA;AA7CA;MAiDA,cAAA;MACA,YAAA;MACA,aAAA;CACA;AAQA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAQA;IAGA,sBAAA;CAIA;AAPA;IAKA,sBAAA;CAEA;AAPA;IAGA,sBAAA;CAIA;AAPA;IAGA,sBAAA;CAIA;AAMA;IACA,aAAA;CAWA;AAZA;MAKA,oBAAA;CAKA;AAVA;QAQA,sBAAA;CACA;AAKA;IACA,YAAA;CACA;;ADjKA,yCAAyC","file":"FieldFile.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-file {\n  display: inline-block;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-file .dm-field-file__container {\n    display: flex;\n    align-items: center; }\n    .dm-field-file .dm-field-file__container .dm-field-file__information {\n      display: flex;\n      flex-direction: column;\n      margin-right: 20px;\n      text-align: left; }\n      .dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__label {\n        margin-bottom: 6px; }\n      .dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__description {\n        color: #8dabc4; }\n    .dm-field-file .dm-field-file__container .dm-field-file__upload {\n      position: relative;\n      box-sizing: border-box;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 100%;\n      background-color: rgba(34, 44, 60, 0.9);\n      box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n      transition: all ease-in-out 0.2s;\n      cursor: pointer; }\n      .dm-field-file .dm-field-file__container .dm-field-file__upload .dm-field-file__icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -1px;\n        transform: translate(-50%, -50%); }\n      .dm-field-file .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #0093ee; }\n    .dm-field-file .dm-field-file__container .dm-field-file__field {\n      display: none;\n      width: 100%;\n      height: 100%; }\n  .dm-field-file--mini .dm-field-file__information .dm-field-file__description {\n    font-size: 10px; }\n  .dm-field-file--mini .dm-field-file__upload {\n    width: 40px;\n    height: 40px; }\n    .dm-field-file--mini .dm-field-file__upload .dm-field-file__icon {\n      font-size: 18px !important; }\n  .dm-field-file--small .dm-field-file__information .dm-field-file__description {\n    font-size: 11px; }\n  .dm-field-file--small .dm-field-file__upload {\n    width: 45px;\n    height: 45px; }\n    .dm-field-file--small .dm-field-file__upload .dm-field-file__icon {\n      font-size: 20px !important; }\n  .dm-field-file--default .dm-field-file__information .dm-field-file__description {\n    font-size: 12px; }\n  .dm-field-file--default .dm-field-file__upload {\n    width: 50px;\n    height: 50px; }\n    .dm-field-file--default .dm-field-file__upload .dm-field-file__icon {\n      font-size: 22px !important; }\n  .dm-field-file--medium .dm-field-file__information .dm-field-file__description {\n    font-size: 13px; }\n  .dm-field-file--medium .dm-field-file__upload {\n    width: 55px;\n    height: 55px; }\n    .dm-field-file--medium .dm-field-file__upload .dm-field-file__icon {\n      font-size: 24px !important; }\n  .dm-field-file--large .dm-field-file__information .dm-field-file__description {\n    font-size: 14px; }\n  .dm-field-file--large .dm-field-file__upload {\n    width: 60px;\n    height: 60px; }\n    .dm-field-file--large .dm-field-file__upload .dm-field-file__icon {\n      font-size: 26px !important; }\n  .dm-field-file--error .dm-field-file__upload {\n    border-color: #e0102b; }\n  .dm-field-file--normal .dm-field-file__upload {\n    border-color: #ffffff; }\n  .dm-field-file--success .dm-field-file__upload {\n    border-color: #1bb934; }\n  .dm-field-file--warning .dm-field-file__upload {\n    border-color: #faca00; }\n  .dm-field-file--disabled {\n    opacity: 0.7; }\n    .dm-field-file--disabled .dm-field-file__container .dm-field-file__upload {\n      cursor: not-allowed; }\n      .dm-field-file--disabled .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #e0102b; }\n  .dm-field-file--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldFile.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$9 = undefined;
    /* module identifier */
    var __vue_module_identifier__$9 = undefined;
    /* functional template */
    var __vue_is_functional_template__$9 = false;
    /* component normalizer */
    function __vue_normalize__$9(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldFile.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$9() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldFile = __vue_normalize__$9(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      __vue_create_injector__$9,
      undefined
    );

  //

  var script$a = {
    components: {
      BaseIcon: BaseIcon,
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      autocomplete: {
        type: String,
        default: "off",
        validator: function validator(x) {
          return ["off", "on"].indexOf(x) !== -1;
        }
      },
      borders: {
        type: Boolean,
        default: true
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      leftIcon: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: null
      },
      rightIcon: {
        type: String,
        default: null
      },
      rounded: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      },
      type: {
        type: String,
        default: "text",
        validator: function validator(x) {
          return ["number", "text"].indexOf(x) !== -1;
        }
      },
      value: {
        type: [String, Number],
        default: null
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        currentValue:
          this.value === undefined || this.value === null ? "" : this.value,
        focused: false,
        uuid: ""
      };
    },

    computed: {
      computedRightIcon: function computedRightIcon() {
        // Return the status when defined as prop
        if (this.status === "error") {
          return "close";
        } else if (this.status === "success") {
          return "check";
        } else if (this.status === "warning") {
          return "warning";
        }

        return this.rightIcon;
      }
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> HELPERS <--

      getInputValue: function getInputValue() {
        var value = this.$el.querySelector("input").value || "";

        if (value && this.type === "number") {
          value = parseInt(value);
        }

        return value;
      },

      // --> EVENT LISTENERS <--

      onContainerClick: function onContainerClick() {
        this.$el.querySelector("input").focus();

        this.$emit("click", this.name, this.getInputValue());
      },

      onFieldBlur: function onFieldBlur() {
        this.focused = false;

        this.$emit("blur", this.name, this.getInputValue());
      },

      onFieldChange: function onFieldChange() {
        this.$emit("change", this.getInputValue());
      },

      onFieldFocus: function onFieldFocus() {
        this.focused = true;

        this.$emit("focus", this.name, this.getInputValue());
      },

      onFieldInput: function onFieldInput() {
        var value = this.getInputValue();

        this.currentValue = value;
        this.$emit("input", value);
      }
    }
  };

  /* script */
              var __vue_script__$a = script$a;
              
  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-input",
          "dm-field-input--" + _vm.size,
          "dm-field-input--" + _vm.status,
          {
            "dm-field-input--borders": _vm.borders,
            "dm-field-input--disabled": _vm.disabled,
            "dm-field-input--focused": _vm.focused,
            "dm-field-input--full-width": _vm.fullWidth,
            "dm-field-input--rounded": _vm.rounded,
            "dm-field-input--with-icon": _vm.leftIcon || _vm.rightIcon
          }
        ]
      },
      [
        _vm.label
          ? _c(
              "field-label",
              {
                staticClass: "dm-field-input__label",
                attrs: { forField: _vm.uuid, size: _vm.size }
              },
              [_vm._v(_vm._s(_vm.label))]
            )
          : _vm._e(),
        _c(
          "div",
          {
            staticClass: "dm-field-input__container",
            on: { click: _vm.onContainerClick }
          },
          [
            _vm.leftIcon
              ? _c("base-icon", {
                  staticClass: "dm-field-input__icon dm-field-input__icon--left",
                  attrs: { name: _vm.leftIcon }
                })
              : _vm._e(),
            _c("input", {
              staticClass: "dm-field-input__field",
              attrs: {
                autocomplete: _vm.autocomplete,
                disabled: _vm.disabled,
                id: _vm.uuid,
                name: _vm.name,
                placeholder: _vm.placeholder,
                type: _vm.type
              },
              domProps: { value: _vm.currentValue },
              on: {
                blur: _vm.onFieldBlur,
                change: _vm.onFieldChange,
                focus: _vm.onFieldFocus,
                input: _vm.onFieldInput
              }
            }),
            _vm.computedRightIcon
              ? _c("base-icon", {
                  staticClass: "dm-field-input__icon dm-field-input__icon--right",
                  attrs: { name: _vm.computedRightIcon }
                })
              : _vm._e()
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    var __vue_inject_styles__$a = function (inject) {
      if (!inject) { return }
      inject("data-v-353e0078_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-input {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-input .dm-field-input__container {\n    display: flex;\n    align-items: center;\n    transition: all ease-in-out 0.2s;\n}\n.dm-field-input .dm-field-input__container:hover {\n      cursor: text;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon {\n      flex: 0 0 auto;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--left {\n        margin-right: 5px;\n        margin-left: 9px;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--right {\n        margin-right: 9px;\n        margin-left: 5px;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field {\n      flex: 1;\n      padding: 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field::placeholder {\n        color: #8dabc4;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field:focus {\n        outline: none;\n}\n.dm-field-input--mini .dm-field-input__container {\n    height: 34px;\n    border-radius: 4px;\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__icon {\n      font-size: 16px !important;\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__field {\n      font-size: 12px;\n}\n.dm-field-input--small .dm-field-input__container {\n    height: 38px;\n    border-radius: 5px;\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__icon {\n      font-size: 17px !important;\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__field {\n      font-size: 13px;\n}\n.dm-field-input--default .dm-field-input__container {\n    height: 42px;\n    border-radius: 6px;\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__icon {\n      font-size: 18px !important;\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__field {\n      font-size: 14px;\n}\n.dm-field-input--medium .dm-field-input__container {\n    height: 46px;\n    border-radius: 7px;\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__icon {\n      font-size: 19px !important;\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__field {\n      font-size: 15px;\n}\n.dm-field-input--large .dm-field-input__container {\n    height: 50px;\n    border-radius: 8px;\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__icon {\n      font-size: 20px !important;\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__field {\n      font-size: 16px;\n}\n.dm-field-input--error .dm-field-input__container {\n    border-color: #e0102b;\n    color: #e0102b;\n}\n.dm-field-input--normal .dm-field-input__container {\n    border-color: #313d4f;\n    color: #ffffff;\n}\n.dm-field-input--success .dm-field-input__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-input--warning .dm-field-input__container {\n    border-color: #faca00;\n    color: #faca00;\n}\n.dm-field-input--borders .dm-field-input__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142;\n}\n.dm-field-input--disabled {\n    opacity: 0.7;\n}\n.dm-field-input--disabled .dm-field-input__label,\n    .dm-field-input--disabled .dm-field-input__container {\n      cursor: not-allowed;\n}\n.dm-field-input--focused .dm-field-input__container {\n    border-color: #0093ee;\n    color: #0093ee;\n}\n.dm-field-input--full-width {\n    width: 100%;\n}\n.dm-field-input--rounded .dm-field-input__container {\n    border-radius: 40px;\n}\n.dm-field-input--with-icon .dm-field-input__container .dm-field-input__field {\n    padding: 0;\n}\n\n/*# sourceMappingURL=FieldInput.vue.map */", map: {"version":3,"sources":["FieldInput.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldInput.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACmPhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CAkIA;AAvIA;IAQA,cAAA;IACA,oBAAA;IACA,iCAAA;CAwCA;AAlDA;MAaA,aAAA;CACA;AAdA;MAiBA,eAAA;CAWA;AA5BA;QAoBA,kBAAA;QACA,iBAAA;CACA;AAtBA;QAyBA,kBAAA;QACA,iBAAA;CACA;AA3BA;MA+BA,QAAA;MACA,gBAAA;MACA,aAAA;MACA,aAAA;MACA,8BAAA;MACA,eAAA;CAaA;AAjDA;QAuCA,eAAA;CACA;AAxCA;QA2CA,oBAAA;CACA;AA5CA;QA+CA,cAAA;CACA;AASA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAQA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IAEA,oBAAA;CACA;AAGA;IAGA,WAAA;CACA;;ADlRA,0CAA0C","file":"FieldInput.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-input {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-input .dm-field-input__container {\n    display: flex;\n    align-items: center;\n    transition: all ease-in-out 0.2s; }\n    .dm-field-input .dm-field-input__container:hover {\n      cursor: text; }\n    .dm-field-input .dm-field-input__container .dm-field-input__icon {\n      flex: 0 0 auto; }\n      .dm-field-input .dm-field-input__container .dm-field-input__icon--left {\n        margin-right: 5px;\n        margin-left: 9px; }\n      .dm-field-input .dm-field-input__container .dm-field-input__icon--right {\n        margin-right: 9px;\n        margin-left: 5px; }\n    .dm-field-input .dm-field-input__container .dm-field-input__field {\n      flex: 1;\n      padding: 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff; }\n      .dm-field-input .dm-field-input__container .dm-field-input__field::placeholder {\n        color: #8dabc4; }\n      .dm-field-input .dm-field-input__container .dm-field-input__field:disabled {\n        cursor: not-allowed; }\n      .dm-field-input .dm-field-input__container .dm-field-input__field:focus {\n        outline: none; }\n  .dm-field-input--mini .dm-field-input__container {\n    height: 34px;\n    border-radius: 4px; }\n    .dm-field-input--mini .dm-field-input__container .dm-field-input__icon {\n      font-size: 16px !important; }\n    .dm-field-input--mini .dm-field-input__container .dm-field-input__field {\n      font-size: 12px; }\n  .dm-field-input--small .dm-field-input__container {\n    height: 38px;\n    border-radius: 5px; }\n    .dm-field-input--small .dm-field-input__container .dm-field-input__icon {\n      font-size: 17px !important; }\n    .dm-field-input--small .dm-field-input__container .dm-field-input__field {\n      font-size: 13px; }\n  .dm-field-input--default .dm-field-input__container {\n    height: 42px;\n    border-radius: 6px; }\n    .dm-field-input--default .dm-field-input__container .dm-field-input__icon {\n      font-size: 18px !important; }\n    .dm-field-input--default .dm-field-input__container .dm-field-input__field {\n      font-size: 14px; }\n  .dm-field-input--medium .dm-field-input__container {\n    height: 46px;\n    border-radius: 7px; }\n    .dm-field-input--medium .dm-field-input__container .dm-field-input__icon {\n      font-size: 19px !important; }\n    .dm-field-input--medium .dm-field-input__container .dm-field-input__field {\n      font-size: 15px; }\n  .dm-field-input--large .dm-field-input__container {\n    height: 50px;\n    border-radius: 8px; }\n    .dm-field-input--large .dm-field-input__container .dm-field-input__icon {\n      font-size: 20px !important; }\n    .dm-field-input--large .dm-field-input__container .dm-field-input__field {\n      font-size: 16px; }\n  .dm-field-input--error .dm-field-input__container {\n    border-color: #e0102b;\n    color: #e0102b; }\n  .dm-field-input--normal .dm-field-input__container {\n    border-color: #313d4f;\n    color: #ffffff; }\n  .dm-field-input--success .dm-field-input__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-input--warning .dm-field-input__container {\n    border-color: #faca00;\n    color: #faca00; }\n  .dm-field-input--borders .dm-field-input__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142; }\n  .dm-field-input--disabled {\n    opacity: 0.7; }\n    .dm-field-input--disabled .dm-field-input__label,\n    .dm-field-input--disabled .dm-field-input__container {\n      cursor: not-allowed; }\n  .dm-field-input--focused .dm-field-input__container {\n    border-color: #0093ee;\n    color: #0093ee; }\n  .dm-field-input--full-width {\n    width: 100%; }\n  .dm-field-input--rounded .dm-field-input__container {\n    border-radius: 40px; }\n  .dm-field-input--with-icon .dm-field-input__container .dm-field-input__field {\n    padding: 0; }\n\n/*# sourceMappingURL=FieldInput.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$a = undefined;
    /* module identifier */
    var __vue_module_identifier__$a = undefined;
    /* functional template */
    var __vue_is_functional_template__$a = false;
    /* component normalizer */
    function __vue_normalize__$a(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldInput.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$a() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$a.styles || (__vue_create_injector__$a.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldInput = __vue_normalize__$a(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      __vue_create_injector__$a,
      undefined
    );

  //

  var script$b = {
    components: {
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      checked: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        uuid: ""
      };
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> EVENT LISTENERS <--

      onFieldChange: function onFieldChange(event) {
        this.$emit("change", this.name, event.target.checked);
      }
    }
  };

  /* script */
              var __vue_script__$b = script$b;
              
  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-radio",
          "dm-field-radio--" + _vm.size,
          "dm-field-radio--" + _vm.status,
          {
            "dm-field-radio--disabled": _vm.disabled,
            "dm-field-radio--full-width": _vm.fullWidth
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "dm-field-radio__container" },
          [
            _c("input", {
              staticClass: "dm-field-radio__field",
              attrs: {
                disabled: _vm.disabled,
                id: _vm.uuid,
                name: _vm.name,
                required: _vm.required,
                type: "radio"
              },
              domProps: { checked: _vm.checked },
              on: { change: _vm.onFieldChange }
            }),
            _vm.label
              ? _c(
                  "field-label",
                  {
                    staticClass: "dm-field-radio__label",
                    attrs: {
                      forField: _vm.uuid,
                      size: _vm.size,
                      uppercase: false
                    }
                  },
                  [_vm._v(_vm._s(_vm.label))]
                )
              : _vm._e()
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    var __vue_inject_styles__$b = function (inject) {
      if (!inject) { return }
      inject("data-v-09402ad8_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-radio {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-radio .dm-field-radio__container {\n    display: flex;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before, .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.2s;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a8c6df;\n        border-radius: 100%;\n        background-color: #ffffff;\n        content: \"\";\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        background-color: #ffffff;\n        transform: translate(-50%, -50%);\n        content: \"\";\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:hover:after {\n        background-color: #313d4f;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:checked:after {\n        background-color: #ffffff;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__field {\n    width: 12px;\n    height: 12px;\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__label {\n    line-height: 12px;\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__field {\n    width: 14px;\n    height: 14px;\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__label {\n    line-height: 14px;\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__field {\n    width: 16px;\n    height: 16px;\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__label {\n    line-height: 16px;\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__field {\n    width: 18px;\n    height: 18px;\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__label {\n    line-height: 18px;\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__field {\n    width: 20px;\n    height: 20px;\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__label {\n    line-height: 20px;\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #e0102b;\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #e0102b;\n    background: #e0102b;\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #0093ee;\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #0093ee;\n    background: #0093ee;\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #1bb934;\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934;\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #faca00;\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #faca00;\n    background: #faca00;\n}\n.dm-field-radio--disabled {\n    opacity: 0.7;\n}\n.dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__field,\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__label {\n      cursor: not-allowed;\n}\n.dm-field-radio--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldRadio.vue.map */", map: {"version":3,"sources":["FieldRadio.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldRadio.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CA2HA;AA/HA;IAOA,cAAA;CA4DA;AAnEA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,cAAA;MACA,aAAA;MACA,yBAAA;MACA,gBAAA;CA2CA;AA3DA;QAoBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,iCAAA;CACA;AAxBA;QA2BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,oBAAA;QACA,0BAAA;QACA,YAAA;CACA;AAnCA;QAsCA,SAAA;QACA,UAAA;QACA,WAAA;QACA,YAAA;QACA,oBAAA;QACA,0BAAA;QACA,iCAAA;QACA,YAAA;CACA;AA9CA;QAkDA,0BAAA;CACA;AAnDA;QAwDA,0BAAA;CACA;AAzDA;MA8DA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AASA;IACA,aAAA;CAQA;AATA;;MAMA,oBAAA;CACA;AAIA;IACA,YAAA;CACA;;ADtKA,0CAA0C","file":"FieldRadio.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-radio {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-radio .dm-field-radio__container {\n    display: flex; }\n    .dm-field-radio .dm-field-radio__container .dm-field-radio__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:before, .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.2s; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a8c6df;\n        border-radius: 100%;\n        background-color: #ffffff;\n        content: \"\"; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        background-color: #ffffff;\n        transform: translate(-50%, -50%);\n        content: \"\"; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:hover:after {\n        background-color: #313d4f; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:checked:after {\n        background-color: #ffffff; }\n    .dm-field-radio .dm-field-radio__container .dm-field-radio__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-radio--mini .dm-field-radio__container .dm-field-radio__field {\n    width: 12px;\n    height: 12px; }\n  .dm-field-radio--mini .dm-field-radio__container .dm-field-radio__label {\n    line-height: 12px; }\n  .dm-field-radio--small .dm-field-radio__container .dm-field-radio__field {\n    width: 14px;\n    height: 14px; }\n  .dm-field-radio--small .dm-field-radio__container .dm-field-radio__label {\n    line-height: 14px; }\n  .dm-field-radio--default .dm-field-radio__container .dm-field-radio__field {\n    width: 16px;\n    height: 16px; }\n  .dm-field-radio--default .dm-field-radio__container .dm-field-radio__label {\n    line-height: 16px; }\n  .dm-field-radio--medium .dm-field-radio__container .dm-field-radio__field {\n    width: 18px;\n    height: 18px; }\n  .dm-field-radio--medium .dm-field-radio__container .dm-field-radio__label {\n    line-height: 18px; }\n  .dm-field-radio--large .dm-field-radio__container .dm-field-radio__field {\n    width: 20px;\n    height: 20px; }\n  .dm-field-radio--large .dm-field-radio__container .dm-field-radio__label {\n    line-height: 20px; }\n  .dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #e0102b; }\n  .dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #e0102b;\n    background: #e0102b; }\n  .dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #0093ee; }\n  .dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #0093ee;\n    background: #0093ee; }\n  .dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #1bb934; }\n  .dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934; }\n  .dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #faca00; }\n  .dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #faca00;\n    background: #faca00; }\n  .dm-field-radio--disabled {\n    opacity: 0.7; }\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__field,\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__label {\n      cursor: not-allowed; }\n  .dm-field-radio--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldRadio.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$b = undefined;
    /* module identifier */
    var __vue_module_identifier__$b = undefined;
    /* functional template */
    var __vue_is_functional_template__$b = false;
    /* component normalizer */
    function __vue_normalize__$b(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldRadio.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$b() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$b.styles || (__vue_create_injector__$b.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldRadio = __vue_normalize__$b(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      __vue_create_injector__$b,
      undefined
    );

  //

  var script$c = {
    components: {
      BaseIcon: BaseIcon,
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      borders: {
        type: Boolean,
        default: true
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      leftIcon: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        focused: false,
        rightIcon: "arrow_drop_down",
        uuid: ""
      };
    },

    computed: {
      computedLeftIcon: function computedLeftIcon() {
        // Return the left icon when defined as prop
        if (this.status === "error") {
          return "close";
        } else if (this.status === "success") {
          return "check";
        } else if (this.status === "warning") {
          return "warning";
        }

        return this.leftIcon;
      }
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> HELPERS <--

      getSelectedValue: function getSelectedValue() {
        return this.$el.querySelector("select").value || "";
      },

      // --> EVENT LISTENERS <--

      onFieldBlur: function onFieldBlur() {
        this.focused = false;
        this.rightIcon = "arrow_drop_down";

        this.$emit("blur", this.name, this.getSelectedValue());
      },

      onFieldChange: function onFieldChange() {
        this.rightIcon = "arrow_drop_down";

        this.$emit("change", this.name, this.getSelectedValue());
      },

      onFieldClick: function onFieldClick() {
        this.rightIcon = "arrow_drop_up";

        this.$emit("click", this.name, this.getSelectedValue());
      },

      onFieldFocus: function onFieldFocus() {
        this.focused = true;
        this.rightIcon = "arrow_drop_up";

        this.$emit("focus", this.name, this.getSelectedValue());
      }
    }
  };

  /* script */
              var __vue_script__$c = script$c;
              
  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-select",
          "dm-field-select--" + _vm.size,
          "dm-field-select--" + _vm.status,
          {
            "dm-field-select--borders": _vm.borders,
            "dm-field-select--disabled": _vm.disabled,
            "dm-field-select--focused": _vm.focused,
            "dm-field-select--full-width": _vm.fullWidth,
            "dm-field-select--with-left-icon": _vm.computedLeftIcon
          }
        ]
      },
      [
        _vm.label
          ? _c(
              "field-label",
              {
                staticClass: "dm-field-select__label",
                attrs: { forField: _vm.uuid, size: _vm.size }
              },
              [_vm._v(_vm._s(_vm.label))]
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "dm-field-select__container" },
          [
            _vm.computedLeftIcon
              ? _c("base-icon", {
                  staticClass:
                    "dm-field-select__icon dm-field-select__icon--left",
                  attrs: { name: _vm.computedLeftIcon }
                })
              : _vm._e(),
            _c(
              "select",
              {
                staticClass: "dm-field-select__field",
                attrs: { disabled: _vm.disabled, id: _vm.uuid, name: _vm.name },
                on: {
                  blur: _vm.onFieldBlur,
                  change: _vm.onFieldChange,
                  click: _vm.onFieldClick,
                  focus: _vm.onFieldFocus
                }
              },
              _vm._l(_vm.options, function(option) {
                return _c("option", { domProps: { value: option.value } }, [
                  _vm._v(_vm._s(option.label))
                ])
              })
            ),
            _c("base-icon", {
              staticClass: "dm-field-select__icon dm-field-select__icon--right",
              attrs: { name: _vm.rightIcon }
            })
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    var __vue_inject_styles__$c = function (inject) {
      if (!inject) { return }
      inject("data-v-9c9137ec_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-select {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-select .dm-field-select__container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    transition: all ease-in-out 0.2s;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon {\n      position: absolute;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--left {\n        left: 9px;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--right {\n        right: 9px;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field {\n      flex: 1;\n      padding: 0 35px 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      background-image: none;\n      box-shadow: none;\n      color: #ffffff;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field:focus {\n        outline: none;\n}\n.dm-field-select--mini .dm-field-select__container {\n    height: 34px;\n    border-radius: 4px;\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__icon {\n      font-size: 16px !important;\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__field {\n      font-size: 12px;\n}\n.dm-field-select--small .dm-field-select__container {\n    height: 38px;\n    border-radius: 5px;\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__icon {\n      font-size: 17px !important;\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__field {\n      font-size: 13px;\n}\n.dm-field-select--default .dm-field-select__container {\n    height: 42px;\n    border-radius: 6px;\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__icon {\n      font-size: 18px !important;\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__field {\n      font-size: 14px;\n}\n.dm-field-select--medium .dm-field-select__container {\n    height: 46px;\n    border-radius: 7px;\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__icon {\n      font-size: 19px !important;\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__field {\n      font-size: 15px;\n}\n.dm-field-select--large .dm-field-select__container {\n    height: 50px;\n    border-radius: 8px;\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__icon {\n      font-size: 20px !important;\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__field {\n      font-size: 16px;\n}\n.dm-field-select--error .dm-field-select__container {\n    border-color: #e0102b;\n    color: #e0102b;\n}\n.dm-field-select--normal .dm-field-select__container {\n    border-color: #313d4f;\n    color: #ffffff;\n}\n.dm-field-select--success .dm-field-select__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-select--warning .dm-field-select__container {\n    border-color: #faca00;\n    color: #faca00;\n}\n.dm-field-select--borders .dm-field-select__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142;\n}\n.dm-field-select--disabled {\n    opacity: 0.7;\n}\n.dm-field-select--disabled .dm-field-select__label,\n    .dm-field-select--disabled .dm-field-select__container {\n      cursor: not-allowed;\n}\n.dm-field-select--focused .dm-field-select__container {\n    border-color: #0093ee;\n    color: #0093ee;\n}\n.dm-field-select--full-width {\n    width: 100%;\n}\n.dm-field-select--with-left-icon .dm-field-select__container .dm-field-select__field {\n    padding-left: 35px;\n}\n\n/*# sourceMappingURL=FieldSelect.vue.map */", map: {"version":3,"sources":["FieldSelect.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldSelect.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC2MhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CAwHA;AA7HA;IAQA,mBAAA;IACA,cAAA;IACA,iBAAA;IACA,oBAAA;IACA,iCAAA;CAkCA;AA9CA;MAeA,mBAAA;CASA;AAxBA;QAkBA,UAAA;CACA;AAnBA;QAsBA,WAAA;CACA;AAvBA;MA2BA,QAAA;MACA,uBAAA;MACA,aAAA;MACA,aAAA;MACA,8BAAA;MACA,uBAAA;MACA,iBAAA;MACA,eAAA;MACA,yBAAA;MACA,gBAAA;CASA;AA7CA;QAuCA,oBAAA;CACA;AAxCA;QA2CA,cAAA;CACA;AASA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAQA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IAGA,mBAAA;CACA;;ADlOA,2CAA2C","file":"FieldSelect.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-select {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-select .dm-field-select__container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    transition: all ease-in-out 0.2s; }\n    .dm-field-select .dm-field-select__container .dm-field-select__icon {\n      position: absolute; }\n      .dm-field-select .dm-field-select__container .dm-field-select__icon--left {\n        left: 9px; }\n      .dm-field-select .dm-field-select__container .dm-field-select__icon--right {\n        right: 9px; }\n    .dm-field-select .dm-field-select__container .dm-field-select__field {\n      flex: 1;\n      padding: 0 35px 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      background-image: none;\n      box-shadow: none;\n      color: #ffffff;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-select .dm-field-select__container .dm-field-select__field:disabled {\n        cursor: not-allowed; }\n      .dm-field-select .dm-field-select__container .dm-field-select__field:focus {\n        outline: none; }\n  .dm-field-select--mini .dm-field-select__container {\n    height: 34px;\n    border-radius: 4px; }\n    .dm-field-select--mini .dm-field-select__container .dm-field-select__icon {\n      font-size: 16px !important; }\n    .dm-field-select--mini .dm-field-select__container .dm-field-select__field {\n      font-size: 12px; }\n  .dm-field-select--small .dm-field-select__container {\n    height: 38px;\n    border-radius: 5px; }\n    .dm-field-select--small .dm-field-select__container .dm-field-select__icon {\n      font-size: 17px !important; }\n    .dm-field-select--small .dm-field-select__container .dm-field-select__field {\n      font-size: 13px; }\n  .dm-field-select--default .dm-field-select__container {\n    height: 42px;\n    border-radius: 6px; }\n    .dm-field-select--default .dm-field-select__container .dm-field-select__icon {\n      font-size: 18px !important; }\n    .dm-field-select--default .dm-field-select__container .dm-field-select__field {\n      font-size: 14px; }\n  .dm-field-select--medium .dm-field-select__container {\n    height: 46px;\n    border-radius: 7px; }\n    .dm-field-select--medium .dm-field-select__container .dm-field-select__icon {\n      font-size: 19px !important; }\n    .dm-field-select--medium .dm-field-select__container .dm-field-select__field {\n      font-size: 15px; }\n  .dm-field-select--large .dm-field-select__container {\n    height: 50px;\n    border-radius: 8px; }\n    .dm-field-select--large .dm-field-select__container .dm-field-select__icon {\n      font-size: 20px !important; }\n    .dm-field-select--large .dm-field-select__container .dm-field-select__field {\n      font-size: 16px; }\n  .dm-field-select--error .dm-field-select__container {\n    border-color: #e0102b;\n    color: #e0102b; }\n  .dm-field-select--normal .dm-field-select__container {\n    border-color: #313d4f;\n    color: #ffffff; }\n  .dm-field-select--success .dm-field-select__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-select--warning .dm-field-select__container {\n    border-color: #faca00;\n    color: #faca00; }\n  .dm-field-select--borders .dm-field-select__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142; }\n  .dm-field-select--disabled {\n    opacity: 0.7; }\n    .dm-field-select--disabled .dm-field-select__label,\n    .dm-field-select--disabled .dm-field-select__container {\n      cursor: not-allowed; }\n  .dm-field-select--focused .dm-field-select__container {\n    border-color: #0093ee;\n    color: #0093ee; }\n  .dm-field-select--full-width {\n    width: 100%; }\n  .dm-field-select--with-left-icon .dm-field-select__container .dm-field-select__field {\n    padding-left: 35px; }\n\n/*# sourceMappingURL=FieldSelect.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$c = undefined;
    /* module identifier */
    var __vue_module_identifier__$c = undefined;
    /* functional template */
    var __vue_is_functional_template__$c = false;
    /* component normalizer */
    function __vue_normalize__$c(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldSelect.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$c() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$c.styles || (__vue_create_injector__$c.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldSelect = __vue_normalize__$c(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      __vue_create_injector__$c,
      undefined
    );

  //

  var script$d = {
    components: {
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: null
      },
      multiple: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      },
      tabs: {
        type: Array,
        required: true
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        activeTabs: []
      };
    },

    created: function created() {
      var this$1 = this;

      // Set initial active tabs
      this.tabs.map(function (tab) {
        if (tab.active) {
          this$1.activeTabs.push(tab.id);
        }
      });
    },

    methods: {
      // --> HELPERS <--

      checkActiveBrother: function checkActiveBrother(order, index) {
        if (this.multiple && this.tabs[index]) {
          return this.activeTabs.includes(this.tabs[index].id);
        }
      },

      // --> EVENT LISTENERS <--

      onTabClick: function onTabClick(tabId) {
        // When multiple values are not allowed and tab is not already active
        if (!this.multiple && !this.activeTabs.includes(tabId)) {
          this.activeTabs = [tabId];
          this.$emit("change", tabId, "added");
        }

        // When multiple values are allowed
        if (this.multiple) {
          // Remove the tab when already active
          if (this.activeTabs.includes(tabId)) {
            this.activeTabs.splice(this.activeTabs.indexOf(tabId), 1);
            this.$emit("change", tabId, "removed", this.activeTabs);
          } else {
            // Push the tab when not already active
            this.activeTabs.push(tabId);
            this.$emit("change", tabId, "added", this.activeTabs);
          }
        }

        this.$emit("click", tabId);
      }
    }
  };

  /* script */
              var __vue_script__$d = script$d;
              
  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-tabs",
          "dm-field-tabs--" + _vm.size,
          "dm-field-tabs--" + _vm.status,
          {
            "dm-field-tabs--disabled": _vm.disabled,
            "dm-field-tabs--multiple": _vm.multiple
          }
        ]
      },
      [
        _vm.label
          ? _c(
              "field-label",
              { staticClass: "dm-field-tabs__label", attrs: { size: _vm.size } },
              [_vm._v(_vm._s(_vm.label))]
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "dm-field-tabs__container" },
          _vm._l(_vm.tabs, function(tab, i) {
            return _c(
              "span",
              {
                class: [
                  "dm-field-tabs__tab",
                  {
                    "dm-field-tabs__tab--active": _vm.activeTabs.includes(tab.id),
                    "dm-field-tabs__tab--active-previous": _vm.checkActiveBrother(
                      "desc",
                      i - 1
                    ),
                    "dm-field-tabs__tab--active-next": _vm.checkActiveBrother(
                      "asc",
                      i + 1
                    )
                  }
                ],
                on: {
                  click: function($event) {
                    _vm.onTabClick(tab.id);
                  }
                }
              },
              [_vm._v(_vm._s(tab.name))]
            )
          })
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    var __vue_inject_styles__$d = function (inject) {
      if (!inject) { return }
      inject("data-v-be777b28_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-tabs .dm-field-tabs__container {\n  display: inline-block;\n  box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  cursor: pointer;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab {\n    display: inline-block;\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #313d4f;\n    border-bottom-color: #313d4f;\n    background: #222c3c;\n    color: #8dabc4;\n    transition: all ease-in-out 0.25s;\n    user-select: none;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:first-of-type {\n      border-left-color: #313d4f;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:last-of-type {\n      border-right-color: #313d4f;\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:hover {\n      color: #ffffff;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab--active {\n      color: #ffffff;\n}\n.dm-field-tabs--mini .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.dm-field-tabs--small .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 7px 14px;\n  font-size: 13px;\n}\n.dm-field-tabs--default .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.dm-field-tabs--medium .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 9px 18px;\n  font-size: 15px;\n}\n.dm-field-tabs--large .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 10px 20px;\n  font-size: 16px;\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #e0102b !important;\n  background-color: rgba(224, 16, 43, 0.4);\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(224, 16, 43, 0.25) !important;\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(224, 16, 43, 0.25) !important;\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #0093ee !important;\n  background-color: rgba(0, 147, 238, 0.4);\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(0, 147, 238, 0.25) !important;\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(0, 147, 238, 0.25) !important;\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #1bb934 !important;\n  background-color: rgba(27, 185, 52, 0.4);\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(27, 185, 52, 0.25) !important;\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(27, 185, 52, 0.25) !important;\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #faca00 !important;\n  background-color: rgba(250, 202, 0, 0.4);\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(250, 202, 0, 0.25) !important;\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(250, 202, 0, 0.25) !important;\n}\n.dm-field-tabs--disabled {\n  opacity: 0.7;\n}\n.dm-field-tabs--disabled .dm-field-tabs__label,\n  .dm-field-tabs--disabled .dm-field-tabs__container {\n    cursor: not-allowed;\n}\n.dm-field-tabs--disabled .dm-field-tabs__label .dm-field-tabs__tab,\n    .dm-field-tabs--disabled .dm-field-tabs__container .dm-field-tabs__tab {\n      pointer-events: none;\n}\n\n/*# sourceMappingURL=FieldTabs.vue.map */", map: {"version":3,"sources":["FieldTabs.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTabs.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC+JhF;EAEA,sBAAA;EACA,8CAAA;EACA,sFACA;EACA,gBAAA;CAkCA;AAxCA;IASA,sBAAA;IACA,kBAAA;IACA,oBAAA;IACA,0BAAA;IACA,0BAAA;IACA,6BAAA;IACA,oBAAA;IACA,eAAA;IACA,kCAAA;IACA,kBAAA;CAqBA;AAvCA;MAqBA,2BAAA;MACA,4BAAA;MACA,+BAAA;CACA;AAxBA;MA2BA,4BAAA;MACA,6BAAA;MACA,gCAAA;CACA;AA9BA;MAiCA,eAAA;CACA;AAlCA;MAqCA,eAAA;CACA;AASA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,mBAAA;EACA,gBAAA;CACA;AAQA;EAKA,iCAAA;EACA,yCAAA;CACA;AAPA;EAWA,sDAGA;CACA;AAfA;EAmBA,uDAGA;CACA;AAvBA;EAKA,iCAAA;EACA,yCAAA;CACA;AAPA;EAWA,sDAGA;CACA;AAfA;EAmBA,uDAGA;CACA;AAvBA;EAKA,iCAAA;EACA,yCAAA;CACA;AAPA;EAWA,sDAGA;CACA;AAfA;EAmBA,uDAGA;CACA;AAvBA;EAKA,iCAAA;EACA,yCAAA;CACA;AAPA;EAWA,sDAGA;CACA;AAfA;EAmBA,uDAGA;CACA;AAQA;EACA,aAAA;CAUA;AAXA;;IAKA,oBAAA;CAKA;AAVA;;MAQA,qBAAA;CACA;;ADhKA,yCAAyC","file":"FieldTabs.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-tabs .dm-field-tabs__container {\n  display: inline-block;\n  box-shadow: 0 1px 5px 0 rgba(23, 24, 25, 0.6);\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  cursor: pointer; }\n  .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab {\n    display: inline-block;\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #313d4f;\n    border-bottom-color: #313d4f;\n    background: #222c3c;\n    color: #8dabc4;\n    transition: all ease-in-out 0.25s;\n    user-select: none; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:first-of-type {\n      border-left-color: #313d4f;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:last-of-type {\n      border-right-color: #313d4f;\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:hover {\n      color: #ffffff; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab--active {\n      color: #ffffff; }\n\n.dm-field-tabs--mini .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 6px 12px;\n  font-size: 12px; }\n\n.dm-field-tabs--small .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 7px 14px;\n  font-size: 13px; }\n\n.dm-field-tabs--default .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 8px 16px;\n  font-size: 14px; }\n\n.dm-field-tabs--medium .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 9px 18px;\n  font-size: 15px; }\n\n.dm-field-tabs--large .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 10px 20px;\n  font-size: 16px; }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #e0102b !important;\n  background-color: rgba(224, 16, 43, 0.4); }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(224, 16, 43, 0.25) !important; }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(224, 16, 43, 0.25) !important; }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #0093ee !important;\n  background-color: rgba(0, 147, 238, 0.4); }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(0, 147, 238, 0.25) !important; }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(0, 147, 238, 0.25) !important; }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #1bb934 !important;\n  background-color: rgba(27, 185, 52, 0.4); }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(27, 185, 52, 0.25) !important; }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(27, 185, 52, 0.25) !important; }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #faca00 !important;\n  background-color: rgba(250, 202, 0, 0.4); }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(250, 202, 0, 0.25) !important; }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(250, 202, 0, 0.25) !important; }\n\n.dm-field-tabs--disabled {\n  opacity: 0.7; }\n  .dm-field-tabs--disabled .dm-field-tabs__label,\n  .dm-field-tabs--disabled .dm-field-tabs__container {\n    cursor: not-allowed; }\n    .dm-field-tabs--disabled .dm-field-tabs__label .dm-field-tabs__tab,\n    .dm-field-tabs--disabled .dm-field-tabs__container .dm-field-tabs__tab {\n      pointer-events: none; }\n\n/*# sourceMappingURL=FieldTabs.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$d = undefined;
    /* module identifier */
    var __vue_module_identifier__$d = undefined;
    /* functional template */
    var __vue_is_functional_template__$d = false;
    /* component normalizer */
    function __vue_normalize__$d(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTabs.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$d() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$d.styles || (__vue_create_injector__$d.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldTabs = __vue_normalize__$d(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      __vue_create_injector__$d,
      undefined
    );

  //

  var script$e = {
    components: {
      BaseIcon: BaseIcon,
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      borders: {
        type: Boolean,
        default: true
      },
      cols: {
        type: Number,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      rows: {
        type: Number,
        default: null
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      },
      value: {
        type: String,
        default: null
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        focused: false,
        uuid: ""
      };
    },

    computed: {
      statusIcon: function statusIcon() {
        // Return the left icon when defined as prop
        if (this.status === "error") {
          return "close";
        } else if (this.status === "success") {
          return "check";
        } else if (this.status === "warning") {
          return "warning";
        }
      }
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> HELPERS <--

      getTextareaValue: function getTextareaValue() {
        return this.$el.querySelector("textarea").value || "";
      },

      // --> EVENT LISTENERS <--

      onContainerClick: function onContainerClick() {
        this.$el.querySelector("textarea").focus();

        this.$emit("click", this.name, this.getTextareaValue());
      },

      onFieldBlur: function onFieldBlur() {
        this.focused = false;

        this.$emit("blur", this.name, this.getTextareaValue());
      },

      onFieldFocus: function onFieldFocus() {
        this.focused = true;

        this.$emit("focus", this.name, this.getTextareaValue());
      },

      onFieldKeyUp: function onFieldKeyUp() {
        this.$emit("keyup", this.name, this.getTextareaValue());
      }
    }
  };

  /* script */
              var __vue_script__$e = script$e;
              
  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-textarea",
          "dm-field-textarea--" + _vm.size,
          "dm-field-textarea--" + _vm.status,
          {
            "dm-field-textarea--borders": _vm.borders,
            "dm-field-textarea--disabled": _vm.disabled,
            "dm-field-textarea--focused": _vm.focused,
            "dm-field-textarea--full-width": _vm.fullWidth
          }
        ]
      },
      [
        _vm.label
          ? _c(
              "field-label",
              {
                staticClass: "dm-field-textarea__label",
                attrs: { forField: _vm.uuid, size: _vm.size }
              },
              [_vm._v(_vm._s(_vm.label))]
            )
          : _vm._e(),
        _c(
          "div",
          {
            staticClass: "dm-field-textarea__container",
            on: { click: _vm.onContainerClick }
          },
          [
            _c(
              "textarea",
              {
                staticClass: "dm-field-textarea__field",
                attrs: {
                  cols: _vm.cols,
                  disabled: _vm.disabled,
                  id: _vm.uuid,
                  name: _vm.name,
                  placeholder: _vm.placeholder,
                  rows: _vm.rows
                },
                on: {
                  blur: _vm.onFieldBlur,
                  focus: _vm.onFieldFocus,
                  keyup: _vm.onFieldKeyUp
                }
              },
              [_vm._v(_vm._s(_vm.value))]
            ),
            _vm.statusIcon
              ? _c("base-icon", {
                  staticClass: "dm-field-textarea__icon",
                  attrs: { name: _vm.statusIcon }
                })
              : _vm._e()
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    var __vue_inject_styles__$e = function (inject) {
      if (!inject) { return }
      inject("data-v-0105a2ac_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-textarea {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-textarea .dm-field-textarea__container {\n    position: relative;\n    display: flex;\n    transition: all ease-in-out 0.2s;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__icon {\n      position: absolute;\n      right: 7px;\n      bottom: 7px;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field {\n      padding: 10px 15px;\n      width: 100%;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      resize: none;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field::placeholder {\n        color: #8dabc4;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:focus {\n        outline: none;\n}\n.dm-field-textarea--mini .dm-field-textarea__field {\n    min-height: 60px;\n    border-radius: 4px;\n    font-size: 12px;\n}\n.dm-field-textarea--small .dm-field-textarea__field {\n    min-height: 80px;\n    border-radius: 5px;\n    font-size: 13px;\n}\n.dm-field-textarea--default .dm-field-textarea__field {\n    min-height: 100px;\n    border-radius: 6px;\n    font-size: 14px;\n}\n.dm-field-textarea--medium .dm-field-textarea__field {\n    min-height: 120px;\n    border-radius: 7px;\n    font-size: 15px;\n}\n.dm-field-textarea--large .dm-field-textarea__field {\n    min-height: 140px;\n    border-radius: 8px;\n    font-size: 16px;\n}\n.dm-field-textarea--error .dm-field-textarea__container {\n    border-color: #e0102b;\n    color: #e0102b;\n}\n.dm-field-textarea--normal .dm-field-textarea__container {\n    border-color: #313d4f;\n    color: #ffffff;\n}\n.dm-field-textarea--success .dm-field-textarea__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-textarea--warning .dm-field-textarea__container {\n    border-color: #faca00;\n    color: #faca00;\n}\n.dm-field-textarea--disabled {\n    opacity: 0.7;\n}\n.dm-field-textarea--disabled .dm-field-textarea__label,\n    .dm-field-textarea--disabled .dm-field-textarea__container {\n      cursor: not-allowed;\n}\n.dm-field-textarea--borders .dm-field-textarea__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142;\n}\n.dm-field-textarea--focused .dm-field-textarea__container {\n    border-color: #0093ee;\n    color: #0093ee;\n}\n.dm-field-textarea--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldTextarea.vue.map */", map: {"version":3,"sources":["FieldTextarea.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTextarea.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACwMhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CAiGA;AAtGA;IAQA,mBAAA;IACA,cAAA;IACA,iCAAA;CA6BA;AAvCA;MAaA,mBAAA;MACA,WAAA;MACA,YAAA;CACA;AAhBA;MAmBA,mBAAA;MACA,YAAA;MACA,aAAA;MACA,aAAA;MACA,8BAAA;MACA,eAAA;MACA,aAAA;CAaA;AAtCA;QA4BA,eAAA;CACA;AA7BA;QAgCA,oBAAA;CACA;AAjCA;QAoCA,cAAA;CACA;AASA;IAEA,iBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,iBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AAOA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;;ADhOA,6CAA6C","file":"FieldTextarea.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-textarea {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-textarea .dm-field-textarea__container {\n    position: relative;\n    display: flex;\n    transition: all ease-in-out 0.2s; }\n    .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__icon {\n      position: absolute;\n      right: 7px;\n      bottom: 7px; }\n    .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field {\n      padding: 10px 15px;\n      width: 100%;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      resize: none; }\n      .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field::placeholder {\n        color: #8dabc4; }\n      .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:disabled {\n        cursor: not-allowed; }\n      .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:focus {\n        outline: none; }\n  .dm-field-textarea--mini .dm-field-textarea__field {\n    min-height: 60px;\n    border-radius: 4px;\n    font-size: 12px; }\n  .dm-field-textarea--small .dm-field-textarea__field {\n    min-height: 80px;\n    border-radius: 5px;\n    font-size: 13px; }\n  .dm-field-textarea--default .dm-field-textarea__field {\n    min-height: 100px;\n    border-radius: 6px;\n    font-size: 14px; }\n  .dm-field-textarea--medium .dm-field-textarea__field {\n    min-height: 120px;\n    border-radius: 7px;\n    font-size: 15px; }\n  .dm-field-textarea--large .dm-field-textarea__field {\n    min-height: 140px;\n    border-radius: 8px;\n    font-size: 16px; }\n  .dm-field-textarea--error .dm-field-textarea__container {\n    border-color: #e0102b;\n    color: #e0102b; }\n  .dm-field-textarea--normal .dm-field-textarea__container {\n    border-color: #313d4f;\n    color: #ffffff; }\n  .dm-field-textarea--success .dm-field-textarea__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-textarea--warning .dm-field-textarea__container {\n    border-color: #faca00;\n    color: #faca00; }\n  .dm-field-textarea--disabled {\n    opacity: 0.7; }\n    .dm-field-textarea--disabled .dm-field-textarea__label,\n    .dm-field-textarea--disabled .dm-field-textarea__container {\n      cursor: not-allowed; }\n  .dm-field-textarea--borders .dm-field-textarea__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #273142; }\n  .dm-field-textarea--focused .dm-field-textarea__container {\n    border-color: #0093ee;\n    color: #0093ee; }\n  .dm-field-textarea--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldTextarea.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$e = undefined;
    /* module identifier */
    var __vue_module_identifier__$e = undefined;
    /* functional template */
    var __vue_is_functional_template__$e = false;
    /* component normalizer */
    function __vue_normalize__$e(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTextarea.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$e() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$e.styles || (__vue_create_injector__$e.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldTextarea = __vue_normalize__$e(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      __vue_create_injector__$e,
      undefined
    );

  //

  var script$f = {
    components: {
      FieldDescription: FieldDescription,
      FieldLabel: FieldLabel
    },

    props: {
      checked: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "default",
        validator: function validator(x) {
          return (
            ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
          );
        }
      },
      status: {
        type: String,
        default: "normal",
        validator: function validator(x) {
          return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
        }
      }
    },

    data: function data() {
      return {
        // --> STATE <--

        uuid: ""
      };
    },

    mounted: function mounted() {
      this.uuid = helpers.generateUUID();
    },

    methods: {
      // --> EVENT LISTENERS <--

      onFieldChange: function onFieldChange(event) {
        this.$emit("change", this.name, event.target.checked);
      }
    }
  };

  /* script */
              var __vue_script__$f = script$f;
              
  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: [
          "dm-field-toggle",
          "dm-field-toggle--" + _vm.size,
          "dm-field-toggle--" + _vm.status,
          {
            "dm-field-toggle--disabled": _vm.disabled,
            "dm-field-toggle--full-width": _vm.fullWidth
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "dm-field-toggle__container" },
          [
            _c("input", {
              staticClass: "dm-field-toggle__field",
              attrs: {
                disabled: _vm.disabled,
                id: _vm.uuid,
                name: _vm.name,
                required: _vm.required,
                type: "checkbox"
              },
              domProps: { checked: _vm.checked },
              on: { change: _vm.onFieldChange }
            }),
            _vm.label
              ? _c(
                  "field-label",
                  {
                    staticClass: "dm-field-toggle__label",
                    attrs: {
                      forField: _vm.uuid,
                      size: _vm.size,
                      uppercase: false
                    }
                  },
                  [_vm._v(_vm._s(_vm.label))]
                )
              : _vm._e()
          ],
          1
        ),
        _vm.description
          ? _c("field-description", {
              attrs: { description: _vm.description, size: _vm.size }
            })
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    var __vue_inject_styles__$f = function (inject) {
      if (!inject) { return }
      inject("data-v-606f6816_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-toggle {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-toggle .dm-field-toggle__container {\n    display: flex;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before, .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.3s;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #313d4f;\n        border-radius: 20px;\n        background-color: rgba(39, 49, 66, 0.4);\n        content: \"\";\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        top: 4px;\n        right: initial;\n        border-radius: 100%;\n        background: #ffffff;\n        transform: translateX(4px);\n        content: \"\";\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n        border-color: #45556e;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field {\n    width: 36px;\n    height: 18px;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 10px;\n      height: 10px;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(22px);\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 18px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field {\n    width: 40px;\n    height: 20px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 12px;\n      height: 12px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(24px);\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 20px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field {\n    width: 44px;\n    height: 22px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 14px;\n      height: 14px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(26px);\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 22px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field {\n    width: 48px;\n    height: 24px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 16px;\n      height: 16px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(28px);\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 24px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field {\n    width: 52px;\n    height: 26px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 18px;\n      height: 18px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(30px);\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 26px;\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #e0102b;\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #e0102b;\n    background-color: rgba(224, 16, 43, 0.4);\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #f0334b;\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #0093ee;\n    background-color: rgba(0, 147, 238, 0.4);\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #22abff;\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #1bb934;\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #1bb934;\n    background-color: rgba(27, 185, 52, 0.4);\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #27e045;\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #faca00;\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #faca00;\n    background-color: rgba(250, 202, 0, 0.4);\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #ffd72e;\n}\n.dm-field-toggle--disabled {\n    opacity: 0.7;\n}\n.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field,\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__label {\n      cursor: not-allowed;\n}\n.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n      border-color: #f0334b;\n}\n.dm-field-toggle--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldToggle.vue.map */", map: {"version":3,"sources":["FieldToggle.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldToggle.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CA8IA;AAlJA;IAOA,cAAA;CAoDA;AA3DA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,cAAA;MACA,aAAA;MACA,yBAAA;MACA,gBAAA;CAmCA;AAnDA;QAoBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,iCAAA;CACA;AAxBA;QA2BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,oBAAA;QACA,wCAAA;QACA,YAAA;CACA;AAnCA;QAsCA,SAAA;QACA,eAAA;QACA,oBAAA;QACA,oBAAA;QACA,2BAAA;QACA,YAAA;CACA;AA5CA;QAgDA,sBAAA;CACA;AAjDA;MAsDA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AASA;IACA,aAAA;CAgBA;AAjBA;;MAMA,oBAAA;CACA;AAPA;MAYA,sBAAA;CACA;AAMA;IACA,YAAA;CACA;;AD5JA,2CAA2C","file":"FieldToggle.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-toggle {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-toggle .dm-field-toggle__container {\n    display: flex; }\n    .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: none;\n      border: none;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before, .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 0.3s; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #313d4f;\n        border-radius: 20px;\n        background-color: rgba(39, 49, 66, 0.4);\n        content: \"\"; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        top: 4px;\n        right: initial;\n        border-radius: 100%;\n        background: #ffffff;\n        transform: translateX(4px);\n        content: \"\"; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n        border-color: #45556e; }\n    .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field {\n    width: 36px;\n    height: 18px; }\n    .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 10px;\n      height: 10px; }\n    .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(22px); }\n  .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 18px; }\n  .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field {\n    width: 40px;\n    height: 20px; }\n    .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 12px;\n      height: 12px; }\n    .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(24px); }\n  .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 20px; }\n  .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field {\n    width: 44px;\n    height: 22px; }\n    .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 14px;\n      height: 14px; }\n    .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(26px); }\n  .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 22px; }\n  .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field {\n    width: 48px;\n    height: 24px; }\n    .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 16px;\n      height: 16px; }\n    .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(28px); }\n  .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 24px; }\n  .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field {\n    width: 52px;\n    height: 26px; }\n    .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 18px;\n      height: 18px; }\n    .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(30px); }\n  .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 26px; }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #e0102b; }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #e0102b;\n    background-color: rgba(224, 16, 43, 0.4); }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #f0334b; }\n  .dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #0093ee;\n    background-color: rgba(0, 147, 238, 0.4); }\n  .dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #22abff; }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #1bb934; }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #1bb934;\n    background-color: rgba(27, 185, 52, 0.4); }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #27e045; }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #faca00; }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #faca00;\n    background-color: rgba(250, 202, 0, 0.4); }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #ffd72e; }\n  .dm-field-toggle--disabled {\n    opacity: 0.7; }\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field,\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__label {\n      cursor: not-allowed; }\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n      border-color: #f0334b; }\n  .dm-field-toggle--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldToggle.vue.map */",null]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$f = undefined;
    /* module identifier */
    var __vue_module_identifier__$f = undefined;
    /* functional template */
    var __vue_is_functional_template__$f = false;
    /* component normalizer */
    function __vue_normalize__$f(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldToggle.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$f() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$f.styles || (__vue_create_injector__$f.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var FieldToggle = __vue_normalize__$f(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      __vue_create_injector__$f,
      undefined
    );

  /**************************************************************************
   * IMPORTS
   ***************************************************************************/

  /**************************************************************************
   * ENVIRONMENT CONFIGURATIONS
   ***************************************************************************/

  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;

    Vue.component("dm-avatar", BaseAvatar$1);
    Vue.component("dm-badge", BaseBadge);
    Vue.component("dm-button", BaseButton);
    Vue.component("dm-divider", BaseDivider);
    Vue.component("dm-heading", BaseHeading);
    Vue.component("dm-icon", BaseIcon$1);
    Vue.component("dm-loader", BaseLoader);
    Vue.component("dm-social-login", BaseSocialLogin);
    Vue.component("dm-checkbox", FieldCheckbox);
    Vue.component("dm-file", FieldFile);
    Vue.component("dm-input", FieldInput);
    Vue.component("dm-radio", FieldRadio);
    Vue.component("dm-select", FieldSelect);
    Vue.component("dm-tabs", FieldTabs);
    Vue.component("dm-textarea", FieldTextarea);
    Vue.component("dm-toggle", FieldToggle);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install
  };

  // To auto-install when vue is found
  /* global window global */
  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.default = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
