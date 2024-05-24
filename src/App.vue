<template>
  <nav class="nav">
    <div class="nav__logo">LOGO</div>
    <ul class="nav__list">
        <li class="nav__link active">Басты бет</li>
        <li class="nav__link">Барлық Сөз</li>
        <li class="nav__link">Синонимайзер</li>
        <li class="nav__link">Антонимайзер</li>
        <li class="nav__link">Жүктеу</li>
        <li class="nav__link">Жобалар</li>
    </ul>
</nav>

<main>
    <section class="search__section">
        <div class="search__container">
            <div class="search__logo">LOGO</div>

            <div class="search__form-container">
                <!-- <form class="search__form"> -->
                    <ais-instant-search  :search-client="searchClient"
                      index-name="items"
                      class="search__input"
                      placeholder="Іздеу үшін сөзді енгізіңіз">
                      <ais-search-box />
                      <ais-configure
                        :hits-per-page.camel="10"
                        :distinct="true"
                        :analytics="false"
                        :enable-personalization.camel="true"
                        />
                        <ais-hits>
                          <template v-slot:item="{ item }">
                            <ais-highlight :hit="item" attribute="sq_word" />
                          </template>
                        </ais-hits>
                      </ais-instant-search>
                <!-- </form> -->
                <div class="search__voice-icon__container">
                    <img class="search__voice-icon" src="@/assets/images/icons/microphone.png" alt="voice icon"/>
                </div>
            </div>
            <div class="search-options">
                <div class="search-options__item">
                    <button class="search-options__btn blue">
                        <img class="search-options__img" src="@/assets/images/icons/book.png" alt="icon">
                        <p class="search-options__btn-text">Анықтамасы</p>
                    </button>
                </div>
                <div class="search-options__item">
                    <button class="search-options__btn red">
                        <img class="search-options__img" src="@/assets/images/icons/web.png" alt="icon">
                        <p class="search-options__btn-text">Аудармасы</p>
                    </button>
                </div>
                <div class="search-options__item">
                    <button class="search-options__btn gray">
                        <img class="search-options__img gray" src="@/assets/images/icons/pen.png" alt="icon">
                        <p class="search-options__btn-text">Тіркестер</p>
                    </button>
                </div>
                <div class="search-options__item">
                    <button class="search-options__btn violet">
                        <img class="search-options__img" src="@/assets/images/icons/triangle.png" alt="icon">
                        <p class="search-options__btn-text">Синонимдер</p>
                    </button>
                </div>
                <div class="search-options__item">
                    <button class="search-options__btn yellow">
                        <img class="search-options__img" src="@/assets/images/icons/A.png" alt="icon">
                        <p class="search-options__btn-text">Антонимдер</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>

</template>

<script>
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export default {
  name: 'App',
  data() {
    return {
      searchClient: instantMeiliSearch(
        "http://localhost:7700",
        "qkZLTo5YiMpAjBVY8JbMwq-LXDbN9isek5Hflwds3mk",
      ).searchClient,
    }
  },
  methods: {
    
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/instantsearch.css@8.2.0/themes/reset.css'); 
@import url('https://cdn.jsdelivr.net/npm/@meilisearch/instant-meilisearch/templates/basic_search.css');
/* @import url('https://cdn.jsdelivr.net/npm/instantsearch.css@8.2.0/themes/satellite.css'); */
@import url('@/assets/styles/style.css');
@import url('@/assets/styles/nav.css');
@import url('@/assets/styles/search-options.css');

.ais-SearchBox-input {
    border: none;
    background-color: #F2F5F8;

    font-size: 1.25rem;
    font-weight: 500;
}
.ais-SearchBox-submit {
    display: none;
}


</style>