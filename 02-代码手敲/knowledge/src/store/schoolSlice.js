import {createSlice} from "@reduxjs/toolkit";

/**
 * @Author liming
 * @Date 2022/9/20 23:24
 **/

//创建学校的slice
const schoolSlice = createSlice({
    name: 'school',  //这个名字主要作为type的前缀
    initialState: {
        name: '花果山一小',
        address: '花果山大街28号'
    },
    reducers: {
        //这个重名没关系，因为这个切片和上个切片名字不一样
        setName(state, action){
            state.name = action.payload;

        },
        setAddress(state,action){
            state.address = action.payload;
        }
    }

})

//导出action的创建器——2个切片在一起，这样导出的时候就很乱
//所以我们习惯把切片分别写到不同的文件中
export const {setName, setAddress} = schoolSlice.actions;

export const {reducer:schoolReducer} = schoolSlice;

