import { useParams, useLocation } from "react-router-dom";

function Projects() {
    let { name } = useParams();
    let params = useParams();
    let location = useLocation();
    return (
        <div>
            <h1>Here is a list of projects in {name}</h1>
            <img
            src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
            alt="About"
            width="30%" />
            <h4>
                What's in params? <pre>{JSON.stringify(params, null, 4)}</pre>
            </h4>
            <h4>
                What's in location? <pre>{JSON.stringify(location, null, 4)}</pre>
            </h4>
        </div>

    )
}

export default Projects