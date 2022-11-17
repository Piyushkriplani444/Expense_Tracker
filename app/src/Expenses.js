import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expenses extends Component {
//     [{"id":100,
// "description":"New York Business Trip",
// "expensedate":"2019-06-16T17:00:00Z",
// "category":{"id":1,"name":"Travel"},
// "person":
// {"id":1,"name":"Codeengine11@gmail.com","email":"Siamak"},
// "location":"New York"}]
    state={ }
    render(){
        const title =<h3>Add Expense</h3>;
        return (
        <div>
            <AppNav />
            <Container>
               {title}
                <Form >
                 <FormGroup>
                       <Label for="description">Title</Label>
                       <Input type="description" name="description" id="description" autoComplete="name" /> 
                 </FormGroup>
                  
                
                
                
                </Form>
            </Container>


        </div> );
    }
}
export default Expenses;


