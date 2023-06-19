import { DefaultNavbar } from "../../Components/Navbar/DefaultNavbar";
import { CustomCard } from "../../Components/CustomCard";
import { AlertCard } from "../../Components/CustomCard/AlertCard";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

const defaultNavList = [
    {
        name: 'Home',
        link: '/transac-dashboard'
    }
]

const cardDetails = [
    {
        count: '0',
        title: "TRANSACTIONS TODAY"
    },
    {
        count: '0.00',
        title: "SALES TODAY"
    },
    {
        count: '0.00',
        title: "SALES THIS MONTH"
    }
]

const transactionsDetails = [
    {
        transactionId: 1,
        terminalId: 'TI96',
        cardNumber: '**** **** **** 7456',
        txnAmount: 150.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 10:00:00 AM',
        txnResponseReceivedTime: '2023-06-08 10:01:00 AM',
        isSuccessTransaction: true,
        customerName: 'Karan'
    },
    {
        transactionId: 2,
        terminalId: 'TI76',
        cardNumber: '**** **** **** 3245',
        txnAmount: 680.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:10:00 PM',
        txnResponseReceivedTime: '2023-06-08 10:11:00 PM',
        isSuccessTransaction: false,
        customerName: 'Kiruba'
    },
    {
        transactionId: 3,
        terminalId: 'TI46',
        cardNumber: '**** **** **** 9687',
        txnAmount: 870.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 11:07:00 PM',
        txnResponseReceivedTime: '2023-06-08 11:09:00 PM',
        isSuccessTransaction: true,
        customerName: 'Karthik'
    },
    {
        transactionId: 4,
        terminalId: 'TI06',
        cardNumber: '**** **** **** 7456',
        txnAmount: 150.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:00:00 AM',
        txnResponseReceivedTime: '2023-06-08 10:01:00 AM',
        isSuccessTransaction: false,
        customerName: 'Rohan'
    },
    {
        transactionId: 5,
        terminalId: 'TI16',
        cardNumber: '**** **** **** 3245',
        txnAmount: 680.0,
        txnResponse: 'Failed',
        txnInitiatedTime: '2023-06-08 10:10:00 PM',
        txnResponseReceivedTime: '2023-06-08 10:11:00 PM',
        isSuccessTransaction: false,
        customerName: 'Jai'
    },
    {
        transactionId: 6,
        terminalId: 'TI86',
        cardNumber: '**** **** **** 9687',
        txnAmount: 870.0,
        txnResponse: 'Success',
        txnInitiatedTime: '2023-06-08 11:07:00 PM',
        txnResponseReceivedTime: '2023-06-08 11:09:00 PM',
        isSuccessTransaction: true,
        customerName: 'Vishwa'
    }    
];

export const TransancDashboard = (props) => {
    return (
        <div className="container-fluid transanc-dashboard">
            <div className="row m-0">
                <div className="col-12 pb-2">
                    <DefaultNavbar navList={defaultNavList}/>
                </div>
                <div className="col-md-12">
                    <AlertCard
                        content={
                            <>
                                In order to complete your merchant application, please go to the 
                                <Link to='/' className="text-decoration-none"> Onbording </Link>
                                section and provide the required details.
                            </>
                        }
                    />
                </div>
                {
                    cardDetails?.length ?
                        cardDetails.map((curr, idx)=>
                            <div className="col-md-3" key={idx}>
                                <CustomCard 
                                    count={curr?.count}
                                    title={curr?.title}
                                />
                            </div>
                        )
                    :
                        ''
                }
                <div className="col-md-12 pt-3">
                    <Card className='my-2 shadow border-0'>
                        <CardBody>
                            <CardTitle tag="h6">LATEST TRANSACTIONS</CardTitle>
                            <div class="table-responsive transac-dashboard-table">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Terminal Id</th>
                                            <th scope="col">Card Number</th>
                                            <th scope="col">Transaction Amount</th>
                                            <th scope="col">Transaction Response</th>
                                            <th scope="col">Transaction Initiated Time</th>
                                            <th scope="col">Transaction Response Received Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            transactionsDetails?.length ?
                                                transactionsDetails.map((data, index)=>
                                                    <tr key={index}>
                                                        <td>{data?.transactionId}</td>
                                                        <td>{data?.terminalId}</td>
                                                        <td>{data?.cardNumber}</td>
                                                        <td>{data?.txnAmount}</td>
                                                        <td className={`${data.isSuccessTransaction ? 'tran-success' : 'tran-fail'}`}>{data?.txnResponse}</td>
                                                        <td>{data?.txnInitiatedTime}</td>
                                                        <td>{data?.txnResponseReceivedTime}</td>
                                                    </tr>
                                                )
                                            :
                                                ''
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

