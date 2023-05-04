<template>
    <div>
        <button v-text="text" :disabled="disabled"></button>
    </div>
</template>


<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        text: { type: String, default: "" },
        disabled: { type: Boolean, default: false },
    },

    setup(props) {
    }
});
</script>

<style scoped>
    button{
        margin-bottom: 1vh;
        width: 6vh;
    }
</style>