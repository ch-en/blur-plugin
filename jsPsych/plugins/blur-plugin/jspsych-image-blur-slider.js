/*
 * Example plugin template
 */

jsPsych.plugins["jspsych-image-blur-slider"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "jspsych-image-blur-slider",
    parameters: {
      parameter_name: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: undefined
      },
      parameter_name: {
        type: jsPsych.plugins.parameterType.IMAGE,
        default: undefined
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // data saving
    var trial_data = {
      parameter_name: 'parameter value'
    };

    // end trial
    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
