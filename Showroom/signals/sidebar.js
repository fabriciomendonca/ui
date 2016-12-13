import {SIDEBAR} from '../actions'

export default (s) => {
  window.addEventListener('sidebar', (e) => s({
    type: SIDEBAR,
    payload: {}
  }))
}

export const reducer = (state) => ({
  ...state,
  sidebar: {
    ...state.sidebar,
    closedSm: !state.sidebar.closedSm
  }
})
