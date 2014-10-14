/*------------------------------------------------------------------
Project:    Wolfram
Author:     Yevgeny Simzikov
URL:        http://simpleqode.com/
            https://twitter.com/YevSim
Version:    1.0
Created:        18/08/2014
Last change:    29/08/2014
-------------------------------------------------------------------*/

/*
 * Preloader :: Adjust your preloader appearance here.
 */

$(document).ready(function () {
  $("body.preloader").queryLoader2({
      barColor: "#FFF",
      backgroundColor: "#151515",
      percentage: true,
      barHeight: 1,
      completeAnimation: "fade",
      minimumTime: 200
  });
});