import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Link from 'next/link'

import { getProducts } from '../redux/actions/productsAction';
import Question1 from './Question1';

export default function Index() {

  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch])


  return (
    <div className="mb-5">
        <Question1 />
    </div>
  )
}

