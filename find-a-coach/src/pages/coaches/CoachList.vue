<template>
  <section>
    <coach-filter @change="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <base-button mode='outline'>Refresh</base-button>
      <base-button link to="/register">Register as a Coach</base-button>
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
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';
// import BaseButton from '@/components/ui/BaseButton.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    filteredCoach(){
      return this.$store.getters['coaches/coaches'];
    },
    hasACoach(){
      return this.$store.getters['coaches/hasACoaches'];
    }
  },
  methods: {

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
