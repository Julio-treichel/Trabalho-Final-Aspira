jQuery.fn.extend({ maskWeight: function (t) { window._maskData = { selector: $(this), arr: [], insertCount: 0, numberPressed: !1, options: {}, defOptions: { integerDigits: 3, decimalDigits: 3, decimalMark: ".", initVal: "", roundingZeros: !0, digitsCount: 6, callBack: null, doFocus: !0 }, initializeOptions: function (t) { if (this.options = $.extend(!0, this.defOptions), this.arr = [], this.insertCount = 0, this.numberPressed = !1, t) for (var i in t) void 0 !== t[i] && null !== t[i] && (this.options[i] = t[i]); 0 == this.options.decimalDigits && (this.options.decimalMark = ""); var s = !1; if ("" == this.options.initVal) { if (this.options.roundingZeros) this.options.initVal += "0"; else for (var n = 0; n < this.options.integerDigits; n++)this.options.initVal += "0"; this.options.initVal += this.options.decimalMark; for (var n = 0; n < this.options.decimalDigits; n++)this.options.initVal += "0" } else s = !0; this.options.digitsCount = this.options.integerDigits + this.options.decimalDigits, this.arr = []; for (var n = 0; n < this.options.digitsCount; n++)this.arr.push("0"); s && parseInt(this.options.initVal) > 0 && this.createInitialValueArr() }, createInitialValueArr: function () { this.options.initVal = 0 == this.options.decimalDigits ? parseInt(this.options.initVal) : parseFloat(this.options.initVal.toString().replace(",", ".")).toFixed(this.options.decimalDigits).replace(".", this.options.decimalMark); for (var t = this.options.initVal.toString().replace(".", "").replace(",", "").split(""), i = 0; i < t.length; i++)this.insert(t[i]) }, insert: function (t) { var i = this.mask(t); this.selector.val(i), this.setCartetOnEnd() }, mask: function (t) { "backspace" == t ? this.insertCount > 0 && (this.arr.pop(), this.arr.unshift("0"), this.insertCount--) : this.insertCount < this.options.digitsCount && (this.arr.shift(), this.arr.push(t.toString()), this.insertCount++); for (var i = "", s = 0; s < this.arr.length; s++)i += this.arr[s]; return i = this.reduce(i) }, reduce: function (t) { return 0 == this.options.decimalDigits ? this.options.roundingZeros ? parseInt(t) : t : this.options.roundingZeros ? parseInt(t.substring(0, this.options.integerDigits)) + this.options.decimalMark + t.substring(this.options.integerDigits, this.options.digitsCount) : t.substring(0, this.options.integerDigits) + this.options.decimalMark + t.substring(this.options.integerDigits, this.options.digitsCount) }, getNumber: function (t) { return String.fromCharCode(t.keyCode || t.which) }, setCartetOnEnd: function () { var t = this; setTimeout(function () { var i = t.selector.val().length; t.options.doFocus && t.selector[0].focus(), t.selector[0].setSelectionRange(i, i) }, 1) }, isNumberOrBackspace: function (t) { return "backspace" == t ? !0 : parseInt(t) || 0 == parseInt(t) ? !0 : !1 }, init: function () { var t = this; this.selector.val(this.options.initVal), this.selector.on("click", function (i) { t.setCartetOnEnd() }); var i = navigator.userAgent.toLowerCase(), s = i.indexOf("android") > -1; s ? (window._maskDataLastVal = this.selector.val(), this.selector[0].removeEventListener("input", window._maskDataAndroidMaskHandler, !0), setTimeout(function () { window._maskDataAndroidMaskHandler = function (i) { if (i.preventDefault(), i.stopPropagation(), t.selector.val().length < window._maskDataLastVal.length) t.insert("backspace"); else { var s = t.selector.val().charAt(t.selector.val().length - 1); 0 == parseFloat(t.selector.val().replace(",", ".")) && 0 == parseInt(s) ? t.insert("backspace") : t.insert(s) } return window._maskDataLastVal = t.selector.val(), t.options.callBack && t.options.callBack(), !1 }, t.selector[0].addEventListener("input", window._maskDataAndroidMaskHandler, !0) }, 0)) : (this.selector.on("keydown", function (i) { var s = i.keyCode || i.which; (8 == s || 46 == s) && (i.preventDefault(), i.stopPropagation(), t.insert("backspace")), t.options.callBack && t.options.callBack() }), this.selector.on("keypress", function (i) { i.keyCode || i.which; i.preventDefault(), i.stopPropagation(); var s = t.getNumber(i); t.isNumberOrBackspace(s) && (0 == parseFloat(t.selector.val().replace(",", ".")) && 0 == parseInt(s) ? t.insert("backspace") : t.insert(s)), t.options.callBack && t.options.callBack() })) } }, window._maskData.initializeOptions(t), window._maskData.init() }, removeMask: function () { window._maskData && ($(this).unbind(), window._maskData = null) } });

$("#peso_input2").click(function () {
    $('#peso_input2').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    });
});

$("#altura_input1").click(function () {
    $('#altura_input1').maskWeight({
        integerDigits: 1,
        decimalDigits: 2,
        decimalMark: '.'
    });
});

$("#peso_input2").focus(function () {
    $('#peso_input2').maskWeight({
        integerDigits: 3,
        decimalDigits: 2,
        decimalMark: '.'
    });
});

$("#altura_input1").focus(function () {
    $('#altura_input1').maskWeight({
        integerDigits: 1,
        decimalDigits: 2,
        decimalMark: '.'
    });
});

// Mascara do cadastro.html
jQuery("#telefone_input3")
   .mask("(99) 99999-9999")
   .focusout(function (event) {
      
      var target, phone, element;  
      target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
      phone = target.value.replace(/\D/g, '');
      element = $(target);  
      element.unmask();
      if(phone.length > 10) {  
         element.mask("(99) 99999-9999");  
      } else {
         element.mask("(99) 99999-9999");  
      }
   });