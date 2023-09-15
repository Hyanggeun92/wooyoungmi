import React from 'react'



const ProductCard = ({item}) => {
    const dataPrice = (item.price)
    const dataPrice2= dataPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(dataPrice2);
  return (
    <div className='product-list'>
        <div className="product-img"><img src={item?.img} alt="" /></div>
        <div className="choice">{item?.choice===true?'Conscious Choice':''}</div>
        <div className="title">{item?.title}</div>
        <div className="price">{dataPrice2}</div>
        <div className="new">{item?.new===true?'[신상품]':''}</div>

      
    </div>
  )
}

export default ProductCard
