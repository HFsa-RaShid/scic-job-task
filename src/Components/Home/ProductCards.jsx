

const ProductCards = ({product}) => {
    const {
        _id,
    productName,
    productImage,
    description,
    price,
    category,
    ratings,
    creationDate,
    brand

    } = product;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={productImage} className="h-[220px] w-[65%]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>{description}</p>
    
    <div className="flex">
    <p>{category}</p>
    <p>{brand}</p>
    </div>
    <div className="flex ">
    <p>{price}</p>
    <p>{ratings}</p>
    </div>
    <p>{creationDate}</p>
    <div className="card-actions justify-end">
      <button className="px-3 py-2 border border-[#eba9ca] text-[#b30059] rounded-md font-medium">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCards;