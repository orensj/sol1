import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

const TOGGLE_DRONE_AI = gql`
  mutation ToggleDroneAI {
    toggleDroneAI
  }
`;

const useToggleDroneAI = () => {
  return useMutation<{}, {}>(TOGGLE_DRONE_AI);
};

export {useToggleDroneAI};
