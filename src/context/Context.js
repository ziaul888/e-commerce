import React, {Component} from 'react'


const ProductContext = React.createContext();


class ProductProvider extends Component {

    state={
        sidebarOpen:false,
        cartOpen:false,
        cartItem:0,
    }

    handleSidebar=()=>{
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }
    handleCart=()=>{
        this.setState({cartOpen:!this.state.cartOpen})
    }

    CloseSidebar=()=>{
        this.setState({sidebarOpen:false})
    }
    CloseCart=()=>{
        this.setState({cartOpen:false})
    }

    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handlecart:this.handleCart,
            CloseSidebar:this.CloseCart,
            CloseCart:this.CloseCart
        }}>

        {this.props.children}    
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export {ProductProvider, ProductConsumer}