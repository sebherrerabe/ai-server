import Layout from "../layout/Layout";
import Button from "../compononets/Button";
import Input from "../compononets/Input";

const  Dashboard = () => {
    const buttons = [{name:"Launcher"}, {name:"Queue"}, {name:"Past Trainings"}]
    return (
        <div>
            {
                buttons.map(button => {
                    return <Button name = {button.name} /> 
                }) 
            }     
            <Input />       
        </div>
        
    
    )
}

export default Dashboard;
