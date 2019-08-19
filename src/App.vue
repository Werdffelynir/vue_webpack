<template>
    <div id="app">
        <VApp>
            <VNavigationDrawer app clipped :width="sidebar ? 250 : 0">
                <Sidebar />
            </VNavigationDrawer>

            <VAppBar app >
                <div class="menu">
                    <router-link to="/">Перейти к main</router-link>
                    <router-link to="/login">Перейти к login</router-link>
                    <router-link to="/profile">Перейти к profile</router-link>
                    <router-link to="/456">404</router-link>
                </div>
                <VSpacer></VSpacer>
                <VBtn v-on:click="sidebarToggle"> <MenuIcon /> </VBtn>
            </VAppBar>

            <VContent>
                <VContainer fluid>
                    <router-view></router-view>
                </VContainer>
            </VContent>

            <VFooter app>
                <VBtn icon> </VBtn>
            </VFooter>
        </VApp>
    </div>
</template>

<style>

    .menu a {
        text-transform: uppercase;
        font-size: 110%;
        padding: 6px 15px;
        text-decoration: none;
    }

    .menu a.router-link-exact-active {
        color: #b47400;
    }

</style>

<script>

    import Sidebar from './components/common/Sidebar.vue';

    export default {

        name: 'App',

        data: (vueAppComponent) => {
            return {
                columns: [...new Array(16)],
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar;
            },
        },

        watch: {
            input_event(value) {
            }
        },

        computed: {},
        components: {
            Sidebar,
        },

    }

</script>
