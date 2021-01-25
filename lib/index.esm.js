import { Prop, Component, Vue } from 'vue-property-decorator';
import { VTooltip } from 'vuetify/lib';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var ExternalLink = /** @class */ (function (_super) {
    __extends(ExternalLink, _super);
    function ExternalLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop()
    ], ExternalLink.prototype, "href", void 0);
    ExternalLink = __decorate([
        Component
    ], ExternalLink);
    return ExternalLink;
}(Vue));

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = ExternalLink;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      staticClass: "bee-external-link",
      attrs: {
        href: _vm.href,
        target: "_blank",
        rel: "external nofollow noopener noreferrer"
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var Attribution = /** @class */ (function (_super) {
    __extends(Attribution, _super);
    function Attribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Attribution.prototype.licenseName = function (l) {
        return "the " + l + " License";
    };
    Attribution.prototype.getLicenseURL = function (l, second) {
        if (second === void 0) { second = false; }
        if (!second && this.licenseURL) {
            return this.licenseURL;
        }
        if (second && this.secondlicenseURL) {
            return this.secondlicenseURL;
        }
        switch (l) {
            case "AGPL 3.0": return "https://www.gnu.org/licenses/agpl-3.0.en.html";
            case "Apache 2.0": return "https://www.apache.org/licenses/LICENSE-2.0";
            case "CC-BY 4.0": return "https://creativecommons.org/licenses/by/4.0/";
            case "MIT": return "https://opensource.org/licenses/MIT";
            case "SIL Open Font": return "https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL";
            default: return l;
        }
    };
    __decorate([
        Prop()
    ], Attribution.prototype, "name", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "nameURL", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "by", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "byURL", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "license", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "licenseURL", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "secondlicense", void 0);
    __decorate([
        Prop()
    ], Attribution.prototype, "secondlicenseURL", void 0);
    Attribution = __decorate([
        Component({ components: { ExternalLink: __vue_component__ } })
    ], Attribution);
    return Attribution;
}(Vue));

/* script */
const __vue_script__$1 = Attribution;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { staticClass: "bee-attribution" },
    [
      _vm._v('\n    "'),
      _c("ExternalLink", { attrs: { href: _vm.nameURL } }, [
        _vm._v(_vm._s(_vm.name))
      ]),
      _vm._v('"\n    '),
      _vm.by
        ? _c(
            "span",
            [
              _vm._v("by "),
              _c("ExternalLink", { attrs: { href: _vm.byURL } }, [
                _vm._v(_vm._s(_vm.by))
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v("\n     is licensed under "),
      _c("ExternalLink", { attrs: { href: _vm.getLicenseURL(_vm.license) } }, [
        _vm._v(_vm._s(_vm.licenseName(_vm.license)))
      ]),
      _vm.secondlicense
        ? _c(
            "span",
            [
              _vm._v(" and "),
              _c(
                "ExternalLink",
                { attrs: { href: _vm.getLicenseURL(_vm.secondlicense, true) } },
                [_vm._v(_vm._s(_vm.licenseName(_vm.secondlicense)))]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(".\n")
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop({ default: 32 })
    ], Emoji.prototype, "size", void 0);
    __decorate([
        Prop()
    ], Emoji.prototype, "emoji", void 0);
    Emoji = __decorate([
        Component
    ], Emoji);
    return Emoji;
}(Vue));

/* script */
const __vue_script__$2 = Emoji;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    class: "bee-emoji emoji e" + _vm.emoji + " size" + _vm.size + "px"
  })
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var SpanTooltip = /** @class */ (function (_super) {
    __extends(SpanTooltip, _super);
    function SpanTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop()
    ], SpanTooltip.prototype, "tooltip", void 0);
    SpanTooltip = __decorate([
        Component({ components: { VTooltip: VTooltip } })
    ], SpanTooltip);
    return SpanTooltip;
}(Vue));

/* script */
const __vue_script__$3 = SpanTooltip;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "VTooltip",
    {
      attrs: { bottom: "" },
      scopedSlots: _vm._u(
        [
          {
            key: "activator",
            fn: function(ref) {
              var on = ref.on;
              var attrs = ref.attrs;
              return [
                _c(
                  "span",
                  _vm._g(
                    _vm._b(
                      { staticClass: "bee-span-tooltip" },
                      "span",
                      attrs,
                      false
                    ),
                    on
                  ),
                  [_vm._t("default")],
                  2
                )
              ]
            }
          }
        ],
        null,
        true
      )
    },
    [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.tooltip))])]
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

var ClassDirective = {
    inserted: function (el, binding) {
        for (var className in binding.modifiers) {
            el.classList.toggle(className, binding.value);
        }
    },
    update: function (el, binding) {
        for (var className in binding.modifiers) {
            el.classList.toggle(className, binding.value);
        }
    }
};

var LoadableButton = /** @class */ (function (_super) {
    __extends(LoadableButton, _super);
    function LoadableButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        return _this;
    }
    Object.defineProperty(LoadableButton.prototype, "me", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop()
    ], LoadableButton.prototype, "disabled", void 0);
    __decorate([
        Prop()
    ], LoadableButton.prototype, "valid", void 0);
    __decorate([
        Prop()
    ], LoadableButton.prototype, "color", void 0);
    __decorate([
        Prop({ default: "Save" })
    ], LoadableButton.prototype, "text", void 0);
    __decorate([
        Prop({ default: "Saving" })
    ], LoadableButton.prototype, "loadtext", void 0);
    LoadableButton = __decorate([
        Component
    ], LoadableButton);
    return LoadableButton;
}(Vue));

/* script */
const __vue_script__$4 = LoadableButton;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "v-btn",
    {
      staticClass: "mr-4 bee-loadable-button",
      attrs: {
        color: _vm.color,
        disabled: !_vm.valid || _vm.disabled || _vm.loading
      },
      on: {
        click: function($event) {
          return _vm.$emit("submit", _vm.me)
        }
      }
    },
    [
      _vm._v(
        "\n    " + _vm._s(_vm.loading ? _vm.loadtext : _vm.text) + "\n    "
      ),
      _vm.loading
        ? _c("v-progress-circular", {
            staticStyle: { "margin-left": "10px" },
            attrs: { size: "16", width: "2", indeterminate: "" }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop({ default: 48 })
    ], Loader.prototype, "size", void 0);
    __decorate([
        Prop({ default: "primary" })
    ], Loader.prototype, "color", void 0);
    Loader = __decorate([
        Component
    ], Loader);
    return Loader;
}(Vue));

/* script */
const __vue_script__$5 = Loader;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "bee-loader text-center" },
    [
      _c("v-progress-circular", {
        staticClass: "mt-2",
        attrs: { indeterminate: "", color: _vm.color, size: _vm.size }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

export { __vue_component__$1 as Attribution, ClassDirective, __vue_component__$2 as Emoji, __vue_component__ as ExternalLink, __vue_component__$4 as LoadableButton, __vue_component__$5 as Loader, __vue_component__$3 as SpanTooltip };
//# sourceMappingURL=index.esm.js.map
