import React from 'react';
import './Table.css';


const Table = ({name, sum, category}) => {
   return (
       <div className="category_table">
           <table>
               <tr>
                   <td className="table_item">{name}</td>
                   <td className="table_item">{sum}</td>
                   <td className="table_item">{category}</td>
                   <td className="table_item"><i className="fas fa-pencil-alt"></i></td>
                   <td className="table_item"><i className="far fa-window-close"></i></td>
               </tr>
           </table>

       </div>


)};

export default Table;