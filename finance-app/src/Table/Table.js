import React from 'react';
import './Table.css';


const Table = ({name, price, category, updateUser, removeCategory}) => {
   return (
       <div className="category_table">
           <table>
               <tr>
                   <td className="table_item">{name}</td>
                   <td className="table_item">{price}</td>
                   <td className="table_item">{category}</td>
                   <td className="table_item" onClick={updateUser}><i className="fas fa-pencil-alt"></i></td>
                   <td className="table_item" onClick={removeCategory}><i className="far fa-window-close"></i></td>
               </tr>
           </table>

       </div>


)};

export default Table;