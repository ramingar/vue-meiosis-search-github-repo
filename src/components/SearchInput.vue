<template>
    <input type="text" class="center w-100"
           v-model="inputText"
           :placeholder="placeholder"
           @keyup.enter="search"
    />
</template>

<script>
    import {state, actions} from "../meiosis";
    import {searchRepos} from "../github-api";

    export default {
        name    : 'SearchInput',
        data() {
            return {
                reactivity: state,  // make state reactive in vue template
                inputText : ''
            }
        },
        computed: {
            placeholder: () => state.placeholder
        },
        methods : {
            search: function () {
                actions.searching();
                searchRepos(this.inputText)
                    .then(res => actions.setRepos(res.data.items))
                    .catch(() => actions.noRepos())
            }
        }
    }
</script>
