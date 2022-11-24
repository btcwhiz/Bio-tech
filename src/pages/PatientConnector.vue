<!-- Patient connector -->

<template>
    <layout-default>
        <div class="PatientConnector">
            <div class="PatientConnector__Title">
                <div class="main">Request Data</div>
                <div class="sub">Request pateitn data to run analysis </div>
            </div>
            <div class="PatientConnector__requestMode">
                <div class="PatientConnector__dataRequest">Data to request</div>
                <div class="PatientConnector__requestHead">
                    <div class="PatientConnector__search">
                        <input type="text" placeholder="Cholesterol, weight, age..." />
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 3.25C14.0041 3.25 17.25 6.49594 17.25 10.5C17.25 12.2319 16.6427 13.8219 15.6295 15.0688L20.5303 19.9697C20.8232 20.2626 20.8232 20.7374 20.5303 21.0303C20.2641 21.2966 19.8474 21.3208 19.5538 21.1029L19.4697 21.0303L14.5688 16.1295C13.3219 17.1427 11.7319 17.75 10 17.75C5.99594 17.75 2.75 14.5041 2.75 10.5C2.75 6.49594 5.99594 3.25 10 3.25ZM10 4.75C6.82436 4.75 4.25 7.32436 4.25 10.5C4.25 13.6756 6.82436 16.25 10 16.25C13.1756 16.25 15.75 13.6756 15.75 10.5C15.75 7.32436 13.1756 4.75 10 4.75Z"
                                fill="#707D8B" />
                        </svg>
                    </div>
                    <div class="PatientConnector__groupBy">
                        <div>Group by: </div>
                        <button v-bind:class="{ active: isActive === 0 }" class="PatientConnector__groupBy__btn"
                            @click="isActive = 0">disease</button>
                        <button v-bind:class="{ active: isActive === 1 }" class="PatientConnector__groupBy__btn"
                            @click="isActive = 1">type</button>
                        <button v-bind:class="{ active: isActive === 2 }" class="PatientConnector__groupBy__btn"
                            @click="isActive = 2">measurement
                            unit</button>
                    </div>
                </div>
                <div class="PatientConnector__label">
                    <div class="PatientConnector__mainContent">
                        <div class="PatientConnector__dataList">
                            <div v-for="(item, index) in dataList" :key="index"
                                class="PatientConnector__dataList__item">
                                <div class="PatientConnector__dataList__item__in">
                                    <div class="PatientConnector__dataList__item__details">
                                        <h5 class="title">{{ item.detailTitle }}</h5>
                                        <div class="desc">{{ item.detailDesc }}</div>
                                    </div>
                                    <div class="PatientConnector__dataList__item__more">
                                        <div class="PatientConnector__dataList__item__unit">{{ item.unit }}</div>
                                        <label class="container">
                                            <input type="checkbox" checked="checked" v-model="item.checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <hr class="divider" />
                            </div>
                        </div>
                        <div class="PatientConnector__sharing">
                            <div class="PatientConnector__sharing__item">
                                <h4>Request ID</h4>
                                <div class="PatientConnector__requestId">
                                    <input type="text" placeholder="# 000001" />
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.5 12.5C18.5376 12.5 21 14.9624 21 18C21 21.0376 18.5376 23.5 15.5 23.5C12.4624 23.5 10 21.0376 10 18C10 14.9624 12.4624 12.5 15.5 12.5ZM3.5028 5.12704L3.5 7.25V17.7542C3.5 19.5491 4.95507 21.0042 6.75 21.0042L9.7348 21.0051C10.0227 21.5561 10.3872 22.0608 10.8142 22.5048L6.75 22.5042C4.12665 22.5042 2 20.3776 2 17.7542V7.25C2 6.26929 2.62745 5.43512 3.5028 5.12704ZM16.2843 15.0886C16.1138 14.9705 15.8862 14.9705 15.7157 15.0886L15.6464 15.1464L15.5886 15.2157C15.4705 15.3862 15.4705 15.6138 15.5886 15.7843L15.6464 15.8536L17.2917 17.499L12.4937 17.5L12.4038 17.5081C12.1997 17.5451 12.0388 17.706 12.0018 17.9101L11.9937 18L12.0018 18.0899C12.0388 18.294 12.1997 18.4549 12.4038 18.4919L12.4937 18.5L17.2937 18.499L15.6464 20.1464L15.5886 20.2157C15.4536 20.4106 15.4729 20.68 15.6464 20.8536C15.82 21.0271 16.0894 21.0464 16.2843 20.9114L16.3536 20.8536L18.8832 18.3212L18.9202 18.2711L18.9622 18.191L18.9882 18.1083L18.9981 18.0444V17.9557L18.9883 17.892L18.9767 17.8488L18.9445 17.7708L18.9205 17.7293L18.8832 17.6788L16.3536 15.1464L16.2843 15.0886ZM15.75 2.5C16.9926 2.5 18 3.50736 18 4.75L18.0006 11.9984C17.5265 11.8007 17.024 11.6574 16.5009 11.5766L16.5 4.75C16.5 4.33579 16.1642 4 15.75 4H6.75C6.33579 4 6 4.33579 6 4.75V17.75C6 18.1642 6.33579 18.5 6.75 18.5L9.019 18.5003C9.0585 19.0198 9.1591 19.5222 9.3136 20.0004L6.75 20C5.50736 20 4.5 18.9926 4.5 17.75V4.75C4.5 3.50736 5.50736 2.5 6.75 2.5H15.75Z"
                                            fill="#55606A" />
                                    </svg>
                                </div>
                            </div>
                            <div class="PatientConnector__sharing__item">
                                <h4>Expire by</h4>
                                <div class="PatientConnector__expireBy">
                                    <datepicker placeholder="Select Date" v-model="expireBy"></datepicker>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.75 3.5C19.5449 3.5 21 4.95507 21 6.75V18.25C21 20.0449 19.5449 21.5 17.75 21.5H6.25C4.45507 21.5 3 20.0449 3 18.25V6.75C3 4.95507 4.45507 3.5 6.25 3.5H17.75ZM19.5 9H4.5V18.25C4.5 19.2165 5.2835 20 6.25 20H17.75C18.7165 20 19.5 19.2165 19.5 18.25V9ZM7.75 15C8.44036 15 9 15.5596 9 16.25C9 16.9404 8.44036 17.5 7.75 17.5C7.05964 17.5 6.5 16.9404 6.5 16.25C6.5 15.5596 7.05964 15 7.75 15ZM12 15C12.6904 15 13.25 15.5596 13.25 16.25C13.25 16.9404 12.6904 17.5 12 17.5C11.3096 17.5 10.75 16.9404 10.75 16.25C10.75 15.5596 11.3096 15 12 15ZM7.75 11C8.44036 11 9 11.5596 9 12.25C9 12.9404 8.44036 13.5 7.75 13.5C7.05964 13.5 6.5 12.9404 6.5 12.25C6.5 11.5596 7.05964 11 7.75 11ZM12 11C12.6904 11 13.25 11.5596 13.25 12.25C13.25 12.9404 12.6904 13.5 12 13.5C11.3096 13.5 10.75 12.9404 10.75 12.25C10.75 11.5596 11.3096 11 12 11ZM16.25 11C16.9404 11 17.5 11.5596 17.5 12.25C17.5 12.9404 16.9404 13.5 16.25 13.5C15.5596 13.5 15 12.9404 15 12.25C15 11.5596 15.5596 11 16.25 11ZM17.75 5H6.25C5.2835 5 4.5 5.7835 4.5 6.75V7.5H19.5V6.75C19.5 5.7835 18.7165 5 17.75 5Z"
                                            fill="#707D8B" />
                                    </svg>
                                </div>
                            </div>
                            <div class="PatientConnector__sharing__item">
                                <h4>Request saving data</h4>
                                <label class="container">
                                    <input type="checkbox" placeholder="2022/12/10" checked="checked" v-model="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="PatientConnector__alert">
                                <div class="line"></div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22ZM12 20.333C16.595 20.333 20.333 16.595 20.333 12C20.333 7.405 16.595 3.667 12 3.667C7.405 3.667 3.667 7.405 3.667 12C3.667 16.595 7.405 20.333 12 20.333ZM12.0013 9.4978C11.4498 9.4978 11.0027 9.0506 11.0027 8.4991C11.0027 7.9476 11.4498 7.5004 12.0013 7.5004C12.5529 7.5004 13 7.9476 13 8.4991C13 9.0506 12.5529 9.4978 12.0013 9.4978ZM12.0055 17C11.6258 17.0003 11.3118 16.7184 11.2619 16.3524L11.2549 16.2506L11.2513 11.749C11.251 11.3348 11.5865 10.9987 12.0007 10.9984C12.3804 10.9981 12.6945 11.28 12.7444 11.646L12.7513 11.7478L12.7549 16.2494C12.7553 16.6636 12.4198 16.9997 12.0055 17Z"
                                        fill="#3683FC" />
                                </svg>
                                <div class="txt">
                                    Ask patient for data storage permission on your organization account
                                </div>
                            </div>
                            <div class="PatientConnector__delete">
                                <div class="PatientConnector__sharing__item">
                                    <h4>Delete data after</h4>
                                    <div class="PatientConnector__expireBy">
                                        <input type="text" placeholder="2022/12/10" />
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.75 3.5C19.5449 3.5 21 4.95507 21 6.75V18.25C21 20.0449 19.5449 21.5 17.75 21.5H6.25C4.45507 21.5 3 20.0449 3 18.25V6.75C3 4.95507 4.45507 3.5 6.25 3.5H17.75ZM19.5 9H4.5V18.25C4.5 19.2165 5.2835 20 6.25 20H17.75C18.7165 20 19.5 19.2165 19.5 18.25V9ZM7.75 15C8.44036 15 9 15.5596 9 16.25C9 16.9404 8.44036 17.5 7.75 17.5C7.05964 17.5 6.5 16.9404 6.5 16.25C6.5 15.5596 7.05964 15 7.75 15ZM12 15C12.6904 15 13.25 15.5596 13.25 16.25C13.25 16.9404 12.6904 17.5 12 17.5C11.3096 17.5 10.75 16.9404 10.75 16.25C10.75 15.5596 11.3096 15 12 15ZM7.75 11C8.44036 11 9 11.5596 9 12.25C9 12.9404 8.44036 13.5 7.75 13.5C7.05964 13.5 6.5 12.9404 6.5 12.25C6.5 11.5596 7.05964 11 7.75 11ZM12 11C12.6904 11 13.25 11.5596 13.25 12.25C13.25 12.9404 12.6904 13.5 12 13.5C11.3096 13.5 10.75 12.9404 10.75 12.25C10.75 11.5596 11.3096 11 12 11ZM16.25 11C16.9404 11 17.5 11.5596 17.5 12.25C17.5 12.9404 16.9404 13.5 16.25 13.5C15.5596 13.5 15 12.9404 15 12.25C15 11.5596 15.5596 11 16.25 11ZM17.75 5H6.25C5.2835 5 4.5 5.7835 4.5 6.75V7.5H19.5V6.75C19.5 5.7835 18.7165 5 17.75 5Z"
                                                fill="#707D8B" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="PatientConnector__alert">
                                    <div class="line"></div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22ZM12 20.333C16.595 20.333 20.333 16.595 20.333 12C20.333 7.405 16.595 3.667 12 3.667C7.405 3.667 3.667 7.405 3.667 12C3.667 16.595 7.405 20.333 12 20.333ZM12.0013 9.4978C11.4498 9.4978 11.0027 9.0506 11.0027 8.4991C11.0027 7.9476 11.4498 7.5004 12.0013 7.5004C12.5529 7.5004 13 7.9476 13 8.4991C13 9.0506 12.5529 9.4978 12.0013 9.4978ZM12.0055 17C11.6258 17.0003 11.3118 16.7184 11.2619 16.3524L11.2549 16.2506L11.2513 11.749C11.251 11.3348 11.5865 10.9987 12.0007 10.9984C12.3804 10.9981 12.6945 11.28 12.7444 11.646L12.7513 11.7478L12.7549 16.2494C12.7553 16.6636 12.4198 16.9997 12.0055 17Z"
                                            fill="#3683FC" />
                                    </svg>
                                    <div class="txt">
                                        User must be informed and allowed to request deletion anytime
                                    </div>
                                </div>
                            </div>
                            <div class="PatientConnector__qrCode">
                                <QrCode />
                                <h3>scan, share or type in your browser:</h3>
                                <div class="details">or wave the phone on terminal (NFC)</div>
                                <div class="link">
                                    <a href="https://long.io/dl785e">https://long.io/dl785e</a>
                                </div>
                                <div class="bottom">
                                    <button class="regenerate">Regenerate</button>
                                    <button class="copy">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout-default>
</template>

<script>
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";
import LayoutDefault from '../layouts/LayoutDefault.vue';
import QrCode from '../components/QrCode.vue';

const state = {
    date1: new Date(),
};
export default {
    name: `PatientConnector`,
    data() {
        return {
            isActive: 0,
            checked: false,
            expireBy: "",
            dataList: [
                {
                    detailTitle: "Biomarker name",
                    detailDesc: "description",
                    unit: "units",
                    checked: false,
                },
                {
                    detailTitle: "Cholesterol HDL",
                    detailDesc: "{short description}",
                    unit: "mg/dL, mmol/L",
                    checked: true,
                },
                {
                    detailTitle: "Weight",
                    detailDesc: "{short description}",
                    unit: "Kg, pounds",
                    checked: false,
                },
                {
                    detailTitle: "Age",
                    detailDesc: "{short description}",
                    unit: "years",
                    checked: true,
                },
                {
                    detailTitle: "Blood pressure",
                    detailDesc: "{short description}",
                    unit: "mmHg",
                    checked: true,
                },
            ],
            format: "d MMMM yyyy",
            disabledDates: {},
            disabledFn: {
                customPredictor(date) {
                    if (date.getDate() % 3 === 0) {
                        return true;
                    }
                },
            },
            highlightedFn: {
                customPredictor(date) {
                    if (date.getDate() % 4 === 0) {
                        return true;
                    }
                },
            },
            highlighted: {},
            eventMsg: null,
            state: state,
            language: "en",
            languages: lang,
            vModelExample: null,
            changedMonthLog: [],
        }
    },
    components: {
        LayoutDefault,
        QrCode,
        Datepicker,
    },
    methods: {
        highlightTo(val) {
            if (typeof this.highlighted.to === "undefined") {
                this.highlighted = {
                    to: null,
                    daysOfMonth: this.highlighted.daysOfMonth,
                    from: this.highlighted.from,
                };
            }
            this.highlighted.to = val;
        },
        highlightFrom(val) {
            if (typeof this.highlighted.from === "undefined") {
                this.highlighted = {
                    to: this.highlighted.to,
                    daysOfMonth: this.highlighted.daysOfMonth,
                    from: null,
                };
            }
            this.highlighted.from = val;
        },
        setHighlightedDays(elem) {
            if (elem.target.value === "undefined") {
                return;
            }
            let highlightedDays = elem.target.value
                .split(",")
                .map((day) => parseInt(day));
            this.highlighted = {
                from: this.highlighted.from,
                to: this.highlighted.to,
                daysOfMonth: highlightedDays,
            };
        },
        setDisabledDays(elem) {
            if (elem.target.value === "undefined") {
                return;
            }
            let disabledDays = elem.target.value
                .split(",")
                .map((day) => parseInt(day));
            this.disabledDates = {
                from: this.disabledDates.from,
                to: this.disabledDates.to,
                daysOfMonth: disabledDays,
            };
        },
        disableTo(val) {
            if (typeof this.disabled.to === "undefined") {
                this.disabledDates = {
                    to: null,
                    daysOfMonth: this.disabledDates.daysOfMonth,
                    from: this.disabled.from,
                };
            }
            this.disabledDates.to = val;
        },
        disableFrom(val) {
            if (typeof this.disabledDates.from === "undefined") {
                this.disabled = {
                    to: this.disabledDates.to,
                    daysOfMonth: this.disabled.daysOfMonth,
                    from: null,
                };
            }
            this.disabledDates.from = val;
        },
        openPicker() {
            this.$refs.programaticOpen.showCalendar();
        },
        logChangedMonth(date) {
            this.changedMonthLog.push(date);
        },
    },
    created() {
        document.title = "Patient connector"
    }
};
</script>

<style lang="scss">
@import '../assets/css/patient.scss';
</style>