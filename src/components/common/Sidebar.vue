<template>
    <div>
        <h3>{{title}}</h3>

        <VList dense rounded>
        <span v-for="item in items">
        <router-link :to="item.to">
            <VListItem :key="item.title" link>
                    <VListItemIcon>
                        <VIcon>{{ item.icon }}</VIcon>
                    </VListItemIcon>

                    <VListItemContent>
                        <VListItemTitle>{{ item.title }}</VListItemTitle>
                    </VListItemContent>
            </VListItem>
        </router-link>
        </span>
        </VList>
    </div>
</template>

<script>
    export default {

        name: 'Sidebar',

        data() {
            return {
                title: "Component - Sidebar",
                items: [
                    {icon: 'dashboard', title: 'dashboard', to: '/'},
                    {icon: 'dashboard', title: 'tasks', to: '/tasks'},
                    {icon: 'dashboard', title: 'account', to: '/account'},
                ],
            }
        },
    }
</script>