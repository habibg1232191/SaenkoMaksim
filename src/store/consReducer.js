import { createAction, createReducer } from "@reduxjs/toolkit"

const defaultState = {
    Service:"Банкротство",
    OpenModal:false,
    ModalViewOpen:false
}

export const ChangeService = createAction("CHANGE_SERVICE")
export const ChangeOpenModal = createAction("CHANGE_OPEN_MODAL")
export const ChangeModalViewOpen = createAction("CHANGE_MODAL_VIEW_OPEN")

export const serviceReducer = createReducer(defaultState,(builder) => {
    builder
    .addCase(ChangeService,(state,action) => {
        state.Service = action.payload
    })
    .addCase(ChangeOpenModal,(state) => {
        state.OpenModal = !state.OpenModal
    })
    .addCase(ChangeModalViewOpen,(state) => {
        state.ModalViewOpen = !state.ModalViewOpen
    })
})