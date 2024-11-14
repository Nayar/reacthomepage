import react from "react"

class About extends react.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>I love {this.props.hobby}</h1>
                <img
                src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
                alt="About"
                width="40%" />
                <button onClick={() => this.props.changecolor('red')}>change BG color</button>
                <button onClick={() => this.props.changecolor('blue')}>change BG color</button>
            </div>
        )
    }
}

//  this.props.changecolor('red')
//  setBgColor('red') in App.js | parent component

export default About