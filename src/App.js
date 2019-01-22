import React, { Component } from 'react';

class VideoDemo extends Component{
  componentDidMount(){
    const inputDom = document.getElementById('searchInput');
    inputDom.oninput=this.debounceX(this.saySomething,2000)
  }

  debounce(func, wait, immediate) {
    var timeout,
      result;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) 
          result = func.apply(context, args);
        };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) 
        result = func.apply(context, args);
      return result;
    };
  };

 debounceX (fn, wait) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, wait);
    };
  };

  saySomething(){
    console.log('request....................');
  }
  render(){
    return(
      <div>
        <div>
          <input id='searchInput' type='text' list='suggestList'></input>
        </div>
        <datalist id='suggestList'>
          <option>566</option>
          <option>34</option>
        </datalist>
      </div>

    )
  }
}

export default VideoDemo;