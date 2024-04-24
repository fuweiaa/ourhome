<template>
    <div>玥玥，又到吃饭时间啦！欢迎来到吃饭大转盘</div>
    <div class="body">
        <div class="container" :style="styleObject">
            <div class="turntable">
                <div class="prize-container"></div>
                <div class="prize-container"></div>
                <div class="prize-container"></div>
                <div class="prize-container"></div>
                <div class="prize-container"></div>
                <div class="prize-container"></div>
            </div>

            <div class="turntable">
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>1等奖</p>
                    </div>
                </div>
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>2等奖</p>
                    </div>
                </div>
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>3等奖</p>
                    </div>
                </div>
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>4等奖</p>
                    </div>
                </div>
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>5等奖</p>
                    </div>
                </div>
                <div class="prize">
                    <div class="prize-child">
                        <div>奖品</div>
                        <p>6等奖</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pointer"></div>
        <button class="draw-btn" @click="drawPrize" :disabled="buttonDisabled">吃啥子</button>

    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const rotation = ref(0);
const buttonDisabled = ref(false);
const transitionStyle = 'transform 4s ease-out';

const styleObject = computed(() => ({
    transition: transitionStyle,
    transform: `rotate(${rotation.value}deg)`
}));

function drawPrize() {
    const randomDeg = Math.floor(Math.random() * 360) + 1440; // 至少旋转4圈再加随机角度
    rotation.value = randomDeg;
    buttonDisabled.value = true;

    setTimeout(() => {
        buttonDisabled.value = false;
    }, 4000); // 与 CSS 过渡时间匹配
}

</script>

<style lang="scss" scoped>
.body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 300px;
    height: 300px;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.turntable {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
}

/*扇形区*/
.prize-container {
    width: 280px;
    height: 280px;
    background-color: bisque;
    position: absolute;
    left: 50%;
    top: -50%;
    /*600-280/2,将prize正方形左下角点对准圆心*/
    border: 1px solid red;
    /*以正方形左下角为中心旋转，0% 100%即左下角的坐标*/
    transform-origin: 0% 100%;
}

.prize-container:nth-child(1) {
    transform: rotate(0deg) skewY(-30deg);
}

.prize-container:nth-child(2) {
    transform: rotate(60deg) skewY(-30deg);
}

.prize-container:nth-child(3) {
    transform: rotate(120deg) skewY(-30deg);
}

.prize-container:nth-child(4) {
    transform: rotate(180deg) skewY(-30deg);
}

.prize-container:nth-child(5) {
    transform: rotate(240deg) skewY(-30deg);
}

.prize-container:nth-child(6) {
    transform: rotate(300deg) skewY(-30deg);
}

/* 奖品区 */
.prize {
    width: 140px;
    height: 140px;
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: 0% 100%;
}

/* 奖品内容 */
.prize-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(30deg) translateX(-15%) translateY(10%);
}

.prize:nth-child(1) {
    transform: rotate(0deg);
}

.prize:nth-child(2) {
    transform: rotate(60deg);
}

.prize:nth-child(3) {
    transform: rotate(120deg);
}

.prize:nth-child(4) {
    transform: rotate(180deg);
}

.prize:nth-child(5) {
    transform: rotate(240deg);
}

.prize:nth-child(6) {
    transform: rotate(300deg);
}

.pointer {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    /* 左边透明边 */
    border-right: 10px solid transparent;
    /* 右边透明边 */
    border-bottom: 20px solid #08f800;
    /* 下边为尖尖颜色 */
    position: absolute;
    top: 637px;
    /* 指针的高度，需向上偏移 */
    left: 959;
}

.draw-btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 20px;
    line-height: 80px;
    text-align: center;
    position: absolute;
}
</style>