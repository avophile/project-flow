---
---
(function($) {
  $(document).ready(function(){

    // Show search results box when user searchs for something
    $('#search-input').keyup(function () {
      if( $(this).val() ) {
        $("#search-results-box").show();
        $("#content").hide();
      } else {
        $("#search-results-box").hide();
        $("#content").show();
      }
    });
    // Allo focusing in search while clicking search
    $('#search-container a').click(function (evt){
      $('#search-container input').focus();
      evt.preventDefault();
    });
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: "{{ site.baseurl }}/search.json",
      fuzzy: false,
      searchResultTemplate: '<li><a href="{url}">{title}</a><small> osiossa <strong>{category}</strong></small<div class="search-content" data-content={content}></div></li>',
      noResultsText: 'Ei hakutuloksia! Yritä etsiä uudelleen tai tee issue<a href="{{site.github_url}}/issues/"> Githubissa</a>.'
    });
  });
})(jQuery);
