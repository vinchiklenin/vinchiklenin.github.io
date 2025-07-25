


function updateSize(newVal, testerNum){
    var newFontSize = newVal + 'px';
    $('.' + testerNum).css('font-size', newFontSize);
    (document.querySelector('#' + testerNum + '-fs')).textContent = newFontSize;
  }
  
  
  function updateFont(newVal, testerNum) {
    var newVale = newVal;
    $('.' + testerNum).css('font-weight', newVal);
    
  }
  
  