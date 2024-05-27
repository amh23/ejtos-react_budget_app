import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import  Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                    }

                    {
                        //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                    }

                    {
                        //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                    }
                    {
                        //Currency component
                        <div className='col-sm'>
                            <Currency />
                        </div>
                    }

                    {
                        //ExpenseList component
                        <div className='row'>
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        </div>

                    }
                    {
                        //AllocationForm component  
                        <div className='row'>
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        </div>

                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
