import React from 'react';

class GroceryListAdd extends React.Component{

    render(){
        return(
            <div>
                <input name="add"/>
                <input name="addButton" type="submit" value="Add"/>
            </div>
        )
    }
}

export default GroceryListAdd;