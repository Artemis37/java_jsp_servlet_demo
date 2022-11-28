"use strict";
var KTModalCreateProjectBudget = (function () {
  var e, t, o, r, a;
  return {
    init: function () {
      (r = KTModalCreateProject.getForm()),
        (a = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="budget-next"]')),
        (t = document.querySelector('[data-kt-element="budget-previous"]')),
        (o = FormValidation.formValidation(r, {
          fields: {
            budget_setup: {
              validators: {
                notEmpty: { message: "Budget amount is required" },
                callback: {
                  message: "The budget amount must be greater than $100",
                  callback: function (e) {
                    var t = e.value;
                    if (((t = t.replace(/[$,]+/g, "")), parseFloat(t) < 100))
                      return !1;
                  },
                },
              },
            },
            budget_usage: {
              validators: {
                notEmpty: { message: "Budget usage type is required" },
              },
            },
            budget_allow: {
              validators: {
                notEmpty: { message: "Allowing budget is required" },
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
        })),
        KTDialer.getInstance(
          r.querySelector("#kt_modal_create_project_budget_setup")
        ).on("kt.dialer.changed", function () {
          o.revalidateField("budget_setup");
        }),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            (e.disabled = !0),
            o &&
              o.validate().then(function (t) {
                console.log("validated!"),
                  "Valid" == t
                    ? (e.setAttribute("data-kt-indicator", "on"),
                      setTimeout(function () {
                        e.removeAttribute("data-kt-indicator"),
                          (e.disabled = !1),
                          a.goNext();
                      }, 1500))
                    : ((e.disabled = !1),
                      Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      }));
              });
        }),
        t.addEventListener("click", function () {
          a.goPrevious();
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectBudget);
var KTModalCreateProjectComplete = (function () {
  var e;
  return {
    init: function () {
      KTModalCreateProject.getForm(),
        (e = KTModalCreateProject.getStepperObj()),
        document
          .querySelector('[data-kt-element="complete-start"]')
          .addEventListener("click", function () {
            e.goTo(1);
          });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectComplete);
var KTModalCreateProjectFiles = (function () {
  var e, t, o;
  return {
    init: function () {
      KTModalCreateProject.getForm(),
        (o = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="files-next"]')),
        (t = document.querySelector('[data-kt-element="files-previous"]')),
        new Dropzone("#kt_modal_create_project_files_upload", {
          url: "https://keenthemes.com/scripts/void.php",
          paramName: "file",
          maxFiles: 10,
          maxFilesize: 10,
          addRemoveLinks: !0,
          accept: function (e, t) {
            "justinbieber.jpg" == e.name ? t("Naha, you don't.") : t();
          },
        }),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            (e.disabled = !0),
            e.setAttribute("data-kt-indicator", "on"),
            setTimeout(function () {
              e.removeAttribute("data-kt-indicator"),
                (e.disabled = !1),
                o.goNext();
            }, 1500);
        }),
        t.addEventListener("click", function () {
          o.goPrevious();
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectFiles);
var KTModalCreateProject = (function () {
  var e, t, o;
  return {
    init: function () {
      (e = document.querySelector("#kt_modal_create_project_stepper")),
        (o = document.querySelector("#kt_modal_create_project_form")),
        (t = new KTStepper(e));
    },
    getStepperObj: function () {
      return t;
    },
    getForm: function () {
      return o;
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  document.querySelector("#kt_modal_create_project") &&
    (KTModalCreateProject.init(),
    KTModalCreateProjectType.init(),
    KTModalCreateProjectBudget.init(),
    KTModalCreateProjectSettings.init(),
    KTModalCreateProjectTeam.init(),
    KTModalCreateProjectTargets.init(),
    KTModalCreateProjectFiles.init(),
    KTModalCreateProjectComplete.init());
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = KTModalCreateProject);
var KTModalCreateProjectSettings = (function () {
  var e, t, o, r, a;
  return {
    init: function () {
      (r = KTModalCreateProject.getForm()),
        (a = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="settings-next"]')),
        (t = document.querySelector('[data-kt-element="settings-previous"]')),
        new Dropzone("#kt_modal_create_project_settings_logo", {
          url: "https://keenthemes.com/scripts/void.php",
          paramName: "file",
          maxFiles: 10,
          maxFilesize: 10,
          addRemoveLinks: !0,
          accept: function (e, t) {
            "justinbieber.jpg" == e.name ? t("Naha, you don't.") : t();
          },
        }),
        $(r.querySelector('[name="settings_release_date"]')).flatpickr({
          enableTime: !0,
          dateFormat: "d, M Y, H:i",
        }),
        $(r.querySelector('[name="settings_customer"]')).on(
          "change",
          function () {
            o.revalidateField("settings_customer");
          }
        ),
        (o = FormValidation.formValidation(r, {
          fields: {
            settings_name: {
              validators: { notEmpty: { message: "Project name is required" } },
            },
            settings_customer: {
              validators: { notEmpty: { message: "Customer is required" } },
            },
            settings_description: {
              validators: { notEmpty: { message: "Description is required" } },
            },
            settings_release_date: {
              validators: { notEmpty: { message: "Release date is required" } },
            },
            "settings_notifications[]": {
              validators: {
                notEmpty: { message: "Notifications are required" },
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
        })),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            (e.disabled = !0),
            o &&
              o.validate().then(function (t) {
                console.log("validated!"),
                  "Valid" == t
                    ? (e.setAttribute("data-kt-indicator", "on"),
                      setTimeout(function () {
                        e.removeAttribute("data-kt-indicator"),
                          (e.disabled = !1),
                          a.goNext();
                      }, 1500))
                    : ((e.disabled = !1),
                      Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      }));
              });
        }),
        t.addEventListener("click", function () {
          a.goPrevious();
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectSettings);
var KTModalCreateProjectTargets = (function () {
  var e, t, o, r, a;
  return {
    init: function () {
      (r = KTModalCreateProject.getForm()),
        (a = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="targets-next"]')),
        (t = document.querySelector('[data-kt-element="targets-previous"]')),
        new Tagify(r.querySelector('[name="target_tags"]'), {
          whitelist: ["Important", "Urgent", "High", "Medium", "Low"],
          maxTags: 5,
          dropdown: { maxItems: 10, enabled: 0, closeOnSelect: !1 },
        }).on("change", function () {
          o.revalidateField("tags");
        }),
        $(r.querySelector('[name="target_due_date"]')).flatpickr({
          enableTime: !0,
          dateFormat: "d, M Y, H:i",
        }),
        $(r.querySelector('[name="target_assign"]')).on("change", function () {
          o.revalidateField("target_assign");
        }),
        (o = FormValidation.formValidation(r, {
          fields: {
            target_title: {
              validators: { notEmpty: { message: "Target title is required" } },
            },
            target_assign: {
              validators: { notEmpty: { message: "Customer is required" } },
            },
            target_due_date: {
              validators: { notEmpty: { message: "Due date is required" } },
            },
            target_tags: {
              validators: { notEmpty: { message: "Target tags are required" } },
            },
            target_allow: {
              validators: {
                notEmpty: { message: "Allowing target is required" },
              },
            },
            "target_notifications[]": {
              validators: {
                notEmpty: { message: "Notifications are required" },
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
        })),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            (e.disabled = !0),
            o &&
              o.validate().then(function (t) {
                console.log("validated!"),
                  "Valid" == t
                    ? (e.setAttribute("data-kt-indicator", "on"),
                      setTimeout(function () {
                        e.removeAttribute("data-kt-indicator"),
                          (e.disabled = !1),
                          a.goNext();
                      }, 1500))
                    : ((e.disabled = !1),
                      Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      }));
              });
        }),
        t.addEventListener("click", function () {
          a.goPrevious();
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectTargets);
var KTModalCreateProjectTeam = (function () {
  var e, t, o;
  return {
    init: function () {
      KTModalCreateProject.getForm(),
        (o = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="team-next"]')),
        (t = document.querySelector('[data-kt-element="team-previous"]')),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            (e.disabled = !0),
            e.setAttribute("data-kt-indicator", "on"),
            setTimeout(function () {
              (e.disabled = !1),
                e.removeAttribute("data-kt-indicator"),
                o.goNext();
            }, 1500);
        }),
        t.addEventListener("click", function () {
          o.goPrevious();
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectTeam);
var KTModalCreateProjectType = (function () {
  var e, t, o, r;
  return {
    init: function () {
      (o = KTModalCreateProject.getForm()),
        (r = KTModalCreateProject.getStepperObj()),
        (e = document.querySelector('[data-kt-element="type-next"]')),
        (t = FormValidation.formValidation(o, {
          fields: {
            project_type: {
              validators: { notEmpty: { message: "Project type is required" } },
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
        })),
        e.addEventListener("click", function (o) {
          o.preventDefault(),
            (e.disabled = !0),
            t &&
              t.validate().then(function (t) {
                console.log("validated!"),
                  o.preventDefault(),
                  "Valid" == t
                    ? (e.setAttribute("data-kt-indicator", "on"),
                      setTimeout(function () {
                        e.removeAttribute("data-kt-indicator"),
                          (e.disabled = !1),
                          r.goNext();
                      }, 1e3))
                    : ((e.disabled = !1),
                      Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary" },
                      }));
              });
        });
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = KTModalCreateProjectType);
