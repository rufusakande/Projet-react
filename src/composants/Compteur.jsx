import React, {useState} from 'react'

export default function Compteur() {
    const [compteur, setCompteur]= useState(10)
    function incremente(){
        setCompteur(compteur+1)
    }
    function decremente(){
        setCompteur(compteur-1)
    }
    return (
    <div id="compteur">
        <button onClick={incremente}>+</button>
        <p className={compteur<0 && 'erreur'}>{compteur}</p>
        <button onClick={decremente}>-</button>
    </div>
  )
}
