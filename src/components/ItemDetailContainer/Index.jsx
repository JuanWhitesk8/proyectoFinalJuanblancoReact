import React, {useState, useEffect} from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {detalleId} = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', detalleId)
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [detalleId])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer
