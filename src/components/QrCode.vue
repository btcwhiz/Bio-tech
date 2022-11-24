<template>
    <div>
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
export default {
    data() {
        return {
            value: "request data",
            size: 322,
        };
    },
    components: {
        QrcodeVue,
    },
};
</script>