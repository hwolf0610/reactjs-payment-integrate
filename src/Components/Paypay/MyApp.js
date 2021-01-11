import React from 'react';
import PaypalButtons from './PaypalButton'
import { Button, TextField, Select, FormControl, InputLabel, MenuItem, Grid } from '@material-ui/core';

import Car from "../../assets/img/car.jpg";
// import { Paypal } from "@styled-icons/boxicons-logos/Paypal";


class MyApp extends React.Component {
    state = {
        showPaypal: false
    };

    showPaypalButtons = () => {
        this.setState({ showPaypal: true });
    };

    render() {
        const { showPaypal } = this.state;
        if (showPaypal) {
            return <PaypalButtons />;
        } else {
            return (
                <div className="main">
                    <h1>React Payment Simple Form</h1>

                    {/* <TextField id="filled-secondary" variant="filled" color="secondary" label="Task Name"
                        InputProps={{
                            style: {
                                fontSize: '20px'
                            }
                        }}
                    />
                    <hr />
                    <h1>Shipping Now</h1> */}

                    {/* <h2> Buy this Mercedes at a giveaway price (Super Cheap) </h2> */}
                    <img alt="Mercedes G-Wagon" src={Car} style={{ width: '300px', height: '300px' }} />
                    <h3>
                        <b>$200</b>
                    </h3>
                    {/* <Paypal size={30} color="#dsfasdfas" onClick={this.showPaypalButtons} /> */}
                    <Button variant="contained" color="primary" onClick={this.showPaypalButtons}> Pay </Button>
                </div>
            );
        }
    }
}

export default MyApp;