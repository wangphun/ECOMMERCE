import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import { GoHeart } from "react-icons/go";






const ProductItem=() =>{
return(
    <div className='item productItem'>
    <div className='imgWrapper'>
      <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className='w-100'/>
      <span className='badge bg-primary'>28%</span>
      <div className='actions'>
        <Button><SlSizeFullscreen/></Button>
        <Button><GoHeart style={{fontSize:'20px'}}/></Button> 
      </div>
    </div>
   <div className='info'>
   <h4>Werther's Original Caramel Hard Candies</h4>
<span className='text-success d-block'>In Stock</span>
<Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>
<div className='d-flex'>
<span className='oldPrice'>$20.00</span>
<span className='netPrice text-danger ml-2'>$14.00</span>
</div>
   </div>
  </div>
)
}
export default ProductItem;