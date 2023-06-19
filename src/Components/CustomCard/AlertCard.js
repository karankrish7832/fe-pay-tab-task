import {Card, CardBody, CardFooter} from 'reactstrap';

export const AlertCard = (props) => {
    const { content = '' } = props;
    return (
        <Card className='alert-card my-2 shadow border-0'>
            <CardBody>
                <div className="d-flex align-items-center">
                    <span className="icon-alert pe-2 f-18 fw-600"></span>
                    <span>{content} </span>
                </div>
            </CardBody>
        </Card>
    )
}