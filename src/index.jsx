import Data from "./dataBlog.json"
import { useState } from "react";
import "./index.css"
import Article from "./components/article"
import Search from "./components/searchUtility"
function HomePage() {
    const[dataBlog, setDataBlog] = useState(Data);
    const[totalData,setTotalData] = useState(0);
    const valueChange = (value) =>{
        const filter = Data.filter(item => item.title.includes(value))
        setDataBlog(filter);
        console.log(filter.length);
        setTotalData(filter.length)
    }

    return (
        <>
            <h1> Simple Blog</h1>
            <Search valueChange = {valueChange} totalData = {totalData}/>
                {
                    dataBlog.map((data,index) => (
                        <Article {...data} key = {index}/>
                    ))
                }

        </>

    )
}

export default HomePage;