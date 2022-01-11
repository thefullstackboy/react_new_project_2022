import React from 'react'

function Subscribebox() {
    return (
        <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12 col-lg-12 col-sm-12'>
                <div className='newsletterbody'>
 <div className="subscribe">
	<h2 className="subscribe__title">Let's keep in touch</h2>
	<p className="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
	<div className="form">
		<input type="email" className="form__email" placeholder="Enter your email address" />
		<button className="form__button">Send</button>
	</div>
	<div className="notice">
		<input type="checkbox" />
		<span className="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
	</div>
</div>
       </div> 

                </div>
            </div>

        </div>            
    </>
    )
}

export default Subscribebox

