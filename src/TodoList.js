import React, {Component} from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import store from './store';
import {getAddItemAction, getDeleteItemAtion, getInputChangeAction} from "./store/actionCreators";

/*
所有的業務邏輯都在父組件裡，但是渲染的部分完全轉交給UI組件，自己完全不管
 */
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);//store裡面的數據發生改變，組件自動感知,更新自己的state（監聽器！）
    }

    handleInputChange(e) {
        //創建action（action-creator）
        // const action = {
        //     type: CHANGE_INPUT_VALUE,//描述action要做的事情，必備的元素
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAtion(index);
        store.dispatch(action);
    }

    render() {
        //TodoListUI是子組件
        return (
            <TodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />)

    }
}

export default TodoList;
