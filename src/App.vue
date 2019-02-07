<template>
    <section class="ph3 ph5-ns pv5">
        <div class="mw8 center">
            <input type="text" class="center w-100"
                   v-model="inputText"
                   :placeholder="placeholder"
                   @keyup.enter="search"
            />
            <table class="mt3 w-100 center collapse">
                <tbody>
                <tr v-for="(repo, index) in repos" :key="index">
                    <td class="pv3 pr3 bb b--black-20">{{repo.name}}</td>
                    <td class="pv3 pr3 bb b--black-20">
                        <a :href="repo.clone_url" target="_blank">{{repo.clone_url}}</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import {state, actions} from "./meiosis";
    import {searchRepos} from "./github-api";

    export default {
        name    : 'app',
        data() {
            return {
                reactivity: state,
                inputText : ''
            }
        },
        computed: {
            placeholder: () => state.placeholder,
            repos      : () => state.repos,
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
