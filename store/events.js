import { supabase } from "@/services/supabase/init";
export const state = () => ({
  events: [],
  event: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  async fetchEvents({ commit }) {
    const { data: Events, error } = await supabase
      .from('Events')
      .select('*')
      console.log(error)
    return commit('SET_EVENTS', Events)
  },

  async fetchEvent({ commit }, id) {
    const { data: Events, error } = await supabase
      .from('Events')
      .select('*')
      .eq('id', id)
      console.log(error)
    return commit('SET_EVENT', Events[0])
  }
}