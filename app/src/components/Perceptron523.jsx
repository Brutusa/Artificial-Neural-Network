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
const Perceptron523 = () => {
    //functions to be used in GUI

    //execute the perceptron program
    async function trainPerceptron() {
        await api.get("/train-ann").then(function (response) {
            alert("Perceptron has been trained successfully")
        });
    }

    async function testPerceptron() {
        await api.get("/test-ann").then(response)
    }

    // forms to accept GUI input and search button
    return (
        <div className="d-flex">
            <div>
                <div>
                    <h5 className="text-center">Bright/Dark Perceptron</h5>
                    <h6 className="text-center">Enter 1 for a Bright tile & -1 for Dark tile</h6>
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
                                placeholder="Enter value for pixel 1 (top left)"
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
                                placeholder="Enter value for pixel 2 (top right)"
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
                                placeholder="Enter value for pixel 3 (bottom left)"
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
                                placeholder="Enter value for pixel 4 (bottom right)"
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
                                      backgroundColor: x1color == 1 ? "#d2dae2" : "#1e272e",
                                  }}>X1</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x2color == 1 ? "#d2dae2" : "#1e272e",
                                  }}>X2</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x3color == 1 ? "#d2dae2" : "#1e272e",
                                  }}>X3</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{
                                width: "100%",
                                borderRadius: 0,
                                marginBlock: 0,
                            }}
                                  sx={{
                                      backgroundColor: x4color == 1 ? "#d2dae2" : "#1e272e",
                                  }}>X4</Item>
                        </Grid>
                    </Grid>
                </center>
            </div>
        </div>
    );
};
export default Perceptron523;