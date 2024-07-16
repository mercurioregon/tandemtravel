import { gql } from '@apollo/client';


export const ADD_EVENT = gql`
  mutation Mutation($name: String, $description: String, $start: String, $end: String, $venue: String, $latitude: Float, $longitude: Float) {
  addEvent(name: $name, description: $description, start: $start, end: $end, venue: $venue, latitude: $latitude, longitude: $longitude) {
    _id
    name
    description
    start
    end
    venue
    latitude
    longitude
  }
}
`;

export const EDIT_EVENT = gql`
 mutation Mutation( $id: String, $name: String, $description: String, $start: String, $end: String, $venue: String, $latitude: Float, $longitude: Float) {
  editEvent(_id: $id, name: $name, description: $description, start: $start, end: $end, venue: $venue, latitude: $latitude, longitude: $longitude, ) {
    _id
    name
    description
    start
    end
    venue
    latitude
    longitude
    
  }
}
`;



export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id)
  }
`;