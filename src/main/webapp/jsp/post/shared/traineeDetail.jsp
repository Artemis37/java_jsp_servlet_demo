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
                <div class="card-title fs-3 fw-bolder">Trainee Details</div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <c:set var="s" value="${requestScope.traineeDetails}" />
            <c:set var="c" value="${requestScope.classList}" />
            <!--begin::Form-->
            <form id="kt_modal_update_trainee_form" method="post" action="/management/trainee/detail?action=update" class="form">
                <div class="card-body d-flex flex-center flex-column pt-12 p-9 px-0">
                    <div class="symbol symbol-100px symbol-circle mb-7">
                        <img src="${s.avatarUrl}" alt="image" />
                    </div>
                </div>
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
                            <input type="text" class="form-control form-control-solid itemHidden"
                                   name="milestoneId" readonly value="${s.userId}" />
                            <input type="text" class="form-control form-control-solid itemShow" readonly disabled
                                   value="${s.userId}" />
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
                            <input type="text" class="form-control form-control-solid itemHidden" name="fullname" value="${s.fullname}">
                            <input type="text" class="form-control form-control-solid itemShow" disabled
                                   value="${s.fullname}"/>
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
                            <input type="text" class="form-control form-control-solid itemHidden" name="email" value="${s.email}">
                            <input type="text" class="form-control form-control-solid itemShow" disabled
                                   value="${s.email}"/>  
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
                            <input type="text" class="form-control form-control-solid itemHidden" name="mobile" value="${s.mobile}">
                            <input type="text" class="form-control form-control-solid itemShow" disabled
                                   value="${s.mobile}"/>  
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
                            <input type="text" class="form-control form-control-solid itemHidden" name="classCode" value="${c.classCode}">
                            <input type="text" class="form-control form-control-solid itemShow" disabled
                                   value="${c.classCode}"/>  
                        </div>
                    </div>
                    <!--end::Row-->
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
                    <!--begin::Row-->
                    <div class="row mb-8">
                        <!--begin::Col-->
                        <div class="col-xl-3">
                            <div class="fs-6 fw-bold mt-2 mb-3">Dropout Date</div>
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-xl-9 fv-row">
                            <input type="date" class="form-control form-control-solid itemHidden" name="dropoutDate" 
                                   value="${s.dropoutDate}">
                            <input type="date" class="form-control form-control-solid itemShow" disabled
                                   value="${s.dropoutDate}" />
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
                            <input type="text" class="form-control form-control-solid itemHidden" name="mobile" value="${s.mobile}">
                            <input type="text" class="form-control form-control-solid itemShow" disabled
                                   value="${s.mobile}"/>  
                        </div>
                    </div>

                </div>
                <!--end::Row-->
                <!--end::Card body-->
                <!--begin::Card footer-->
                <!--end::Card footer-->
            </form>
            <!--end:Form-->
        </div>
        <!--end::Card-->
    </div>
    <!--end::Container-->
    <!--end::Content-->