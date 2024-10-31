/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$richText = wp.richText,
    registerFormatType = _wp$richText.registerFormatType,
    applyFormat = _wp$richText.applyFormat,
    removeFormat = _wp$richText.removeFormat,
    getActiveFormat = _wp$richText.getActiveFormat;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button;
var Fragment = wp.element.Fragment;


registerFormatType("popovertool/popover", {
  title: "Mark",
  tagName: "span",
  className: "popover__content",
  attributes: {
    title: "data-tippy-content"
  },

  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes,
        activeObjectAttributes = _ref.activeObjectAttributes;

    var activeColorFormat = getActiveFormat(value, "popovertool/popover");

    var editor_value = " ";
    var button_title = "Add Popover";
    if (activeColorFormat) {
      editor_value = activeColorFormat.attributes.title;
      button_title = "Update Popover";
    }

    var onToggle = function onToggle() {
      return onChange(applyFormat(value, {
        type: "popovertool/popover",
        attributes: {
          title: document.querySelector('p.block-editor-rich-text__editable.editor-rich-text__editable.popover_insert_content[contenteditable="true"]').textContent
        }
      }));
    };

    var onToggleremove = function onToggleremove() {
      onChange(removeFormat(value, "popovertool/popover"));
    };
    var onChangePopover = function onChangePopover(newContent) {
      "";
    };
    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        { key: "Add Popover Content" },
        wp.element.createElement(
          PanelBody,
          { title: "Add Popover Content", initialOpen: "true" },
          wp.element.createElement(RichText, {
            tagName: "p",
            className: "popover_insert_content",
            value: editor_value,
            onChange: onChangePopover
          }),
          wp.element.createElement(
            Button,
            { onClick: onToggle, isDefault: true },
            button_title
          ),
          wp.element.createElement(
            Button,
            { onClick: onToggleremove, isDefault: true },
            "Remove Popover"
          )
        )
      )
    );
  }
});

/***/ })
/******/ ]);