import React from 'react';
import {Button, Input, List, Typography} from "antd";

/*
UI組件只負責渲染/顯示，沒有任何邏輯（邏輯只在父組件裡面）
 */
/*
無狀態組件 = 一個函數
當一個普通組件只有render()函數時，可以用一個「無狀態組件」替換一個普通組件
 */
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='What to do next'
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={props.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={props.handleBtnClick}
                >
                    Add
                </Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item) => (
                    <List.Item
                        onClick={(index) => {
                            props.handleItemDelete(index)
                        }}>
                        <Typography.Text mark>[NEW]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder='What to do next'
//                         style={{width: '300px', marginRight: '10px'}}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.handleBtnClick}
//                     >
//                         Add
//                     </Button>
//                 </div>
//                 <List
//                     style={{marginTop: '10px', width: '300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item) => (
//                         <List.Item
//                             onClick={(index) => {
//                                 this.props.handleItemDelete(index)
//                             }}>
//                             <Typography.Text mark>[NEW]</Typography.Text> {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI
