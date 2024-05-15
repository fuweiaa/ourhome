<template>
    <div class="djs_container">
        <div class="top">
            <p class="word">❀涂鸦画板❀</p>
            <h>
                <el-button type="success" size="mini" @click="draw()"
                    style="opacity: 0.7; border-radius: 20px;">绘制</el-button>
                <el-button type="danger" size="mini" @click="clearCanvas()"
                    style="opacity: 0.7; border-radius: 20px;">清除画屏</el-button>
            </h>
        </div>
        <div class="dajianshi ">
            <!-- 			<canvas id="dajianshi" ref="mycanvas" width="980" height="490" @></canvas> -->
            <canvas id="dajianshi" ref="mycanvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"
                width="980" height="490"></canvas>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            drawing: false,
            color: 'black',
            lineWidth: 5,
            lastX: 0,
            lastY: 0
        }
    },
    mounted() {
        this.setCanvas()
    },
    methods: {
        clearCanvas() {
            this.drawing = false;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        setCanvas() {
            this.canvas = document.getElementById('dajianshi');
            if (!this.canvas.getContext) return;
            this.ctx = this.canvas.getContext("2d");
        },

        startDrawing(e) {
            this.drawing = true;
            const rect = this.canvas.getBoundingClientRect();
            this.lastX = e.clientX - rect.left;
            this.lastY = e.clientY - rect.top;
        },
        draw(e) {
            if (!this.drawing) return;
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.ctx.beginPath();
            this.ctx.moveTo(this.lastX, this.lastY);
            this.ctx.lineTo(x, y);
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.stroke();
            this.ctx.closePath();
            this.lastX = x;
            this.lastY = y;
        },
        stopDrawing() {
            this.drawing = false;
        }

    }
}
</script>
<style lang="scss" scoped>
.djs_container {
    width: 70%;
    height: 600px;
    margin: 0 auto;
    /* 		margin: 50px auto; */
    /* 		border: 1px solid #222; */
    position: relative;
}

.top {
    background: #fff;
    position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    height: 90px;
    width: 980px;
    background-image: url("/assets/image/drawban.jpg");
}

.word {
    text-align: center;
    font-weight: bold;
    position: relative;
    color: #09def1;
    font-size: 20px;
}

.dajianshi {
    margin: 0px;
    border: 1px solid rgb(237, 204, 238);
    width: 980px;
    height: calc(100% - 100px);
    /* 计算合适的高度 */
    background-color: #f9f2f2;
}
</style>
