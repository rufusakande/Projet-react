import React from 'react'

export default function Post( {data,likevar,del}) {

    
  return (
    <div className={data.liker?'post':'postliker'}>
        <div>
            <h3>{data.titre}</h3>
            <p>{data.contenu}</p>
        </div>
        <div className='likebtn' onClick={()=>likevar(data)}>
            {data.liker?"Déja liké":"Like"}
        </div>
        <div className='deletebtn' onClick={()=>del(data.id)}>
            Effacer
        </div>
    </div>
  )
}
