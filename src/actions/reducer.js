// import { createStore } from 'redux';
// import React, { Component } from 'react';
// import index from './src/index';

// // declare initial state
// const initialState = {
//     contact1: {
//         name: 'Jessica Gerdes',
//         email: 'jessicalgerdes@yahoo.com',
//         phone: '509-230-0896'
//     }, 
//     contact2: {
//         name: 'Matt Gerdes',
//         email: 'mattgerdes2002@yahoo.com',
//         phone: '509-230-6061',
//     },
//     contact3: {
//         name: 'Jacob Gerdes',
//         email: 'gerdesjacob98@yahoo.com',
//         phone: '509-808-9856'
//     }, 
//     contact4: {
//         name: 'Madelyn Gerdes',
//         email: 'none',
//         phone: '509-822-0975'
//     }, 
//     contact5: {
//         name: 'Justyn Thomason',
//         email: 'justyn1994@yahoo.com',
//         phone: '509-251-5748'
//     },
//     contactName: '',
//     contactEmail: '',
//     contactPhone: '',
//     display1: false,
//     display2: false
// }

// // create reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'c1':
//             return {...state, 
//                 contactName: state.contact1.name, 
//                 contactEmail: state.contact1.email, 
//                 contactPhone: state.contact1.phone, 
//                 display1: true,
//                 display2: false
//             }
//         case 'c2':
//             return {...state, 
//                 contactName: state.contact2.name, 
//                 contactEmail: state.contact2.email, 
//                 contactPhone: state.contact2.phone, 
//                 display2: true,
//                 display1: false
//             }
//             case 'c3':
//             return {...state, 
//                 contactName: state.contact3.name, 
//                 contactEmail: state.contact3.email, 
//                 contactPhone: state.contact3.phone, 
//                 display2: true,
//                 display1: false
//             }
//             case 'c4':
//             return {...state, 
//                 contactName: state.contact4.name, 
//                 contactEmail: state.contact4.email, 
//                 contactPhone: state.contact4.phone, 
//                 display2: true,
//                 display1: false
//             }
//             case 'c5':
//             return {...state, 
//                 contactName: state.contact5.name, 
//                 contactEmail: state.contact5.email, 
//                 contactPhone: state.contact5.phone, 
//                 display2: true,
//                 display1: false
//             }
        
//             case 'setNameValue':
//             return {...state, 
//                 contactName: action.userName
//             }
//         case 'setEmailValue':
//             return {...state, 
//                 contactEmail: action.userEmail
//             }
//         case 'setPhoneValue':
//             return {...state, 
//                 contactPhone: action.userPhone
//             }
//         case 'updateC1':
//             return {...state, 
//                 contact1: {
//                     name: state.contactName,
//                     email: state.contactEmail,
//                     phone: state.contactPhone
//                 }
//             }
//         case 'updateC2':
//             return {...state, 
//                 contact2: {
//                     name: state.contactName,
//                     email: state.contactEmail,
//                     phone: state.contactPhone
//                 }
//             }
//             case 'updateC3':
//             return {...state, 
//                 contact3: {
//                     name: state.contactName,
//                     email: state.contactEmail,
//                     phone: state.contactPhone
//                 }
//             }
//             case 'updateC4':
//             return {...state, 
//                 contact4: {
//                     name: state.contactName,
//                     email: state.contactEmail,
//                     phone: state.contactPhone
//                 }
//             }
//             case 'updateC5':
//             return {...state, 
//                 contact5: {
//                     name: state.contactName,
//                     email: state.contactEmail,
//                     phone: state.contactPhone
//                 }
//             }
            
//         default:
//             return state;
//     }
// }