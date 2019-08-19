<template>
    <VContainer>
        <VCard>
            <VCardTitle>
                <span v-text="title" />
                <VStepper></VStepper>
            </VCardTitle>
            <VCardText>
                <slot />
            </VCardText>
            <VBtn primary @click="$emit('action-btn:clicked')"  style="margin: 20px" >
                Action
            </VBtn>
        </VCard>
    </VContainer>
</template>

<script>
    export default {
        props: ['title'],
        data() { return {} },
        methods: {},
        mounted() { },
        components: {},
        computed: {},
    }
</script>