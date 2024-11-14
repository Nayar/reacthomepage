import react from "react"

class About extends react.Component {
    render() {
        return (
            <div>
                <h1>I love {this.props.hobby}</h1>
                <img
                src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
                alt="About"
                width="40%" />
            </div>
        )
    }
}

export default About