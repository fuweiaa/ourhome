/*
 * @Author: fuweiaa
 * @Date: 2024-04-29 14:52:44
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-29 15:18:14
 * @FilePath: \bigevent-vue3\src\utils\useEventBus.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { reactive, readonly } from "vue";

interface EventBusState {
  events: Record<string, Function[]>;
}

const state = reactive<EventBusState>({ events: {} });

function emit(event: string, payload?: any) {
  state.events[event]?.forEach((handler) => handler(payload));
}

function on(event: string, handler: Function) {
  if (!state.events[event]) {
    state.events[event] = [];
  }
  state.events[event].push(handler);
}

function off(event: string, handler?: Function) {
  if (!handler) {
    state.events[event] = [];
  } else {
    const index = state.events[event].indexOf(handler);
    if (index > -1) {
      state.events[event].splice(index, 1);
    }
  }
}

const EventBus = readonly({ emit, on, off });

export default EventBus;
