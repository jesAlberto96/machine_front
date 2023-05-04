<template>
    <div :class="class">
        <div class="form-floating">
            <textarea class="form-control" :name="name" :placeholder="label" style="height: 100px" :required="required"></textarea>
            <label for="floatingTextarea2" v-text="label"></label>
        </div>
    </div>
</template>

<script>
import { ref, defineComponent  } from 'vue';

export default defineComponent({
    props: {
        type: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        name: { type: String, default: '' },
        class: { type: String, default: 'col-xl-6 col-lg-6 col-md-12 col-sm-12' },
        label: { type: String, default: "" },
        required: { type: Number, default: 0 },
    },

    setup(props) {
    }
});
</script>