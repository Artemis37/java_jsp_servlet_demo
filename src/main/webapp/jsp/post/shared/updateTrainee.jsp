<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!--begin::Content-->
<div class="post d-flex flex-column-fluid" id="kt_post">
    <!--begin::Container-->
    <div id="kt_content_container" class="container">
        <!--begin::Card-->
        <div class="card">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title fs-3 fw-bolder">Update Trainee</div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <c:set var="s" value="${requestScope.traineeDetails}" />
            <c:set var="c" value="${requestScope.classList}" />
            <!--begin::Form-->
            <form id="kt_modal_update_trainee_form" method="post" action="/management/trainee/detail?action=update" class="form">
                <!--begin::Input group-->
<!--                <div class="row mb-8">
                   
                    begin::Col
                    <div class="card-body d-flex flex-center flex-column pt-12 p-9 px-0">
                        begin::Image input
                        <div class="image-input image-input-outline" data-kt-image-input="true"
                             style="background-image: url(assets/media/avatars/blank.png)">
                            begin::Preview existing avatar
                            <div name="avatar" class="image-input-wrapper w-125px h-125px"
                                 style="background-image: url(${s.avatarUrl})"></div>
                            end::Preview existing avatar
                            begin::Label
                            <label
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Change avatar">
                                <i class="bi bi-pencil-fill fs-7"></i>
                                begin::Inputs
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg">
                                <input type="hidden" name="avatar_remove">
                                end::Inputs
                            </label>
                            end::Label
                            begin::Cancel
                            <span
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Cancel avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                            end::Cancel
                            begin::Remove
                            <span
                                class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                data-kt-image-input-action="remove" data-bs-toggle="tooltip" title=""
                                data-bs-original-title="Remove avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                            end::Remove
                        </div>
                        end::Image input
                        begin::Hint
                        <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                        end::Hint
                    </div>
                    end::Col
                </div>-->
                <!--end::Input group-->
                <!--begin::Card body-->
                <div class="card-body p-9">
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">User ID</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid"
                                   name="id" readonly value="${s.userId}" />
                        </div>
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Full Name</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid" name="fullname" value="${s.fullname}">
                        </div>
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Email</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid" name="email" value="${s.email}">

                        </div>
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Mobile</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid " name="mobile" value="${s.mobile}">
                        </div>
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Class Code</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid" name="classCode" value="${c.classCode}">
                            <input type="text" class="form-control form-control-solid" hidden name="classId"
                                   value="${c.classId}"/>  
                        </div>
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Grade</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="text" class="form-control form-control-solid" name="grade" value="${s.grade}">
                        </div>
                    </div>

                </div>
                <!--end::Card body-->
                <!--begin::Card footer-->
                <div class="card-footer d-flex justify-content-center py-6 px-9">
                    <button type="submit" class="btn btn-primary" data-kt-users-modal-action="submit">
                        <span class="indicator-label">Update</span>
                        <span class="indicator-progress">Please wait...
                            <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                </div>
                <!--end::Card footer-->
            </form>
            <!--end:Form-->
        </div>
        <!--end::Card-->
    </div>
    <!--end::Container-->
    <!--end::Content-->