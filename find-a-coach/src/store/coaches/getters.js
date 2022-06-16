export default {
  coaches(state){
    return state.coaches;
  },
  hasACoaches(state){
    return state.coaches && state.coaches.length > 0;
  }
};
