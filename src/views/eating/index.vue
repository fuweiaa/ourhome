<template>
  <div class="eats">
    <el-form ref="formRef" style="max-width: 600px" :model="dynamicValidateForm" label-width="auto"
      class="demo-dynamic">
      <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" :label="'吃饭选项' + index"
        :prop="'domains.' + index + '.value'" :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        }">
        <el-input v-model="domain.value" />
        <el-button class="mt-2" @click.prevent="removeDomain(domain)">
          删除
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
        <el-button @click="addDomain">新增</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="body">
    <div class="container" :style="styleObject">
      <div class="turntable">
        <div class="prize-container prize" v-for="(item, index) in chioces" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="pointer"></div>
    <button class="draw-btn" @click="drawPrize" :disabled="buttonDisabled">吃啥子</button>
  </div>

</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus'

const rotation = ref(0);

const buttonDisabled = ref(false);
const transitionStyle = 'transform 4s ease-out';

const styleObject = computed(() => ({
  transition: transitionStyle,
  transform: `rotate(${rotation.value}deg)`
}));
let randomDeg = 0;
function drawPrize() {
  randomDeg = Math.floor(Math.random() * 360) + 1440; // 至少旋转4圈再加随机角度
  rotation.value = randomDeg;
  buttonDisabled.value = true;

  setTimeout(() => {
    buttonDisabled.value = false;
  }, 4000); // 与 CSS 过渡时间匹配
  randomDeg = 0
}

let chioces = ref([
  { name: '吃干锅', detail: '吃干锅' },
  { name: '饺子', detail: '饺子' },
  { name: '面', detail: '面' },
  { name: '盖饭', detail: '盖饭' },
  { name: '螺蛳粉', detail: '螺蛳粉' },
  { name: '四食堂', detail: '四食堂' }
]);
// form表单
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}


const submitForm = (formEl: FormInstance | undefined) => {

  for (let i = 0; i < dynamicValidateForm.domains.length; i++) {
    chioces.value[i].name = dynamicValidateForm.domains[i].value;
    console.log(chioces);

  }

  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<style lang="scss" scoped>
@use "sass:math";

.eats {
  top: 90px;
  position: absolute;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/image/ganfan.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: 200px auto;
}

.container {
  width: 300px;
  height: 300px;
  background-color: rgb(188, 108, 145);
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
  background-color: aquamarine;

  div {
    border-left: 1px solid rgb(0, 0, 0);
  }
}


$child-count: 6; // 可以动态调整这个值来改变子元素的数量

@for $i from 1 through $child-count {
  .prize-container:nth-child(#{$i}) {
    $rotation-angle: math.div(360deg, $child-count) * ($i - 1);
    transform: rotate($rotation-angle);
  }
}

/* 奖品区 */
.prize {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 50%;
  top: 0;
  transform-origin: 0% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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