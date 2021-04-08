import styles from './ResultsPage.module.css'
import cat from './../../assets/images/cat.png'
import { useEffect, useState } from 'react'
import ResultsChartPie from 'components/ResultsChartPie'
import update from 'immutability-helper';
import { useHistory } from 'react-router';


const INITIAL_STATE_RESULTS = {
    correct_answers:0,
    total_questions:0
}

const INITIAL_STATE_CHART = [
    { value: 0, label: "Correct", color:'#FF6B01'},
    { value: 0, label: "Incorrect", color:'#D7D7D7'},
]

const ResultsPage = () => {

    const [results, setResults] = useState(INITIAL_STATE_RESULTS)
    const [chart, setChart] = useState(INITIAL_STATE_CHART)
    const history = useHistory();


    // run

    useEffect(()=>{
        setResults({
            correct_answers:40,
            total_questions:12
        })
    }, [])

    useEffect(()=>{

        setChart([...update(chart, {
            [0]:{value:{$set:results.correct_answers}},
            [1]:{value:{$set:results.total_questions}},
        })])

    }, [results])

    useEffect(()=>{
        console.log(chart);
    }, [chart])

    const tryAgain = () =>{

        setResults(INITIAL_STATE_RESULTS)
        history.push('/test')

    }

    return (
        <div className={styles.Results}>
            <h3>Results</h3>
            <span>[ Testing theory_]</span>

            <ResultsChartPie dataPoints={chart} />

            <div className={styles.correctFlex}>
                <div>Correct answers - <b>{results.correct_answers}</b></div>
                <div>Total questions - <b>{results.total_questions}</b></div>
            </div>

            <img src={cat} alt="cat" />

            <h3>Not bad!</h3>
            <p>But you still need to learn some materials.</p>

            <button onClick={()=>tryAgain()}>Try again</button>
        </div>
    ) 
}

export default ResultsPage