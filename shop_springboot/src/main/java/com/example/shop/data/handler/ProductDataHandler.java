package com.example.shop.data.handler;

import com.example.shop.data.entity.ProductEntity;
import java.util.List;

public interface ProductDataHandler {
  ProductEntity saveProductEntity(int productId, String productName, int productPrice, String productDetail, int deliveryCost, String deliveryTime, String imageId,int position);

  ProductEntity getProductEntity(int productId);

  List<ProductEntity> getProductListEntity();

  void changePosition(int id, int nextId);
}
