import React from 'react';

const Input = (props) => {
   
    return ( 
        <form>
        <input
            type= "text"
            className="input-text"   
            placeholder="DockerHub_username/image_name"
        />
        </form>
     );
}
 
export default Input;

