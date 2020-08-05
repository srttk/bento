import useSWR from 'swr';
import { request } from 'graphql-request'

const GQL_BASE_URL = `/api/graphql`

export function useQuery (gqlQuery, variables = {}) {
  
    const key = [gqlQuery];
    key.push(JSON.stringify(variables))

    const { data, error } = useSWR(key, (query, variables) => request(GQL_BASE_URL,query, variables))
    return {
      data,
      loading: !error && !data,
      error
    }
  }

