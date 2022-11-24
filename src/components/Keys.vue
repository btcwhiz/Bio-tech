<template>
    <div class="Keys">
        <div class="Keys__main flex">
            <div class="Keys__main__left">
                <div class="Keys__title">Keys</div>
                <div class="Keys__item">
                    <div v-for="(key, index) in keys" :key="index" class="Keys__item__detail flex">
                        <div class="Keys__keyarea">
                            <input type="text" :value="isDisplay.indexOf(index) === -1 ? hiddenKey(key) : key" />
                            <svg class="Keys__show" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                @click="isDisplay.indexOf(index) === -1 ? show(index) : hidden(index)">
                                <path
                                    d="M12.0004 9.50462C14.2095 9.50462 16.0004 11.2955 16.0004 13.5046C16.0004 15.7138 14.2095 17.5046 12.0004 17.5046C9.79121 17.5046 8.00036 15.7138 8.00036 13.5046C8.00036 11.2955 9.79121 9.50462 12.0004 9.50462ZM12.0004 11.0046C10.6197 11.0046 9.50036 12.1239 9.50036 13.5046C9.50036 14.8853 10.6197 16.0046 12.0004 16.0046C13.3811 16.0046 14.5004 14.8853 14.5004 13.5046C14.5004 12.1239 13.3811 11.0046 12.0004 11.0046ZM12.0004 6C16.6139 6 20.5965 9.15001 21.7015 13.5644C21.8021 13.9662 21.5579 14.3735 21.1561 14.4741C20.7542 14.5746 20.347 14.3305 20.2464 13.9286C19.3075 10.178 15.9217 7.5 12.0004 7.5C8.0773 7.5 4.69046 10.1803 3.75322 13.9332C3.65286 14.335 3.24572 14.5794 2.84385 14.4791C2.44198 14.3787 2.19756 13.9716 2.29792 13.5697C3.40101 9.15272 7.38485 6 12.0004 6Z"
                                    fill="#707D8B" />
                            </svg>
                        </div>
                        <svg class="Keys__copy" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" @click="onCopy(key)">
                            <path
                                d="M15.5 12C18.5376 12 21 14.4624 21 17.5C21 20.5376 18.5376 23 15.5 23C12.4624 23 10 20.5376 10 17.5C10 14.4624 12.4624 12 15.5 12ZM3.5028 4.62704L3.5 6.75V17.2542C3.5 19.0491 4.95507 20.5042 6.75 20.5042L9.7348 20.5051C10.0227 21.0561 10.3872 21.5608 10.8142 22.0048L6.75 22.0042C4.12665 22.0042 2 19.8776 2 17.2542V6.75C2 5.76929 2.62745 4.93512 3.5028 4.62704ZM16.2843 14.5886C16.1138 14.4705 15.8862 14.4705 15.7157 14.5886L15.6464 14.6464L15.5886 14.7157C15.4705 14.8862 15.4705 15.1138 15.5886 15.2843L15.6464 15.3536L17.2917 16.999L12.4937 17L12.4038 17.0081C12.1997 17.0451 12.0388 17.206 12.0018 17.4101L11.9937 17.5L12.0018 17.5899C12.0388 17.794 12.1997 17.9549 12.4038 17.9919L12.4937 18L17.2937 17.999L15.6464 19.6464L15.5886 19.7157C15.4536 19.9106 15.4729 20.18 15.6464 20.3536C15.82 20.5271 16.0894 20.5464 16.2843 20.4114L16.3536 20.3536L18.8832 17.8212L18.9202 17.7711L18.9622 17.691L18.9882 17.6083L18.9981 17.5444V17.4557L18.9883 17.392L18.9767 17.3488L18.9445 17.2708L18.9205 17.2293L18.8832 17.1788L16.3536 14.6464L16.2843 14.5886ZM15.75 2C16.9926 2 18 3.00736 18 4.25L18.0006 11.4984C17.5265 11.3007 17.024 11.1574 16.5009 11.0766L16.5 4.25C16.5 3.83579 16.1642 3.5 15.75 3.5H6.75C6.33579 3.5 6 3.83579 6 4.25V17.25C6 17.6642 6.33579 18 6.75 18L9.019 18.0003C9.0585 18.5198 9.1591 19.0222 9.3136 19.5004L6.75 19.5C5.50736 19.5 4.5 18.4926 4.5 17.25V4.25C4.5 3.00736 5.50736 2 6.75 2H15.75Z"
                                fill="#55606A" />
                        </svg>
                    </div>
                    <div class="Keys__item__bottom flex">
                        <button class="Keys__item__bottom__revoke">Revoke</button>
                        <a href="/" class="Keys__item__bottom__statistics flex">
                            Statistics
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.22407 4.7998H18.2022C18.7532 4.7998 19.1998 5.24643 19.1998 5.79738V14.7755C19.1998 15.3265 18.7532 15.7731 18.2022 15.7731C17.6513 15.7731 17.2047 15.3265 17.2047 14.7755V8.20573L6.21059 19.1998L4.7998 17.789L15.7939 6.79495H9.22407C8.67313 6.79495 8.2265 6.34832 8.2265 5.79737C8.2265 5.24643 8.67313 4.7998 9.22407 4.7998Z"
                                    fill="url(#paint0_linear_24278_264)" />
                                <defs>
                                    <linearGradient id="paint0_linear_24278_264" x1="9.52111" y1="-47.8502" x2="64.7228"
                                        y2="-32.8092" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0728443" stop-color="#3683FC" />
                                        <stop offset="0.965938" stop-color="#21355C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="Keys__new__bottom flex">
                    <button class="Keys__newKey" @click="handlenewkey()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.7496 3C12.1293 3 12.4432 3.28201 12.4929 3.64808L12.4998 3.74985L12.501 11H19.7541C20.1683 11 20.5041 11.3358 20.5041 11.75C20.5041 12.1297 20.2219 12.4435 19.8559 12.4932L19.7541 12.5H12.501L12.503 19.7491C12.5031 20.1633 12.1674 20.4993 11.7532 20.4993C11.3735 20.4993 11.0596 20.2173 11.0099 19.8512L11.003 19.7494L11.001 12.5H3.75195C3.33773 12.5 3.00195 12.1642 3.00195 11.75C3.00195 11.3703 3.2841 11.0565 3.65018 11.0068L3.75195 11H11.001L10.9998 3.75015C10.9997 3.33594 11.3354 3 11.7496 3Z"
                                fill="white" />
                        </svg>

                        New key
                    </button>
                </div>
            </div>
            <div class="Keys__main__right">
                <div class="Keys__desc">
                    <h3>Keep keys private</h3>
                    <h3>Keep keys safe</h3>
                    <div class="Keys__desc__middle">Follow recommendations to keep keys safe</div>
                    <div>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(ToastPlugin);

export default {
    name: `Keys`,
    data() {
        return {
            isActive: 0,
            checked: false,
            isDisplay: [],
            keys: [
                "Kw3UHKw3UHKw3UHKw3UHK"
            ],
            message: 'Copy These Text 123'
        }
    },
    components: {},
    methods: {
        rndStr(len) {
            let text = ""
            let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGTHIJKLMNOPQRSTUVWXYZ1234567890"

            for (let i = 0; i < len; i++) {
                text += chars.charAt(Math.floor(Math.random() * chars.length))
            }

            return text
        },
        handlenewkey() {
            this.keys.push(this.rndStr(21))
        },
        hiddenKey(str) {
            return `*********************${str.slice(str.length - 6, str.length - 1)}`
        },
        show(index) {
            this.isDisplay.push(index)
        },
        hidden(index) {
            this.isDisplay = this.isDisplay.filter(item => item != index)
        },
        onCopy: async function (text) {
            await this.$copyText(text)
            this.$toast.open({
                message: 'You just copied: ' + text,
                type: "success",
                duration: 5000,
                dismissible: true
            })
        },
    },
};
</script>

<style lang="scss">
@import '../assets/css/keys.scss';
</style>