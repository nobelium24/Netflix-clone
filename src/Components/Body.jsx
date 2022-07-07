
import { useEffect, useState } from "react"
import axios from "axios"
import { Alert } from "bootstrap/dist/js/bootstrap.bundle"

const Body = () => {
    const [netflix, setNetflix] = useState([])
    const [error, setError] = useState([])
    const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=ee3db26c13a95de355febc98d8b68dbf"

    useEffect(() => {
        makeRequest()
    })
    const makeRequest = () => {
        axios.get(url2).then((res) => {
            if (res.status == 200) {

                setNetflix(res.data.results)
            }
            else { console.log("error"); }
        })
            .catch((err) => {
                setError(err)
            })
    }

    return (
        <>

            <main className={"bg bg-dark"} style={{ width: "100%", display: "flex", flexWrap: "wrap" }} id={"wole1"}>
                {netflix.map((m, ope) =>
                    <div key={ope} className="card card-body m-3 shadow bg-dark" style={{ width: "20%" }} id={"wole2"}>
                        <img src={`https://image.tmdb.org/t/p/w185` + m.backdrop_path} className="card-img-top" />
                        <h6 className="card-title text-white">{m.original_title}</h6>
                    </div>
                )}
            </main>
        </>
    )
}
export default Body