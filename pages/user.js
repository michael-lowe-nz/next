export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date()})
        }, 1000)
        console.log('Mounted');
    }
    componentDidUpdate() {
    }

    render() {
        return <h1>Time: {this.state.time.toString()}</h1>
    }
}