import useSWR from 'swr';
import { useState } from 'react';
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

export function rawRequest(query:any, variables?:any) {
  return request(GQL_BASE_URL,query, variables)
}

interface IQueryState<T> {
  loading: boolean
  refetch?: () => Promise<T | void>
  data?: T
  errors?: any
}

interface IMutationState<T> {
  loading: boolean
  data?: T
  errors?: object[]
}

export function useMutation<T>(query:any):[IMutationState<T>, (vars: any) => Promise<T | void>]  {

  const [state, setState] = useState<IQueryState<T>>({ loading: false })

  const execute = (variables:any) => {
    setState({loading: true })
    return rawRequest(query, variables).then(data => {
      setState({data, loading:false})
      return data
    }).catch(error => {
      setState({errors:error, loading:false})
    })
  }

  return [state, execute]

}