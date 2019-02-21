$(document).ready(function() {
  $("#username").after("<span class='error' id='err_message'></span>");
  $("#username").after("<span class='ok' id='ok_message'></span>");
  $("#username").after("<span class='info' id='info_message'></span>");

  $("#password").after("<span class='error' id='perr_message'></span>");
  $("#password").after("<span class='ok' id='pok_message'></span>");
  $("#password").after("<span class='info' id='pinfo_message'></span>");

  $("#email").after("<span class='error' id='eerr_message'></span>");
  $("#email").after("<span class='ok' id='eok_message'></span>");
  $("#email").after("<span class='info' id='einfo_message'></span>");

  $("#err_message").hide();
  $("#ok_message").hide();
  $("#info_message").hide();

  $("#perr_message").hide();
  $("#pok_message").hide();
  $("#pinfo_message").hide();

  $("#eerr_message").hide();
  $("#eok_message").hide();
  $("#einfo_message").hide();

  $("#username").focusout(function() {
    check_username();
  });

  $("#username").focusin(function() {
    hintInput();
  });

  function check_username() {
    var letters = /^[0-9a-zA-Z]+$/;
    var username_length = $("#username").val().length;

    if (letters.test($("#username").val())) {
      $("#ok_message").html("Ok");

      $("#err_message").hide();
      $("#ok_message").show();
      $("#info_message").hide();
    } else if (username_length < 1) {
      $("#err_message").hide();
      $("#ok_message").hide();
      $("#info_message").hide();
    } else {
      $("#err_message").html("Should be only alphabetical or numeric");
      $("#err_message").show();
      $("#ok_message").hide();
      $("#info_message").hide();
    }
  }
  function hintInput() {
    $("#info_message").html("Please input the right Username!");
    $("#err_message").hide();
    $("#ok_message").hide();
    $("#info_message").show();
  }

  $("#password").focusout(function() {
    check_password();
  });
  $("#password").focusin(function() {
    hintInput_password();
  });

  function check_password() {
    var password_length = $("#password").val().length;

    if (password_length > 5) {
      $("#pok_message").html("Ok");
      $("#perr_message").hide();
      $("#pok_message").show();
      $("#pinfo_message").hide();
    } else if (password_length < 1) {
      $("#perr_message").hide();
      $("#pok_message").hide();
      $("#pinfo_message").hide();
    } else {
      $("#perr_message").html("should be at least six characters");
      $("#perr_message").show();
      $("#pok_message").hide();
      $("#pinfo_message").hide();
    }
  }

  function hintInput_password() {
    $("#pinfo_message").html("Please input the right Password!");
    $("#perr_message").hide();
    $("#pok_message").hide();
    $("#pinfo_message").show();
  }

  $("#email").focusout(function() {
    check_email();
  });

  $("#email").focusin(function() {
    hintInput_email();
  });

  function check_email() {
    var specialChar = /@/;
    var email_length = $("#email").val().length;

    if (specialChar.test($("#email").val())) {
      $("#eok_message").html("Ok");
      $("#eerr_message").hide();
      $("#eok_message").show();
      $("#einfo_message").hide();
    } else if (email_length < 1) {
      $("#eerr_message").hide();
      $("#eok_message").hide();
      $("#einfo_message").hide();
    } else {
      $("#eerr_message").html("should contain @ ");
      $("#eerr_message").show();
      $("#eok_message").hide();
      $("#einfo_message").hide();
    }
  }
});
function hintInput_email() {
  $("#einfo_message").html("Please input the right Email!");
  $("#eerr_message").hide();
  $("#eok_message").hide();
  $("#einfo_message").show();
}
