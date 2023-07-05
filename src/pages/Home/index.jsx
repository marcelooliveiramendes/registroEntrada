import { useState } from 'react';
import './Home.scss';

export const Home = () => {
    const [data, setData] = useState([])
    
    const createCad = () => {
        console.log(data);
        
        let nome = document.querySelector("#txt_nome").value;

        let hora = new Date()
        hora = (hora.getHours() < 10 ? "0" + hora.getHours() : hora.getHours()) + ":" + (hora.getMinutes() < 10 ? "0" + hora.getMinutes() : hora.getMinutes())
        
        let registro = {
            nome: nome,
            horaEntrada: hora,
            id: data.length
        }

        setData(currentList => [...currentList, registro])
        
        document.querySelector("#txt_nome").value = ''
    }

    const removeCad = (id) => {
        // matriz.filter(item => item.id !== idRemover);

        setData(data.filter(item => item.id !== id))
    }

    return (
        <div id='container'>
            <div className="cadastro_container">
                <h3>Digite seu nome</h3>
                <input type="text" name="txt_nome" id="txt_nome" />
                <button onClick={createCad}>Salvar</button>
            </div>

            <div className='content_container'>
                <h2>Funcionários</h2>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '100px'}}></td>
                            <td style={{width: '100px'}}></td>
                            <td style={{width: '300px'}}></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td><button onClick={() => removeCad(item.id)}>Excluir</button></td>
                                    <td><p>{item.horaEntrada}</p></td>
                                    <td><p>{item.nome}</p></td>
                                </tr>
                            
                            ))
                        )}
                    </tbody>
                </table>
            </div>

           


            
        </div>
    )
}
