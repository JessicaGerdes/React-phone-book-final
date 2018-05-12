// import modules
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Row, Col, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// declare initial state
const initialState = {
    contact1: {
        name: 'Jessica Gerdes',
        email: 'jessicalgerdes@yahoo.com',
        phone: '509-230-0896'
    }, 
    contact2: {
        name: 'Matt Gerdes',
        email: 'mattgerdes2002@yahoo.com',
        phone: '509-230-6061',
    },
    contact3: {
        name: 'Jacob Gerdes',
        email: 'gerdesjacob98@yahoo.com',
        phone: '509-808-9856'
    }, 
    contact4: {
        name: 'Madelyn Gerdes',
        email: 'none',
        phone: '509-822-0975'
    }, 
    contact5: {
        name: 'Justyn Thomason',
        email: 'justyn1994@yahoo.com',
        phone: '509-251-5748'
    },
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    display1: false,
    display2: false
}

// create reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'c1':
            return {...state, 
                contactName: state.contact1.name, 
                contactEmail: state.contact1.email, 
                contactPhone: state.contact1.phone, 
                display1: true,
                display2: false
            }
        case 'c2':
            return {...state, 
                contactName: state.contact2.name, 
                contactEmail: state.contact2.email, 
                contactPhone: state.contact2.phone, 
                display2: true,
                display1: false
            }
            case 'c3':
            return {...state, 
                contactName: state.contact3.name, 
                contactEmail: state.contact3.email, 
                contactPhone: state.contact3.phone, 
                display2: true,
                display1: false
            }
            case 'c4':
            return {...state, 
                contactName: state.contact4.name, 
                contactEmail: state.contact4.email, 
                contactPhone: state.contact4.phone, 
                display2: true,
                display1: false
            }
            case 'c5':
            return {...state, 
                contactName: state.contact5.name, 
                contactEmail: state.contact5.email, 
                contactPhone: state.contact5.phone, 
                display2: true,
                display1: false
            }
        
            case 'setNameValue':
            return {...state, 
                contactName: action.userName
            }
        case 'setEmailValue':
            return {...state, 
                contactEmail: action.userEmail
            }
        case 'setPhoneValue':
            return {...state, 
                contactPhone: action.userPhone
            }
        case 'updateC1':
            return {...state, 
                contact1: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
        case 'updateC2':
            return {...state, 
                contact2: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'updateC3':
            return {...state, 
                contact3: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'updateC4':
            return {...state, 
                contact4: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'updateC5':
            return {...state, 
                contact5: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'deletec1':
            return {...state, 
                contact1: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'deletec2':
            return {...state, 
                contact2: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'deletec3':
            return {...state, 
                contact3: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'deletec4':
            return {...state, 
                contact4: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'deletec5':
            return {...state, 
                contact5: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
            case 'add1':
            return {...state, 
                contact6: {
                    name: state.contactName,
                    email: state.contactEmail,
                    phone: state.contactPhone
                }
            }
        default:
            return state;
    }
}

// create store
let store = createStore(reducer);

// contact form
class ContactForm extends Component {
    render() {
        return (
           
            
            <Form>
                <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input 
                        value={store.getState().contactName}
                        
                        onChange={(e) => store.dispatch({type: 'setNameValue', userName: e.target.value})}
                        type="text" 
                        name="userName" 
                        id="exampleName" 
                        placeholder="name..." />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        value={store.getState().contactEmail}  
                        onChange={(e) => store.dispatch({type: 'setEmailValue', userEmail: e.target.value})}                       
                        type="email" 
                        name="userEmail" 
                        id="exampleEmail" 
                        placeholder="email..." />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePhone">Phone</Label>
                    <Input 
                        value={store.getState().contactPhone}     
                        onChange={(e) => store.dispatch({type: 'setPhoneValue', userPhone: e.target.value})}                   
                        type="tel"
                        name="userPhone" 
                        id="examplePhone" 
                        placeholder="phone..." />
                </FormGroup>
                {store.getState().display1 && (
                    <Button onClick={() => store.dispatch({type: 'updateC1' })}>Update</Button>
                )}
                {store.getState().display2 && (
                    <Button onClick={() => store.dispatch({type: 'updateC2'})}>Update</Button>
                )}{store.getState().display3 && (
                    <Button onClick={() => store.dispatch({type: 'updateC3'})}>Update</Button>
                )}
                {store.getState().display4 && (
                    <Button onClick={() => store.dispatch({type: 'updateC4'})}>Update</Button>
                )}
                {store.getState().display5 && (
                    <Button onClick={() => store.dispatch({type: 'updateC5'})}>Update</Button>
                )}
                {store.getState().display1 && (
                    <Button onClick={() => store.dispatch({type: 'deleteC1' })}>Delete</Button>
                )}
                {store.getState().display2 && (
                    <Button onClick={() => store.dispatch({type: 'deleteC2' })}>Delete</Button>
                )}
                {store.getState().display3 && (
                    <Button onClick={() => store.dispatch({type: 'deleteC3' })}>Delete</Button>
                )}
                {store.getState().display4 && (
                    <Button onClick={() => store.dispatch({type: 'deleteC4' })}>Delete</Button>
                )}
                {store.getState().display5 && (
                    <Button onClick={() => store.dispatch({type: 'deleteC5' })}>Delete</Button>
                )}
                {store.getState().display6 && (
                    <Button onClick={() => store.dispatch({type: 'add1' })}>Add New Contact</Button>
                )}
            </Form>
        )
    }
}

// contact list

class ContactList extends Component {
    render() {
        return(

        <div>
            Contact
           
                <Row>
    
                    <Col lg="4">
                        <h2>Contact List</h2> 
                        <ListGroup>
                            <ListGroupItem>
                                <h4 onClick={() => store.dispatch({type: 'c1'})}>{store.getState().contact1.name}</h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4 onClick={() => store.dispatch({type: 'c2'})}>{store.getState().contact2.name}</h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4 onClick={() => store.dispatch({type: 'c3'})}>{store.getState().contact3.name}</h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4 onClick={() => store.dispatch({type: 'c4'})}>{store.getState().contact4.name}</h4>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4 onClick={() => store.dispatch({type: 'c5'})}>{store.getState().contact5.name}</h4>
                            </ListGroupItem>
                        </ListGroup>                   
                    </Col>
                    <Col lg="8">
                        <h2>Contact Form</h2>                        
                        <ContactForm />
                    </Col>
                </Row>
                </div>   
        )
    }
}
const Example = () => {
    return (
      <div>
        <p className="text-muted">Contact<center/></p>
     
      </div>
    );
  };
  
  export default Example;

// render
const r = () => {
    render(
        <ContactList />,
        document.getElementById('root')
    )
}

r();

// listen in for changes to the state
store.subscribe(r)






