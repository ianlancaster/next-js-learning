(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/extract-files/lib/ReactNativeFile.mjs":
/*!************************************************************!*\
  !*** ./node_modules/extract-files/lib/ReactNativeFile.mjs ***!
  \************************************************************/
/*! exports provided: ReactNativeFile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactNativeFile", function() { return ReactNativeFile; });
var ReactNativeFile = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type
  this.uri = uri
  this.name = name
  this.type = type
}


/***/ }),

/***/ "./node_modules/extract-files/lib/extractFiles.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/extract-files/lib/extractFiles.mjs ***!
  \*********************************************************/
/*! exports provided: extractFiles */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFiles", function() { return extractFiles; });
/* harmony import */ var _ReactNativeFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/lib/ReactNativeFile.mjs");

function extractFiles(value, path) {
  if (path === void 0) {
    path = ''
  }

  var clone
  var files = new Map()

  function addFile(paths, file) {
    var storedPaths = files.get(file)
    if (storedPaths) storedPaths.push.apply(storedPaths, paths)
    else files.set(file, paths)
  }

  if (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof _ReactNativeFile__WEBPACK_IMPORTED_MODULE_0__["ReactNativeFile"]
  ) {
    clone = null
    addFile([path], value)
  } else {
    var prefix = path ? path + '.' : ''
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function(file, i) {
        addFile(['' + prefix + i], file)
        return null
      })
    else if (Array.isArray(value))
      clone = value.map(function(child, i) {
        var result = extractFiles(child, '' + prefix + i)
        result.files.forEach(addFile)
        return result.clone
      })
    else if (value && value.constructor === Object) {
      clone = {}

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i)
        result.files.forEach(addFile)
        clone[i] = result.clone
      }
    } else clone = value
  }

  return {
    clone: clone,
    files: files
  }
}


/***/ }),

/***/ "./node_modules/extract-files/lib/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/extract-files/lib/index.mjs ***!
  \**************************************************/
/*! exports provided: extractFiles, ReactNativeFile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extractFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractFiles */ "./node_modules/extract-files/lib/extractFiles.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractFiles", function() { return _extractFiles__WEBPACK_IMPORTED_MODULE_0__["extractFiles"]; });

/* harmony import */ var _ReactNativeFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/lib/ReactNativeFile.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactNativeFile", function() { return _ReactNativeFile__WEBPACK_IMPORTED_MODULE_1__["ReactNativeFile"]; });





/***/ }),

/***/ "./node_modules/fnv1a/index.js":
/*!*************************************!*\
  !*** ./node_modules/fnv1a/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by schwarzkopfb on 15/11/17.
 */

/**
 * FNV-1a hash generation init value.
 * It's exposed, because this allows user to override it.
 *
 * @type {number}
 */
hash.BASE = 0x811c9dc5

/**
 * Generates 32 bit FNV-1a hash from the given string.
 * As explained here: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param s {string} String to generate hash from.
 * @returns {number} The result integer hash.
 */
function hash(s) {
    var h = hash.BASE

    for (var i = 0, l = s.length; i < l; i++) {
        h ^= s.charCodeAt(i)
        h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
    }

    return h >>> 0
}

module.exports = hash


/***/ }),

/***/ "./node_modules/graphql-react/universal/FirstRenderDateContext.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql-react/universal/FirstRenderDateContext.mjs ***!
  \*************************************************************************/
/*! exports provided: FirstRenderDateContext */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstRenderDateContext", function() { return FirstRenderDateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var FirstRenderDateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext()
FirstRenderDateContext.displayName = 'FirstRenderDateContext'


/***/ }),

/***/ "./node_modules/graphql-react/universal/GraphQL.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql-react/universal/GraphQL.mjs ***!
  \**********************************************************/
/*! exports provided: GraphQL */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQL", function() { return GraphQL; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
/* harmony import */ var _graphqlFetchOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphqlFetchOptions */ "./node_modules/graphql-react/universal/graphqlFetchOptions.mjs");
/* harmony import */ var _hashObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashObject */ "./node_modules/graphql-react/universal/hashObject.mjs");




var GraphQL = function GraphQL(_temp) {
  var _this = this

  var _ref = _temp === void 0 ? {} : _temp,
    _ref$cache = _ref.cache,
    cache = _ref$cache === void 0 ? {} : _ref$cache

  this.reload = function(exceptCacheKey) {
    _this.emit('reload', {
      exceptCacheKey: exceptCacheKey
    })
  }

  this.reset = function(exceptCacheKey) {
    var cacheKeys = Object.keys(_this.cache)
    if (exceptCacheKey)
      cacheKeys = cacheKeys.filter(function(hash) {
        return hash !== exceptCacheKey
      })
    cacheKeys.forEach(function(cacheKey) {
      return delete _this.cache[cacheKey]
    })

    _this.emit('reset', {
      exceptCacheKey: exceptCacheKey
    })
  }

  this.fetch = function(_ref2, cacheKey) {
    var url = _ref2.url,
      options = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__(_ref2, ['url'])

    var fetchResponse
    var fetcher =
      typeof fetch === 'function'
        ? fetch
        : function() {
            return Promise.reject(
              new Error('Global fetch API or polyfill unavailable.')
            )
          }
    var cacheValue = {}
    var cacheValuePromise = fetcher(url, options)
      .then(
        function(response) {
          fetchResponse = response
          if (!response.ok)
            cacheValue.httpError = {
              status: response.status,
              statusText: response.statusText
            }
          return response.json().then(
            function(_ref3) {
              var errors = _ref3.errors,
                data = _ref3.data
              if (!errors && !data) cacheValue.parseError = 'Malformed payload.'
              if (errors) cacheValue.graphQLErrors = errors
              if (data) cacheValue.data = data
            },
            function(_ref4) {
              var message = _ref4.message
              cacheValue.parseError = message
            }
          )
        },
        function(_ref5) {
          var message = _ref5.message
          cacheValue.fetchError = message
        }
      )
      .then(function() {
        _this.cache[cacheKey] = cacheValue
        delete _this.operations[cacheKey]

        _this.emit('cache', {
          cacheKey: cacheKey,
          cacheValue: cacheValue,
          response: fetchResponse
        })

        return cacheValue
      })
    _this.operations[cacheKey] = cacheValuePromise

    _this.emit('fetch', {
      cacheKey: cacheKey,
      cacheValuePromise: cacheValuePromise
    })

    return cacheValuePromise
  }

  this.operate = function(_ref6) {
    var operation = _ref6.operation,
      fetchOptionsOverride = _ref6.fetchOptionsOverride,
      reloadOnLoad = _ref6.reloadOnLoad,
      resetOnLoad = _ref6.resetOnLoad
    if (reloadOnLoad && resetOnLoad)
      throw new Error(
        'operate() options “reloadOnLoad” and “resetOnLoad” can’t both be true.'
      )
    var fetchOptions = Object(_graphqlFetchOptions__WEBPACK_IMPORTED_MODULE_2__["graphqlFetchOptions"])(operation)
    if (fetchOptionsOverride) fetchOptionsOverride(fetchOptions)
    var cacheKey = Object(_hashObject__WEBPACK_IMPORTED_MODULE_3__["hashObject"])(fetchOptions)

    var cacheValuePromise =
      _this.operations[cacheKey] || _this.fetch(fetchOptions, cacheKey)

    cacheValuePromise.then(function() {
      if (reloadOnLoad) _this.reload(cacheKey)
      else if (resetOnLoad) _this.reset(cacheKey)
    })
    return {
      cacheKey: cacheKey,
      cacheValue: _this.cache[cacheKey],
      cacheValuePromise: cacheValuePromise
    }
  }

  var _mitt = mitt__WEBPACK_IMPORTED_MODULE_1__(),
    on = _mitt.on,
    off = _mitt.off,
    emit = _mitt.emit

  this.on = on
  this.off = off
  this.emit = emit
  this.cache = cache
  this.operations = {}
}


/***/ }),

/***/ "./node_modules/graphql-react/universal/GraphQLContext.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql-react/universal/GraphQLContext.mjs ***!
  \*****************************************************************/
/*! exports provided: GraphQLContext */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLContext", function() { return GraphQLContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var GraphQLContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext()
GraphQLContext.displayName = 'GraphQLContext'


/***/ }),

/***/ "./node_modules/graphql-react/universal/GraphQLProvider.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/graphql-react/universal/GraphQLProvider.mjs ***!
  \******************************************************************/
/*! exports provided: GraphQLProvider */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLProvider", function() { return GraphQLProvider; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FirstRenderDateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FirstRenderDateContext */ "./node_modules/graphql-react/universal/FirstRenderDateContext.mjs");
/* harmony import */ var _GraphQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphQL */ "./node_modules/graphql-react/universal/GraphQL.mjs");
/* harmony import */ var _GraphQLContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphQLContext */ "./node_modules/graphql-react/universal/GraphQLContext.mjs");





var GraphQLProvider = function GraphQLProvider(_ref) {
  var graphql = _ref.graphql,
    children = _ref.children
  var firstRenderDateRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(new Date())
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    _FirstRenderDateContext__WEBPACK_IMPORTED_MODULE_2__["FirstRenderDateContext"].Provider,
    {
      value: firstRenderDateRef.current
    },
    react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      _GraphQLContext__WEBPACK_IMPORTED_MODULE_4__["GraphQLContext"].Provider,
      {
        value: graphql
      },
      children
    )
  )
}
GraphQLProvider.propTypes = {
  graphql: prop_types__WEBPACK_IMPORTED_MODULE_0__.instanceOf(_GraphQL__WEBPACK_IMPORTED_MODULE_3__["GraphQL"]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__.node
}


/***/ }),

/***/ "./node_modules/graphql-react/universal/graphqlFetchOptions.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql-react/universal/graphqlFetchOptions.mjs ***!
  \**********************************************************************/
/*! exports provided: graphqlFetchOptions */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlFetchOptions", function() { return graphqlFetchOptions; });
/* harmony import */ var extract_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extract-files */ "./node_modules/extract-files/lib/index.mjs");

function graphqlFetchOptions(operation) {
  var fetchOptions = {
    url: '/graphql',
    method: 'POST',
    headers: {
      Accept: 'application/json'
    }
  }

  var _extractFiles = Object(extract_files__WEBPACK_IMPORTED_MODULE_0__["extractFiles"])(operation),
    clone = _extractFiles.clone,
    files = _extractFiles.files

  var operationJSON = JSON.stringify(clone)

  if (files.size) {
    var form = new FormData()
    form.append('operations', operationJSON)
    var map = {}
    var i = 0
    files.forEach(function(paths) {
      map[++i] = paths
    })
    form.append('map', JSON.stringify(map))
    i = 0
    files.forEach(function(paths, file) {
      form.append('' + ++i, file, file.name)
    })
    fetchOptions.body = form
  } else {
    fetchOptions.headers['Content-Type'] = 'application/json'
    fetchOptions.body = operationJSON
  }

  return fetchOptions
}


/***/ }),

/***/ "./node_modules/graphql-react/universal/hashObject.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql-react/universal/hashObject.mjs ***!
  \*************************************************************/
/*! exports provided: hashObject */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashObject", function() { return hashObject; });
/* harmony import */ var fnv1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fnv1a */ "./node_modules/fnv1a/index.js");


function hashObjectReplacer(key, value) {
  var originalValue = this[key]

  if (typeof FormData !== 'undefined' && originalValue instanceof FormData) {
    var signature = ''
    var fields = originalValue.entries()
    var field = fields.next()

    while (!field.done) {
      var _field$value = field.value,
        name = _field$value[0],
        _value = _field$value[1]
      signature += '' + name + _value
      field = fields.next()
    }

    return signature
  }

  return value
}

var hashObject = function hashObject(object) {
  return fnv1a__WEBPACK_IMPORTED_MODULE_0__(JSON.stringify(object, hashObjectReplacer)).toString(36)
}


/***/ }),

/***/ "./node_modules/graphql-react/universal/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql-react/universal/index.mjs ***!
  \********************************************************/
/*! exports provided: GraphQL, GraphQLContext, GraphQLProvider, useGraphQL, reportCacheErrors */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQL */ "./node_modules/graphql-react/universal/GraphQL.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQL", function() { return _GraphQL__WEBPACK_IMPORTED_MODULE_0__["GraphQL"]; });

/* harmony import */ var _GraphQLContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphQLContext */ "./node_modules/graphql-react/universal/GraphQLContext.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLContext", function() { return _GraphQLContext__WEBPACK_IMPORTED_MODULE_1__["GraphQLContext"]; });

/* harmony import */ var _GraphQLProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphQLProvider */ "./node_modules/graphql-react/universal/GraphQLProvider.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLProvider", function() { return _GraphQLProvider__WEBPACK_IMPORTED_MODULE_2__["GraphQLProvider"]; });

/* harmony import */ var _useGraphQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useGraphQL */ "./node_modules/graphql-react/universal/useGraphQL.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGraphQL", function() { return _useGraphQL__WEBPACK_IMPORTED_MODULE_3__["useGraphQL"]; });

/* harmony import */ var _reportCacheErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportCacheErrors */ "./node_modules/graphql-react/universal/reportCacheErrors.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportCacheErrors", function() { return _reportCacheErrors__WEBPACK_IMPORTED_MODULE_4__["reportCacheErrors"]; });








/***/ }),

/***/ "./node_modules/graphql-react/universal/reportCacheErrors.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql-react/universal/reportCacheErrors.mjs ***!
  \********************************************************************/
/*! exports provided: reportCacheErrors */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportCacheErrors", function() { return reportCacheErrors; });
function reportCacheErrors(_ref) {
  var cacheKey = _ref.cacheKey,
    _ref$cacheValue = _ref.cacheValue,
    fetchError = _ref$cacheValue.fetchError,
    httpError = _ref$cacheValue.httpError,
    parseError = _ref$cacheValue.parseError,
    graphQLErrors = _ref$cacheValue.graphQLErrors

  if (fetchError || httpError || parseError || graphQLErrors) {
    console.groupCollapsed(
      'GraphQL cache errors for key \u201C' + cacheKey + '\u201D:'
    )

    if (fetchError) {
      console.groupCollapsed('Fetch:')
      console.log(fetchError)
      console.groupEnd()
    }

    if (httpError) {
      console.groupCollapsed('HTTP:')
      console.log('Status: ' + httpError.status)
      console.log('Text: ' + httpError.statusText)
      console.groupEnd()
    }

    if (parseError) {
      console.groupCollapsed('Parse:')
      console.log(parseError)
      console.groupEnd()
    }

    if (graphQLErrors) {
      console.groupCollapsed('GraphQL:')
      graphQLErrors.forEach(function(_ref2) {
        var message = _ref2.message
        return console.log(message)
      })
      console.groupEnd()
    }

    console.groupEnd()
  }
}


/***/ }),

/***/ "./node_modules/graphql-react/universal/useGraphQL.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql-react/universal/useGraphQL.mjs ***!
  \*************************************************************/
/*! exports provided: useGraphQL */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGraphQL", function() { return useGraphQL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FirstRenderDateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirstRenderDateContext */ "./node_modules/graphql-react/universal/FirstRenderDateContext.mjs");
/* harmony import */ var _GraphQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphQL */ "./node_modules/graphql-react/universal/GraphQL.mjs");
/* harmony import */ var _GraphQLContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphQLContext */ "./node_modules/graphql-react/universal/GraphQLContext.mjs");
/* harmony import */ var _graphqlFetchOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphqlFetchOptions */ "./node_modules/graphql-react/universal/graphqlFetchOptions.mjs");
/* harmony import */ var _hashObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hashObject */ "./node_modules/graphql-react/universal/hashObject.mjs");






var useGraphQL = function useGraphQL(_ref) {
  var fetchOptionsOverride = _ref.fetchOptionsOverride,
    _ref$loadOnMount = _ref.loadOnMount,
    loadOnMount = _ref$loadOnMount === void 0 ? true : _ref$loadOnMount,
    _ref$loadOnReload = _ref.loadOnReload,
    loadOnReload = _ref$loadOnReload === void 0 ? true : _ref$loadOnReload,
    _ref$loadOnReset = _ref.loadOnReset,
    loadOnReset = _ref$loadOnReset === void 0 ? true : _ref$loadOnReset,
    _ref$reloadOnLoad = _ref.reloadOnLoad,
    reloadOnLoad = _ref$reloadOnLoad === void 0 ? false : _ref$reloadOnLoad,
    _ref$resetOnLoad = _ref.resetOnLoad,
    resetOnLoad = _ref$resetOnLoad === void 0 ? false : _ref$resetOnLoad,
    operation = _ref.operation
  if (reloadOnLoad && resetOnLoad)
    throw new Error(
      'useGraphQL() options “reloadOnLoad” and “resetOnLoad” can’t both be true.'
    )
  var graphql = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_GraphQLContext__WEBPACK_IMPORTED_MODULE_3__["GraphQLContext"])
  if (typeof graphql === 'undefined')
    throw new Error('GraphQL context missing.')
  if (!(graphql instanceof _GraphQL__WEBPACK_IMPORTED_MODULE_2__["GraphQL"]))
    throw new Error('GraphQL context must be a GraphQL instance.')
  var fetchOptions = Object(_graphqlFetchOptions__WEBPACK_IMPORTED_MODULE_4__["graphqlFetchOptions"])(operation)
  if (fetchOptionsOverride) fetchOptionsOverride(fetchOptions)
  var fetchOptionsHash = Object(_hashObject__WEBPACK_IMPORTED_MODULE_5__["hashObject"])(fetchOptions)

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(fetchOptionsHash),
    cacheKey = _React$useState[0],
    setCacheKey = _React$useState[1]

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useState(graphql.cache[cacheKey]),
    cacheValue = _React$useState2[0],
    setCacheValue = _React$useState2[1]

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(cacheKey in graphql.operations),
    loading = _React$useState3[0],
    setLoading = _React$useState3[1]

  if (cacheKey !== fetchOptionsHash) {
    setCacheKey((cacheKey = fetchOptionsHash))
    setCacheValue((cacheValue = graphql.cache[cacheKey]))
    setLoading((loading = cacheKey in graphql.operations))
  }

  var load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    function() {
      var _graphql$operate = graphql.operate({
          operation: operation,
          fetchOptionsOverride: fetchOptionsOverride,
          reloadOnLoad: reloadOnLoad,
          resetOnLoad: resetOnLoad
        }),
        cacheKey = _graphql$operate.cacheKey,
        cacheValue = _graphql$operate.cacheValue,
        cacheValuePromise = _graphql$operate.cacheValuePromise

      setLoading(true)
      setCacheKey(cacheKey)
      setCacheValue(cacheValue)
      return cacheValuePromise
    },
    [fetchOptionsOverride, graphql, operation, reloadOnLoad, resetOnLoad]
  )
  var isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    function() {
      isMountedRef.current = true

      function onFetch(_ref2) {
        var fetchingCacheKey = _ref2.cacheKey
        if (cacheKey === fetchingCacheKey && isMountedRef.current)
          setLoading(true)
      }

      function onCache(_ref3) {
        var cachedCacheKey = _ref3.cacheKey,
          cacheValue = _ref3.cacheValue

        if (cacheKey === cachedCacheKey && isMountedRef.current) {
          setLoading(false)
          setCacheValue(cacheValue)
        }
      }

      function onReload(_ref4) {
        var exceptCacheKey = _ref4.exceptCacheKey
        if (cacheKey !== exceptCacheKey && loadOnReload && isMountedRef.current)
          load()
      }

      function onReset(_ref5) {
        var exceptCacheKey = _ref5.exceptCacheKey
        if (cacheKey !== exceptCacheKey && isMountedRef.current)
          if (loadOnReset) load()
          else setCacheValue(graphql.cache[cacheKey])
      }

      graphql.on('fetch', onFetch)
      graphql.on('cache', onCache)
      graphql.on('reload', onReload)
      graphql.on('reset', onReset)
      return function() {
        isMountedRef.current = false
        graphql.off('fetch', onFetch)
        graphql.off('cache', onCache)
        graphql.off('reload', onReload)
        graphql.off('reset', onReset)
      }
    },
    [cacheKey, graphql, load, loadOnReload, loadOnReset]
  )

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
    loadedOnMountCacheKey = _React$useState4[0],
    setLoadedOnMountCacheKey = _React$useState4[1]

  var firstRenderDate = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FirstRenderDateContext__WEBPACK_IMPORTED_MODULE_1__["FirstRenderDateContext"])
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    function() {
      if (
        loadOnMount &&
        cacheKey !== loadedOnMountCacheKey &&
        !(cacheValue && new Date() - firstRenderDate < 1000)
      ) {
        setLoadedOnMountCacheKey(cacheKey)
        load()
      }
    },
    [
      cacheKey,
      cacheValue,
      firstRenderDate,
      load,
      loadOnMount,
      loadedOnMountCacheKey
    ]
  )
  if (graphql.ssr && loadOnMount && !cacheValue)
    graphql.operate({
      operation: operation,
      fetchOptionsOverride: fetchOptionsOverride,
      reloadOnLoad: reloadOnLoad,
      resetOnLoad: resetOnLoad
    })
  return {
    load: load,
    loading: loading,
    cacheKey: cacheKey,
    cacheValue: cacheValue
  }
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/*!****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Filancaster%2FDesktop%2Fnext-js-learning%2Fboilerplates%2Fwith-graphql-react%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Filancaster%2FDesktop%2Fnext-js-learning%2Fboilerplates%2Fwith-graphql-react%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-react */ "./node_modules/graphql-react/universal/index.mjs");
var _jsxFileName = "/Users/ilancaster/Desktop/next-js-learning/boilerplates/with-graphql-react/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useGraphQL = Object(graphql_react__WEBPACK_IMPORTED_MODULE_1__["useGraphQL"])({
    fetchOptionsOverride: function fetchOptionsOverride(options) {
      options.url = 'https://graphql-pokemon.now.sh';
    },
    operation: {
      query:
      /* GraphQL */
      "\n        {\n          pokemon(name: \"Pikachu\") {\n            name\n            image\n          }\n        }\n      "
    }
  }),
      loading = _useGraphQL.loading,
      _useGraphQL$cacheValu = _useGraphQL.cacheValue,
      cacheValue = _useGraphQL$cacheValu === void 0 ? {} : _useGraphQL$cacheValu;

  var data = cacheValue.data;
  return data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.pokemon.image,
    alt: data.pokemon.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Loading\u2026") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Error!");
});

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Filancaster%2FDesktop%2Fnext-js-learning%2Fboilerplates%2Fwith-graphql-react%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Filancaster%2FDesktop%2Fnext-js-learning%2Fboilerplates%2Fwith-graphql-react%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Filancaster%2FDesktop%2Fnext-js-learning%2Fboilerplates%2Fwith-graphql-react%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_01f9a3fa864a7b7414d8":
/*!*******************************************!*\
  !*** external "dll_01f9a3fa864a7b7414d8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_01f9a3fa864a7b7414d8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map