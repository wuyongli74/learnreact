import React, { createContext, useState } from 'react'
import CounterClass from './01-体验hooks/01-counter-class'
import CounterHook from './01-体验hooks/02-counter-hook'
import CounterHook2 from './01-体验hooks/03-counter-hook'
import MultiHookState from './02-useState使用/01-多个状态的使用'
import ComplexHookState from './02-useState使用/02-复杂状态的修改'
import ClassCounterTitleChange from './03-useEffect使用/01-class实现title的修改'
import HookCounterChangeTitle from './03-useEffect使用/02-useEffect的hook实现title的修改'
import EffectHookCancelDemo from './03-useEffect使用/03-useEffect模拟订阅和取消'
import MutiEffectHookDemo from './03-useEffect使用/04-useEffect一起使用'
import ContextHookDemo from './04-useContext使用/01-useContext的使用'
import Home from './05-useReducer使用/home'
import Profile from './05-useReducer使用/profile'
import CallbackHookDemo01 from './06-useCallback使用/01-useCallback不能进行性能优化'
import CallbackHookDemo02 from './06-useCallback使用/02-useCallback进行性能优化'
import MemoHookDemo01 from './07-useMemo使用/01-useMemo复杂计算的应用'
import MemoHookDemo02 from './07-useMemo使用/02-useMemo传入子组件的应用类型'
import RefHookDemo01 from './08-useRef/01-useRef引用DOM'
import RefHookDemo02 from './08-useRef/02-useRef引用其他数据'
import ForwardRefDemo from './09-useImperativeHandle/01-回顾forwardRef的用法'
import UseImperativeHandleDemo from './09-useImperativeHandle/02-useImperativeHandle用法'
import EffectCountDemo from './10-useLayoutEffect/01-useEffect的count修改'
import LayoutEffectCountDemo from './10-useLayoutEffect/02-useLayoutEffect的count修改'
import CustomLifeHookDemo01 from './11-自定义Hook/01-认识自定义Hook'
import CustomContextShareHook from './11-自定义Hook/02-自定义Hook练习-Context共享'
import CustomScrollPostionHook from './11-自定义Hook/03-自定义Hook练习-获取滚动位置'
import CustomDataStoreHook from './11-自定义Hook/04-自定义Hook练习-localStorage存储'

export const UserContext = createContext()
export const ThemContext = createContext()
export const TokenContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* 1.Hook初体验 */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}
      {/* 2.useState */}
      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}
      {/* 3.useEffect */}
      {/* <ClassCounterTitleChange /> */}
      {/* <HookCounterChangeTitle /> */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <MutiEffectHookDemo /> */}
      {/* 4.useContext */}
      {/* <UserContext.Provider value={{ name: 'why', age: 19 }}>
        <ThemContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHookDemo />
        </ThemContext.Provider>
      </UserContext.Provider> */}
      {/* 5.useReducer */}
      {/* <Home />
      <Profile /> */}
      {/* 6.useCallback */}
      {/* <CallbackHookDemo01 /> */}
      {/* <CallbackHookDemo02 /> */}
      {/* 7.useMemo */}
      {/* <MemoHookDemo01 /> */}
      {/* <MemoHookDemo02 /> */}
      {/* 8.useRef */}
      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}
      {/* 9.ruseImperativeHandle */}
      {/* <ForwardRefDemo /> */}
      {/* <UseImperativeHandleDemo /> */}
      {/* 10.useLayoutEffect */}
      {/* <EffectCountDemo />
      <LayoutEffectCountDemo /> */}
      {/* 11.自定义Hook */}
      {/* {show && <CustomLifeHookDemo01 />} */}
      {/* <UserContext.Provider value={{ name: 'why', age: 18 }}>
        <TokenContext.Provider value={'tokenss'}>
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPostionHook /> */}
      <CustomDataStoreHook />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
