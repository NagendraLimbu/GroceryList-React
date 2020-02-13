import React, {Component} from 'react';
import GroceryListAdd from './GroceryListAdd';
import './myStye.css';


class GroceryListContainer extends Component{

    render(){
        return(
            <div className={style.con}>
                <GroceryListAdd />
            </div>
        )
    }
}

export default GroceryListContainer;