<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred !" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
      <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
      </section>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <section>
        <base-card>
          <base-button mode='outline' @click="loadCoaches(true)">Refresh</base-button>
          <base-button v-if="!isCoach && !isLoading" link to="/register" >Register as a Coach</base-button>
          <h3 v-if="!hasACoach">Not coach avalaible</h3>
          <h3 v-else>All the coaches</h3>
            <coach-item v-for="coach in filteredCoach"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            >
            </coach-item>
          </base-card>
      </section>
  </div>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

export default {
  data(){
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoach(){
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')){
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')){
          return true;
        }
        return false;
      });
    },
    hasACoach(){
      return !this.isLoading && this.$store.getters['coaches/hasACoaches'];
    }
  },
  created(){
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters){
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false){
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something wrong.'
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
