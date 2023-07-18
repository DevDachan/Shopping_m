package com.example.shop.data.service;

import com.example.shop.data.dto.AdminDTO;
import com.example.shop.data.dto.UserDTO;
import java.util.Optional;

public interface UserService {
  UserDTO saveUser(UserDTO userDTO);
  UserDTO getUser(String userId);
  boolean phoneDupCheck(String phone);
  boolean idDupCheck(String phone);

  boolean checkPassword(UserDTO userDTO,String password);

  UserDTO login(String id, String password);

}
