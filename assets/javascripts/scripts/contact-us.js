var ContactUs = function () {
  return {

    //main function to initiate the module
    init: function () {
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };
      var map;
      $(document).ready(function(){
        map = new GMaps({
          div: '#map',
          lat: -33.4444027,
          lng: -70.6517394
        });
        var marker = map.addMarker({
          lat: -33.4444027,
          lng: -70.6517394,
          title: 'zimplePR',
          infoWindow: {
            content: "<b>Instituto Basilea.</b> Av. Libertador Bernardo O'Higgins #1112 of 504."
          }
        });

        marker.infoWindow.open(map, marker);
      });


      $('.contact-form').validate({
        doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
        errorElement: 'span', //default input error message container
        errorClass: 'help-block', // default input error message class
        focusInvalid: false, // do not focus the last invalid input

        rules: {
          'name' : { required:true },
          'email' : { required:true, email: true },
          'phone' : { required:true, phone: true },
          'message' : { required:true }
        },
        success: function (label) {
          label
            .closest('.form-group').removeClass('has-error'); // set success class to the control group
        }
      });

      $('#send_contact').click(function () {
        var $contact_form = $(".contact-form");
        var data = $contact_form.serialize();
        if($contact_form.valid()) {
          $.post('/contact_form', data, function () {
            alert('Te contactaremos tan pronto como sea posible!');
          });
        }
      });
    }
  };


}();


