import { Card} from 'react-bootstrap';
import avatar from '../../assets/img/avatar.jpeg';

const AboutMeSection = ({className}) => {
    return (
        
            <Card className={className}>
                <Card.Img 
                variant="top" 
                src={avatar} />
                <Card.Body>
                    <Card.Title>
                        Бирюков Алексей
                    </Card.Title>
                    <Card.Text>
                        <a 
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:alexbirwp@gmail.com'>
                            alexbirwp@gmail.com
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        
    );
};


export default AboutMeSection;
