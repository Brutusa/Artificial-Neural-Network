import api from "../api/axiosConfig";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const DrivingPerceptron = () => {
    //variables to store input
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;

    const [x1color, setMyVariable1] = useState('');
    const [x2color, setMyVariable2] = useState('');
    const [x3color, setMyVariable3] = useState('');
    const [x4color, setMyVariable4] = useState('');

    const handleInputChange1 = (event) => {
        setX1(event.target.value)
        setMyVariable1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setX2(event.target.value)
        setMyVariable2(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setX3(event.target.value)
        setMyVariable3(event.target.value);
    };

    const handleInputChange4 = (event) => {
        setX4(event.target.value)
        setMyVariable4(event.target.value);
    };


    //functions to be used in GUI
    //set X values
    async function setX1(event) {
        x1 = event;
        if (x1 == null || x1 === " " || x1 === "") {
            x1 = 0;
        }
        await api.post("/driving/input/x1/" + x1)
        console.log(x1);
    }

    async function getX1() {
        await api.get("/driving/input/x1")
    }

    async function setX2(event) {
        x2 = event;
        if (x2 == null || x2 === " " || x2 === "") {
            x2 = 0;
        }
        await api.post("/driving/input/x2/" + x2)
        console.log(x2);
    }

    async function getX2() {
        await api.get("/driving/input/x2")
        console.log(x2);
    }

    async function setX3(event) {
        x3 = event;
        if (x3 == null || x3 === " " || x3 === "") {
            x3 = 0;
        }
        await api.post("/driving/input/x3/" + x3)
        console.log(x3);
    }

    async function getX3() {
        await api.get("/driving/input/x3")
        console.log(x3);
    }

    async function setX4(event) {
        x4 = event;
        if (x4 == null || x4 === " " || x4 === "") {
            x4 = 0;
        }
        await api.post("/driving/input/x4/" + x4)
        console.log(x4);
    }

    async function getX4() {
        await api.get("/driving/input/x4")
        console.log(x4);
    }

    //saves values from inputs
    async function inputPerceptron() {
        await api.post("/driving/input-perceptron").then(function (response) {
        })
    }


    //execute the perceptron program
    async function trainPerceptron() {
        await api.get("/driving/train-perceptron").then(function (response) {
            alert("Perceptron has been trained successfully")
        });
    }

    // forms to accept GUI input and search button
    return (
        <div className="d-flex">
            <div>
                <div>
                    <h5 className="text-center">Driving Perceptron</h5>
                    <h6 className="text-center">Enter 1 for Yes tile & -1 for No tile</h6>
                </div>
                <div className="p-2 flex-fill">
                    <form>
                        <div className="form-group my-2">
                            <label>X1</label>
                            <input
                                type="number"
                                min = "-1"
                                max = "1"
                                className="form-control"
                                placeholder="Is the road clear?"
                                onChange={handleInputChange1}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label>X2</label>
                            <input
                                type="number"
                                min = "-1"
                                max = "1"
                                className="form-control"
                                placeholder="Do you have the right-of-way?"
                                onChange={handleInputChange2}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label>X3</label>
                            <input
                                type="number"
                                min = "-1"
                                max = "1"
                                className="form-control"
                                placeholder="Is the car roadworthy?"
                                onChange={handleInputChange3}
                            />
                        </div>
                        <div className="form-group my-2">
                            <label>X4</label>
                            <input
                                type="number"
                                min = "-1"
                                max = "1"
                                className="form-control"
                                placeholder="Is the driver well?"
                                onChange={handleInputChange4}
                            />
                        </div>
                        <div className="d-flex p-2">
                            <button className="btn btn-primary m-4" onClick={trainPerceptron}>
                                Train Perceptron
                            </button>
                            <button className="btn btn-primary m-4" onClick={inputPerceptron}>
                                Save Values
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="p-2 flex-fill">
                <center>
                    <Grid container rowSpacing={0} columnSpacing={{xs: 0, sm: 0, md: 0}}>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x1color == 1 ? "#2ecc71" : "#e74c3c",
                                  }}>X1</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x2color == 1 ? "#2ecc71" : "#e74c3c",
                                  }}>X2</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x3color == 1 ? "#2ecc71" : "#e74c3c",
                                  }}>X3</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x4color == 1 ? "#2ecc71" : "#e74c3c",
                                  }}>X4</Item>
                        </Grid>
                    </Grid>
                </center>
            </div>
        </div>
    );
};
export default DrivingPerceptron;