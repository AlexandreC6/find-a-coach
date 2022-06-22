export default {
  coaches(state){
    return state.coaches;
  },
  hasACoaches(state){
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(__, getters, _2, rootGetters){
    const coaches = getters.coaches;
    const userId = rootGetters.userId
    return coaches.some(coach => coach.id === userId);
  }
};
