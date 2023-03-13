import React, {useState} from 'react'

const LevelsComponent = ({ChosenBack}) => {
    const [chosen,setChosen] = useState(0)

    const Chosen = (e) => {
       setChosen(e)
        ChosenBack(e)
    }

    return(
        <div className="levelsSection-levels" >
    <span onClick={() => Chosen(1)}>{chosen===1 ?<span><div className="reviewPage-Circle" style={{backgroundColor:"#416aa6", border:'solid 0.1em #416aa6'}}/><p style={{textAlign:'center', color:'gray', margin:'0', marginTop:'0.1em'}}>1</p></span>:<span> <div className="reviewPage-Circle" style={{color:"grey"}}/><p style={{textAlign:'center',margin:'0', marginTop:'0.1em'}}>1</p></span>}</span>
    <span onClick={() => Chosen(2)}>{chosen===2 ? <span><div className="reviewPage-Circle" style={{backgroundColor:"#416aa6", border:'solid 0.1em #416aa6'}}/><p style={{textAlign:'center', color:'gray', margin:'0', marginTop:'0.1em'}}>2</p></span>:<span> <div className="reviewPage-Circle" style={{color:"grey"}}/><p style={{textAlign:'center',margin:'0', marginTop:'0.1em'}}>2</p></span>}</span>
    <span onClick={() => Chosen(3)}>{chosen===3 ? <span><div className="reviewPage-Circle" style={{backgroundColor:"#416aa6", border:'solid 0.1em #416aa6'}}/><p style={{textAlign:'center', color:'gray', margin:'0', marginTop:'0.1em'}}>3</p></span>:<span> <div className="reviewPage-Circle" style={{color:"grey"}}/><p style={{textAlign:'center',margin:'0', marginTop:'0.1em'}}>3</p></span>}</span>
    <span onClick={() => Chosen(4)}>{chosen===4 ? <span><div className="reviewPage-Circle" style={{backgroundColor:"#416aa6", border:'solid 0.1em #416aa6'}}/><p style={{textAlign:'center', color:'gray', margin:'0', marginTop:'0.1em'}}>4</p></span>:<span> <div className="reviewPage-Circle" style={{color:"grey"}}/><p style={{textAlign:'center',margin:'0', marginTop:'0.1em'}}>4</p></span>}</span>
    <span onClick={() => Chosen(5)}>{chosen===5 ? <span><div className="reviewPage-Circle" style={{backgroundColor:"#416aa6", border:'solid 0.1em #416aa6'}}/><p style={{textAlign:'center', color:'gray', margin:'0', marginTop:'0.1em'}}>5</p></span>:<span> <div className="reviewPage-Circle" style={{color:"grey"}}/><p style={{textAlign:'center',margin:'0', marginTop:'0.1em'}}>5</p></span>}</span>
</div>
    )
}
export default LevelsComponent;