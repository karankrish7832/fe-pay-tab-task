import React from "react";
import { Table } from "../../Components/Table";

const transactionsDetails = [
    {
        transactionId: 1,
        terminalId: 'TI96',
        cardNumber: '**** **** **** 7456',
        txnAmount: 150.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 10:00:00 AM',
        txnResponseReceivedTime: '2023-06-08 10:01:00 AM',
        isSuccessTransaction: true
    },
    {
        transactionId: 2,
        terminalId: 'TI76',
        cardNumber: '**** **** **** 3245',
        txnAmount: 680.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:10:00 PM',
        txnResponseReceivedTime: '2023-06-08 10:11:00 PM',
        isSuccessTransaction: false
    },
    {
        transactionId: 3,
        terminalId: 'TI46',
        cardNumber: '**** **** **** 9687',
        txnAmount: 870.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 11:07:00 PM',
        txnResponseReceivedTime: '2023-06-08 11:09:00 PM',
        isSuccessTransaction: true
    },
    {
        transactionId: 4,
        terminalId: 'TI06',
        cardNumber: '**** **** **** 7456',
        txnAmount: 150.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:00:00 AM',
        txnResponseReceivedTime: '2023-06-08 10:01:00 AM',
        isSuccessTransaction: false
    },
    {
        transactionId: 5,
        terminalId: 'TI16',
        cardNumber: '**** **** **** 3245',
        txnAmount: 680.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:10:00 PM',
        txnResponseReceivedTime: '2023-06-08 10:11:00 PM',
        isSuccessTransaction: false
    },
    {
        transactionId: 6,
        terminalId: 'TI86',
        cardNumber: '**** **** **** 9687',
        txnAmount: 870.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 11:07:00 PM',
        txnResponseReceivedTime: '2023-06-08 11:09:00 PM',
        isSuccessTransaction: true
    }    
];

const tableHeaderObject = ["Transaction Id", "Terminal Id", "Card Number", "Transaction Amount", "Transaction Response", "Transaction Initiated Time", "Transaction Response Received Time"];

const tableDataAccessors = ["transactionId", "terminalId", "cardNumber", "txnAmount", "txnResponse", "txnInitiatedTime", "txnResponseReceivedTime"];

export const TransactionDashboard = (props) =>{
    return(
        <div className="row m-0 transaction-dashborad p-3">
            <div className="col-md-12 px-0 pb-3">
                <header>
                    <h1 className="transaction-header text-light-purple">Transaction Dashboard</h1>
                </header>
            </div>
            <div className="col-md-12 p-0">
                <Table
                    tableHeaderObject={tableHeaderObject}
                    tableData={transactionsDetails}
                    tableDataAccessors={tableDataAccessors}
                    booleanKey={"isSuccessTransaction"}
                    booleanKeyAccessor={"txnResponse"}
                />
            </div>
        </div>
    )
}