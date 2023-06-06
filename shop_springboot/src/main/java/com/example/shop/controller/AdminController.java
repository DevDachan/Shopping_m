package com.example.shop.controller;


import com.example.shop.data.dto.AdminDTO;
import com.example.shop.data.service.AdminService;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@RequestMapping("/shop-backend/admin")
@EnableWebMvc
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
  private AdminService adminService;

  @Autowired
  public AdminController(AdminService adminService) {
    this.adminService = adminService;
  }

  @PostMapping(value = "/adminLogin")
  public String adminLogin(@RequestBody Map<String, String> postData) {
    Optional<AdminDTO> optionalAdminDTO = adminService.getAdmin(postData.get("id"));

    if (optionalAdminDTO.isPresent()) {
      AdminDTO adminDTO = optionalAdminDTO.get();
      if(adminDTO.getPassword().equals(postData.get("password"))) {
        return adminDTO.getHashKey();
      }
      return "password";
    }
    return "id";
  }

}
