import {Card, CardBody, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';

export const CustomCard = (props) => {
    const { count = 0, subText = '', title = '', footerText = 'VIEW DETAILS', footerIcon = 'icon-next', link='/home/transaction-dashboard' } = props;
    return (
        <Card className='custom-card mt-3 shadow'>
            <CardBody>
                <div className='fw-600 d-inline-block f-24 count'>{count}</div>
                <span className='ps-2 f-14 sub-text'>{subText}</span>
                <div className='title f-14 fw-500'>{title}</div>
            </CardBody>
            <CardFooter className='py-2 border-0 custom-card-footer'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className='footer-text'>{footerText}</div>
                    <Link to={link} className={`${footerIcon} footer-icon text-decoration-none`}></Link>
                </div>
            </CardFooter>
        </Card>
    )
}