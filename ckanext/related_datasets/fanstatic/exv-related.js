/* Request related datasets
 * 
 */  
this.ckan.module('exv-related', function($, _) {
    return {
    /* Initialises the module setting up elements and event listeners.
     *
     * Returns nothing.
     */
    initialize: function () {
      var q = $('#exv-related-datasets').attr('data-query');
      $.ajax({
        url: '/exv/fetch/related?q='+q+'&source='+window.location.origin
      }).done(function(msg){
        var cell = $('#exv-related-datasets li');
        $.each(msg['datasets'], function(key, value){
        var html = '<h4>'+value.name.substring(0,20)+'</h4><p>'+value.description.substring(0,70)+'</p><a href="'+value.sourceURL+'" class="btn btn-block btn-primary" target="_blank">See Data</a>';
          $(cell[key]).html(html);
        });
      });

    }
  }
});
