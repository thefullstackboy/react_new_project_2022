import React, {useState, useEffect} from 'react'
import AddtoCart from './AddtoCart';
const App =(product)=> {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setUsers(await response.json());
    console.log(response)
  }

  useEffect(()=> {
    getData();
  }, [ ]);

  
  const TransferData=(productId, productTitle)=> {
              console.log("productId => " + productId + " Product title =>"+ productTitle ); 
  }
  return (
    <>
    <h1 className='text-center'>Our Latest collection</h1>
    <div className='container mt-5'>
      <div className='row text-center'>
        {
            users.map((product,id) => {               
              return (                
                <div className="card col-md-3 avd bg-light" key={id}>
                <img className="card-img-top mt-5 imagepro" src={product.image} alt="Card image cap" key={id} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text text-justify">{abc.description}</p> */}
                  <p className="card-text text-center">{product.category}</p>
                  <p className="list-group-item">{product.rating.rate}</p>
                </div>
                <div className="card-body">
                <button type="button" className="btn btn-info" onClick={() => TransferData(product.id, product.title)}>
                  Add to cart
                  </button>
                </div>
              </div>
              )
            })
        }
      </div>
    </div>    
    </> 
    )
  }
  

  export default App
  