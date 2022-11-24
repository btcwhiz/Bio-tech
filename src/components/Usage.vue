<template>
    <div class="Developer__label">
        <div class="Developer__label__title">Usage</div>
        <div class="Developer__label__main">
            <div class="Developer__label__usage-details">
                <div class="Developer__label__details">
                    <div class="Developer__label__item">
                        <div class="label">Today</div>
                        <div class="label">Month</div>
                    </div>
                    <div class="Developer__label__item">
                        <div class="type">Total API calls</div>
                        <div class="value">
                            <div class="value-detail">3 860</div>
                            <div class="change-percentage">+10%</div>
                        </div>
                        <div class="value">
                            <div class="value-detail">56 860</div>
                            <div class="change-percentage">-2%</div>
                        </div>
                    </div>
                    <div class="Developer__label__item">
                        <div class="type">Estimate cost</div>
                        <div class="value">$350</div>
                        <div class="value">$7 856</div>
                    </div>
                    <div class="Developer__keytab">
                        <div class="Developer__keytab__title">Per key usage</div>
                        <div class="Developer__keytab__key">
                            <div class="key">
                                <input type="text" value="******Kw3UH" disabled />
                            </div>
                            <div class="today">950</div>
                            <div class="month">10 766</div>
                        </div>
                        <div class="Developer__keytab__key">
                            <div class="key">
                                <input type="text" value="******Kw3UH" disabled />
                            </div>
                            <div class="today">1 268</div>
                            <div class="month">20 848</div>
                        </div>
                    </div>
                    <div class="Developer__show-more">Show more</div>
                </div>
            </div>
            <div class="chart">
                <Chart />
            </div>
        </div>
    </div>
</template>


<script>
import Chart from '../components/Chart.vue';

export default {
    name: `Usage`,
    data() {
        return {
            isActive: 0,
            checked: false,
        }
    },
    components: {
        Chart,
    },
};
</script>

<style lang="scss">
@import '../assets/css/developer.scss';
</style>