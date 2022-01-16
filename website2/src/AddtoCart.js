import React from 'react'


const AddtoCart=()=>  {
    return (
        <div>
            <div className='container'>
                <div className='row text-left'>
                    <div className='sticky-top'>
                    <table className="table my-5 position-fixed">
  <thead className="thead-dark">
    <tr>
      <th scope="col">S.R</th>
      <th scope="col">Product Name</th>
      <th scope="col">QTY</th>
      <th scope="col">Price</th>
      <th scope="col">Total product price</th>
      <th scope="col">Remove item</th>
    </tr>
  </thead>
  <tbody className='bg-danger'>
    <tr>
      <th scope="row">1</th>
      <td>T-shirt</td>
      <td><input type="number" min="1" /></td>
      <td>300</td>
      <td>600</td> 
      <td>Remove</td>    
</tr>   
  </tbody>
</table>


                    </div>
                </div>
            </div>

          

        </div>
    )
}

export default AddtoCart
