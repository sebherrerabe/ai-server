
const Button = ({name,age}) => {
    console.log(name + " " + age)
    return (
        <button className="btn">
            hey
        </button>
    )
}


const addition = (a, b) => {
    return a + b
}


const Dashboard = () => {

    const buttons = [{ name: "Launcher" }, { name: "Queue" }, { name: "Past Trainings" }]

    console.log(addition(5,6))

    return (
        <div className="content">
            {buttons.map((button, i) => <Button key={i} name={"Sebastian"} age={24} />)}
        </div>
    )
}

export default Dashboard;
