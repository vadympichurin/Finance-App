import React, { Component } from 'react';
import axios from 'axios';
import './Categories.css';
import Table from '../Table/Table';
import CalendarNew from '../Calendar/Calendar';
import moment from 'moment';


class Categories extends Component {
    state = {
        userHistory: [],
        // period: {
        //     from: 0,
        //     to: 50,
        // },

        inputValueName: '',
        price: '',
        category: '',
        startDate: moment(),
        endDate: moment(),
    }

    handleChangeStart = (date) => {
        this.setState({
            startDate: date,
        });
        console.log(date)
    };
 
    handleChangeEnd = (date) => {
        this.setState({
            endDate: date,
        });
        console.log(date)
    };


    
    inputChange = (event) => {
        let value = event.target.value;
        let key = event.target.name;
        this.setState({
            [key]: value,
        })
    }


    addTask = (event) => {
          event.preventDefault();
          let obj = {
            name: this.state.inputValueName,
            price: this.state.price,
            category: this.state.category,
            startDate: moment(),
            endDate: moment(),
          }
          this.setState(prev=> ({
            userHistory: [...prev.userHistory, obj]
          }))
        }
      
        //   this.setState(prev => ({
        //     taskArr: [obj,...prev.taskArr],
        //     inputValue: ''
        //   }))
      
        // createTask = (event) => {
        //   event.preventDefault();
        //   this.props.addTask(this.props.inputValueName);
        // //   this.props.clearInput();
        // };


//     componentDidMount() {
//         axios.get(`/budget/${id}?startDate=${this.state.startDate}&endDate={this.state.endDate}`)
//            .then(response => response.ok ? response.json() : null)
//         // .then(data => localStorage.setItem('period.id', JSON.stringify([data.period])))
//         .then(data => {
//         let result = JSON.parse(localStorage.getItem('period'));
//         if (result) {

//             this.setState({
//             userHistory: result,
//             })
// }
  
// }
//   )}


//  addCategory = (inputValueName,inputValueSum) => {
//     fetch('https://test-users-api.herokuapp.com/users/', {
//     method: 'POST',
//     body: JSON.stringify({
//         name: inputValueName,
//         price: inputValueSum,
//         category: '',
//     }),
//     headers: {
//         Accept: 'application/json',
//         "Content-type": 'application/json',
//     }
//     }   
//     ).then(result => result.ok ? result.json() : null)
//     .then(data => console.log(data))
//     .catch(error =>console.log(error))
// }

 removeCategory = (id) => {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'DELETE',
    }).then(response => response.ok ? response.json() : null)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


 updateUser = (id, inputValueName, inputValueSum) => {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({name: inputValueName, price: inputValueSum}),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(result => result.ok ? result.json() : null)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

    render(){
    return (
        <div className='categories_container'>
        <h4 className='select_period'>Выбрать период</h4>
        <CalendarNew startDate={this.state.startDate} endDate={this.state.endDate} handleChangeStart={this.handleChangeStart} handleChangeEnd={this.handleChangeEnd}/>
        <div className='form_categories'>
         <form onSubmit={this.addTask}>
        <input name='inputValueName' type='text' className='category_title' placeholder='Название' onChange={this.inputChange} value={this.state.inputValueName}/>
         <input name='price' type='text' className='category_sum' placeholder='Сумма' onChange={this.inputChange} value={this.state.price}/>
        <select name='category'className='category_select' onChange={this.inputChange} value={this.state.category}>
         <option>Категория</option>
            <option value='ком_услуги'>Ком.услуги</option>
            <option value='питание'>Питание</option>
            <option value='транспорт'>Транспорт</option>
            <option value='здоровье'>Здоровье</option>
            <option value='досуг'>Досуг</option>
            <option value='разное'>Разное</option>
         </select>
         <button className='btn_add_info' type="submit">Добавить</button>
         </form>
         </div>
        <div className='category_table'>
             {this.state.userHistory.map(el => <Table id={el.id} name={el.name} price={el.price} category={el.category} updateUser={this.updateUser} removeCategory={this.removeCategory}/>)}
        </div>
        </div>
    )
}
}

export default Categories;