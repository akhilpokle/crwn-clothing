import React, { Component } from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../component/preview-collection/previewCollection';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA,
        }
    }
    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.filter((item,idx)=>idx<4).map(({id,...collectionProps}) =>(
                    <CollectionPreview key={id} {...collectionProps}/>
                ))
            }
        </div>)
    }
}

export default Shop;