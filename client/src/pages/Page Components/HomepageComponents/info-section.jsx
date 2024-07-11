import Card from 'react-bootstrap/Card';

function InfoCards() {
  return (
    <div>
      <div className="container">
        <h4 className='subtitle'>Travel together with Tandem.</h4>
        <div className="cards">
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>Central Planning</Card.Title>
              <Card.Text>Use our interface to plan your group outing or trip for seemless communication.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>TravelChat</Card.Title>
              <Card.Text>Invite your friends to join the group chat on our platform to plan your adventure and stay connected!</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>Huddle</Card.Title>
              <Card.Text>Use the Huddle tool to plan your trip itinerary on a calendar.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;