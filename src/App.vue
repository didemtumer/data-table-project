<template>
  <v-app>
    <TheHeader/>

    <v-main>
      <app-container class="d-flex justify-space-between">
        <the-filter></the-filter>
        <filter-content class="flex-grow-1 ml-5"></filter-content>
      </app-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader';
import AppContainer from './components/AppContainer';
import TheFilter from './components/TheFilter';
import FilterContent from './components/FilterContent';

export default {
  name: 'App',

  components: {
    TheHeader,
    AppContainer,
    TheFilter,
    FilterContent
  },

  data: () => ({
    //
  }),
};
</script>
