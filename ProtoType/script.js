var websites = [
    "https://x.thunkable.com/projects",
    "http://ai2.appinventor.mit.edu/#5648116983660544",
    "https://ide.mblock.cc",
    "https://studio.code.org/projects/applab/lb5NsZS5M1Uh7zL0Dwo0Kc6MbfH97RCNydZLGiAKLyE/edit",
  ];
  
  var searchInput = document.getElementById('search');
  var suggestionsList = document.getElementById('suggestion_box');
  
  searchInput.addEventListener('input', function() {
    var suggestiongiver = this.value.toLowerCase();
    var suggestions = [];
  
    if (suggestiongiver.length > 0) {
      suggestions = websites.filter(function(website) {
        return website.toLowerCase().indexOf(suggestiongiver) > -1;
      });
    }
  
    suggestionsList.innerHTML = '';
    suggestions.forEach(function(suggestion) {
      var li = document.createElement('li');
      li.textContent = suggestion;
      li.addEventListener('click', function() {
        openWebsite(suggestion);
      });
      suggestionsList.appendChild(li);
    });
  });
  
  function openWebsite(website) {
    window.location.href =   website;
  }
  
