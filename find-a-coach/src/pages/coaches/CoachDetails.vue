<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }} CHF/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested ? Reach out now !</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :text="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      coachSelected: null
    }
  },
  computed: {
    areas(){
      return this.coachSelected.areas;
    },
    rate(){
      return this.coachSelected.hourlyRate;
    },
    description(){
      return this.coachSelected.description;
    },
    fullName () {
      return this.coachSelected.firstName + ' ' + this.coachSelected.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.coachSelected = this.$store.getters['coaches/coaches'].find((coach) => coach.id === this.id);
  },
}
</script>
