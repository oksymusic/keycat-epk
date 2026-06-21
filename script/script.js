//begin globals
var seek = 0
//end globals

//start document on load 
$(document).ready(loadSources);

function fwd(){
  var all = $('audio');
  if(all.length === 0){
    console.log("\nEmpty audio sources!\n");
    return;
  } else {console.log(`Sources loaded: ${all.length}`)}
  var currentIndex = seek;
  var nextIndex = (currentIndex+1) % all.length;
  var currentAudio = all.eq(currentIndex);
  var nextAudio = all.eq(nextIndex);
  currentAudio.removeClass('audioShow').addClass('audioHide').trigger('pause').prop('currentTime', 0);
  nextAudio.removeClass('audioHide').addClass('audioShow').trigger('play');
  seek = nextIndex;
}

function loadSources(){
  $('audio').each(function(i){
    var src = `../audio/demo0${i}.mp3`;
    this.src = src;
    this.load();
    $(this).data('trackNum', i);
    if (i === 0){$(this).addClass('audioShow').removeClass('audioHide');}
    else {$(this).addClass('audioHide').removeClass('audioShow');}
  });
}

function stopAllPlayback(){$(".audioPlayer .audioShow").trigger('pause').prop("currentTime", 0);}
