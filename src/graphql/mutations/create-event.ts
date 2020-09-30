import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

const CREATE_EVENT = gql`
  mutation CreateEvent($id: Int!, $x: Int!, $y: Int!) {
    createEvent(quadId: $id, x: $x, y: $y) {
      id
    }
  }
`;

interface Variables {
  id: number;
  x: number;
  y: number;
}

const useCreateEvent = () => {
  return useMutation<{}, Variables>(CREATE_EVENT);
};

export {useCreateEvent};
