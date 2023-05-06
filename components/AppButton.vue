<template>
    <div>
        <button :class="class" v-text="text" :disabled="disabled"></button>
    </div>
</template>


<script>
import { defineComponent  } from 'vue';

export default defineComponent({
    props: {
        text: { type: String, default: "" },
        class: { type: String, default: "btn btn-secondary" },
        disabled: { type: Boolean, default: false },
    }
});
</script>

<style scoped>
    div{
        width: 100%;
        margin-top: 20px;
    }

    button{
        width: 100%;
    }
</style>