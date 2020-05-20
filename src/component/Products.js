import React, { Component } from 'react';
class Products extends Component {
    constructor(props){
        super(props)

        this.state = {
            productos:[],
            isFetch: true,
        }
    }

    componentDidMount(){
      
        const url = "http://localhost:8081/products"; 
        fetch( url) 
        .then(response => response.json())
        .then(productosJSON => this.setState({productos: productosJSON,    isFetch: false }))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
     
    }

    render() {

        if(this.state.isFetch){
            return (<div>
                <p>
                    LOADING ...
                </p>
            </div>);
        }
        const products = this.state.productos;
        return (<div>
            <p>
            {products.map(i => <div>{i.name}</div>)}
            </p>
            </div>);
        
    }
}
export default Products; // Don’t forget to use export default!