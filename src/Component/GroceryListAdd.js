import React from 'react';

class GroceryListAdd extends React.Component{

    render(){
        return(
            <div style={{backgroundColor:"lightblue"}}>
                <input name="add"/>
                <input name="addButton" type="submit" value="Add"/>
            </div>
        )
    }
}

export default GroceryListAdd;