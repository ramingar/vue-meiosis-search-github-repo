<template>
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
</template>

<script>
    import {state} from "../meiosis";

    export default {
        name    : 'SearchResults',
        data() {
            return {
                reactivity: state   // make state reactive in vue template
            }
        },
        computed: {
            repos: () => state.repos
        }
    }
</script>
