/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.tss.controller.management;

import com.tss.constants.ActionConstants;
import com.tss.constants.ScreenConstants;
import com.tss.helper.ResponseHelper;
import com.tss.model.ClassEntity;
import com.tss.model.Classroom;
import com.tss.model.Milestone;
import com.tss.model.Subject;
import com.tss.model.Trainee;
import com.tss.model.User;
import com.tss.service.ClassService;
import com.tss.service.RegisterService;
import com.tss.service.TraineeService;
import com.tss.service.UserService;
import com.tss.service.impl.ClassServiceImpl;
import com.tss.service.impl.RegisterServiceImpl;
import com.tss.service.impl.TraineeServiceImpl;
import com.tss.service.impl.UserServiceImpl;
import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;

/**
 *
 * @author nguye
 */
@WebServlet(name = "TraineeDetailServlet", urlPatterns = {"/management/trainee/detail"})
public class TraineeDetailServlet extends HttpServlet {

    private ClassService classService;
    private UserService userService;
    private TraineeService traineeService;
    private RegisterService registerService;

    @Override
    public void init() throws ServletException {
        classService = new ClassServiceImpl();
        userService = new UserServiceImpl();
        traineeService = new TraineeServiceImpl();
        registerService = new RegisterServiceImpl();
    }

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");
        switch (action) {
            case ActionConstants.LIST:
                //list(request, response);
                break;
            case ActionConstants.CREATE:
                //create(request, response);
                break;
            case ActionConstants.UPDATE:
                update(request, response);
                break;
            case ActionConstants.DELETE:
                //delete(request, response);
                break;
            case ActionConstants.GET:
                get(request, response);
                break;
            default:
                //list(request, response);
                break;
        }

    }

    private void get(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    private void update(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // System.out.println(request.getParameter("userID"));
        int userID = Integer.parseInt(request.getParameter("id"));
        User u = userService.findById(userID);
        u.setFullname(request.getParameter("fullname"));
        u.setEmail(request.getParameter("email"));
        u.setMobile(request.getParameter("mobile"));
        userService.modify(u);
         int classId = Integer.parseInt(request.getParameter("classId"));
        float grade = Float.parseFloat(request.getParameter("grade"));
        traineeService.update(userID, classId, grade);
        response.sendRedirect("/management/trainee/list");
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the
    // + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = (request.getParameter("action") != null) ? request.getParameter("action") : "";
        if (action.equals(ActionConstants.UPDATE)) {
            request.setAttribute("jspPath", "shared/updateTrainee.jsp");
        } else {
            request.setAttribute("jspPath", "shared/traineeDetail.jsp");
        }
//
//        request.setAttribute("customJs", ResponseHelper.customJs(
//                "Assignment/custom.js", "apps/milestone/update.js"));
        int classId = Integer.parseInt(request.getParameter("classId"));
        request.setAttribute("brecrumbs", ResponseHelper.brecrumbs(
                ScreenConstants.TRAINEE_LIST,
                ScreenConstants.TRAINEE_DETAIL));
        int id = Integer.parseInt(request.getParameter("id"));
        Trainee trainee = userService.findTraineeByUserId(id);
        Classroom classEntity = classService.findClassById(classId);
        request.setAttribute("classList", classEntity);
        request.setAttribute("traineeDetails", trainee);
        request.getRequestDispatcher("/jsp/template.jsp").forward(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
