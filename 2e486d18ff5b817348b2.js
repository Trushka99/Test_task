function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import "./scss/index.scss";
var customSelect = document.querySelector(".order__select");
var selectBtn = document.querySelector(".order__select-button");
var selectedValue = document.querySelector(".order__selected-value");
var optionsList = document.querySelectorAll(".order__select-dropdown li");
var submitButton = document.querySelector(".order__button");
var label = document.getElementById("label");
var headerButton = document.querySelector(".header__menu");
var headerList = document.querySelector(".header__list");
var inputRange = document.querySelector(".order__range-input");

// add a click event to select button
selectBtn.addEventListener("click", function () {
  // add/remove active class on the container element
  customSelect.classList.toggle("active");
  selectBtn.classList.toggle("active");
});
optionsList.forEach(function (option) {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }
  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
function updateTextInput(e) {
  label.textContent = "".concat(e.target.value, "%");
}
function pressSubmit(e) {
  e.preventDefault();
  var form = e.target.form;
  var formData = new FormData(form);
  console.log(formData.values());
  var data = {};
  var _iterator = _createForOfIteratorHelper(formData.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var keyValue = _step.value;
      data[keyValue[0]] = keyValue[1];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.log(data);
}
submitButton.addEventListener("click", pressSubmit);
function showHeaderMenu() {
  headerList.classList.toggle("active");
}
headerButton.addEventListener("click", showHeaderMenu);
inputRange.addEventListener("input", updateTextInput);