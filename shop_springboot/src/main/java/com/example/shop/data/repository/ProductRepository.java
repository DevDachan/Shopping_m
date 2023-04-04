package com.example.shop.data.repository;

import com.example.shop.data.entity.ProductEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<ProductEntity, String> {
  // 조회
  List<ProductEntity> findByName(String name);

  @Query(value = "SELECT * FROM product ORDER BY position", nativeQuery = true)
  List<ProductEntity> getListAll();

  // 존재 유무
  boolean existsByName(String name);

  @Query(value = "UPDATE product SET position=:nextId WHERE position=:id", nativeQuery = true)
  void changePosition(int id,int nextId);

  ProductEntity getById(int id);

  // 쿼리 결과 개수
  long countByName(String name);

  // 값 개수 제한
  List<ProductEntity> findFirst5ByName(String name);
  List<ProductEntity> findTop3ByName(String name);

}
