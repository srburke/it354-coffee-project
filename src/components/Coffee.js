import React from 'react'
import '../styles/style.css'
import '../styles/coffee.css'
import {Row, Col} from 'react-bootstrap';
import {productsArray} from './productsStore.js'

function Coffee() {
    return (
        <div className="bg">
        <body>
        <h1> Welcome to the store!</h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                <h1>{product.title}</h1> 
                </Col>
            ))}
           
            
        </Row>
        </body>
        </div>
        // <div className="container text-center" style={{ paddingTop: "3rem" }}>
        //     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        //         <div className="col">
        //             <div className="card mb-3" style={{
        //                 maxwidth: "540px"
        //             }} id="item-card">
        //                 <div className="row g-0">
        //                     <div className="col-md-4">
        //                         <img src="https://github.com/srburke/it354-coffee-project/blob/ed4ae02aa2f5ddb1d9cc09e7e8e4d9ba7a0345e9/src/images/starbucksmidroast.png" className="img-fluid rounded-start" alt="..."></img>
        //                     </div>
        //                     <div className="col-md-8">
        //                         <div className="card-body">
        //                             <h5 className="card-title">Card title</h5>
        //                             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                             <a href="#" className="btn btn-primary">Go somewhere</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div >
        //         </div>
        //         <div className="col">Column</div>
        //         <div className="col">Column</div>
        //         <div className="col">Column</div>
        //     </div>    </div>

    )
}

export default Coffee;