// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Utils$YourProjectName from "./Utils.bs.js";

function reducer(state, action) {
  if (typeof action === "number") {
    return {
            times: [],
            isRunning: false
          };
  }
  switch (action.TAG | 0) {
    case /* Start */0 :
        var startTime = action._0;
        return {
                times: $$Array.concat({
                      hd: state.times,
                      tl: {
                        hd: [[
                            startTime,
                            startTime
                          ]],
                        tl: /* [] */0
                      }
                    }),
                isRunning: true
              };
    case /* Pause */1 :
        var lastIndex = state.times.length - 1 | 0;
        var match = Caml_array.get(state.times, lastIndex);
        return {
                times: Utils$YourProjectName.updateElementInArray(state.times, lastIndex, [
                      match[0],
                      action._0
                    ]),
                isRunning: false
              };
    case /* Tick */2 :
        var lastIndex$1 = state.times.length - 1 | 0;
        var match$1 = Caml_array.get(state.times, lastIndex$1);
        return {
                times: Utils$YourProjectName.updateElementInArray(state.times, lastIndex$1, [
                      match$1[0],
                      action._0
                    ]),
                isRunning: state.isRunning
              };
    
  }
}

export {
  reducer ,
  
}
/* No side effect */
