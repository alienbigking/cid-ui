<template>
  <el-form
    class="form-biometric"
    ref="form">
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in fingers"
        :key="index">
        <div
          class="body"
          :class="criminalFingerPrint[item.type] ? 'setted' : 'iconfont defalut'"/>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in faces"
        :key="index">
        <div class="body"/>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="biometric-box">
      <div
        class="biometric-card"
        v-for="(item, index) in iris"
        :key="index">
        <div class="body"/>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      fingers: [
        {
          label: "左手母指",
          type: "leftThumbFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "左手食指",
          type: "leftForefingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "左手中指",
          type: "leftMiddleFingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "左无名指",
          type: "leftRingFingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "左手小指",
          type: "leftLittleFingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "右手母指",
          type: "rightThumbFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "右手食指",
          type: "rightForefingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "右手中指",
          type: "rightMiddleFingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "右无名指",
          type: "rightRingFingerFeature",
          attribute: "criminalFingerPrint"
        },
        {
          label: "右手小指",
          type: "rightLittleFingerFeature",
          attribute: "criminalFingerPrint"
        }
      ],
      faces: [
        { label: "正脸", type: "frontPhoto", attribute: "criminalFace" },
        { label: "侧脸", type: "leftPhoto", attribute: "criminalFace" },
        { label: "侧脸", type: "rightPhoto", attribute: "criminalFace" }
      ],
      iris: [
        { label: "左眼瞳孔", type: "leftFeature", attribute: "criminalIris" },
        { label: "右眼瞳孔", type: "rightFeature", attribute: "criminalIris" }
      ],
      loading: true,
      criminalFingerPrint: {},
      criminalFace: {},
      criminalIris: {}
    };
  },
  created() {
    this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalFace",
      "getCriminalIris",
      "getCriminalFingerPrint"
    ]),
    render() {
      this.getCriminalFingerPrint(this.$route.params.id)
        .then(() => {
          this.loading = false;
          this.criminalFingerPrint = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalFingerPrint
          );
        })
        .catch(() => {
          this.loading = false;
        });
      this.getCriminalFace(this.$route.params.id)
        .then(() => {
          this.loading = false;
          this.criminalFace = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalFace
          );
        })
        .catch(() => {
          this.loading = false;
        });
      this.getCriminalIris(this.$route.params.id)
        .then(() => {
          this.loading = false;
          this.criminalIris = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalIris
          );
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-biometric {
  // background: red;
  padding: 20px;
  .biometric-box {
    border: 1px dashed #ddd;
    padding: 25px 18px 20px 38px;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    & + .biometric-box {
      margin-top: 20px;
    }
    .biometric-card {
      margin: 20px 20px 0 0;
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-align: center;
      flex-shrink: 0;
      box-sizing: border-box;
      .body {
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 100px;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
      }
    }
  }
  .button-delete {
    position: absolute;
    background: #37474f;
    bottom: 0;
    left: 0;
    border: 0;
    width: 100%;
    height: 26px;
    color: #fff;
    border-radius: 0;
    z-index: 100;
    &:hover {
      background: rgba(#37474f, 0.9);
    }
  }
  .has-button {
    flex-shrink: 0;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
    .button-confirm {
      float: right;
    }
  }
  .icon-zhiwenjiesuo {
    color: #e0e5ec;
    font-size: 72px;
    z-index: 5;
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 100px;
    }
  }
  .setted {
    background: url("../../../assets/images/avatar.jpg") no-repeat;
    background-size: 80px 80px;
    background-position: center center;
  }
}
</style>
