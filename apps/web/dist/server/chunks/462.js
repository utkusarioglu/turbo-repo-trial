"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 2363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gy": () => (/* reexport */ useResponderEvents)
});

// UNUSED EXPORTS: canUseDOM, getBoundingClientRect, getLowestCommonAncestor, getResponderPaths, hasTargetTouches, hasValidSelection, isPrimaryPointerDown, isSelectionValid, setResponderId

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/utils.js
const keyName = "__reactResponderId";
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const getBoundingClientRect = (node) => {
  if (!node)
    return;
  if (node.nodeType !== 1)
    return;
  if (node.getBoundingClientRect) {
    return node.getBoundingClientRect();
  }
};
function getEventPath(domEvent) {
  var _a;
  if (domEvent.type === "selectionchange") {
    const target = (_a = window.getSelection()) == null ? void 0 : _a.anchorNode;
    return composedPathFallback(target);
  } else {
    const path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
function composedPathFallback(target) {
  const path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}
function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
function getResponderPaths(domEvent) {
  const idPath = [];
  const nodePath = [];
  const eventPath = getEventPath(domEvent);
  for (let i = 0; i < eventPath.length; i++) {
    const node = eventPath[i];
    const id = getResponderId(node);
    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }
  return { idPath, nodePath };
}
function getLowestCommonAncestor(pathA, pathB) {
  let pathALength = pathA.length;
  let pathBLength = pathB.length;
  if (
    // If either path is empty
    pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    pathA[pathALength - 1] !== pathB[pathBLength - 1]
  ) {
    return null;
  }
  let itemA = pathA[0];
  let indexA = 0;
  let itemB = pathB[0];
  let indexB = 0;
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }
  let depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (let i = 0; i < touches.length; i++) {
    const node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === "selectionchange") {
    return isSelectionValid();
  }
  return domEvent.type === "select";
}
function isPrimaryPointerDown(domEvent) {
  const { altKey, button, buttons, ctrlKey, type } = domEvent;
  const isTouch = type === "touchstart" || type === "touchmove";
  const isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
  const isPrimaryMouseMove = type === "mousemove" && buttons === 1;
  const noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}
function isSelectionValid() {
  const selection = window.getSelection();
  if (!selection)
    return false;
  const string = selection.toString();
  const anchorNode = selection.anchorNode;
  const focusNode = selection.focusNode;
  const isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== "\n" && !!isTextNode;
}

//# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/createResponderEvent.js

const emptyFunction = () => {
};
const emptyObject = {};
const emptyArray = [];
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}
function createResponderEvent(domEvent, responderTouchHistoryStore) {
  let rect;
  let propagationWasStopped = false;
  let changedTouches;
  let touches;
  const domEventChangedTouches = domEvent.changedTouches;
  const domEventType = domEvent.type;
  const metaKey = domEvent.metaKey === true;
  const shiftKey = domEvent.shiftKey === true;
  const force = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].force) || 0;
  const identifier = normalizeIdentifier((domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].identifier) || 0);
  const clientX = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].clientX) || domEvent.clientX;
  const clientY = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].clientY) || domEvent.clientY;
  const pageX = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].pageX) || domEvent.pageX;
  const pageY = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].pageY) || domEvent.pageY;
  const preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  const timestamp = domEvent.timeStamp;
  function normalizeTouches(touches2) {
    return Array.prototype.slice.call(touches2).map((touch) => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    const emulatedTouches = [
      {
        force,
        identifier,
        get locationX() {
          return locationX(clientX);
        },
        get locationY() {
          return locationY(clientY);
        },
        pageX,
        pageY,
        target: domEvent.target,
        timestamp
      }
    ];
    changedTouches = emulatedTouches;
    touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
  }
  const responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore.touchHistory
  };
  function locationX(x) {
    rect = rect || getBoundingClientRect(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  function locationY(y) {
    rect = rect || getBoundingClientRect(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  return responderEvent;
}

//# sourceMappingURL=createResponderEvent.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/types.js
const BLUR = "blur";
const CONTEXT_MENU = "contextmenu";
const FOCUS_OUT = "focusout";
const MOUSE_DOWN = "mousedown";
const MOUSE_MOVE = "mousemove";
const MOUSE_UP = "mouseup";
const MOUSE_CANCEL = "dragstart";
const TOUCH_START = "touchstart";
const TOUCH_MOVE = "touchmove";
const TOUCH_END = "touchend";
const TOUCH_CANCEL = "touchcancel";
const SCROLL = "scroll";
const SELECT = "select";
const SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}

//# sourceMappingURL=types.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/ResponderTouchHistoryStore.js

const MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  return touch["timeStamp"] || touch.timestamp;
}
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
function getTouchIdentifier({ identifier }) {
  if (identifier == null) {
    console.error("Touch object is missing identifier.");
  }
  if (false) {}
  return identifier;
}
function recordTouchStart(touch, touchHistory) {
  const identifier = getTouchIdentifier(touch);
  const touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
function recordTouchMove(touch, touchHistory) {
  const touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn(
      "Cannot record touch move without a touch start.\n",
      `Touch Move: ${printTouch(touch)}
`,
      `Touch Bank: ${printTouchBank(touchHistory)}`
    );
  }
}
function recordTouchEnd(touch, touchHistory) {
  const touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn(
      "Cannot record touch end without a touch start.\n",
      `Touch End: ${printTouch(touch)}
`,
      `Touch Bank: ${printTouchBank(touchHistory)}`
    );
  }
}
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
function printTouchBank(touchHistory) {
  const { touchBank } = touchHistory;
  let printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ` (original size: ${touchBank.length})`;
  }
  return printed;
}
class ResponderTouchHistoryStore {
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    const touchHistory = this._touchHistory;
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        const { touchBank } = touchHistory;
        for (let i = 0; i < touchBank.length; i++) {
          const touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck == null ? void 0 : touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
        if (false) {}
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}

//# sourceMappingURL=ResponderTouchHistoryStore.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/ResponderSystem.js





const ResponderSystem_emptyObject = {};
const startRegistration = [
  "onStartShouldSetResponderCapture",
  "onStartShouldSetResponder",
  { bubbles: true }
];
const moveRegistration = [
  "onMoveShouldSetResponderCapture",
  "onMoveShouldSetResponder",
  { bubbles: true }
];
const scrollRegistration = [
  "onScrollShouldSetResponderCapture",
  "onScrollShouldSetResponder",
  { bubbles: false }
];
const shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
const emptyResponder = { id: null, idPath: null, node: null };
const responderListenersMap = /* @__PURE__ */ new Map();
let isEmulatingMouseEvents = false;
let trackedTouchCount = 0;
let currentResponder = {
  id: null,
  node: null,
  idPath: null
};
const responderTouchHistoryStore = new ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
function getResponderConfig(id) {
  const config = responderListenersMap.get(id);
  return config != null ? config : ResponderSystem_emptyObject;
}
function eventListener(domEvent) {
  const eventType = domEvent.type;
  const eventTarget = domEvent.target;
  if (eventType === "touchstart") {
    isEmulatingMouseEvents = true;
  }
  if (eventType === "touchmove" || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  if (
    // Ignore browser emulated mouse events
    eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
    eventType === "mousemove" && trackedTouchCount < 1
  ) {
    return;
  }
  if (isEmulatingMouseEvents && eventType === "mouseup") {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  const isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  const isMoveEvent = isMoveish(eventType);
  const isEndEvent = isEndish(eventType);
  const isScrollEvent = isScroll(eventType);
  const isSelectionChangeEvent = isSelectionChange(eventType);
  const responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);
  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(
      eventType,
      responderEvent.nativeEvent
    );
  }
  let eventPaths = getResponderPaths(domEvent);
  let wasNegotiated = false;
  let wantsResponder;
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    const currentResponderIdPath = currentResponder.idPath;
    const eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      const lowestCommonAncestor = getLowestCommonAncestor(
        currentResponderIdPath,
        eventIdPath
      );
      if (lowestCommonAncestor != null) {
        const indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        const index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }
  if (currentResponder.id != null && currentResponder.node != null) {
    const { id, node } = currentResponder;
    const {
      onResponderStart,
      onResponderMove,
      onResponderEnd,
      onResponderRelease,
      onResponderTerminate,
      onResponderTerminationRequest
    } = getResponderConfig(id);
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderStart";
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderMove";
        onResponderMove(responderEvent);
      }
    } else {
      const isTerminateEvent = isCancelish(eventType) || // native context menu
      eventType === "contextmenu" || // window blur
      eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
      eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
      isSelectionChangeEvent && hasValidSelection(domEvent);
      const isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderEnd";
          onResponderEnd(responderEvent);
        }
      }
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderRelease";
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      if (isTerminateEvent) {
        let shouldTerminate = true;
        if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  const shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
  if (shouldSetCallbacks != null) {
    const { idPath, nodePath } = eventPaths;
    const shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    const shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    const { bubbles } = shouldSetCallbacks[2];
    const check = function(id, node, callbackName) {
      const config = getResponderConfig(id);
      const shouldSetCallback = config[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node;
        if (shouldSetCallback(responderEvent) === true) {
          const prunedIdPath = idPath.slice(idPath.indexOf(id));
          return { id, node, idPath: prunedIdPath };
        }
      }
    };
    for (let i = idPath.length - 1; i >= 0; i--) {
      const id = idPath[i];
      const node = nodePath[i];
      const result = check(id, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }
    if (bubbles) {
      for (let i = 0; i < idPath.length; i++) {
        const id = idPath[i];
        const node = nodePath[i];
        const result = check(id, node, shouldSetCallbackBubbleName);
        if (result != null) {
          return result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      const id = idPath[0];
      const node = nodePath[0];
      const target = domEvent.target;
      if (target === node) {
        return check(id, node, shouldSetCallbackBubbleName);
      }
    }
  }
}
function attemptTransfer(responderEvent, wantsResponder) {
  const { id: currentId, node: currentNode } = currentResponder;
  const { id, node } = wantsResponder;
  const { onResponderGrant, onResponderReject } = getResponderConfig(id);
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = "onResponderGrant";
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  } else {
    const { onResponderTerminate, onResponderTerminationRequest } = getResponderConfig(currentId);
    let allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
        onResponderTerminate(responderEvent);
      }
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderReject";
        onResponderReject(responderEvent);
      }
    }
  }
}
const documentEventsCapturePhase = ["blur", "scroll"];
const documentEventsBubblePhase = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
const isTamaguiResponderActive = Symbol();
function attachListeners() {
  if (canUseDOM && !window[isTamaguiResponderActive]) {
    window.addEventListener("blur", eventListener);
    documentEventsBubblePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener, true);
    });
    window[isTamaguiResponderActive] = true;
  }
}
function addNode(id, node, config) {
  setResponderId(node, id);
  responderListenersMap.set(id, config);
}
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }
  if (responderListenersMap.has(id)) {
    responderListenersMap.delete(id);
  }
}
function terminateResponder() {
  const { id, node } = currentResponder;
  if (id != null && node != null) {
    const { onResponderTerminate } = getResponderConfig(id);
    if (onResponderTerminate != null) {
      const event = createResponderEvent({}, responderTouchHistoryStore);
      event.currentTarget = node;
      onResponderTerminate(event);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}

//# sourceMappingURL=ResponderSystem.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/useResponderEvents.js



const useResponderEvents_emptyObject = {};
function useResponderEvents(hostRef, config = useResponderEvents_emptyObject) {
  const id = external_react_.useId();
  const isAttachedRef = external_react_.useRef(false);
  external_react_.useEffect(() => {
    attachListeners();
    return () => {
      removeNode(id);
    };
  }, [id]);
  external_react_.useEffect(() => {
    const {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    } = config;
    const requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    const node = hostRef.current;
    if (requiresResponderSystem) {
      addNode(id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  if (false) {}
}

//# sourceMappingURL=useResponderEvents.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/index.js

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createSheet)
});

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/canUseDOM.js
var canUseDOM = __webpack_require__(7268);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/dom/createCSSStyleSheet.js

function createCSSStyleSheet(id, rootNode, textContent) {
  if (canUseDOM/* default */.Z) {
    const root = rootNode != null ? rootNode : document;
    let element = root.getElementById(id);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        const head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}

//# sourceMappingURL=createCSSStyleSheet.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/dom/createOrderedCSSStyleSheet.js
const slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  const groups = {};
  const selectors = {};
  if (sheet != null) {
    let group;
    slice.call(sheet.cssRules).forEach((cssRule, i) => {
      const cssText = cssRule.cssText;
      if (cssText.indexOf("stylesheet-group") > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = { start: i, rules: [cssText] };
      } else {
        const selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet2, group, text) {
    const orderedGroups = getOrderedGroups(groups);
    const groupIndex = orderedGroups.indexOf(group);
    const nextGroupIndex = groupIndex + 1;
    const nextGroup = orderedGroups[nextGroupIndex];
    const position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet2.cssRules.length;
    const isInserted = insertRuleAt(sheet2, text, position);
    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }
      for (let i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        const groupNumber = orderedGroups[i];
        const previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  const OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map((group) => {
        const rules = groups[group].rules;
        const marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join("\n");
      }).join("\n");
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      const group = Number(groupValue);
      if (groups[group] == null) {
        const markerRule = encodeGroupRule(group);
        groups[group] = { start: null, rules: [markerRule] };
        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }
      const selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);
        if (sheet != null) {
          const isInserted = sheetInsert(sheet, group, cssText);
          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
function encodeGroupRule(group) {
  return `[stylesheet-group="${group}"]{}`;
}
const groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
const selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  const selector = cssText.split("{")[0].trim();
  return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
}
function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}

//# sourceMappingURL=createOrderedCSSStyleSheet.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/dom/index.js



const defaultId = "react-native-stylesheet";
const roots = /* @__PURE__ */ new WeakMap();
const sheets = [];
const initialRules = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function createSheet(root, id = defaultId) {
  let sheet;
  if (canUseDOM/* default */.Z) {
    const rootNode = root != null ? root.getRootNode() : document;
    if (sheets.length === 0) {
      sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach((rule) => {
        sheet.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet);
    } else {
      const index = roots.get(rootNode);
      if (index == null) {
        const initialSheet = sheets[0];
        const textContent = initialSheet != null ? initialSheet.getTextContent() : "";
        sheet = createOrderedCSSStyleSheet(
          createCSSStyleSheet(id, rootNode, textContent)
        );
        roots.set(rootNode, sheets.length);
        sheets.push(sheet);
      } else {
        sheet = sheets[index];
      }
    }
  } else {
    if (sheets.length === 0) {
      sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach((rule) => {
        sheet.insert(rule, 0);
      });
      sheets.push(sheet);
    } else {
      sheet = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet.getTextContent();
    },
    id,
    insert(cssText, groupValue) {
      sheets.forEach((s) => {
        s.insert(cssText, groupValue);
      });
    }
  };
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ StyleSheet)
});

// UNUSED EXPORTS: flatten

// EXTERNAL MODULE: external "styleq"
var external_styleq_ = __webpack_require__(8616);
// EXTERNAL MODULE: external "styleq/transform-localize-style"
var transform_localize_style_ = __webpack_require__(8688);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/canUseDOM.js
var canUseDOM = __webpack_require__(7268);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/simple-hash/dist/esm/index.js
const cache = /* @__PURE__ */ new Map();
const simpleHash = (str, hashMin = 10) => {
  if (cache.has(str)) {
    return cache.get(str);
  }
  let hash = 0;
  let valids = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const char = str.charCodeAt(i);
    if (char === 46)
      valids += "d0t";
    if (isValidCSSCharCode(char) && len <= hashMin) {
      valids += str[i];
    } else {
      hash = hashChar(hash, str[i]);
    }
  }
  const res = valids + (hash ? Math.abs(hash) : "");
  if (cache.size > 1e4) {
    cache.clear();
  }
  cache.set(str, res);
  return res;
};
const hashChar = (hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0;
function isValidCSSCharCode(code) {
  return (
    // A-Z
    code >= 65 && code <= 90 || // a-z
    code >= 97 && code <= 122 || // _
    code === 95 || // -
    code === 45 || // 0-9
    code >= 48 && code <= 57
  );
}

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__(3040);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/isWebColor/index.js
const isWebColor = (color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.startsWith("var(");
var isWebColor_default = isWebColor;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/normalize-css-color/dist/esm/names.js
const names = {
  transparent: 0,
  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};

//# sourceMappingURL=names.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/normalize-css-color/dist/esm/index.js


function normalizeCSSColor(color) {
  let match = null;
  if (color in names) {
    return names[color];
  }
  if (typeof color === "number") {
    if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
      return color;
    }
    return null;
  }
  if (match = matchers.hex6.exec(color)) {
    return parseInt(match[1] + "ff", 16) >>> 0;
  }
  if (match = matchers.rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = matchers.rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = matchers.hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = matchers.hex8.exec(color)) {
    return parseInt(match[1], 16) >>> 0;
  }
  if (match = matchers.hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = matchers.hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = matchers.hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
  return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var matchers = {
  rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/
};
function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}
function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}
function rgba(colorInt) {
  var r = Math.round((colorInt & 4278190080) >>> 24);
  var g = Math.round((colorInt & 16711680) >>> 16);
  var b = Math.round((colorInt & 65280) >>> 8);
  var a = ((colorInt & 255) >>> 0) / 255;
  return {
    r,
    g,
    b,
    a
  };
}
var src_default = normalizeCSSColor;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/processColor/index.js

const processColor = (color) => {
  if (color === void 0 || color === null) {
    return color;
  }
  let int32Color = src_default(color);
  if (int32Color === void 0 || int32Color === null) {
    return void 0;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/compiler/normalizeColor.js


const normalizeColor = (color, opacity = 1) => {
  if (color == null)
    return;
  if (typeof color === "string" && isWebColor_default(color)) {
    return color;
  }
  const colorInt = processColor(color);
  if (colorInt != null) {
    const r = colorInt >> 16 & 255;
    const g = colorInt >> 8 & 255;
    const b = colorInt & 255;
    const a = (colorInt >> 24 & 255) / 255;
    const alpha = (a * opacity).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (true) {
    if (typeof color === "string") {
      return color;
    }
  }
};
var normalizeColor_default = normalizeColor;

//# sourceMappingURL=normalizeColor.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/compiler/normalizeValueWithProperty.js


const colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  let returnValue = value;
  if ((property == null || !unitlessNumbers/* unitlessNumbers */.y[property]) && typeof value === "number") {
    returnValue = `${value}px`;
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor_default(value);
  }
  return returnValue;
}

//# sourceMappingURL=normalizeValueWithProperty.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/compiler/createReactDOMStyle.js


const emptyObject = {};
const supportsCSS3TextDecoration = !canUseDOM/* default */.Z || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
const ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};
const MONOSPACE_FONT_STACK = "monospace,monospace";
const SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
const STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: [
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ],
  borderRadius: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius"
  ],
  borderStyle: [
    "borderTopStyle",
    "borderRightStyle",
    "borderBottomStyle",
    "borderLeftStyle"
  ],
  borderWidth: [
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth"
  ],
  marginHorizontal: ["marginRight", "marginLeft"],
  marginVertical: ["marginTop", "marginBottom"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  paddingHorizontal: ["paddingRight", "paddingLeft"],
  paddingVertical: ["paddingTop", "paddingBottom"]
};
const mapTransform = (transform) => {
  const type = Object.keys(transform)[0];
  const value = transform[type];
  if (type === "matrix" || type === "matrix3d") {
    return `${type}(${value.join(",")})`;
  } else {
    const normalizedValue = normalizeValueWithProperty(value, type);
    return `${type}(${normalizedValue})`;
  }
};
const createTransformValue = (style) => {
  let transform = style.transform;
  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(" ");
  }
  return transform;
};
const createReactDOMStyle = (style, isInline) => {
  if (!style) {
    return emptyObject;
  }
  const resolvedStyle = {};
  for (const prop in style) {
    const value = style[prop];
    if (
      // Ignore everything with a null value
      value == null || // Ignore some React Native styles
      ignoredProps[prop]
    ) {
      continue;
    }
    if (prop === "aspectRatio") {
      resolvedStyle[prop] = value.toString();
    } else if (prop === "backgroundClip") {
      if (value === "text") {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === "flex") {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = "auto";
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === "font") {
      resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
    } else if (prop === "fontFamily") {
      if (value.indexOf("System") > -1) {
        const stack = value.split(/,\s*/);
        stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(",");
      } else if (value === "monospace") {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === "fontVariant") {
      if (Array.isArray(value) && value.length > 0) {
        resolvedStyle.fontVariant = value.join(" ");
      }
    } else if (prop === "textAlignVertical") {
      resolvedStyle.verticalAlign = value === "center" ? "middle" : value;
    } else if (prop === "textDecorationLine") {
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === "transform" || prop === "transformMatrix") {
      resolvedStyle.transform = createTransformValue(style);
    } else if (prop === "writingDirection") {
      resolvedStyle.direction = value;
    } else {
      const value2 = normalizeValueWithProperty(style[prop], prop);
      const longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === "margin") {
        if (style.marginHorizontal == null) {
          resolvedStyle.marginLeft = value2;
          resolvedStyle.marginRight = value2;
        }
        if (style.marginVertical == null) {
          resolvedStyle.marginTop = value2;
          resolvedStyle.marginBottom = value2;
        }
      } else if (isInline && prop === "padding") {
        if (style.paddingHorizontal == null) {
          resolvedStyle.paddingLeft = value2;
          resolvedStyle.paddingRight = value2;
        }
        if (style.paddingVertical == null) {
          resolvedStyle.paddingTop = value2;
          resolvedStyle.paddingBottom = value2;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          if (style[longForm] == null) {
            resolvedStyle[longForm] = value2;
          }
        });
      } else {
        resolvedStyle[prop] = Array.isArray(value2) ? value2.join(",") : value2;
      }
    }
  }
  return resolvedStyle;
};
var createReactDOMStyle_default = createReactDOMStyle;

//# sourceMappingURL=createReactDOMStyle.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/compiler/hyphenateStyleName.js
const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const hyphenateStyleName_cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (name in hyphenateStyleName_cache) {
    return hyphenateStyleName_cache[name];
  }
  const hName = name.replace(uppercasePattern, toHyphenLower);
  return hyphenateStyleName_cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenateStyleName_default = hyphenateStyleName;

//# sourceMappingURL=hyphenateStyleName.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/compiler/index.js




const compiler_cache = /* @__PURE__ */ new Map();
const compiler_emptyObject = {};
const classicGroup = 1;
const atomicGroup = 2.2;
const customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  marginHorizontal: 2.1,
  marginVertical: 2.1,
  paddingHorizontal: 2.1,
  paddingVertical: 2.1
};
const borderTopLeftRadius = "borderTopLeftRadius";
const borderTopRightRadius = "borderTopRightRadius";
const borderBottomLeftRadius = "borderBottomLeftRadius";
const borderBottomRightRadius = "borderBottomRightRadius";
const borderLeftColor = "borderLeftColor";
const borderLeftStyle = "borderLeftStyle";
const borderLeftWidth = "borderLeftWidth";
const borderRightColor = "borderRightColor";
const borderRightStyle = "borderRightStyle";
const borderRightWidth = "borderRightWidth";
const right = "right";
const marginLeft = "marginLeft";
const marginRight = "marginRight";
const paddingLeft = "paddingLeft";
const paddingRight = "paddingRight";
const left = "left";
const PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};
const PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
const PROPERTIES_VALUE = ["clear", "float", "textAlign"];
function atomic(style) {
  const compiledStyle = { $$css: true };
  const compiledRules = [];
  function atomicCompile(prop, value) {
    const valueString = stringifyValueWithProperty(value, prop);
    const cacheKey = prop + valueString;
    const cachedResult = compiler_cache.get(cacheKey);
    let identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      identifier = createIdentifier("r", prop, value);
      const order = customGroup[prop] || atomicGroup;
      const rules = createAtomicRules(identifier, prop, value);
      const orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      compiler_cache.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  Object.keys(style).sort().forEach((prop) => {
    const value = style[prop];
    if (value != null) {
      let localizeableValue;
      if (PROPERTIES_VALUE.indexOf(prop) > -1) {
        const left2 = atomicCompile(prop, "left");
        const right2 = atomicCompile(prop, "right");
        if (value === "start") {
          localizeableValue = [left2, right2];
        } else if (value === "end") {
          localizeableValue = [right2, left2];
        }
      }
      const propPolyfill = PROPERTIES_I18N[prop];
      if (propPolyfill != null) {
        const ltr = atomicCompile(propPolyfill, value);
        const rtl = atomicCompile(PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      if (prop === "transitionProperty") {
        const values = Array.isArray(value) ? value : [value];
        const polyfillIndices = [];
        for (let i = 0; i < values.length; i++) {
          const val = values[i];
          if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          const ltrPolyfillValues = [...values];
          const rtlPolyfillValues = [...values];
          polyfillIndices.forEach((i) => {
            const ltrVal = ltrPolyfillValues[i];
            if (typeof ltrVal === "string") {
              const ltrPolyfill = PROPERTIES_I18N[ltrVal];
              const rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i] = ltrPolyfill;
              rtlPolyfillValues[i] = rtlPolyfill;
              const ltr = atomicCompile(prop, ltrPolyfillValues);
              const rtl = atomicCompile(prop, rtlPolyfillValues);
              localizeableValue = [ltr, rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(prop, value);
      } else {
        compiledStyle["$$css$localize"] = true;
      }
      compiledStyle[prop] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}
function classic(style, name) {
  const compiledStyle = { $$css: true };
  const compiledRules = [];
  const { animationKeyframes, ...rest } = style;
  const identifier = createIdentifier("css", name, style);
  const selector = `.${identifier}`;
  let animationName;
  if (animationKeyframes != null) {
    const [animationNames, keyframesRules] = processKeyframesValue(animationKeyframes);
    animationName = animationNames.join(",");
    compiledRules.push(...keyframesRules);
  }
  const block = createDeclarationBlock({ ...rest, animationName });
  compiledRules.push(`${selector}${block}`);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}
function inline(originalStyle, isRTL) {
  const style = originalStyle || compiler_emptyObject;
  const frozenProps = {};
  const nextStyle = {};
  for (const originalProp in style) {
    const originalValue = style[originalProp];
    let prop = originalProp;
    let value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      continue;
    }
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === "start") {
        value = isRTL ? "right" : "left";
      } else if (originalValue === "end") {
        value = isRTL ? "left" : "right";
      }
    }
    const propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    if (originalProp === "transitionProperty") {
      const originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === "string") {
          const valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
          }
        }
      });
    }
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      frozenProps[prop] = true;
    }
  }
  return createReactDOMStyle_default(nextStyle, true);
}
function stringifyValueWithProperty(value, property) {
  const normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
}
function createAtomicRules(identifier, property, value) {
  const rules = [];
  const selector = `.${identifier}`;
  switch (property) {
    case "animationKeyframes": {
      const [animationNames, keyframesRules] = processKeyframesValue(value);
      const block = createDeclarationBlock({
        animationName: animationNames.join(",")
      });
      rules.push(`${selector}${block}`, ...keyframesRules);
      break;
    }
    case "placeholderTextColor": {
      const block = createDeclarationBlock({ color: value, opacity: 1 });
      rules.push(
        `${selector}::-webkit-input-placeholder${block}`,
        `${selector}::-moz-placeholder${block}`,
        `${selector}:-ms-input-placeholder${block}`,
        `${selector}::placeholder${block}`
      );
      break;
    }
    case "pointerEvents": {
      let finalValue = value;
      if (value === "auto" || value === "box-only") {
        finalValue = "auto!important";
        if (value === "box-only") {
          const block2 = createDeclarationBlock({ pointerEvents: "none" });
          rules.push(`${selector}>*${block2}`);
        }
      } else if (value === "none" || value === "box-none") {
        finalValue = "none!important";
        if (value === "box-none") {
          const block2 = createDeclarationBlock({ pointerEvents: "auto" });
          rules.push(`${selector}>*${block2}`);
        }
      }
      const block = createDeclarationBlock({ pointerEvents: finalValue });
      rules.push(`${selector}${block}`);
      break;
    }
    case "scrollbarWidth": {
      if (value === "none") {
        rules.push(`${selector}::-webkit-scrollbar{display:none}`);
      }
      const block = createDeclarationBlock({ scrollbarWidth: value });
      rules.push(`${selector}${block}`);
      break;
    }
    default: {
      const block = createDeclarationBlock({ [property]: value });
      rules.push(`${selector}${block}`);
      break;
    }
  }
  return rules;
}
function createDeclarationBlock(style) {
  const domStyle = createReactDOMStyle_default(style);
  const declarationsString = Object.keys(domStyle).map((property) => {
    const value = domStyle[property];
    const prop = hyphenateStyleName_default(property);
    if (Array.isArray(value)) {
      return value.map((v) => `${prop}:${v}`).join(";");
    } else {
      return `${prop}:${value}`;
    }
  }).sort().join(";");
  return `{${declarationsString};}`;
}
function createIdentifier(prefix, name, value) {
  const hashedString = simpleHash(name + stringifyValueWithProperty(value, name));
  return  false ? 0 : `${prefix}-${hashedString}`;
}
function createKeyframes(keyframes) {
  const prefixes = ["-webkit-", ""];
  const identifier = createIdentifier("r", "animation", keyframes);
  const steps = "{" + Object.keys(keyframes).map((stepName) => {
    const rule = keyframes[stepName];
    const block = createDeclarationBlock(rule);
    return `${stepName}${block}`;
  }).join("") + "}";
  const rules = prefixes.map((prefix) => {
    return `@${prefix}keyframes ${identifier}${steps}`;
  });
  return [identifier, rules];
}
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === "number") {
    throw new Error(`Invalid CSS keyframes type: ${typeof keyframesValue}`);
  }
  const animationNames = [];
  const rules = [];
  const value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach((keyframes) => {
    if (typeof keyframes === "string") {
      animationNames.push(keyframes);
    } else {
      const [identifier, keyframesRules] = createKeyframes(keyframes);
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/dom/index.js + 2 modules
var dom = __webpack_require__(1567);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/preprocess.js


const preprocess_emptyObject = {};
const defaultOffset = { height: 0, width: 0 };
const createBoxShadowValue = (style) => {
  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = style;
  const { height, width } = shadowOffset || defaultOffset;
  const offsetX = normalizeValueWithProperty(width);
  const offsetY = normalizeValueWithProperty(height);
  const blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  const color = normalizeColor_default(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
const createTextShadowValue = (style) => {
  const { textShadowColor, textShadowOffset, textShadowRadius } = style;
  const { height, width } = textShadowOffset || defaultOffset;
  const radius = textShadowRadius || 0;
  const offsetX = normalizeValueWithProperty(width);
  const offsetY = normalizeValueWithProperty(height);
  const blurRadius = normalizeValueWithProperty(radius);
  const color = normalizeValueWithProperty(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
const preprocess = (originalStyle) => {
  const style = originalStyle || preprocess_emptyObject;
  const nextStyle = {};
  for (const originalProp in style) {
    const originalValue = style[originalProp];
    let prop = originalProp;
    let value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      continue;
    }
    if (prop === "shadowColor" || prop === "shadowOffset" || prop === "shadowOpacity" || prop === "shadowRadius") {
      const boxShadowValue = createBoxShadowValue(style);
      if (boxShadowValue != null && nextStyle.boxShadow == null) {
        const { boxShadow } = style;
        prop = "boxShadow";
        value = boxShadow ? `${boxShadow}, ${boxShadowValue}` : boxShadowValue;
      } else {
        continue;
      }
    }
    if (prop === "textShadowColor" || prop === "textShadowOffset" || prop === "textShadowRadius") {
      const textShadowValue = createTextShadowValue(style);
      if (textShadowValue != null && nextStyle.textShadow == null) {
        const { textShadow } = style;
        prop = "textShadow";
        value = textShadow ? `${textShadow}, ${textShadowValue}` : textShadowValue;
      } else {
        continue;
      }
    }
    nextStyle[prop] = value;
  }
  return nextStyle;
};
const processStyle = (/* unused pure expression or super */ null && (preprocess));

//# sourceMappingURL=preprocess.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/index.js







const staticStyleMap = /* @__PURE__ */ new WeakMap();
const sheet = (0,dom/* createSheet */.S)();
function customStyleq(styles, isRTL) {
  return external_styleq_.styleq.factory({
    transform(style) {
      const compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return (0,transform_localize_style_.localizeStyle)(compiledStyle, isRTL);
      }
      return style;
    }
  })(styles);
}
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach(([rules, order]) => {
    if (sheet != null) {
      rules.forEach((rule) => {
        sheet.insert(rule, order);
      });
    }
  });
}
function compileAndInsertAtomic(style) {
  const [compiledStyle, compiledOrderedRules] = atomic(preprocess(style));
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
function compileAndInsertReset(style, key) {
  const [compiledStyle, compiledOrderedRules] = classic(style, key);
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
const absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
const absoluteFill = create({ x: { ...absoluteFillObject } }).x;
function create(styles) {
  Object.keys(styles).forEach((key) => {
    const styleObj = styles[key];
    if (styleObj != null && styleObj.$$css !== true) {
      let compiledStyles;
      if (key.indexOf("$raw") > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
      } else {
        if (false) {}
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles;
}
function compose(style1, style2) {
  if (false) {}
  if (style1 && style2) {
    return [style1, style2];
  } else {
    return style1 || style2;
  }
}
function flatten(...styles) {
  const flatArray = styles.flat(Infinity);
  const result = {};
  for (let i = 0; i < flatArray.length; i++) {
    const style = flatArray[i];
    if (style != null && typeof style === "object") {
      Object.assign(result, style);
    }
  }
  return result;
}
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}
function StyleSheet(styles, options) {
  const isRTL = options != null && options.writingDirection === "rtl";
  const styleProps = customStyleq(styles, isRTL);
  if (Array.isArray(styleProps) && styleProps[1] != null) {
    styleProps[1] = inline(preprocess(styleProps[1]), isRTL);
  }
  return styleProps;
}
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;
setTimeout(() => {
  if (canUseDOM/* default */.Z && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
  }
}, 100);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TextAncestorContext)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TextAncestorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var TextAncestorContext_default = TextAncestorContext;

//# sourceMappingURL=TextAncestorContext.js.map


/***/ }),

/***/ 9680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UIManager_default)
});

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/getBoundingClientRect/index.js
const getBoundingClientRect = (node) => {
  if (node != null) {
    const isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
var getBoundingClientRect_default = getBoundingClientRect;

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__(3040);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/setValueForStyles/dangerousStyleValue.js

function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(unitlessNumbers/* default.hasOwnProperty */.Z.hasOwnProperty(name) && unitlessNumbers/* default */.Z[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
var dangerousStyleValue_default = dangerousStyleValue;

//# sourceMappingURL=dangerousStyleValue.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/setValueForStyles/index.js

function setValueForStyles(node, styles) {
  const style = node.style;
  for (let styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    const isCustomProperty = styleName.indexOf("--") === 0;
    const styleValue = dangerousStyleValue_default(
      styleName,
      styles[styleName],
      isCustomProperty
    );
    if (styleName === "float") {
      styleName = "cssFloat";
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}
var setValueForStyles_default = setValueForStyles;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/UIManager/index.js


const getRect = (node) => {
  const { x, y, top, left } = getBoundingClientRect_default(node);
  const width = node.offsetWidth;
  const height = node.offsetHeight;
  return { x, y, width, height, top, left };
};
const measureLayout = (node, relativeToNativeNode, callback) => {
  const relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      const relativeRect = getBoundingClientRect_default(relativeNode);
      const { height, left, top, width } = getRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};
const focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
const UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {
    }
  },
  focus(node) {
    try {
      const name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && focusableElements[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {
    }
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        const { height, left, top, width } = getRect(node);
        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (const prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      const value = props[prop];
      switch (prop) {
        case "style": {
          setValueForStyles_default(node, value);
          break;
        }
        case "class":
        case "className": {
          node.setAttribute("class", value);
          break;
        }
        case "text":
        case "value":
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
var UIManager_default = UIManager;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ canUseDOM_default)
/* harmony export */ });
/* unused harmony export canUseDOM */
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDOM_default = canUseDOM;

//# sourceMappingURL=canUseDOM.js.map


/***/ }),

/***/ 6376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tf": () => (/* binding */ forwardedProps),
/* harmony export */   "_0": () => (/* binding */ forwardPropsListView),
/* harmony export */   "_N": () => (/* binding */ forwardPropsListText)
/* harmony export */ });
/* unused harmony exports accessibilityProps, clickProps, defaultProps, focusProps, keyboardProps, mouseProps, styleProps, touchProps */
const defaultProps = {
  children: true,
  dataSet: true,
  nativeID: true,
  ref: true,
  suppressHydrationWarning: true,
  testID: true,
  id: true
};
const accessibilityProps = {
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true,
  dir: true,
  focusable: true
};
const clickProps = {
  onClick: true,
  onClickCapture: true,
  onContextMenu: true
};
const focusProps = {
  onBlur: true,
  onFocus: true
};
const keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
const mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
const touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
const styleProps = {
  classList: true,
  style: true
};
const forwardedProps = {
  defaultProps,
  accessibilityProps,
  clickProps,
  focusProps,
  keyboardProps,
  mouseProps,
  touchProps,
  styleProps
};
const forwardPropsListText = {
  ...defaultProps,
  ...accessibilityProps,
  ...clickProps,
  ...focusProps,
  ...keyboardProps,
  ...mouseProps,
  ...touchProps,
  ...styleProps,
  href: true,
  lang: true,
  pointerEvents: true
};
const forwardPropsListView = {
  ...forwardPropsListText,
  onScroll: true,
  onWheel: true
};

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ warning),
/* harmony export */   "k": () => (/* binding */ invariant)
/* harmony export */ });
function invariant(condition, log, ...logVars) {
  if (!condition) {
    throw new Error(
       false ? 0 : log
    );
  }
}
function warning(condition, log, ...logVars) {
  if (false) {}
}

//# sourceMappingURL=invariant.js.map


/***/ }),

/***/ 5309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ mergeRefs)
/* harmony export */ });
function mergeRefs(...args) {
  return function forwardRef(node) {
    args.forEach((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        ref.current = node;
        return;
      }
      console.error(
        `mergeRefs cannot handle Refs of type boolean, number or string, received ref ${String(
          ref
        )}`
      );
    });
  };
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ pick)
/* harmony export */ });
function pick(obj, list) {
  const nextObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ unitlessNumbers_default),
/* harmony export */   "y": () => (/* binding */ unitlessNumbers)
/* harmony export */ });
const unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
const prefixes = ["ms", "Moz", "O", "Webkit"];
const prefixKey = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers).forEach((prop) => {
  prefixes.forEach((prefix) => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var unitlessNumbers_default = unitlessNumbers;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useElementLayout)
});

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/canUseDOM.js
var canUseDOM = __webpack_require__(7268);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/UIManager/index.js + 3 modules
var UIManager = __webpack_require__(9680);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLayoutEffect/index.js


const useLayoutEffectImpl = canUseDOM/* default */.Z ? external_react_.useLayoutEffect : external_react_.useEffect;
var useLayoutEffect_default = useLayoutEffectImpl;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useElementLayout/index.js



const DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
let didWarn = !canUseDOM/* default */.Z;
let resizeObserver = null;
function getResizeObserver() {
  if (canUseDOM/* default */.Z && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          const node = entry.target;
          const onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            UIManager/* default.measure */.Z.measure(node, (x, y, width, height, left, top) => {
              const event = {
                // @ts-ignore
                nativeEvent: {
                  layout: { x, y, width, height, left, top }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, "target", {
                enumerable: true,
                get: () => entry.target
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (false) {}
  }
  return resizeObserver;
}
function useElementLayout(ref, onLayout) {
  const observer = getResizeObserver();
  useLayoutEffect_default(() => {
    const node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  useLayoutEffect_default(() => {
    const node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Iw": () => (/* binding */ LocaleProvider),
  "w1": () => (/* binding */ getLocaleDirection),
  "PE": () => (/* binding */ useLocaleContext)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLocale/isLocaleRTL.js
const rtlScripts = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
const rtlLangs = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]);
const cache = /* @__PURE__ */ new Map();
function isLocaleRTL(locale) {
  const cachedRTL = cache.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  let isRTL = false;
  if (Intl.Locale) {
    const script = new Intl.Locale(locale).maximize().script;
    isRTL = rtlScripts.has(script);
  } else {
    const lang = locale.split("-")[0];
    isRTL = rtlLangs.has(lang);
  }
  cache.set(locale, isRTL);
  return isRTL;
}

//# sourceMappingURL=isLocaleRTL.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLocale/index.js



const defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
const LocaleContext = (0,external_react_.createContext)(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? "rtl" : "ltr";
}
function LocaleProvider(props) {
  const { direction, locale, children } = props;
  const needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
    LocaleContext.Provider,
    {
      value: {
        direction: locale ? getLocaleDirection(locale) : direction,
        locale
      },
      children
    }
  ) : children;
}
function useLocaleContext() {
  return (0,external_react_.useContext)(LocaleContext);
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useMergeRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeRefs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5309);


function useMergeRefs(...args) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_mergeRefs_index__WEBPACK_IMPORTED_MODULE_1__/* .mergeRefs */ .l)(...args),
    // eslint-disable-next-line
    [...args]
  );
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ usePlatformMethods)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/UIManager/index.js + 3 modules
var UIManager = __webpack_require__(9680);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useStable/index.js

const UNINITIALIZED = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  const ref = external_react_.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  return ref.current;
}

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/usePlatformMethods/index.js


function usePlatformMethods({
  pointerEvents,
  style
}) {
  const ref = useStable(() => (hostNode) => {
    if (hostNode != null) {
      hostNode.measure = (callback) => UIManager/* default.measure */.Z.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => UIManager/* default.measureLayout */.Z.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = (callback) => UIManager/* default.measureInWindow */.Z.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}
var usePlatformMethods_default = (/* unused pure expression or super */ null && (usePlatformMethods));

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ View_default)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4189);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2653);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3868);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6376);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6789);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2505);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2363);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2382);
/* harmony import */ var react_native_web_internals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6395);
/* harmony import */ var _createElement_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(277);




const pickProps = (props) => (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, react_native_web_internals__WEBPACK_IMPORTED_MODULE_2__/* .forwardPropsListView */ ._0);
const View = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const {
      hrefAttrs,
      onLayout,
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture,
      ...rest
    } = props;
    if (false) {}
    const hasTextAncestor = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_native_web_internals__WEBPACK_IMPORTED_MODULE_3__/* .TextAncestorContext */ .M);
    const hostRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { direction: contextDirection } = (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(hostRef, onLayout);
    (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_6__/* .useResponderEvents */ .Gy)(hostRef, {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    });
    let component = "div";
    const langDirection = props.lang != null ? (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_4__/* .getLocaleDirection */ .w1)(props.lang) : null;
    const componentDirection = props.dir || langDirection;
    const writingDirection = componentDirection || contextDirection;
    const supportedProps = pickProps(rest);
    supportedProps.dir = componentDirection;
    supportedProps.style = [
      styles.view$raw,
      hasTextAncestor && styles.inline,
      props.style
    ];
    if (props.href != null) {
      component = "a";
      if (hrefAttrs != null) {
        const { download, rel, target } = hrefAttrs;
        if (download != null) {
          supportedProps.download = download;
        }
        if (rel != null) {
          supportedProps.rel = rel;
        }
        if (typeof target === "string") {
          supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
        }
      }
    }
    const platformMethodsRef = (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_7__/* .usePlatformMethods */ .V)(supportedProps);
    const setRef = (0,react_native_web_internals__WEBPACK_IMPORTED_MODULE_8__/* .useMergeRefs */ .q)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    return (0,_createElement_index__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(component, supportedProps, { writingDirection });
  }
);
View.displayName = "View";
const styles = react_native_web_internals__WEBPACK_IMPORTED_MODULE_10__/* ["default"].create */ .Z.create({
  view$raw: {
    alignItems: "stretch",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0
  },
  inline: {
    display: "inline-flex"
  }
});
var View_default = View;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createElement_default)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/AccessibilityUtil/isDisabled.js
const isDisabled = (props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1;
var isDisabled_default = isDisabled;

//# sourceMappingURL=isDisabled.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/AccessibilityUtil/propsToAriaRole.js
const accessibilityRoleToWebRole = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
};
const propsToAriaRole = ({ accessibilityRole }) => {
  if (accessibilityRole) {
    const inferredRole = accessibilityRoleToWebRole[accessibilityRole];
    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }
};
var propsToAriaRole_default = propsToAriaRole;

//# sourceMappingURL=propsToAriaRole.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/AccessibilityUtil/propsToAccessibilityComponent.js

const roleComponents = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  region: "section",
  strong: "strong"
};
const emptyObject = {};
const propsToAccessibilityComponent = (props = emptyObject) => {
  if (props.accessibilityRole === "label") {
    return "label";
  }
  const role = propsToAriaRole_default(props);
  if (role) {
    if (role === "heading") {
      const level = props.accessibilityLevel || props["aria-level"];
      if (level != null) {
        return `h${level}`;
      }
      return "h1";
    }
    return roleComponents[role];
  }
};
var propsToAccessibilityComponent_default = propsToAccessibilityComponent;

//# sourceMappingURL=propsToAccessibilityComponent.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/AccessibilityUtil/index.js



const AccessibilityUtil = {
  isDisabled: isDisabled_default,
  propsToAccessibilityComponent: propsToAccessibilityComponent_default,
  propsToAriaRole: propsToAriaRole_default
};
var AccessibilityUtil_default = AccessibilityUtil;

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/index.js + 11 modules
var StyleSheet = __webpack_require__(2653);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/createDOMProps/index.js


const createDOMProps_emptyObject = {};
const createDOMProps_hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;
const uppercasePattern = /[A-Z]/g;
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateString(str) {
  return str.replace(uppercasePattern, toHyphenLower);
}
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
const pointerEventsStyles = StyleSheet/* default.create */.Z.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
});
const createDOMProps = (elementType, props, options) => {
  if (!props) {
    props = createDOMProps_emptyObject;
  }
  const {
    accessibilityActiveDescendant,
    accessibilityAtomic,
    accessibilityAutoComplete,
    accessibilityBusy,
    accessibilityChecked,
    accessibilityColumnCount,
    accessibilityColumnIndex,
    accessibilityColumnSpan,
    accessibilityControls,
    accessibilityCurrent,
    accessibilityDescribedBy,
    accessibilityDetails,
    accessibilityDisabled,
    accessibilityErrorMessage,
    accessibilityExpanded,
    accessibilityFlowTo,
    accessibilityHasPopup,
    accessibilityHidden,
    accessibilityInvalid,
    accessibilityKeyShortcuts,
    accessibilityLabel,
    accessibilityLabelledBy,
    accessibilityLevel,
    accessibilityLiveRegion,
    accessibilityModal,
    accessibilityMultiline,
    accessibilityMultiSelectable,
    accessibilityOrientation,
    accessibilityOwns,
    accessibilityPlaceholder,
    accessibilityPosInSet,
    accessibilityPressed,
    accessibilityReadOnly,
    accessibilityRequired,
    /* eslint-disable */
    accessibilityRole,
    /* eslint-enable */
    accessibilityRoleDescription,
    accessibilityRowCount,
    accessibilityRowIndex,
    accessibilityRowSpan,
    accessibilitySelected,
    accessibilitySetSize,
    accessibilitySort,
    accessibilityValueMax,
    accessibilityValueMin,
    accessibilityValueNow,
    accessibilityValueText,
    dataSet,
    focusable,
    nativeID,
    pointerEvents,
    style,
    testID,
    id,
    // Rest
    ...domProps
  } = props;
  const disabled = accessibilityDisabled;
  const role = AccessibilityUtil_default.propsToAriaRole(props);
  if (accessibilityActiveDescendant != null) {
    domProps["aria-activedescendant"] = accessibilityActiveDescendant;
  }
  if (accessibilityAtomic != null) {
    domProps["aria-atomic"] = accessibilityAtomic;
  }
  if (accessibilityAutoComplete != null) {
    domProps["aria-autocomplete"] = accessibilityAutoComplete;
  }
  if (accessibilityBusy != null) {
    domProps["aria-busy"] = accessibilityBusy;
  }
  if (accessibilityChecked != null) {
    domProps["aria-checked"] = accessibilityChecked;
  }
  if (accessibilityColumnCount != null) {
    domProps["aria-colcount"] = accessibilityColumnCount;
  }
  if (accessibilityColumnIndex != null) {
    domProps["aria-colindex"] = accessibilityColumnIndex;
  }
  if (accessibilityColumnSpan != null) {
    domProps["aria-colspan"] = accessibilityColumnSpan;
  }
  if (accessibilityControls != null) {
    domProps["aria-controls"] = processIDRefList(accessibilityControls);
  }
  if (accessibilityCurrent != null) {
    domProps["aria-current"] = accessibilityCurrent;
  }
  if (accessibilityDescribedBy != null) {
    domProps["aria-describedby"] = processIDRefList(accessibilityDescribedBy);
  }
  if (accessibilityDetails != null) {
    domProps["aria-details"] = accessibilityDetails;
  }
  if (disabled === true) {
    domProps["aria-disabled"] = true;
    if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.disabled = true;
    }
  }
  if (accessibilityErrorMessage != null) {
    domProps["aria-errormessage"] = accessibilityErrorMessage;
  }
  if (accessibilityExpanded != null) {
    domProps["aria-expanded"] = accessibilityExpanded;
  }
  if (accessibilityFlowTo != null) {
    domProps["aria-flowto"] = processIDRefList(accessibilityFlowTo);
  }
  if (accessibilityHasPopup != null) {
    domProps["aria-haspopup"] = accessibilityHasPopup;
  }
  if (accessibilityHidden === true) {
    domProps["aria-hidden"] = accessibilityHidden;
  }
  if (accessibilityInvalid != null) {
    domProps["aria-invalid"] = accessibilityInvalid;
  }
  if (accessibilityKeyShortcuts != null && Array.isArray(accessibilityKeyShortcuts)) {
    domProps["aria-keyshortcuts"] = accessibilityKeyShortcuts.join(" ");
  }
  if (accessibilityLabel != null) {
    domProps["aria-label"] = accessibilityLabel;
  }
  if (accessibilityLabelledBy != null) {
    domProps["aria-labelledby"] = processIDRefList(accessibilityLabelledBy);
  }
  if (accessibilityLevel != null) {
    domProps["aria-level"] = accessibilityLevel;
  }
  if (accessibilityLiveRegion != null) {
    domProps["aria-live"] = accessibilityLiveRegion === "none" ? "off" : accessibilityLiveRegion;
  }
  if (accessibilityModal != null) {
    domProps["aria-modal"] = accessibilityModal;
  }
  if (accessibilityMultiline != null) {
    domProps["aria-multiline"] = accessibilityMultiline;
  }
  if (accessibilityMultiSelectable != null) {
    domProps["aria-multiselectable"] = accessibilityMultiSelectable;
  }
  if (accessibilityOrientation != null) {
    domProps["aria-orientation"] = accessibilityOrientation;
  }
  if (accessibilityOwns != null) {
    domProps["aria-owns"] = processIDRefList(accessibilityOwns);
  }
  if (accessibilityPlaceholder != null) {
    domProps["aria-placeholder"] = accessibilityPlaceholder;
  }
  if (accessibilityPosInSet != null) {
    domProps["aria-posinset"] = accessibilityPosInSet;
  }
  if (accessibilityPressed != null) {
    domProps["aria-pressed"] = accessibilityPressed;
  }
  if (accessibilityReadOnly != null) {
    domProps["aria-readonly"] = accessibilityReadOnly;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.readOnly = true;
    }
  }
  if (accessibilityRequired != null) {
    domProps["aria-required"] = accessibilityRequired;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.required = true;
    }
  }
  if (role != null) {
    domProps["role"] = role === "none" ? "presentation" : role;
  }
  if (accessibilityRoleDescription != null) {
    domProps["aria-roledescription"] = accessibilityRoleDescription;
  }
  if (accessibilityRowCount != null) {
    domProps["aria-rowcount"] = accessibilityRowCount;
  }
  if (accessibilityRowIndex != null) {
    domProps["aria-rowindex"] = accessibilityRowIndex;
  }
  if (accessibilityRowSpan != null) {
    domProps["aria-rowspan"] = accessibilityRowSpan;
  }
  if (accessibilitySelected != null) {
    domProps["aria-selected"] = accessibilitySelected;
  }
  if (accessibilitySetSize != null) {
    domProps["aria-setsize"] = accessibilitySetSize;
  }
  if (accessibilitySort != null) {
    domProps["aria-sort"] = accessibilitySort;
  }
  if (accessibilityValueMax != null) {
    domProps["aria-valuemax"] = accessibilityValueMax;
  }
  if (accessibilityValueMin != null) {
    domProps["aria-valuemin"] = accessibilityValueMin;
  }
  if (accessibilityValueNow != null) {
    domProps["aria-valuenow"] = accessibilityValueNow;
  }
  if (accessibilityValueText != null) {
    domProps["aria-valuetext"] = accessibilityValueText;
  }
  const tmgCN = dataSet ? dataSet.className : void 0;
  const tmgID = dataSet ? dataSet.id : void 0;
  if (dataSet != null) {
    for (const dataProp in dataSet) {
      if (dataProp === "className" || dataProp === "id")
        continue;
      if (createDOMProps_hasOwnProperty.call(dataSet, dataProp)) {
        const dataName = hyphenateString(dataProp);
        const dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps[`data-${dataName}`] = dataValue;
        }
      }
    }
  }
  if (focusable === false) {
    domProps.tabIndex = "-1";
  }
  if (
    // These native elements are keyboard focusable by default
    elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
  ) {
    if (focusable === false || accessibilityDisabled === true) {
      domProps.tabIndex = "-1";
    }
  } else if (
    // These roles are made keyboard focusable by default
    role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
  ) {
    if (focusable !== false) {
      domProps.tabIndex = "0";
    }
  } else {
    if (focusable === true) {
      domProps.tabIndex = "0";
    }
  }
  const [className, inlineStyle] = (0,StyleSheet/* default */.Z)(
    [style, pointerEvents && pointerEventsStyles[pointerEvents]],
    { writingDirection: options ? options.writingDirection : "ltr" }
  );
  if (className) {
    domProps.className = className;
  }
  if (tmgCN) {
    domProps.className = tmgCN;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }
  const _id = tmgID || id || nativeID;
  if (_id) {
    domProps.id = _id;
  }
  if (testID != null) {
    domProps["data-testid"] = testID;
  }
  return domProps;
};
var createDOMProps_default = createDOMProps;

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLocale/index.js + 1 modules
var useLocale = __webpack_require__(6789);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/createElement/index.js



const createElement = (component, props, options) => {
  let accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = AccessibilityUtil_default.propsToAccessibilityComponent(props);
  }
  const Component = accessibilityComponent || component;
  const domProps = createDOMProps_default(Component, props, options);
  const element = external_react_default().createElement(Component, domProps);
  const elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ (0,jsx_runtime.jsx)(useLocale/* LocaleProvider */.Iw, { direction: domProps.dir, locale: domProps.lang, children: element }) : element;
  return elementWithLocaleProvider;
};
var createElement_default = createElement;

//# sourceMappingURL=index.js.map


/***/ })

};
;