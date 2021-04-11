import { useEffect } from 'react'
import styles from './UseFulPage.module.css'

import imgUseful from './../../assets/images/useful.png';

const literaturis = [
    {id:0, title:'1. Testing dot.com Savin.'},
    {id:1, title:'2. A mental hospital in the hands of patients.'},
    {id:2, title:'3. Scrum. J. Sutherland.'},
]

const resources = [
    {id:0, position:1, name:'dou.ua', link:'https://dou.ua/'},
    {id:1, position:2, name:'Habr', link:'https://habr.com/ru/'},
    {id:2, position:3, name:'facebook.com/QA', link:'https://www.facebook.com/QA'},
    {id:3, position:4, name:'goit.ua', link:'https://goit.ua/'},
]

const UseFulPage = () => {

    useEffect(()=>{
        document.querySelector('#root > div').style.backgroundImage = `url(${imgUseful})`

        return ()=>{
            document.querySelector('#root > div').style.backgroundImage = ''
        }
    }, [])

    return (
        <div className={styles.useful} >
            <div>
                <h2>Useful literature</h2>
                <ul>
                    {
                        literaturis.map(({title}, k)=>(<li key={k}>{title}</li>))
                    }
                </ul>

                <h2>Useful resources</h2>
                <ul>
                    {
                        resources.map(({position, name, link}, k)=>(<li key={k}><a href={link}>{position}. <span>{name}</span></a></li>))
                    }
                </ul>

            </div>
            <div></div>
        </div>
    ) 
}

export default UseFulPage