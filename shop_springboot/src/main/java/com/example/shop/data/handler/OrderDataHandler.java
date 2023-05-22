package com.example.shop.data.handler;

import com.example.shop.data.dto.OrderDTO;
import com.example.shop.data.entity.OrderEntity;
import java.util.List;

public interface OrderDataHandler {
  OrderEntity saveOrderEntity(
      int orderId, String orderDate, String orderUserId, int orderProductId, String orderColor,
      int num, int totalCost, String orderName, String orderPhone, int orderZoneCode, String orderAddress,
      String addressDetail, int imageId
  );

  OrderEntity getOrderEntity(int orderId);

  List<Integer> findDistinctId();

  List<OrderDTO> getOrderUsingPhone(String phoneNum, String Name);

}
