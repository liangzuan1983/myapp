exports.connectWebViewJavascriptBridge = function(callback) {
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var isAndroid = null;
  var isiOS = null;
  if (isAndroid == null) {
    isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1
  }
  if (isiOS == null) {
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
  try {
    if (isiOS && u.indexOf("POWER_BY_WEBKIT")!=-1) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    } else {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady',
          function() {
            callback(WebViewJavascriptBridge)
          }, false)
      }
    }
  } catch (e) {
    console.log(e);
  }
}

// exports.connectWebViewJavascriptBridge = function(callback) {
//   try {
//     if (window.WebViewJavascriptBridge) {
//       callback(WebViewJavascriptBridge)
//     } else {
//       document.addEventListener('WebViewJavascriptBridgeReady',
//         function() {
//           callback(WebViewJavascriptBridge)
//         }, false)
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

