<template>
<div class="app-container">
  <h1>Vue Application</h1>
  <div id="autocomplete">{{arr}}</div>
</div>
</template>

<script>
import { h, Fragment, render, onMounted } from 'vue';
import algoliasearch from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';

import '@algolia/autocomplete-theme-classic';
//import "instantsearch.css/themes/algolia-min.css";
export default {
    name: 'Search',
    data() {
    return {
      
    };
  },
  methods: {
    getSources() {
      return [
        {
          sourceId: 'products',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'instant_search',
                  query,
                  params: {
                    hitsPerPage: 5,
                  },
                },
              ],
            });
          },
        }
      ]
    }
  }
};
</script>

<style scoped>

@import url('https://cdn.jsdelivr.net/npm/@algolia/autocomplete-theme-classic');
</style>