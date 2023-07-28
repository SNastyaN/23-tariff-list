import tariffs from '../../data/tariff.json';
import st from './style.module.scss'
function Tariffcard(){
    return (
        <div className='list'>
            <div className={st.card}>
                {
                   tariffs.map((tariff)=>(
                    <div className={st[tariff.color]}>
                        <h2>{tariff.name}</h2>
                        <p>{tariff.tarif}</p>
                        <p>{tariff.speed}</p>
                        <p>{tariff.footer}</p>
                    </div>))    

                }
            </div>

        </div>
    )
}
 export default Tariffcard;