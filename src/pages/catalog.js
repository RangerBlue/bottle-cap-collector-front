import React from "react"
import Caps from '../components/caps';

 const Catalog = ({caps}) => {
    return (
        <div class="text-center">
          <Caps caps={caps.sort(({ id: previousID }, { id: currentID }) => previousID - currentID)} />
        </div>
    )
}


export default Catalog