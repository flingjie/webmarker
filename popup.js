function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    var title = tab.title;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url, title);
  });
}


function renderStatus(statusText) {
 
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('save').onclick = save;
  document.getElementById('cancel').onclick = cancel;
  getCurrentTabUrl(function(url, title) {
    document.getElementById('url').value = url;
    document.getElementById('title').value = title;
  });
});


function save(){
    var url = document.getElementById('url').value;
    var title = document.getElementById('title').value;
    var tags = document.getElementById('tags').value;
    var comment = document.getElementById('comment').value;

    //todo
}

function cancel(){
    window.close();
 }
