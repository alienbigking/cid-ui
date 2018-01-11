<template>
  <div v-loading='loading'>
    <el-form class="form-criminal" :model="criminalForfeit" :rules="rules" ref="form" label-position="top">
        <el-form-item class="w-px180" label="罚金单据" prop="receiptNumber">
          <el-input v-model="criminalForfeit.receiptNumber" ></el-input>
        </el-form-item>
        <el-form-item class="w-px180" label="缴纳罚金(元)" prop="amount">
          <el-input v-model="criminalForfeit.amount" placeholder="请输入数字，不能带汉字" ></el-input>
        </el-form-item>
        <el-form-item class="w-px180" label="收款单位" prop="payee">
          <el-input v-model="criminalForfeit.payee"></el-input>
        </el-form-item>
        <el-form-item class="w-px180" label="缴纳日期" prop="paymentDate">
          <el-date-picker v-model="criminalForfeit.paymentDate" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item class="w100" label="备注" prop="remark" >
          <el-input type="textarea" resize="none" v-model="criminalForfeit.remark"></el-input>
        </el-form-item>
        <div class="el-form-item el-form-item-div">
          <el-button class="button-cancel" @click="onClose">返 回</el-button>
          <el-button class="button-confirm" :loading="saving" @click="onSave">保 存</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  props: {
    criminalForfeitId: {
      type: String
    },
    editDialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      criminalForfeit: _.cloneDeep(this.$store.state.criminal.criminalForfeit),
      rules: {
        amount: [
          {required: true, message: "此项不能为空", trigger: "blur"},
          { validator: this.$validators.decimal8i2f, trigger: "change" }
        ],
        paymentDate: [{ required: true, message: "请输入缴纳日期", trigger: "blur" }],
        receiptNumber: [{required: true, message: "请输入收款单据", trigger: "blur"}],
        payee: [{required: true, message: "请输入接收单位", trigger: "blur"}]
      },
      loading: true,
      saving: false
    };
  },
  watch: {
    editDialogVisible(val) {
      if (val) {
        this.loading = true;
        this.$refs.form.resetFields();
        this.render();
      }
    },
    criminalForfeit: {
      handler: _.debounce(function(criminalForfeit) {
        this.$store.commit("updateCriminalForfeit", criminalForfeit);
      }, 500),
      deep: true
    }
  },
  created() {
    this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalForfeit",
      "addCriminalForfeit",
      "updateCriminalForfeit",
      "getAllCriminalForfeits"
    ]),
    onClose() {
      this.$emit("on-close");
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.criminalForfeit.id) {
            // 修改
            this.saving = true;
            this.updateCriminalForfeit()
              .then(res => {
                this.saving = false;
                this.getAllCriminalForfeits(this.$route.params.id);
                this.$message.success("修改成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalForfeit()
              .then(res => {
                this.saving = false;
                this.getAllCriminalForfeits(this.$route.params.id);
                this.$message.success("新增成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("新增失败");
              });
          }
        }
      });
    },
    render() {
      if (!this.criminalForfeitId) {
        this.criminalForfeit = { criminalId: this.$route.params.id, id: null };
        console.log(this.criminalForfeit);
        this.loading = false;
      } else {
        this.getCriminalForfeit(this.criminalForfeitId).then(() => {
          this.criminalForfeit = _.cloneDeep(
            this.$store.state.criminal.criminalForfeit
          );
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal {
  padding: 0 28px;
  .w-px180 {
    width: 180px;
    float: left;
    margin-right: 20px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .margin-left40 {
    margin-left: 20px;
  }
  .w100 {
    width: 640px;
    float: left;
    padding-left: 0px;
    padding-right: 58px;
  }
}
</style>
