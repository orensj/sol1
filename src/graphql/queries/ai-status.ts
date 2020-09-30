import gql from 'graphql-tag';
import {useQuery, QueryHookOptions} from '@apollo/react-hooks';

export interface Status {
  challenge1AiStatus: boolean;
 
}



const GET_STATUS = gql`
  {
    challenge1AiStatus
  }
`;

const options: QueryHookOptions = {
  pollInterval: 1000,
};

const useAIStatusQuery = () => {
  return useQuery<Status, {}>(GET_STATUS, options);
};

export {useAIStatusQuery};
