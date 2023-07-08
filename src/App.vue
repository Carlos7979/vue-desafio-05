<script>
    import Header from './components/Header.vue'
    import Info from './components/Info.vue'

    export default {
        components: {
            Header,
            Info
        },
        data() {
            return {}
        },
        created() {
            this.$store.dispatch('setRows')
        },
        methods: {
            handleClick() {
                const path = this.$route.name === 'Form' ? '/table' : '/'
                this.$router.push({ path })
            }
        },
        computed: {}
    }
</script>

<template>
    <div class="main">
        <Header></Header>
        <Info></Info>
        <button
            class="btn btn-secondary button"
            @click="handleClick"
        >
            {{ $route.name === 'Form' ? 'Ver tabla' : 'Ir a formulario' }}
        </button>
        <RouterView />
    </div>
</template>

<style scoped>
    .button {
        margin: 10px auto;
		display: flex;
        justify-content: space-around;
    }
</style>
