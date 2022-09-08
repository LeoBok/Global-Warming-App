import Axios from "axios"

const fetchData = (url) => {
    return Axios.get(url).then(res => res.data)
}

export default fetchData