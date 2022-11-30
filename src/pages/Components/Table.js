import React from 'react'
import { useNavigate } from "react-router-dom";
import './Table.css'

const Table = ({ data }) => {
    let navigate = useNavigate();
    const onClickDetail = (e) => {
        navigate("/Detail/" + e.target.value)
    }
    return (
        <table className='table-data'>
            <tbody>
                <tr className='table-title'>
                    <td className='table-boder text-center'>thumbnail</td>
                    <td className='table-boder text-center'>title</td>
                    <td className='table-boder text-center'>price</td>
                    <td className='table-boder text-center'>stock</td>
                    <td className='table-boder text-center'>detail</td>
                </tr>
                {data.map((item) =>
                    <tr key={item.id} className='table-boder'>
                        <td className='table-boder text-center'><img src={item.thumbnail} width="30" height="30"></img></td>
                        <td className='table-boder'><p>{item.title}</p></td>
                        <td className='table-boder text-center'><p>{item.price}</p></td>
                        <td className='table-boder text-center'><p>{item.stock}</p></td>
                        <td className='table-boder text-center'><button onClick={onClickDetail} value={item.id}>Detail</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table