import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState} from "react";
import api from "./api/axiosConfig";
import * as React from 'react';

function App() {
    const [value, setValue] = React.useState(0);

    //START Items to fetch Perceptron results
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const train523Ann = () => {
        return api.get("http://localhost:8080/ANN523/train-ann")
            .then((response) => setData(response.data));
    }

    const test523Ann = () => {
        return api.get("http://localhost:8080/ANN523/test-ann")
            .then((response) => setData(response.data));
    }

    const train563Ann = () => {
        return api.get("http://localhost:8080/ANN563/train-ann")
            .then((response) => setData2(response.data));
    }

    const test563Ann = () => {
        return api.get("http://localhost:8080/ANN563/test-ann")
            .then((response) => setData2(response.data));
    }


    useEffect(() => {
        //fetchInfo();
    }, [])


    //END items to fetch Perceptron results

    return (
        <div>
            <h1 className="text-center">AI Test 2</h1>
            <h5 className="text-center">By Andujar Brutus</h5>

            <div className="d-flex justify-content-center">
                {/*523 Perceptron*/}
                <div className="d-flex justify-content-center">
                    <div className="p-2 flex-fill">
                        <div className="p-2">
                            < div className="App">
                                <center>
                                    <div
                                        style={{
                                            width: "65%",
                                            backgroundColor: "#2c3e50",
                                            padding: 0,
                                            borderRadius: 0,
                                            marginBlock: 0,
                                        }}
                                    ><samp>
                                        <p style={{fontSize: 20, color: 'white'}}>{data}</p>
                                    </samp>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <div className="d-flex p-2">
                                    <button className="btn btn-primary m-4" onClick={train523Ann}
                                            style={{
                                                width: "65%",
                                                marginBlock: 0,
                                            }}>
                                        Train 5-2-3 ANN
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex p-2">
                                    <button className="btn btn-primary m-4" onClick={test523Ann}
                                            style={{
                                                width: "65%",
                                                marginBlock: 0,
                                            }}>
                                        Test 5-2-3 ANN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*563 Perceptron*/}
                <div className="d-flex justify-content-center">
                    <div className="p-2 flex-fill">
                        <div className="p-2">
                            < div className="App">
                                <center>
                                    <div
                                        style={{
                                            width: "65%",
                                            backgroundColor: "#2c3e50",
                                            padding: 0,
                                            borderRadius: 0,
                                            marginBlock: 0,
                                        }}
                                    ><samp>
                                        <p style={{fontSize: 20, color: 'white'}}>{data2}</p>
                                    </samp>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <div className="d-flex p-2">
                                    <button className="btn btn-primary m-4" onClick={train563Ann}
                                            style={{
                                                width: "65%",
                                                marginBlock: 0,
                                            }}>
                                        Train 5-6-3 ANN
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex p-2">
                                    <button className="btn btn-primary m-4" onClick={test563Ann}
                                            style={{
                                                width: "65%",
                                                marginBlock: 0,
                                            }}>
                                        Test 5-6-3 ANN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
