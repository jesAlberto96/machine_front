<template>
    <div>
        <label v-text="label"></label>
        <input :type="type" :readonly="readonly" :value="value">
    </div>
</template>


<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        label: { type: String, default: "" },
        value: { type: String, default: "" },
        type: { type: String, default: "" },
        readonly: { type: Boolean, default: false },
    }
});
</script>

<style scoped>
    div, label, input{
	    width: 100%;
    }
</style>