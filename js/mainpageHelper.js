// This file will be the main site to transform the input of mainpageBuilder.js into HTML


var HTMLmodalBody = '<div class="modal fade" id="project%index%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel%index%" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel%index%">%data%</h4></div><div class="modal-body" id="target%index%"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

var HTMLmodalImage = '<picture><source media="(min-width: 400px)" srcset="images/%data%-600_2x.jpg 2x, images/%data%-600_1x.jpg 1x"><source media="(max-width: 399px)" srcset="images/%data%-400_2x.jpg 2x, images/%data%-400_1x.jpg 1x"><img class="img-responsive center-block" src="images/%data%-400_1x.jpg""></picture>';

var HTMLmodalSlogan = '<br><p class="text-center">%data%</p>';