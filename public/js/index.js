const animationSentences = ["Hola, soy Víctor Huéscar López", 
                            "Hello, I'm Víctor Huéscar López"];
                            
part = "";
i = 0;
offset = 0;
len = animationSentences.length;
forwards = true;
skip_count = 0;
skip_delay = 15;
speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= animationSentences[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = animationSentences[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    document.getElementById("animatedTitle").textContent = part;
    // $('.word').text(part);
  },speed);
};

document.addEventListener("DOMContentLoaded", function() {
  // wordflick();
});
                        