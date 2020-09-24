import useSWR, { mutate } from 'swr';
import { useState } from 'react';
import { GraphQLClient } from 'graphql-request'
import { RequestDocument, Variables } from 'graphql-request/dist/types';

const GQL_BASE_URL = process.env.NEXT_PUBLIC_GRAPHQL_BASE 

interface QueryState {
  data?:any
  loading: boolean
  error: any
  refresh(): Promise<any>
}

interface RequestHeaders {
  [key:string]: string
}


export const GqlClient = new GraphQLClient(GQL_BASE_URL, {})

export function useQuery (gqlQuery: RequestDocument, variables:Variables = {}): QueryState {
  
    const key = [gqlQuery];
    key.push(JSON.stringify(variables))

    const { data, error } = useSWR(key, (query, variables) => rawRequest(query, variables))
    return {
      data,
      loading: !error && !data,
      error,
      refresh: () => mutate(key)
    }
  }

export function rawRequest(query:RequestDocument, variables?:Variables,headers: null | RequestHeaders = null ) {

  if(headers) {
    GqlClient.setHeaders(headers)
  }
  return GqlClient.request(query, variables)
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

export function useMutation<T>(query:RequestDocument):[IMutationState<T>, (vars: Variables) => Promise<T | void>]  {

  const [state, setState] = useState<IQueryState<T>>({ loading: false })

  const execute = (variables:Variables) => {
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