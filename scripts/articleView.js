// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

(function() {

var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      var val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};
articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
		var $selectedAuthor = $('article[data-attribute="' + $(this).val() +'"]');
		$('article').not($selectedAuthor).hide();
		} else {
	    $('article').not('.template').show();
    }
    $('#author-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
    if ($(this).val()) {
		var $selectedCategory = $('article[data-category="' + $(this).val() +'"]');
		$('article').not($selectedCategory).hide();
		} else {
	    $('article').not('.template').show();
    }
    $('#category-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
	  var tab_id = $(this).attr('data-content');
	  var $selectedTab = $('#'+tab_id);
	  $('section.tab-content').hide();
	  $selectedTab.show();
   });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('section#articles .read-on').on('click', function(e) {
	  e.preventDefault();
	  var readOnLink = $(e.target);
	  readOnLink.hide();
	  readOnLink.parent().find('p').show();
  });
};

$(document).ready(function(){
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});

})();
