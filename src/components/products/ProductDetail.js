import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import { useParams } from "react-router-dom";

const ProductDetail = ({categories, products, product, onChange, onSave}) => {
  // const {productId}=useParams();
  // let product=products.find(p=>p.id==productId);


  // console.log("pID:"+JSON.stringify(productId));
  // console.log("urun:"+JSON.stringify(product))
  //console.log("prs:"+JSON.stringify(products))

  return (
    <div>
      <form onSubmit={onSave}>
        <h4>{product?.id ? "Güncelle" : "Ekle"}</h4>
        <TextInput
          name="productName"
          label="Ürün Adı"
          value={product?.productName}
          oChange={onChange}
          error="Hata"
        />
        <SelectInput
          name="categoryId"
          label="Category"
          value={product?.categoryId || ""}
          defaltOption="Seçiniz"
          options={categories.map((category) => ({
            value: category.id,
            text: category.categoryName,
          }))}

          onChange={onChange}
          error="Hata"
        />
        <TextInput
          name="unitPrice"
          label="Fiyat"
          value={product?.unitPrice}
          oChange={onChange}
          error="Hata"
        />

        <button type="submit" className="btn btn-success">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default ProductDetail;
