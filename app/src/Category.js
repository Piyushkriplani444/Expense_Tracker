import React, { Component } from 'react'
import AppNav from './AppNav';
class Category extends Component {

    state={
        isLoading: true,
        Categories: []
     }

     async componentDidMount(){
        const response = await fetch("/api/categories");
        const body = await response.json();
        console.log(body);
        this.setState({Categories : body , isLoading : false});
     }
    render(){
        const { Categories, isLoading } =this.state;
        if(isLoading)
            return (<div>Loading...{Categories}</div>);
        else
        return (
            <div>
            <AppNav />
           <h2>Categories</h2>
           {
            Categories.map(category => 
                <div id={category.id}>
                    {category.name}
                </div>
                )
           }
           </div>
        );
    }
}
export default Category;