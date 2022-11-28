"use strict";
var KTUsersAddSchedule = (function () {
  const t = document.getElementById("kt_modal_add_schedule"),
    e = t.querySelector("#kt_modal_add_schedule_form"),
    n = new bootstrap.Modal(t);
  return {
    init: function () {
      (() => {
        $("#kt_modal_add_schedule_datepicker").flatpickr({
          enableTime: !0,
          dateFormat: "Y-m-d H:i",
        });
        const o = e.querySelector("#kt_modal_add_schedule_tagify");
        new Tagify(o, {
          whitelist: [
            "sean@dellito.com",
            "brian@exchange.com",
            "mikaela@pexcom.com",
            "f.mitcham@kpmg.com.au",
            "olivia@corpmail.com",
            "owen.neil@gmail.com",
            "dam@consilting.com",
            "emma@intenso.com",
            "ana.cf@limtel.com",
            "robert@benko.com",
            "lucy.m@fentech.com",
            "ethan@loop.com.au",
          ],
          maxTags: 10,
          dropdown: {
            maxItems: 20,
            classname: "tagify__inline__suggestions",
            enabled: 0,
            closeOnSelect: !1,
          },
        });
        var i = FormValidation.formValidation(e, {
          fields: {
            event_datetime: {
              validators: {
                notEmpty: { message: "Event date & time is required" },
              },
            },
            event_name: {
              validators: { notEmpty: { message: "Event name is required" } },
            },
            event_org: {
              validators: {
                notEmpty: { message: "Event organiser is required" },
              },
            },
            event_invitees: {
              validators: {
                notEmpty: { message: "Event invitees is required" },
              },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
              rowSelector: ".fv-row",
              eleInvalidClass: "",
              eleValidClass: "",
            }),
          },
        });
        $(e.querySelector('[name="event_invitees"]')).on("change", function () {
          i.revalidateField("event_invitees");
        }),
          t
            .querySelector('[data-kt-users-modal-action="close"]')
            .addEventListener("click", (t) => {
              t.preventDefault(),
                Swal.fire({
                  text: "Are you sure you would like to cancel?",
                  icon: "warning",
                  showCancelButton: !0,
                  buttonsStyling: !1,
                  confirmButtonText: "Yes, cancel it!",
                  cancelButtonText: "No, return",
                  customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light",
                  },
                }).then(function (t) {
                  t.value
                    ? (e.reset(), n.hide())
                    : "cancel" === t.dismiss &&
                      Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      });
                });
            }),
          t
            .querySelector('[data-kt-users-modal-action="cancel"]')
            .addEventListener("click", (t) => {
              t.preventDefault(),
                Swal.fire({
                  text: "Are you sure you would like to cancel?",
                  icon: "warning",
                  showCancelButton: !0,
                  buttonsStyling: !1,
                  confirmButtonText: "Yes, cancel it!",
                  cancelButtonText: "No, return",
                  customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light",
                  },
                }).then(function (t) {
                  t.value
                    ? (e.reset(), n.hide())
                    : "cancel" === t.dismiss &&
                      Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      });
                });
            });
        const a = t.querySelector('[data-kt-users-modal-action="submit"]');
        a.addEventListener("click", function (t) {
          t.preventDefault(),
            i &&
              i.validate().then(function (t) {
                console.log("validated!"),
                  "Valid" == t
                    ? (a.setAttribute("data-kt-indicator", "on"),
                      (a.disabled = !0),
                      setTimeout(function () {
                        a.removeAttribute("data-kt-indicator"),
                          (a.disabled = !1),
                          Swal.fire({
                            text: "Form has been successfully submitted!",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: { confirmButton: "btn btn-primary" },
                          }).then(function (t) {
                            t.isConfirmed && n.hide();
                          });
                      }, 2e3))
                    : Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      });
              });
        });
      })();
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTUsersAddSchedule.init();
});
