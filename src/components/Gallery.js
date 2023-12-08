import React from 'react';
import GoodsCard from './GoodsCard';
import '../App.css'

const Gallery = () => {
 
  const goodsData = [
    { id: 1, name: 'Апельсин', price: 19.99, image: 'https://src.zakaz.atbmarket.com/cache/photos/87/catalog_product_main_87.jpg' },
    { id: 2, name: 'Ананас', price: 29.99, image: 'https://winetime.com.ua/uploads/symlink/55000-56000/51178961374_b4ef89786f_b.jpg' },
    { id: 3, name: 'Мандарин', price: 39.00, image: 'https://fruit-time.ua/images/cache/products/57/mandarin-aixan-imp-500x500.jpeg' },
    { id: 4, name: 'Папая', price: 22.99, image: 'https://agro-market.net/images/soc_section_img/3d084fbabb750cbfea92f09eafa479a3.jpg' },
    { id: 5, name: 'Яблуко', price: 32.00, image: 'https://img.fozzyshop.com.ua/232947-thickbox_default/yabloki-ukrainskie.jpg' },
    { id: 6, name: 'Банан', price: 31.00, image: 'https://ovocheva-poshta.com.ua/images/virtuemart/product/banan8.jpg' },
  ];

  return (
    <div className="gallery">
      {goodsData.map((goods) => (
        <GoodsCard
          key={goods.id}
          name={goods.name}
          price={goods.price}
          image={goods.image}
        />
      ))}
    </div>
  );
}


export default Gallery;