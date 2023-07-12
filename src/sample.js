import React, { useState, useEffect } from "react";

function Sample() {

    const [data, setData] = useState('sample paragraph that can dispaly on the render option an also can be changed using the button provided')
    const [value, setValue] = useState(
        {
            name: "",
            password: "",
            email: "",
        }
    )
    const handleData = () => {
        setData("this data is changed using the button and the innput value is name " + value.name + " email " + value.email + " password " + value.password)
    }
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })

    }
    useEffect(() => {
        handleData();
    }, [])

    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", backgroundColor: "lightgray", color: "black", height: "100vh", flexDirection: "column" }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800' }}>sample Text</h1>
            <input
                name="name"
                placeholder="in put a text"
                onChange={(e) => handleChange(e)}
                value={value.name}
            />
            <input
                name="email"
                placeholder="in put a text"
                onChange={(e) => handleChange(e)}
                value={value.email}
                type="email"
            />
            <input
                name="password"
                placeholder="in put a text"
                onChange={(e) => handleChange(e)}
                value={value.password}
                type="password"
            />

            <button style={{ color: "white", margin: "20px 0", padding: "5px", backgroundColor: "blue", border: "1px solid blue", borderRadius: "5px" }}
                onClick={handleData}>
                Click Me!
            </button>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "black" }}>{data}</p>
            </div>
        </div>
    )
}

export default Sample