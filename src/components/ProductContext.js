import React, { createContext } from 'react'
import { db } from '../config/firebase';
import { updateDoc, collection, getDoc, onSnapshot, docChanges } from 'firebase/firestore';

export const ProductContext = createContext();

export class ProductContextProvider extends React.Component {
    state = {
        products: []
    }

    componentDidMount = async () => {
        const prevProduct = this.state.products;
        const productsRef = collection(db, "products-MEDIUM");
        getDoc(collection(db, 'products-MEDIUM')).onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    prevProduct.push({
                        ProductID: change.doc.id,
                        CompanyName: change.doc.data().Companyname,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    products: prevProduct
                })
            })




        })
    }


    render() {
        return (
            <ProductContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
