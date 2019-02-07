<template>
    <section class="ph3 ph5-ns pv5">
        <div class="mw8 center">
            <search-input/>
            <search-results/>
        </div>
    </section>
</template>

<script>
    import SearchInput from './SearchInput.vue'
    import SearchResults from './SearchResults.vue'

    export default {
        name    : 'Search',
        components: {
            SearchInput,
            SearchResults
        }
    }
</script>
