import React, { useState } from "react"

export default function FxSubdir() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState({
        username: "test",
        password: "password",
    })

    const addFx = () => {
        console.log("add function")
        setCount(count + 1)
    }

    const changedata = () => {
        setData({ username: "xxxx", password: "yyy" })
    }
    
    const hAuthen = (e) => {
        setData({
            username: e.target.value
        })
    }

    return (
        <div>
            <button onClick={addFx}>Add Counter</button>
            <h1>Function com Subdir</h1>
            count : {count}
            <br />
            {JSON.stringify(data)}
            <br></br>
            <button
                onClick={() => {
                    setData({ username: "setdata", password: "passSetdata" })
                }}
            >
                setdata
            </button>
            <button onClick={changedata}>changedata</button>
            <form>
                <label>username</label>
                <input type="text" value={data.username} onChange={(e) => {setData({username: e.target.value})}}></input>
                <br />
                <label>password</label>
                <input type="text" value={data.password} onChange={(e) => {setData({password: e.target.value})}}></input>

                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
