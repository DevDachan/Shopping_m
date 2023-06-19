package com.example.shop.data.repository;

import com.example.shop.data.entity.ProductColorEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ProductColorRepository extends JpaRepository<ProductColorEntity, String> {
  @Query(value = "SELECT * FROM product_color WHERE product_id=:productId " , nativeQuery = true)
  List<ProductColorEntity> getColor(int productId);
  @Modifying
  @Query(value = "UPDATE product_color SET color=:content WHERE product_id=:productId AND color_id = :colorId" , nativeQuery = true)
  void changeColor(int productId, int colorId, String content);

  @Query(value = "DELETE FROM product_color WHERE product_id=:productId AND color_id = :colorId" , nativeQuery = true)
  void deleteColor(int productId, int colorId);

  @Query(value = "INSERT INTO product_color VALUES(:productId, :colorId, 'color')" , nativeQuery = true)
  void insertColor(int productId, int colorId);
}
