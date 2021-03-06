webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post/index.js":
/*!*****************************!*\
  !*** ./pages/post/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);









var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-3248366669"
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3248366669"
  }, props.show.summary.replace(/<[/]?p>/g, '')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: props.show.image.medium,
    className: "jsx-3248366669"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: "\n        This is our blog post.\n        Yes. We can have a [link](/link).\n        And we can have a title as well.\n\n        ### This is a title\n\n        And here's the content.\n      "
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3248366669"
  }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:'blue';}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kZXJsZWUvZGV2ZWxvcG1lbnQvcGVyc29uYWwvbmV4dC9oZWxsby1uZXh0L3BhZ2VzL3Bvc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ1QixBQUc2QixBQUlDLEFBTXhCLEFBR1ksU0FDQyxHQUpaLE9BSzJCLENBZDNCLHdCQWVBLE1BWGUsYUFDZiIsImZpbGUiOiIvVXNlcnMvYWxleGFuZGVybGVlL2RldmVsb3BtZW50L3BlcnNvbmFsL25leHQvaGVsbG8tbmV4dC9wYWdlcy9wb3N0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPntwcm9wcy5zaG93Lm5hbWV9PC9oMT5cbiAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cbiAgICA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+XG4gICAgICA8TWFya2Rvd24gc291cmNlPXtgXG4gICAgICAgIFRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cbiAgICAgICAgWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXG4gICAgICAgIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiAgICAgICAgIyMjIFRoaXMgaXMgYSB0aXRsZVxuXG4gICAgICAgIEFuZCBoZXJlJ3MgdGhlIGNvbnRlbnQuXG4gICAgICBgfSAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubWFya2Rvd24ge1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgIH1cblxuICAgICAgLm1hcmtkb3duIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAnYmx1ZSc7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42XG4gICAgICB9XG5cbiAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl19 */\n/*@ sourceURL=/Users/alexanderlee/development/personal/next/hello-next/pages/post/index.js */"));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/shows/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.name));
            return _context.abrupt("return", {
              show: show
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.e150d4dfbe7b0aa22dc0.hot-update.js.map